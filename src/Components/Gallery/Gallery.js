import './Gallery.css'
import React from 'react'

function Gallery(props) {
  return (
    <div className='container   justify-content-center'>
   <div className='d-sm-block d-md-flex gallery container my-3 akafi  justify-content-center '>
  
        <div className='G1 w-100 gallerypic'>
            <img className='w-100 h-100'  src={props.img2} alt="adult family home"></img>
        </div>
        <div className='G2 w-100  ml-1'>
             <img  className='w-100 h-100' src={props.img3} alt="adult family home"></img>
        </div>
   </div>
    </div>
  )
}

export default Gallery