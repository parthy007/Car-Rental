import "./Rides.css"
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { useEffect, useState } from "react"
import EastIcon from '@mui/icons-material/East';

const Rides = () => {
    
    const [cars, setCars] = useState([]) // Store the list of cars
    const [brand, setBrand] = useState("Honda"); // Store the selected car brand
    const [pickupDate, setPickupDate] = useState(""); // Store pickup date
    const [dropOffDate, setDropOffDate] = useState(""); // Store drop-off date
    const [totalPrice, setTotalPrice] = useState(0); // Store the total price
    const [totalDays, setTotalDays] = useState(0); // Store the total number of days
    const [selectedCar, setSelectedCar] = useState(null); // Store the selected car object
    const [previousBrand, setPreviousBrand] = useState("Honda"); // Store the previous brand selection

    useEffect(()=>{
        // Function to fetch cars based on the selected brand
        const getCars = async()=>{
            try{
                const res = await fetch(`https://car-rental-backend-kappa.vercel.app/car/?brand=${brand}`,{
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
        // Call the getCars function when brand, selectedCar, or previousBrand changes
        getCars();
        // Reset totalDays and totalPrice when brand changes
        setTotalDays(0);
        setTotalPrice(0);
        // Reset selectedCar when brand changes
        if (brand !== previousBrand) {
            setSelectedCar(null);
            setPreviousBrand(brand); 
        }
    },[brand, selectedCar, previousBrand])

    // Function to calculate the rental price
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
                {/* Mapping through the list of cars */}
                {cars.map((car)=>(
                    <div className="card" key={car._id}> {/* Each Card*/}
                        {/* Card Car Image */}
                        <div className="imgWrapper">
                            <img src={car.imgUrl} alt="Car" className="car"/>
                        </div>
                        {/* Card Car Name */}
                        <div className="carName">{car.carName}</div>
                        {/* Card Car Prices */}
                        <div className="priceWrapper">
                            <div className="pricePerDay">${car.pricePerDay}/day</div>
                            <div className="pricePerMonth">${car.pricePerMonth}/month</div>
                        </div>
                        {/* Card Car General Information */}
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
                {/* Brand Buttons */}
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
                            {/* Mapping through the list of cars to populate the dropdown */}
                            {cars.map((car)=>( 
                                <option value={car.carName}>{car.carName}</option>
                            ))}
                        </select>
                    </div>

                    {/* Input for Date */}
                    <div className="rideSelect">
                        <label htmlFor="pickUp">Pick Up:</label>
                        <input type="date" id="pickUp" onChange={(e)=>setPickupDate(e.target.value)} />
                    </div>

                    {/* Input for Date */}
                    <div className="rideSelect">
                        <label htmlFor="dropOff">Drop Off:</label>
                        <input type="date" id="dropOff" onChange={(e)=>setDropOffDate(e.target.value)} />
                    </div>
                    <button className="checkBtn" type="submit">Get Price</button>
                </div>
            </form>

            {/* Bar to show Total days, total Price and Choosen Cars */}
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
                {/* Alert Book Button */}
                <button className="bookBtn" onClick={()=>alert("Booking Completed!")}>Book</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rides
