import { useRef, useState } from "react";

// function componets

function App1() {
    //
    const [countdown, setCountdown] = useState(60)

    // Lưu giá trị qua 1 tham chiếu bên ngoài
    //trả về 1 object có 1 property current là giá trị khởi tạo
    let id = useRef()

    const handleStart = () => {
        id.current = setInterval(() => setCountdown(prev => prev - 1)
            , 1000)
    }
    const handleStop = () => {
        clearInterval(id.current)
    }
    return (
        <div>
            <h1>{countdown}</h1><br />
            <button onClick={handleStart}>Start</button><button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default App1
