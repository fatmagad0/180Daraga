import  teamHierarchy from "../assets/teamHierarchy/teamHierarchy.jpeg";
import Hero from "../components/Hero";
import Members from "../components/Members";
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
      <Members/>
    </div>
  )
}

export default TeamHierarchy