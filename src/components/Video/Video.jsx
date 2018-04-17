import React from 'react';
import './Video.css';

import { DefaultPlayer as Video } from 'react-html5video';

export default function video(){
    return(
        <div>
            <Video  class="splash-video" autoPlay loop muted
            controls={[]}>
            <source src="https://res.cloudinary.com/drapplestar/video/upload/v1522368687/Gallery/final.mp4" />
        </Video>
        </div>
    )
}