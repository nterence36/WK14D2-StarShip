import {useState, useEffect} from "react"
import {getAllStarships} from './services/sw-api'
import './App.css';
import StarShipCard from "./component/StarShipCard";

function App() {
  
  const [starShips, setStarShips] = useState([])
   useEffect(() => {
    const findShip = async () =>{
      try{
        const starShip = await getAllStarships()
      
        setStarShips(starShip)
     
      }catch(e){
        console.log(e)
      }
    }
    findShip()
   }, [])

  return (
      <>
      <header>STAR WARS STARSHIPS</header>
      <div className="Ship">
        {starShips.map((starShip, i) => {
          return <StarShipCard starShip={starShip} key={i}/> 
        })}
    </div>
    </>
  )
}

export default App;
