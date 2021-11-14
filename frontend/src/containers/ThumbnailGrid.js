import React from 'react'
import Thumbnail from '../components/Thumbnail'

function ThumbnailGrid({thumbnails, clickHandler}) {
    return (
      <div className="thumbnail_grid" style={styles}>
       {
       thumbnails.map((thumbnail, i) => { 
         return(
          <Thumbnail clickHandler={clickHandler} 
          key={thumbnail.id} 
          photo={thumbnail.photo}
          index={i}/>
         )
       })}
      </div>
    );
  }
  
  const styles = {
      height: '35%',
      width: '100%',
      background: '#7b611d',
      display: 'flex',
      flexWrap: 'wrap',
      overflow:'auto'
  }
  export default ThumbnailGrid;