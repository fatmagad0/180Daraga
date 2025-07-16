import MariamEhab from "../assets/teamHierarchy/MariamEhab.jpg";
import Jana from "../assets/teamHierarchy/Jana.jpg";
import Alaa from "../assets/teamHierarchy/Alaa.jpg";
import Ayman from "../assets/teamHierarchy/Ayman.jpeg";
import Basel from "../assets/teamHierarchy/Basel.jpg";
import cairo from "../assets/teamHierarchy/cairo.jpg";
import general from "../assets/teamHierarchy/general.jpg";
import helwan from "../assets/teamHierarchy/helwan.jpg";
import Johnathan from "../assets/teamHierarchy/Johnathan.jpg";
import MariamYasser from "../assets/teamHierarchy/MariamYasser.jpg";
import Mohamed from "../assets/teamHierarchy/Mohamed.jpg";
import Noureen from "../assets/teamHierarchy/Noureen.jpg";
import president from "../assets/teamHierarchy/president.jpg";
import Shrouk from "../assets/teamHierarchy/Shrouk.jpg";
import Seif from "../assets/teamHierarchy/Seif.jpg";

function Members() {
  const sections = [
    {
      title: "Highboard",
      people: [{ name: "Mariam Mahmoud", role: "~President~", image: president },
        { name: "Abdullah Mohamed", role: "~Cairo coordinator~", image: cairo },
        { name: "Mazin Islam", role: "~Helwan coordinator~", image: helwan },
        { name: "Omar Ali", role: "~General coordinator~", image: general },
      ],
    },
    {
      title: "PR Committee",
      people: [
        { name: "Mohamed Mohsen", role: "~committee head~", image: Mohamed },
        { name: "Ayman Abo Khalifa", role: "~Vice committee head~", image: Ayman },
        { name: "Shrouk Ezzat", role: "~Vice committee head~", image: Shrouk },
      ],
    },
    {
      title: "SSM Committee",
      people: [
        { name: "Mariam Yasser", role: "~committee head~", image: MariamYasser },
        { name: "Mariam Ehab", role: "~Vice committee head~", image: MariamEhab },
      ],
    },
    {
      title: "Graphic Design Committee",
      people: [
        { name: "Alaa Atef", role: "~committee head~", image: Alaa },
        { name: "Noureen Saad", role: "~committee Director~", image: Noureen },
      ],
    },
    {
      title: "Video Production Committee",
      people: [
        { name: "Seif Tarek", role: "~committee head~", image: Seif },
        { name: "Jana Alkot", role: "~Vice committee head~", image: Jana },
      ],
    },
    {
      title: "Technical Committee",
      people: [
        { name: "Johnathan Eskander", role: "~committee head~", image: Johnathan },
        { name: "Basel Hamdi", role: "~Vice committee head~", image: Basel },
      ],
    },
  ];

  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`py-8 ${
            index % 2 === 0 ? "bg-white text-[#7c0a02] py-25" : "bg-[#7c0a02] text-white py-25"
          }`}
        >
          <h2 className="text-2xl font-bold mb-16 text-center">{section.title}</h2>

          <div className="flex flex-wrap justify-center gap-8">
            {section.people.map((person, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
                />
                <p className="font-bold">{person.name}</p>
                <p>{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Members;
