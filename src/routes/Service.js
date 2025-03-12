import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import travelImg from "../assets/service.jpg";
import Footer from "../components/Footer";
import Hotel from "../components/hotel";
import Food from "../components/Food";

function Service () {
    return (
        <>
        <Navbar/>
         <Hero
         cName="hero-mid"
         heroImg={travelImg}
         title="Service"
         btnClass="hide"
         />
         <Hotel/>
         <Food/>
         <Footer/>
        </>
    )
}

export default Service;