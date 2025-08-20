import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState();
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const navHome = () => {
        navigate("/")
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef}>
            <div className="navbar">
                <div className="logo-links-container">
                    <div className="logo-container" onClick={navHome}>
                        <img className='logo' src='/asl180.png' alt='All Strides Latines Logo'></img>
                    </div>
                    <div className='navlinks'>
                        <Link to="/"> Home</Link>
                    </div>
                </div>
            </div>
            <div className='navbar-mobile'>
                <div className="logo-container" onClick={navHome}>
                    <img className='logo' src='/asl180.png' alt='All Strides Latines Logo'></img>
                </div>
                <div className="hamburger-menu">
                    <div className={menuOpen ? "hamburger-icon open" : "hamburger-icon"} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={menuOpen ? "hamburger-links open" : "hamburger-links"}>
                        <Link to="/" onClick={toggleMenu}> Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};