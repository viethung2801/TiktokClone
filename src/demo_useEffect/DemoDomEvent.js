import { useEffect, useState } from "react";


//listen Dom Event 

function DemoDomEvents() {
    // dếm ngược
    const [countdown, setCountdown] = useState(180)

    //callback gọi sau khi render UI
    // cách 1:
    // useEffect(() => {
    //     setInterval(() => {
    //         setCountdown(prev => prev - 1)
    //     }, 1000)
    // }, [])

    //Cách 2: 
    useEffect(() => {
        const time = setTimeout(() => { 
            setCountdown(countdown - 1)
        }, 1000)
        // clearInterval khi dùng 

        return () => clearTimeout(time)
    }, [countdown])
    return (
        <div>
            {countdown}
        </div>
    )
}

export default DemoDomEvents

