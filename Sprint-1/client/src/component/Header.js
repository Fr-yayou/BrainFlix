import React from "react";
import Image from "../assets/image/Mohan-muruge.jpg"
import Logo from "../assets/logo/Logo-brainflix.png";
import Search from "../assets/icons/PNG/Icon-search.png";
import Cross from "../assets/icons/PNG/Icon-upload.png";


function Header() {
    return (
        <div className="navbar-container">
            <div className="navbar-container__logo">
                <img className="container-logo__brainflix" src={Logo} alt="Brainflix"></img>
            </div>
            <div className="container-searching">
                <input className="container-searching__texte" type="texte" placeholder="Search" />
                <div>
                <img className="container-searching__texte__loop" src={Search} alt="loop" />
                </div>
    

                <div className="container-profil">
                    <button className="container-profil__button">UPLOAD</button>
                    <div className="container-profil__button__cross">
                    <img src={Cross} alt="cross" />
                    </div>
                    <img className="container-profil__button__cross__img" src={Image} alt="portrait" />
                   
                </div>

            </div>

        </div>
    )
}
export default Header;