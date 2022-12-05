import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillYoutube, AiFillFacebook } from 'react-icons/ai';

import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div>
                <span>© 2015–2022</span>
                <span><Link to="#">Privacy Policy</Link></span>
                <span><Link to="#">Cookie Policy</Link></span>
                <span><Link to="#">Submit a Request</Link></span>
            </div>
            <div>
                <span className='social-icon'><AiFillYoutube /></span>
                <span className='social-icon'><AiFillFacebook /></span>
                <span><img src='/images/als-logo.svg' alt='als logo' /></span>
                <span className='designed'>Designed<br /> by  <Link to="#">Art. Lebedev Studio</Link></span>
            </div>
        </footer>
    );
}

export default Footer;