import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    notifyerror = () => toast.error('We are working on it!');
    render() {
        return(
            <nav className="NavbarItems">
                <Toaster  position="top-center" reverseOrder={false}/>
                <h1 className="navbar-logo">RTrips</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                        <Link className={item.Cname} to={item.url}>
                            <i className={item.icon}></i> {item.title}</Link>
                    </li>
                        )
                    })}
                    <button onClick={this.notifyerror}  > <a href=" /" className="singup" >Sign Up</a> </button>
                </ul>
            </nav>
        )
    }

}

export default Navbar
