import React from 'react'
import {Image} from 'react-bootstrap'

function ThumbnailWindow({activeThumbnail}) {
    return (
      <div style={styles}>
         <Image src={activeThumbnail.photo} alt=""  style={{ width:'100%', height:'100%'}}/>
      </div>
    );
  }
  
  const styles = {
      height: '65%',
      width: '100%',
      background:'#7b611d', 

      position: "relative"
  }
  export default ThumbnailWindow;
 
