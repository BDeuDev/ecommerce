import { ServiceData } from "../../gateways";
import Carrousel from "../carrousel";
import Navbar from "../navbar"

const Home = () => {

  return (
    <>
    <Navbar/>
    <Carrousel images={ServiceData}/>
  
    </>
    
  )
}

export default Home;