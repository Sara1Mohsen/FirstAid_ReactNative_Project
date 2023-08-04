import { Video } from 'expo-av';
import * as React from 'react'


export default function CustomVideoPlayer({styles , vid_url}){
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

   // console.log(vid_url);

    return (
        <Video
        ref={video}
        style={styles}
        source={
          vid_url
        }
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    )
}