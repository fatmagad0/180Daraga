import  teamHierarchy from "../assets/teamHierarchy.jpeg";
import Hero from "../components/Hero";
function TeamHierarchy() {
  return (
    <div> 
      <Hero
      image={teamHierarchy} 
          alt="teamhierarchy" 
          height="h-[65vh]" 
          title="TEAMHIERARCHY"
          subtitle="MEET OUR TRUSTY MASTERMINDS BEHIND OUR WORK!"
      />
    </div>
  )
}

export default TeamHierarchy