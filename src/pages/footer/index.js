import React from 'react';
import './footer.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/anderson-sa0440/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/anderson_albq_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://github.com/andersonsa0440" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
            <p className="rights-text">&copy; {currentYear} - Todos os direitos reservados</p>
        </footer>
    );
}


export default Footer;
