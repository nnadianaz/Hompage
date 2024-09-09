import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar"
// import Hero from "./Components/Herosection/Hero"
import TopCategories from "./Components/Categories/TopCategories"
import Features from "./Components/Features/Features"
import Localoffers from "./Components/Localoffers/Localoffers"
import Buynow from "./Components/Buynow/Buynow"
import Destination from "./Components/Destination/Destination"
import Testimonial from "./Components/Testimonials/Testimonial"
import Footer from "./Components/Footerf/Footer"
import Popularmakes from "./Components/PopularMakes/Popularmakes"
import Newhero from "./Components/Herosection/Newhero"


function App() {
 

  return (
    <>
      <Header />
      <Navbar />
      <Newhero/>
      <TopCategories/>
      <Features/>
      <Localoffers/>
      <Buynow/>
      <Destination/>
      <Testimonial/>
      <Popularmakes/>
      <Footer/> 
      
    </>
  )
}

export default App
