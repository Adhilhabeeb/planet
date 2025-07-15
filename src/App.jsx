import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demoplanet from './Demoplan'
import Mainpage from './Mainpage'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Mainpage/>
   <Demoplanet/>
    </>
  )
}

export default App
