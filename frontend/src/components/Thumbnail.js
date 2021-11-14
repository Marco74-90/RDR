import React from 'react'
import {Image} from 'react-bootstrap'

function Thumbnail({photo, clickHandler, index}) {
    return (
      <div className="thumbnail">
        <Image src={photo}
        data-index={index} alt=""
        onClick={clickHandler}
        thumbnail
        style={{height:'100%', width:'100%'}} />
            
        Thumbnail 
      </div>
    );
  }
  export default Thumbnail;
