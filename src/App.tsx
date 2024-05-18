import { useState } from 'react'
import jenkinsLogo from './assets/jenkins.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={jenkinsLogo} className="logo react" alt="Jenkins logo" />
        </a>
      </div>
      <h1>Prueba de Jenkins</h1>
    </>
  )
}

export default App
