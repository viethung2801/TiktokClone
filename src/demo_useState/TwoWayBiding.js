import { useState } from "react"
// Data from API 
const courses = [
    {
        id: 1,
        name: 'HTML/CSS'
    },
    {
        id: 2,
        name: 'JavaScript'
    },
    {
        id: 3,
        name: 'ReactJs'
    }
]
function TwoWayBinding() {

    const [checkRadio, setCheckRadio] = useState()
    const [checkbox, setCheckBox] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    console.log(checkbox);

    const handleRegister = () => {
        console.log({
            username,
            password,
            checkRadio
        });
    }
    const handleCheck = (id) => {
        setCheckBox(checkAll => {
            if(checkbox.includes(id)){
                // uncheck
                return checkbox.filter(item => item !== id)
            }else{
                return [...checkAll, id]
            }
        })
    }
    return (
        <div>
            <input
                onChange={e => setUsername(e.target.value)}
                placeholder="Username ?"
            /><br />
            <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password ?"
            /><br />
            {
                courses.map((course) => (
                    <div key={course.id}>
                        {/* <label>
                            <input
                                type="radio"
                                onChange={() => setCheckRadio(course.id)}
                                checked={checkRadio === course.id}
                            /> {course.name}
                        </label> */
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheck(course.id)}
                                    checked={checkbox.includes(course.id)}
                                /> {course.name}
                            </label>

                        }
                    </div>
                ))
            }<br />
            <button onClick={handleRegister}>Register</button>
        </div>
    )
}

export default TwoWayBinding