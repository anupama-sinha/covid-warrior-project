import React from "react";
import { Link} from 'react-router-dom'

const Navigation = () => {
    const style={

    }

    return (
        <nav>
            <h3 style={{alignItems: "left"}}>Covid Warriors</h3>
            <ul className="nav-links">
                <Link to='/dashboard'>
                    <li>Dashboard</li>
                </Link>
                <Link to='/shareContact'>
                    <li>Share Contact</li>
                </Link>
                <Link to='/contactUs'>
                    <li>Contact Us</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
  );
};
  
export default Navigation;