import Hero from "../components/Hero"
import About from "../components/About"
import Gallery from "../components/Gallery"
import Stats from "../components/Stats"

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Stats/>
      <Gallery/>
    </div>
  )
}

export default Home