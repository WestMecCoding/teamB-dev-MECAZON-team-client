import React from 'react';
import styles from '../styles/Footer.module.css';
// import fb from '../assets/fbimg.png';
// import x from '../assets/ximg.png';
// import linkedin from '../assets/linkedinimg.png';
// import insta from '../assets/instaimg.png';


const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={`${styles.sb__footer} ${styles.section__padding}`}>
            <div className={styles.sb__footer_links}>
                <div className="sb__footer_links_div">
                    <h4>For Business</h4>
                    <a href="/employer">
                        <p>Employeer</p>
                    </a>
                    <a href="healthplan">
                        <p>Health Plan</p>
                    </a>
                    <a href="individual">
                        <p>Individual</p>
                    </a>
                </div>
                <div className="sb__footer_links_div">
                    <a href="./resourses">
                        <p>Resource center</p>
                    </a>
                    <a href="./resourses">
                        <p>Testimonials</p>
                    </a>
                    <a href="./resourses">
                        <p>STV</p>
                    </a>
                </div>
                <div className="sb__footer_links_div">
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/press">
                        <p>Press</p>
                    </a>
                    <a href="/career">
                    <p>Career</p>
                    </a>
                    <a href="/contact">
                    <p>Contact</p>
                    </a>
                </div>
                <div className="sb__footer_links_div">
                    <h4>Comming soon on</h4>
                    <div className="socialmedia">
                        {/* <p><img src={fb} alt=""/></p>
                        <p><img src={x} alt=""/></p>
                        <p><img src={linkedin} alt=""/></p>
                        <p><img src={insta} alt=""/></p> */}
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="sb__footer_below">
                <div className="sb__footer_copyright">
                    <p>
                        
                    </p>
                </div>
                {/* <div className="sb_footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                </div> */}
            </div>

                </div>
            </div>
    )
}

export default Footer;