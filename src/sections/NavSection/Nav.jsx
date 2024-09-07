import './Nav.css';
import logo from './Assets/logo-frepego.png'
const Nav = () => {

    return(
    <div>
        <nav className="navbar">
            <div>
        <img src={logo} alt={"frepego"}/>
        <ul>
            <li><a className="active" href="">HOME</a></li>
            <li><a  href="">OUR ROOMS</a></li>
            <li><a  href="">RESTAURANT</a></li>
            <li><a  href="">CONTACT</a></li>
            <li><a  href="">BOOK A ROOM</a></li>
        </ul></div>
    </nav></div>)


}


export default Nav