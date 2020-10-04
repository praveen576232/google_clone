import React from 'react'
import './Header_App.css'
function Header_Apps({name,link,image}) {
    return (
       <div className="header_apps_list">
          <a href={link}>
          <div className="header__apps">
            <img alt="app" src={image}></img>
            <p>{name}</p>
        </div>
          </a>
       </div>
    )
}

export default Header_Apps
