import YouTube from 'react-youtube';

import React from 'react'

function videosBackground() {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          
          autoplay: 1,
        },
      };

      const  _onReady= (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  return (
    <div>
                 <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />;


    </div>
  )
}

export default videosBackground