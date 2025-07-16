import Hero from "../components/Hero"
import About from "../components/About"
import Gallery from "../components/Gallery"
import Stats from "../components/Stats"
import stage from "../assets/stage17-2ee502f1.jpeg"

function Home() {
  return (
    <div>
      <Hero  image={stage} alt="Stage" height="h-[70vh]" title={"REDIRECT YOUR THINKING"} subtitle={"THE OFFICIAL 180 DARAGA WEBSITE!"}/>
      <About/>
      <Stats/>
      <Gallery/>
    </div>
  )
}

export default Home