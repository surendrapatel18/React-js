import React from 'react';
import { Link } from 'react-router-dom';
import FootLogo from '../asset/footer_logo.svg'; 
import whatsapp from '../asset/whatsapp-logo.png';
import smsBox from '../asset/sms-icon.svg';
import callIcon from '../asset/call-icon.svg';
import facebook from '../asset/Facebook.png';
import twitter from '../asset/Twitter.png';
import instagram from '../asset/Instagram.png';
import linkedin from '../asset/LinkedIn.png';
import youtube from '../asset/YouTube.png';
import telegram from '../asset/Telegram.png';

const Footer = () => {
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="w-full bg-darkBlue text-white">
            <div className="mx-auto max-w-[1440px] py-10 px-5 md:px-20">
                <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
                    <div className="md:w-2/5">
                        <img src={FootLogo} alt="Footer Logo" className="mb-6 cursor-pointer" />
                        <p className="text-base font-tt-wellingtons max-w-[322px]">
                            Gravida diam sed purus volutpat eget senectus faucibus. Est elit viverra urna quis eleifend at.
                            Fringilla commodo mus aliquam eu adipiscing amet in. Neque pellentesque faucibus quisque et.
                            Augue sit quam facilisi tincidunt.
                        </p>
                    </div>

                    <div className="md:w-1/5">
                        <h3 className="text-base text-customorange font-medium font-tt-wellingtons mb-3">Company</h3>
                        <ul className="space-y-2 font-medium font-tt-wellingtons">
                            <Link to="/" className='hover:text-customorange'>Home</Link>
                            <li><Link to="/about" className='hover:text-customorange'>About Us</Link></li>
                            <li><a href="#" className='hover:text-customorange'>Benefits</a></li>
                            <li><a href="#" className='hover:text-customorange'>Legal</a></li>
                        </ul>
                    </div>

                    <div className="md:w-1/5">
                        <h3 className="text-base text-customorange font-medium font-tt-wellingtons mb-3">Resources</h3>
                        <ul className="space-y-2 font-medium font-tt-wellingtons">
                            <li><Link to="/help" className='hover:text-customorange'>FAQs</Link></li>
                            <li><Link to="/blog" className='hover:text-customorange'>Blog</Link></li>
                            <li><Link to="/terms" className='hover:text-customorange'>Terms</Link></li>
                        </ul>
                    </div>

                    <div className="md:w-1/5">
                        <h3 className="text-base text-customorange font-medium font-tt-wellingtons mb-3">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2 p-2 bg-[#FFFFFF1A] rounded-full max-w-[149px]">
                                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                    <img src={whatsapp} alt="WhatsApp" className="h-6 w-6" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <img src={smsBox} alt="Email Icon" />
                                <span>Support@sendkolo.com</span>
                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <img src={callIcon} alt="Call Icon" />
                                <span>987 456 0987</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 pt-10">
                    <div className="text-[15px]">
                        <Link to="/terms" className="hover:text-customorange">Terms & Conditions</Link>
                        <span className="pl-5">
                            <Link to="/privacy" className="hover:text-customorange">Privacy Policy</Link>
                        </span>
                    </div>

                    <div className="text-center">
                        <h3 className="text-base text-customorange font-medium pb-3 font-tt-wellingtons">Follow Us</h3>
                        <div className="flex space-x-3 justify-center">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group">
    <img src={facebook} alt="Facebook" className="transform transition duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-90" />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group">
    <img src={twitter} alt="Twitter" className="transform transition duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-90" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group">
    <img src={instagram} alt="Instagram" className="transform transition duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-90" />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
    <img src={linkedin} alt="LinkedIn" className="transform transition duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-90" />
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="group">
    <img src={youtube} alt="YouTube" className="transform transition duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-90" />
  </a>
  <a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer" className="group">
    <img src={telegram} alt="Telegram" className="transform transition duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-90" />
  </a>
</div>

                    </div>
                </div>

                <div className="text-sm font-medium text-center pt-3 font-tt-wellingtons">
                    &copy; {currentYear} Gobrizz Technology. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
