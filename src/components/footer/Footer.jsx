import React from 'react';
import LinkedInIcon from '../../assets/linkedin.png'; // Ensure you have the PNG files in the appropriate directory
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import FacebookIcon from '../../assets/facebook.png';
import YoutubeIcon from '../../assets/youtube.png';

const Footer = () => {
    return (
        <footer className="bg-[#0b121f] text-white py-6">
            <div className="container mx-auto flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
                <div className="w-full text-center md:text-left">
                    <p className="text-lg">&copy; Penough Academy, 2024</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 md:flex-nowrap space-x-4">
                    <div className="flex items-center p-2">
                        <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8" />
                        <a href="https://www.linkedin.com/company/penoughcyber/" target='_blank' rel='noopener noreferrer' className="hover:underline text-lg p-1">LinkedIn</a>
                    </div>
                    <div className="flex items-center p-2">
                        <img src={TwitterIcon} alt="Twitter" className="w-8 h-8" />
                        <a href="https://x.com/penoughcyber" target='_blank' rel='noopener noreferrer' className="hover:underline text-lg p-1">Twitter</a>
                    </div>
                    <div className="flex items-center p-2">
                        <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
                        <a href="https://www.instagram.com/penoughcyber/" target='_blank' rel='noopener noreferrer' className="hover:underline text-lg p-1">Instagram</a>
                    </div>
                    <div className="flex items-center p-2">
                        <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" />
                        <a href="https://www.facebook.com/penoughcyber" target='_blank' rel='noopener noreferrer' className="hover:underline text-lg p-1">Facebook</a>
                    </div>
                    <div className="flex items-center p-2">
                        <img src={YoutubeIcon} alt="Facebook" className="w-8 h-8" />
                        <a href="https://www.youtube.com/@penoughcyber" target='_blank' rel='noopener noreferrer' className="hover:underline text-lg p-1">Youtube</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;