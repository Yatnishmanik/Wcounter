import React from 'react'
// import About from './Components/About';
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'
export default function Navbar(props) {
  // let colo={
  //   color:'rgb(255 133 10)'
  // }
  let change={
    color:'rgb(255 133 10)'
  }
  let find={
    color:'rgb(255 133 10)',
    borderColor:'rgb(255 133 10)'
  }
  
  let icon={
    borderColor:'rgb(255 133 10)',
    color:'white'
  }
  return (
    <nav className=" navbar navbar-expand-lg " style={props.Mode}>
  <div className="container">
    <a className="navbar-brand" href='#' style={change}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={icon}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='#' style={change}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#' style={change}>{props.about}</a>
        </li>  
      </ul>
      <div className="pellet mx-2 my-1">
      <button className="circle1 mx-2 my-1" onClick={props.toggle1}></button>
      <button className="circle2 mx-2 my-1" onClick={props.toggle2}></button>
      <button className="circle3 mx-2 my-1" onClick={props.toggle3}></button>
      </div>
      {/* <div className="form-check form-check-reverse mx-4">
          <input className="form-check-input" type="checkbox" value="" id="reverseCheck1" />
          <label className="form-check-label" htmlFor="reverseCheck1" style={colo}> Mode</label>
      </div> */}
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn" type="submit" style={find} >FindOut</button>
      </form>
    </div>
  </div>
</nav>
  )
}


Navbar.prototype={
    title: PropTypes.string
};