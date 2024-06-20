import './App.css'
import { Listing } from './components/Listing'
import items from './data/etsy.json'
import { IListing } from "./models/index"

function App() {
  return (
    <>
      <Listing items={items as IListing[]}/>
    </>
  )
}

export default App
