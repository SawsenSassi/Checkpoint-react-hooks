  
import React, { useState } from 'react'
import { useEffect } from 'react'
import {Button} from 'react-bootstrap'
import '../App.css'
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'

const Details = ({defaultProps,movies}) => {

    const[movie,setMovie]=useState({})
    
    useEffect(() => { setMovie(movies.find((el) => el.titre === defaultProps.match.params.id));}, []);
    
    return (
        <>
        {/* <div className="App"> */}
        <div className='Header'>
            <div className='imageHeader'>
                <p><b>Hooked</b></p>
            </div>
       </div>
       <div className='filter'>
       <iframe className='film' width="770" height="400" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

             <div className='filterrate'>
                 <Button>Download</Button>
             <StarRatingComponent
             className='Star'
                        starCount={5}
                        value={movie.rating} />
                <p className='desc'> {movie.desc}</p>
                </div>
                <Link to='/'>
                <div className="imag">
                <img className="BackImg" src="https://pngimage.net/wp-content/uploads/2019/05/backicon-png-1.png" alt="back"/>
                </div>
                </Link>
                </div>
             
           
   
            
            
         </>
    )
}

export default Details