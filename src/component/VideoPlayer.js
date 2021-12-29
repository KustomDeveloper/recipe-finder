import React from 'react'

const VideoPlayer = ({videoUrl, recipeImg}) => {
  return(
    <React.Fragment>
        <div className="recipe-title watch-vid-title">Watch the Video:</div>
            
        <a id="videoplayer-link" target="_new" href={videoUrl}><img width="100%" src={recipeImg}></img>
        <span className="arrow-right-bg"><span className="arrow-right"></span></span>
        </a>
    </React.Fragment>
  )
}

export default VideoPlayer