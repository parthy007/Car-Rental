import Footer from "../../Components/Footer/Footer";
import "./Contact.css"
import EastIcon from '@mui/icons-material/East';


const Contact = () => {
  return (

    <div className="contact" id="contact">
      <div className="contactWrapper">
        {/* Contact section title */}
        <h1 className="contactTitle">Latest Events & Blogs</h1>
        <div className="contactCards">
            {/* Contact card 1 */}
            <div className="contactCard">
                <div className="cardImgWrapper">
                    {/* Image for card 1 */}
                    <img src="https://media.istockphoto.com/id/898487350/photo/handsome-auto-service-mechanics.jpg?s=612x612&w=0&k=20&c=Xcyp069j5Zc60zMQo2K4UBKK-aCQ_AE8BWFRXQyl7-M=" alt="" className="contactCardImg"/>
                </div>
                <div className="cardTextWrapper">
                    {/* Title for card 1 */}
                    <div className="contactCardTitle">
                        Choosing the Perfect Rental Car
                    </div>
                    {/* Description for card 1 */}
                    <div className="contactCardDesc">
                        Discover how to select the right vehicle for your journey, whether it's a compact for city exploration or an SUV for off-road adventures.
                    </div>
                    {/* Read More Button for card 1 */}
                    <div className="contactCardReadMore">
                        Read More
                        <EastIcon/>
                    </div>
                </div>
            </div>

            {/* Repeat the above structure for other contact cards */}
            {/* Contact card 2 */}
            <div className="contactCard">
                <div className="cardImgWrapper">
                    <img src="https://media.istockphoto.com/id/1289143914/photo/happy-woman-signing-paperwork-at-auto-repair-shop-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=CAyVTpeHAFwWNx-KNSIfr-Ef_t1hU3msr4AmMMsBWgQ=" alt="" className="contactCardImg"/>
                </div>
                <div className="cardTextWrapper">
                    <div className="contactCardTitle">
                        Saving Money on Car Rentals
                    </div>
                    <div className="contactCardDesc">
                        Learn money-saving strategies, such as booking in advance and leveraging loyalty programs, to get the best deals on your rental vehicle.
                    </div>
                    <div className="contactCardReadMore">
                        Read More
                        <EastIcon/>
                    </div>
                </div>
            </div>

            {/* Repeat the above structure for other contact cards */}
            {/* Contact card 3 */}
            <div className="contactCard">
                <div className="cardImgWrapper">
                    <img src="https://media.istockphoto.com/id/1344954298/photo/family-with-dog-in-the-car.jpg?s=612x612&w=0&k=20&c=anIzsubkI7wzUiSHC_gUIVyJuSX2KXJ1-Lu5c25CCzA=" alt="" className="contactCardImg"/>
                </div>
                <div className="cardTextWrapper">
                    <div className="contactCardTitle">
                        Road Trip Itineraries
                    </div>
                    <div className="contactCardDesc">
                        Explore breathtaking road trip routes, from coastal drives to mountain escapes, with tips on must-see attractions and hidden gems.
                    </div>
                    <div className="contactCardReadMore">
                        Read More
                        <EastIcon/>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {/* Footer component */}
      <Footer/>
    </div>

  )
}

export default Contact
