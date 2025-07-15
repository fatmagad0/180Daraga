import events from "../assets/events.jpeg";
import EventsData from "../components/EventsData";
import Hero from "../components/Hero";
function Events() {
  return <div><Hero 
    image={events} 
    alt="Events" 
    height="h-[65vh]" 
    title="OUR EVENTS"
    subtitle="THE WHOLE TIMELINE OF 180 DARAGA'S EVENT ACROSS THE YEARS!"
  />;
  <EventsData/>
  </div>
}

export default Events;
