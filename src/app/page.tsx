import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

 

 export default function Home (){
  return(
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
      <Header/>
      <Hero/>
      <Button/>
      
      </div>
      <Footer/>
    </div>
  )
 }