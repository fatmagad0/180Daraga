import events from "../assets/events.jpeg";
import Hero from "../components/Hero";
function Events() {
  return <Hero 
    image={events} 
    alt="Events" 
    height="h-[65vh]" 
    title="OUR EVENTS"
    subtitle="Discover what's happening at 180 Daraga"
  />;
}

export default Events;
