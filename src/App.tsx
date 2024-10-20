import { Component } from './components/Component/Component'
import './App.css'

function App() {

  return (
    <>
    <Component url='http://localhost:7070/data'/>
    <Component url='http://localhost:7070/error'/>
    <Component url='http://localhost:7070/loading'/>
    </>
  )
}

export default App
