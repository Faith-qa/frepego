import './Nav.css';
import logo from './Assets/logo-frepego.png'
import { Outlet, Link } from "react-router-dom";

const Nav = () => {

    return(
    <div>
        <nav className="navbar">
            <div>
        <img src={logo} alt={"frepego"}/>
        <ul>
            <li><Link to="/" className={"hello"}>HOME</Link></li>
            <li><Link to="/rooms" className={"hello"}>OUR ROOMS</Link></li>
            <li><Link to={"/dining"} className={"hello"}>RESTAURANT</Link></li>
            <li><Link to={"/contact"} className={"hello"}>CONTACT</Link></li>
            <li><a  href="">BOOK A ROOM</a></li>
        </ul></div>
    </nav>
        <Outlet/>
    </div>)


}


export default Nav