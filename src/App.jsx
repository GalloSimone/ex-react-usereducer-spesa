import { useState } from 'react'
import './App.css'
import ProductsList from './components/ProductsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <ProductsList/>
    </>
  )
}

export default App
