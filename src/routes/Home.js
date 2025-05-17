import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Hero from "../components/hero";
import mountain from "../assets/mountain.jpg";

function Home () {
    return (
        <>
        <Navbar/>
         <Hero
         cName="hero"
         heroImg={mountain}
         title="Welcome   To   देवभूमी"
         text="RAMTEK"
         url="/"
         />
         <Destination/>

         <Footer/>
        </>
    )


}

export default Home;