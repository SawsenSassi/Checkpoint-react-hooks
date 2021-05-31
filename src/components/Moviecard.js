import React from 'react'


const Moviecard = ({ movie }) => {
    return (
        <div>
            <div className='Movie'>

                <img className='ImageMovie' src={movie.image} alt='Movie' />
                <div className='Title-rating'>
                    <h6>{movie.titre}</h6>
                    
                </div>
                <div className='MovieOver'>
                    <h2 style={{color:'blue'}}>Overview</h2>
                    <p>{movie.desc}</p>
                </div>

            </div>



        </div>
    )
}

export default Moviecard
