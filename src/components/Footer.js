import React from 'react'
import foot from './footer.module.css';
import logo from '../images/p2fsemi.jpg'

function Footer() {
    return (
        <React.Fragment>

            <footer className={foot.footer}>
                <div className={foot.footer__addr}>
                    <a ><img src={logo} className={foot.footer__logo}></img></a>

                    <h2>Contact</h2>

                    <address>
                    649, 13th Cross, 27th Main Rd, 1st Sector,<br/> HSR Layout, Bengaluru, Karnataka 560102<br/>

                        <a className={foot.footer__btn} href="mailto:example@gmail.com">Email Us</a>
                    </address>
                </div>

                <ul className={foot.footer__nav}>
                    <li className={foot.nav__item}>
                        <h2 className={foot.nav__title}>Links</h2>

                        <ul className={foot.nav__ul}>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            
                            <li>
                                <a href="#">Join Now</a>
                            </li>

                            <li>
                                <a href="#">Learn More</a>
                            </li>

                            <li>
                                <a href="#">Manage Account</a>
                            </li>
                        </ul>
                    </li>

                    <li className={foot.nav__item}>
                        <h2 className={foot.nav__title}>News & Info</h2>

                        <ul className={foot.nav__ul}>
                            <li>
                                <a href="#">Press Releases</a>
                            </li>

                            <li>
                                <a href="#">About Our Products</a>
                            </li>

                            <li>
                                <a href="#">Product Support</a>
                            </li>

                            <li>
                                <a href="#">Product Manuals</a>
                            </li>

                            <li>
                                <a href="#">Product Registration</a>
                            </li>

                            <li>
                                <a href="#">Newsletter Sign Up</a>
                            </li>
                        </ul>
                    </li>

                    <li className={foot.nav__item}>
                        <h2 className={foot.nav__title}>Support</h2>

                        <ul className={foot.nav__ul}>
                            <li>
                                <a href="#">FAQ</a>
                            </li>

                            <li>
                                <a href="#">Help Desk</a>
                            </li>

                            <li>
                                <a href="#">Forums</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className={foot.legal}>
                    <p>&copy; 2022 Copyright.</p>

                </div>
            </footer>

        </React.Fragment>
    )
}

export default Footer

