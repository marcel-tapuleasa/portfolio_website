import React from 'react';
import './footer.css';
import {FaGithub } from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';

const Footer = () => {
    return(
        <footer>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            
            <div className="footer__socials">
                <a href='https://linkedin.com' target='_blank' rel='noreferrer'><BsLinkedin /></a>
                <a href='https://github.com' target='_blank' rel='noreferrer'><FaGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>
                    &copy; Alex Tapuleasa. All rights reserved.
                </small>
            </div>
        </footer>
    )
}

export default Footer;