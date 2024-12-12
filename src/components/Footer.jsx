import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className="sb__footer section__padding">
            <div className="sb__footer-links">
                <div className="sb__footer-links-div">
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
                <div className="sb__footer-links-div">
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
            </div>
            </div>
        </div>
    )
}

export default Footer;