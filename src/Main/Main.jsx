import Nav from "../sections/NavSection/Nav";
import Home from "../sections/HomeSection/Home";
import Accomodation from "../sections/HomeSection/accomodation";
import Dining from "../sections/DinningSection/Dining";
import GallerySection from "../sections/GalarySection/Gallary";
import ReviewsSection from "../sections/reviews/Reviews";
import ContactUsSection from "../sections/ContactSection/contactus";

const Main =  () =>{

    return(
        <div className="flex-container">
            <div className="main-cont">
                <Accomodation/>
                <Dining/>
                <GallerySection/>
                <ReviewsSection/>
                <ContactUsSection/>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7132500649523!2d34.199906674551485!3d-0.41581673529334945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d5217c5555559f%3A0x570c914a17b8679c!2sFrepego%20Lakeview%20Resort!5e0!3m2!1sen!2ske!4v1725718673255!5m2!1sen!2ske"
                        width="100%"
                        height="450"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>

            </div>
        </div>
    )
}

export default Main
