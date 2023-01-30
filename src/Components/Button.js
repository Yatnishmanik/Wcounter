import React  from 'react'


export default function Button(props) {
  
  return (
    <div className="container">
    
    <button type="button" className="btn btn-danger my-3 mx-3">{props.bt1}</button>
    <button type="button" className="btn btn-warning my-3 mx-3">{props.bt1}</button>
    <button type="button" className="btn btn-info my-3 mx-3" >{props.bt1}</button>
    </div>
  )
}
