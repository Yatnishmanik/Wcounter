import React from 'react'

export default function Crousel() {
  return (
    <div className="container">
         <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.teahub.io/photos/full/270-2701363_background.jpg" className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/33/8e/de/338ede5f9f949b9c4cc6c1c0c15c6a00.jpg" className="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://myronsprime.com/wp-content/uploads/2014/03/Contact-Header-Pic-Mailboxes-1600-x-500-px.jpg" className="d-block " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
   
    
  )
}
