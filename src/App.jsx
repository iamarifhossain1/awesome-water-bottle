
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const loadBottles = async () => {
  const fetchBottle = await fetch('./bottles.json')
  const response = fetchBottle.json();
  return response;
}


function App() {

  const bottlePromise = loadBottles();

  // const bottles = [
  //   {id: 1, name: 'Pink Bottle', price: 200, color: 'Pink'},
  //   {id: 2, name: 'Black Bottle', price: 200, color: 'Black'},
  //   {id: 3, name: 'Blue Bottle', price: 200, color: 'Blue'},
  //   {id: 4, name: 'Red Bottle', price: 200, color: 'Red'},
  //   {id: 5, name: 'Yellow Bottle', price: 200, color: 'Yellow'},
  // ]

  return (
    <>
      <h1>My Awesome Water Bottle</h1>
      <Suspense fallback={<p>Your awesome bottle is Loading :D</p>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
