import { useRef } from 'react';
import video1 from './BTVN_B12.mp4';

function DemoUseImperativeHandle() {
    const videoRef = useRef()
    return (
        <>
            <video
                ref={videoRef}
                controls
                width={'550px'}
                src={video1}
            ></video>
        </>
    )
}

export default DemoUseImperativeHandle