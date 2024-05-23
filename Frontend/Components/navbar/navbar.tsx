import React, { useState, useEffect, useRef } from "react";
import './navbar.css';
import logo from '../../Images/Logo.png';

const Navbar = () => {
    const [menu, setMenu] = useState(true);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenu(true);
        }
    }

    const handleScroll = () => {
        setMenu(true);
    }

    useEffect(() => {
        if (!menu) {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('scroll', handleScroll);
        } else {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('scroll', handleScroll);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('scroll', handleScroll);
        };
    }, [menu]);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo.png" />
            </div>
            <div className="menu" ref={menuRef}>
                <ul className={`menu-list ${(!menu) ? 'active' : ''}`}>
                    <li>
                        <a href="#home" className="menu-link-home active">Home</a>
                    </li>
                    <li>
                        <a href="#about-us" className="menu-link-about-us">About Us</a>
                    </li>
                    <li>
                        <a href="#why-choose-us" className="menu-link-why-choose-us">Why Choose Us</a>
                    </li>
                    <li>
                        <a href="#menu" className="menu-link-me">Menu</a>
                    </li>
                    <li>
                        <a href="#our-story" className="menu-link-our-story">Our Story</a>
                    </li>
                </ul>
                <button className="menu-button">Order Now</button>
                <div onClick={toggleMenu} className="mobile-menu">
                    {
                        (menu) ? <i className="fa-solid fa-bars"></i>
                            : <i className="fa-solid fa-xmark"></i>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
