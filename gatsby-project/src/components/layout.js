import React from "react"
import Navbar from '../components/navbar'
import '../styles/index.css'
export default function Layout(props) {
    return (
      <div>
        <Navbar />
        {props.children}
      </div>

    )
}
