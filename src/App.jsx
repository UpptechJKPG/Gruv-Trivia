import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import StartPage from './pages/startPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StartPage/>
    </>
  )
}

export default App
