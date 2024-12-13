import "./footer.css"
import UPI from "../../assets/payment-icons/upi_svg.svg"
import gpay from "../../assets/payment-icons/gpay.svg"
import mast from "../../assets/payment-icons/mast_svg.svg"
import visa from "../../assets/payment-icons/visa_svg.svg"
import instagram from "../../assets/social-icons/instagram.png"
import facebook from "../../assets/social-icons/facebook.png"
import twitter from "../../assets/social-icons/twitter.png"
import point from "../../assets/ai.png"
const Footer = ()=>{
    return <>
    <footer className="footer">
        <div className="about-us container">
            <div className="top">
            <div className="title">
                <p>About Us</p>
            </div>
            <div className="description">
              “Celebrity Astrologer”, & “Vastu Shastra Consultant.” He started Indian Astrology online a decade back. Having intentions of serving mankind with original planetary & vastu remedies, he stepped into the trading of products like precious gemstones, semi-precious gemstones, crystals, Rudrakshas, and other religious articles.
            </div>
            </div>
            <div className="bottom">
                <p>© 2024-2025  All rights reserved. </p>
            </div>
        </div>

        <div className="trending container">
            <div className="top">
            <div className="title">
                <p>Trending Products</p>
            </div>
                <ul>
                    <li><img src={point} alt="" className="point" />Rudrakshas</li>
                    <li><img src={point} alt="" className="point" />Crystals</li>
                    <li><img src={point} alt="" className="point" />Gemstones</li>
                    <li><img src={point} alt="" className="point" />Vastu</li>
                </ul>
            </div>
            <div className="bottom">
                <div className="payment">
                    <img src={UPI} alt=""  className="payment-icon"/>
                    <img src={gpay} alt=""  className="payment-icon"/>
                    <img src={mast} alt=""  className="payment-icon"/>
                    <img src={visa} alt=""  className="payment-icon"/>
                </div>
            </div>
        </div>
 
        <div className="site-links container">
            <div className="top">
            <div className="title">
                <p>Site Links</p>
            </div>
                <ul>
                    <li><img src={point} alt="" className="point" />Help</li>
                    <li><img src={point} alt="" className="point" />Contact Us</li>
                    <li><img src={point} alt="" className="point" />Privacy Policy</li>
                    <li><img src={point} alt="" className="point" />Terms of Service Policy</li>
                    <li><img src={point} alt="" className="point" />Blogs</li>
                    <li><img src={point} alt="" className="point" />Quick Payment Links</li>
                </ul>
            </div>
            <div className="bottom">
                <div className="social-links">
                    <img src={instagram} id="insta-icon" alt=""  className="social-icon" />
                    <img src={facebook} alt="" className="social-icon" />
                    <img src={twitter} alt="" className="social-icon" />
                </div>
            </div>
        </div>

    </footer>
    </>
}
export default Footer;