import React from 'react';
import img from '../playerImgs/rock.jpg';

const PicBox = ({image}) => {
    return ( 
        <img className='playerPic' src={image} alt="randomPic"/>
     );
}
 
export default PicBox;
