import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import CardRender from './components/CardRender'

function App() {
  // at beginning or initially useState is true
  const [status, setStatus] = useState(true)

  // at beginning or initially useState is zero
  const [count, setCount] = useState(0)

  // Array Object of data
  const data = [
    {
      id: 0,
      name: "Fancy Product",
      sale: false,
      oldPrice: '',
      Price: "$40.00 - $80.00",
      rating: 0
    },
    {
      id: 1,
      name: "Special Item",
      sale: true,
      oldPrice: "$20.00",
      Price: "$18.00",
      rating: 5
    },
    {
      id: 2,
      name: "Sale Item",
      sale: true,
      oldPrice: "$50.00",
      Price: "$25.00",
      rating: 0
    },
    {
      id: 3,
      name: "Popular Item",
      sale: false,
      oldPrice: '',
      Price: "$40.00",
      rating: 5
    },
    {
      id: 4,
      name: "Sale Item",
      sale: true,
      oldPrice: "$50.00",
      Price: "$25.00",
      rating: 0
    },
    {
      id: 5,
      name: "Fancy Product",
      sale: false,
      oldPrice: '',
      Price: "$40.00 - $80.00",
      rating: 0
    },
    {
      id: 6,
      name: "Special Item",
      sale: true,
      oldPrice: "$20.00",
      Price: "$18.00",
      rating: 5
    },
    {
      id: 7,
      name: "Popular Item",
      sale: false,
      oldPrice: '',
      Price: "$40.00",
      rating: 5
    }]
  const [Products, setProducts] = useState(data) //Destructing Array obj of data into products with state management
  return (
    <>
      {/* Navbar component added here and passing props as count and set count  */}
      <NavBar count={count} setCount={setCount} />
      <Header />
      {/* added card component inside the cardRender component and sending props*/}
      {status ? <CardRender count={count} setCount={setCount} setProducts={setProducts} Products={Products} /> : ''}
      <Footer />
    </>
  )
}

export default App
