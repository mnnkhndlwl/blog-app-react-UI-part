// Again we will use rfc
//we have imported our header here

import React from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/sidebar'
import "./home.css"

export default function Home() {
    return (
        <>
           <Header/>   {/* to use header which is in header folder to use here */}
        <div className='home'>
           <Posts />
           <Sidebar />
          
        </div>
        </>
    )
}
