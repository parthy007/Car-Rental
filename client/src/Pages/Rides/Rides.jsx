import "./Rides.css"
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { useEffect, useState } from "react"
import EastIcon from '@mui/icons-material/East';

const Rides = () => {
    
    const [cars, setCars] = useState([])
    const [brand, setBrand] = useState("Honda");
    const [pickupDate, setPickupDate] = useState("");
    const [dropOffDate, setDropOffDate] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDays, setTotalDays] = useState(0);
    const [selectedCar, setSelectedCar] = useState(null);
    const [previousBrand, setPreviousBrand] = useState("Honda");

    useEffect(()=>{
        const getCars = async()=>{
            try{
                const res = await fetch(`http://localhost:3001/car/?brand=${brand}`,{
                    method: "GET",
                });
                if(res.ok){
                    const data = await res.json()
                    setCars(data);
                }
            }
            catch(err){
                console.log(err);
            }
        }
        getCars();
        setTotalDays(0);
        setTotalPrice(0);
        if (brand !== previousBrand) {
            setSelectedCar(null);
            setPreviousBrand(brand); 
        }
    },[brand, selectedCar, previousBrand])

    const calculatePrice = () => {
        if (pickupDate && dropOffDate && selectedCar !== null) {
            const startDate = new Date(pickupDate);
            const endDate = new Date(dropOffDate);
            const timeDifference = endDate - startDate;
            const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            setTotalDays(daysDifference);
            const price = daysDifference * selectedCar.pricePerDay;
            setTotalPrice(price);
        }
    };

  return (
    <div className="rides" id="fleet">
      <div className="ridesWrapper">
        <div className="ridesLeft">
            <div className="ridesAllCards">
                {cars.map((car)=>(
                    <div className="card" key={car._id}>
                        <div className="imgWrapper">
                            <img src={car.imgUrl} alt="Car" className="car"/>
                        </div>
                        <div className="carName">{car.carName}</div>
                        <div className="priceWrapper">
                            <div className="pricePerDay">${car.pricePerDay}/day</div>
                            <div className="pricePerMonth">${car.pricePerMonth}/month</div>
                        </div>
                        <div className="infoWrapper">
                            <div className="info">
                                <SpeedIcon/>
                                <span>{car.mileage}km</span>
                            </div>
                            <div className="info">
                                <SettingsIcon/>
                                <span>{car.trasmission}</span>
                            </div>
                            <div className="info">
                                <LocalGasStationIcon/>
                                <span>{car.fuel}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cardArrowIcon">
                <EastIcon/>
            </div>
        </div>
        <div className="ridesRight">
            <div className="fleetTitle">Fleets</div>
            <div className="buttonsWrapper">
                <button className="ridesBtn" onClick={()=>setBrand("Honda")}>Honda</button>
                <button className="ridesBtn" onClick={()=>setBrand("Lambo")}>Lambo</button>
                <button className="ridesBtn" onClick={()=>setBrand("Porsche")}>Porsche</button>
                <button className="ridesBtn" onClick={()=>setBrand("Ferrari")}>Ferrari</button>
            </div>
            <form
                onSubmit={(e)=>{
                    e.preventDefault();
                    calculatePrice();
                    e.target.reset();
                }}
            >
                <div className="ridesInputsWrapper">
                    <div className="rideSelect">
                        <label htmlFor="ride">Choose Your Ride:</label>
                        <select 
                            name="selectCar" 
                            id="ride" 
                            onChange={(e)=>{
                                const selectedCarName = e.target.value;
                                const car = cars.find((c)=>c.carName === selectedCarName);
                                setSelectedCar(car);
                            }}
                        >
                            <option value="">--Select--</option>
                            {cars.map((car)=>( 
                                <option value={car.carName}>{car.carName}</option>
                            ))}
                        </select>
                    </div>
                
                    <div className="rideSelect">
                        <label htmlFor="pickUp">Pick Up:</label>
                        <input type="date" id="pickUp" onChange={(e)=>setPickupDate(e.target.value)} />
                    </div>
                    <div className="rideSelect">
                        <label htmlFor="dropOff">Drop Off:</label>
                        <input type="date" id="dropOff" onChange={(e)=>setDropOffDate(e.target.value)} />
                    </div>
                    <button className="checkBtn" type="submit">Get Price</button>
                </div>
            </form>
            <div className="rideBottomWrapper">
                <div className="rideTotalPrice">
                    {selectedCar && (<div className="priceInfoWrapper">
                        <span>Car:</span>
                        <span>{selectedCar.carName}</span>
                    </div>)}
                    <div className="priceInfoWrapper">
                        <span>Total Price:</span>
                        <span>${totalPrice}</span>
                    </div>
                    <div className="priceInfoWrapper">
                        <span>Total Days:</span>
                        <span>{totalDays}</span>
                    </div>
                </div>
                <button className="bookBtn">Book</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rides
