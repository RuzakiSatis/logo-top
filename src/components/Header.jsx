import './Header.scss'
import React from 'react'

export const Header = () => {
    return (
        <header className='header'>
            <div className='header_box'>
                <div className='header_box_logo'>
                    <h1 className='header_box_logo_name'>CyberRift</h1>
                </div>
            </div>
        </header>
    )
}


// import { Link } from "react-router-dom"
// import "./Header.scss"
// import React, { useState} from "react";

// export const Header = () => {

//     const [openBurger, setOpenBurger] = useState(false);

//     const burderClick = () =>{
//         setOpenBurger(!openBurger);
//     };

//     return(
//         <section className="BoxHead">
//             <header className="BoxHead_header">
//                 <nav>
//                     <h1 className="BoxHead_header_title">CyberRift
//                         <div className="BoxHead_header_title_aurora">
//                             <div className="BoxHead_header_title_aurora__item"></div>
//                             <div className="BoxHead_header_title_aurora__item"></div>
//                             <div className="BoxHead_header_title_aurora__item"></div>
//                             <div className="BoxHead_header_title_aurora__item"></div>
//                         </div>
//                     </h1> 
//                 </nav>
//                 <nav>
//                     <img className="BoxHead_header_logo" src="/images/imgMain.png" alt="imgMain" />
//                 </nav>
//                 <div className="BoxHead_header_menu">
//                     <nav className="BoxHead_header_menu_Burger">
//                         <span className={`BoxHead_header_menu_Burger_button ${openBurger ? 'open' : ''}`} onClick={burderClick}></span>
//                     </nav>
//                     <div style={{display: openBurger ? "block" : "none"}} className="BoxHead_header_menu_window">
//                         <ul>
//                             <li>
//                                 <Link className="BoxHead_header_menu_window_link">Home</Link>
//                             </li>
//                             <li>
//                                 <Link className="BoxHead_header_menu_window_link">About us</Link>
//                             </li>
//                             <li>
//                                 <Link className="BoxHead_header_menu_window_link">Portfolio</Link>
//                             </li>
//                             <li>
//                                 <Link className="BoxHead_header_menu_window_link">News</Link>
//                             </li>
//                             <button className="BoxHead_header_menu_window_button BoxHead_header_menu_window_btn">Contact us</button>
//                         </ul>
//                     </div>
//                     <ul className="BoxHead_header_menu_list">
//                         <li >
//                             <Link to="/" className="BoxHead_header_menu_list_link">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/About_us" className="BoxHead_header_menu_list_link">About us</Link>
//                         </li>
//                         <li>
//                             <Link className="BoxHead_header_menu_list_link">Portfolio</Link>
//                         </li>
//                         <li>
//                             <Link className="BoxHead_header_menu_list_link">News</Link>
//                         </li>
//                     </ul>
//                     <button className="BoxHead_header_menu_button BoxHead_header_menu_btn">Contact us</button>
//                 </div>
//             </header>
//         </section>
//     )
// }