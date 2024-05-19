import jenkinsLogo from './assets/jenkins.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={jenkinsLogo} className="logo react" alt="Jenkins logo" />
        </a>
      </div>
      <h1>Prueba de Jenkins</h1>
      <p>¡Con deploy automático!</p>
    </>
  )
}

export default App
