import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function _Layout({ children }) {
  return (
    <div className='layout'>
        <Navbar></Navbar>
        <div className="content">
            { children }
        </div>
        <footer>
            <p>@Copyrights</p>
        </footer>
    </div>
  )
}
