import { useState ,createContext} from 'react'
import Content from './Content'

//Regular:  Component A => Component B => Component C
//Context: Component A => Component C 

//1. Create Context
//2. Provider
//3. Consumer

//return an object
export const ThemeContext = createContext()


function Context(){
    const [theme, setTheme] = useState('dark')

    const toggleTheme = ()=>{
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return(
        <ThemeContext.Provider value={theme}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Content></Content>
        </ThemeContext.Provider>
    )
}

export default Context