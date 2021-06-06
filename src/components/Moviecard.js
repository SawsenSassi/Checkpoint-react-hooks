import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'



const Moviecard = ({ movie }) => {
    return (
        <div>
        
            <div className='Movie'>

                <img className='ImageMovie' src={movie.image} alt='Movie' />
                <div className='Title-rating'>
                    <h6>{movie.titre}</h6>
                    
                </div>
            
                
                    <div className='action-row'>
                   
              <div className='col2'>
              <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={movie.rating}
                        
                    />
                <div className='watch-btn'>
                <Link to={`/Details/${movie.titre}`} rel="noopener noreferrer" style={{textDecoration:'none'}}>
                  <h3> WATCH TRAILER</h3>
                  </Link>
        </div>
                  {/* <p>{movie.trailer}</p> */}
                </div>
              </div>
            </div>
            </div>


           
    )
}

export default Moviecard
