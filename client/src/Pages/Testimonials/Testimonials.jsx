import "./Testimonials.css"
import quotation from "../../assets/end-quotes.webp"
import StarIcon from '@mui/icons-material/Star';
import client from "../../assets/parthimg.JPG"
import mcLaren from "../../assets/mclaren-orange-big.png"

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="testimonialsWrapper">
        <div className="testimonialsTitle">Testimonials</div>
        <div className="cardsWrapper">
            {/* Testimonial card for client 1 */}
            <div className="clientCard">
                <div className="clientTopWrapper">
                    <div className="starWrapper">
                        <StarIcon className="clientStar"/>
                        <StarIcon className="clientStar"/>
                        <StarIcon className="clientStar"/>
                        <StarIcon className="clientStar"/>
                        <StarIcon className="clientStar"/>
                    </div>
                    {/* Client's testimonial */}
                    <div className="clientText">Outstanding car rental experience! DriveEase offered a superb selection, transparent pricing, friendly staff, and a flawless vehicle. Highly recommended for hassle-free rentals. I'll be back!</div>
                    {/* Client's Name */}
                    <div className="clientName">Parth</div>
                </div>

                {/* Client's Img */}
                <div className="clientImgWrapper">
                    <img src={client} alt="" className="clientImg"/>
                </div>
                {/* Quotation image */}
                <div className="quotation">
                    <img src={quotation} alt="" className="quotationImg"/>
                </div>
            </div>

            {/* Repeat the above structure for other client testimonials */}
            {/* Testimonial card for client 2 */}
            <div className="clientCard">
                <div className="clientTopWrapper">
                    <div className="starWrapper">
                        <StarIcon className="clientStar"/>
                        <StarIcon className="clientStar"/>
                        <StarIcon className="clientStar"/>
                        <StarIcon className="clientStar"/>
                        <StarIcon className="clientStar"/>
                    </div>
                    <div className="clientText">Outstanding car rental experience! DriveEase offered a superb selection, transparent pricing, friendly staff, and a flawless vehicle. Highly recommended for hassle-free rentals. I'll be back!</div>
                    <div className="clientName">Parth</div>
                </div>
                <div className="clientImgWrapper">
                    <img src={client} alt="" className="clientImg"/>
                </div>
                <div className="quotation">
                    <img src={quotation} alt="" className="quotationImg"/>
                </div>
            </div>

            {/* Repeat the above structure for other client testimonials */}
            {/* Testimonial card for client 3 */}
            <div className="clientCard">
                <div className="clientTopWrapper">
                    <div className="starWrapper">
                        <StarIcon className="clientStar"/>
                        <StarIcon className="clientStar"/>
                        <StarIcon className="clientStar"/>
                        <StarIcon className="clientStar"/>
                        <StarIcon className="clientStar"/>
                    </div>
                    <div className="clientText">Outstanding car rental experience! DriveEase offered a superb selection, transparent pricing, friendly staff, and a flawless vehicle. Highly recommended for hassle-free rentals. I'll be back!</div>
                    <div className="clientName">Parth</div>
                </div>
                <div className="clientImgWrapper">
                    <img src={client} alt="" className="clientImg"/>
                </div>
                <div className="quotation">
                    <img src={quotation} alt="" className="quotationImg"/>
                </div>
            </div>
        </div>

        {/* Newsletter subscription section */}
        <div className="newsletterWrapper">
            <div className="newsletterLeft">
                {/* Newsletter title */}
                <h1 className="newsletterTitle">
                    Subscribe To Our Newsletter For New Updates
                </h1>
                {/* Email input and subscribe button */}
                <div className="inputWrapper">
                    <input type="email" placeholder="Your Email Address..." className="clientEmail" />
                    <button className="newsletterBtn">Subscribe Now</button>
                </div>
            </div>
            {/* Image on the right side */}
            <div className="newsletterRight">
                <img src={mcLaren} alt="" className="newsletterCar"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
