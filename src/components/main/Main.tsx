import Cards from "../home/Cards";
import Dice from "../home/Dice";
import Games from "../home/Games";
import Home from "../home/Home";
import Installation from "../home/Installation";



export default function Main() {
  return (
    <main id="main" className="container mx-auto pt-8">
        <Home/>
        <Cards/>
        <Dice/>
        <Games/>
        <Installation/>
      </main>

  )
}
