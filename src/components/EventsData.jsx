const eventsData = [
  {
    year: 2025,
    events: ["Recruitment '24", "Start Cousre '24","غطاء9"],
  },
  {
    year: 2024,
    events:["Start Course'23","Recruitment '23","غطاء8","من رمضان للعيد 8","فينا خير 9","Juniors Journey 3","New Stage 17"],
  },
  {
    year: 2023,
    events:["The Camp","Desert maze","غطاء7","من رمضان للعيد 7","فينا خير 8","FCI Mystery","Summer Camp'23","Problem Solving Training","Juniors Journey 2","New Stage 16"],
  },
  {
    year: 2022,
    events:["The Camp","Desert maze","غطاء6","من رمضان للعيد 6","فينا خير 6","FCI Mystery","Summer Camp'22","Problem Solving Training","Juniors Journey","New Stage 15"],
  },
  {
  year: 2021,
  events: [
    "Problem Solving Training",
    "The Camp - Round 1",
    "غِطاء 5",
    "The Camp - Round 2",
    "من رمضان للعيد 5",
    "Problem Solving Traning Level 1",
    "فينا خير 6",
    "New Stage 14",
    "Summer Camp",
    "Recruitment'21",
    "Start Course'21"
  ]
},
{
  year: 2020,
  events: [
    "غِطاء 4",
    "The Compass",
    "180Daraga The Meetups",
    "The Camp",
    "Summer Camp",
    "New Stage 13",
    "Start Course'20",
    "Recruitment'20"
  ]
},
{
  year: 2019,
  events: [
    "Mid Year Courses",
    "IBM Digital Nation Africa Innovation Tour by IBM & 180 Daraga",
    "Shortcut 2",
    "Workzone 3",
    "Photoday",
    "من رمضان للعيد 4",
    "فينا خير 5",
    "Summer Courses",
    "New Stage 12",
    "Recruitment",
    "Start Course'19",
    "Cairo University Cybersecurity CTF"
  ]
},
{
  year: 2018,
  events: [
    "Mid Year Courses",
    "Talents 404",
    "Workzone 2",
    "Dot EXE2",
    "Photoday",
    "Summer Courses",
    "New Stage 11",
    "Sporting Day (Big Bang 2)",
    "Recruitment",
    "Start Course",
    "غِطاء 3"
  ]
},
{
  year: 2017,
  events: [
    "Mid Year Courses",
    "6Geeks",
    "Shortcut 1",
    "Graduation Ceremony",
    "Department Day",
    "Graduation Project Day",
    "Photoday",
    "من رمضان للعيد 2",
    "فينا خير3",
    "Summer Courses",
    "New Stage 10",
    "Start Course",
    "غِطاء 2",
    "F5",
    "Markedia"
  ]
},
{
  year: 2016,
  events: [
    "Mid Year Courses",
    "إبتديها خير (فينا خير )",
    "Graduaton Ceremony",
    "Workzone 1",
    "Department Day",
    "Graduation Project Day",
    "Photoday",
    "من رمضان للعيد 1",
    "فينا خير 2",
    "New Stage 9",
    "Recruitment",
    "Start Course",
    "غِطاء",
    "Dot EXE 1",
    "F5"
  ]
},
{
  year: 2015,
  events: [
    "FCIH Opening",
    "F5",
    "Mid Year Courses",
    "Photoday",
    "Summer Courses",
    "New Stage 8",
    "فينا خير 2",
    "Recruitment",
    "Start Course"
  ]
},
{
  year: 2014,
  events: [
    "Recruitment",
    "Mid Year Courses",
    "Department Day",
    "Summer Courses",
    "New Stage 7",
    "خير مع الغير",
    "Start Course"
  ]
},
{
  year: 2013,
  events: [
    "Recruitment",
    "Winter Charity",
    "Technolobia",
    "FCI City Birthday",
    "فن الفشل",
    "Photoday",
    "New Stage 6",
    "Start Course",
    "فينا خير واحد"
  ]
},
{
  year: 2012,
  events: [
    "FCI City Birthday",
    "C++ Course",
    "Mid Year Courses",
    "Wadi Elrayan Outing",
    "F5",
    "Dream Park Event",
    "Sporting Day",
    "Department Day",
    "Photoday",
    "Ramadan Charity",
    "كساء",
    "57357 Day",
    "فن الفشل",
    "New Stage 5",
    "Graduation Prom",
    "Summer Courses",
    "Recruitment",
    "12-12-12 Event",
    "Handmade Gallery"
  ]
},
{
  year: 2011,
  events: [
    "New Stage 4",
    "Electro Study",
    "Summer Coures",
    "Recruitment",
    "Sporting Day"
  ]
}

];

function EventsData() {
  return (
    <div className="relative w-full py-16 bg-white">
      <div className="absolute left-1/2 top-16 bottom-0 w-1 bg-orange-800 transform -translate-x-1/2"></div>

      <div className="flex flex-col gap-20">
        {eventsData.map((event, index) => {
          const isLeft = index % 2 !== 0;
          return (
            <div key={index} className="relative w-full flex justify-center items-center">
              <div
                className={`bg-red-900 text-white p-6 rounded shadow-md w-[25%] ${
                  isLeft ? 'mr-[30%]' : 'ml-[30%]'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{event.year}</h3>
                <ul className="list-disc ml-5">
                  {event.events.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div
                className="w-5 h-5 bg-orange-800 border-3 border-yellow-300 rounded-full absolute "
                style={{
                  left: '50%',
                  top:0,
                  transform: 'translateX(-50%)',
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventsData;
