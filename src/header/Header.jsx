// Again we have used rfc
//we are using this header in our home which is in the pages folder

import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">    
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://cdn.pixabay.com/photo/2021/01/06/09/19/dresden-5893714_960_720.jpg" alt="" className="headerImg" />
        </div>
    )
}
