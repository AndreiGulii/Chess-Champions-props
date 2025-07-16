const root = ReactDOM.createRoot(document.getElementById("root"));
const champions = [
  {
    id: 1,
    name: "Анатолий Карпов",
    year: 1975,
    photo: "medien/Karpov.jpeg",
  },
  {
    id: 2,
    name: "Гарри Каспаров",
    year: 1985,
    photo: "medien/Kasparow.jpeg",
  },
  {
    id: 3,
    name: "Владимир Крамник",
    year: 2000,
    photo: "medien/Kramnik.jpeg",
  },
  {
    id: 4,
    name: "Вишванатан Ананд",
    year: 2007,
    photo: "medien/Anand.jpeg",
  },
  {
    id:5,
    name: "Магнус Карлсен",
    year: 2013,
    photo: "medien/Karlsen.jpeg",
  },
  {
    id: 6,
    name: "Дин Лижэнь",
    year: 2023,
    photo: "medien/Lijeni.png",
  },
  {
    id: 7,
    name: "Гукеш Доммараджу",
    year: 2024,
    photo: "medien/Dommaradju.png",
  },
  {
    id: 8,
    name: "Александр Халифман",
    year: 1999,
    photo: "medien/Halifman.jpeg",
  },
  {
    id: 9,
    name: "Руслан Пономарев",
    year: 2002,
    photo: "medien/Ponomarev.jpeg",
  },
  {
    id: 10,
    name: "Рустам Касымджанов",
    year: 2004,
    photo: "medien/Kasimdjanov.jpeg",
  },
  {
    id: 11,
    name: "Веселин Топалов",
    year: 2005,
    photo: "medien/Topalov.jpeg",
  },
];


const Champion = (props) => {
  return (
    
    <div style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        backgroundColor: "#dad7d7",
      }}
    >  
      <h2>Name: {props.name} </h2>
      <p>Year: {props.year} </p>
      <img src={props.photo} alt={props.name} style={{maxWidth: "230px", objectFit: "cover", borderRadius: "8px" }}
      />
    </div>
  );
};

root.render(
  <>
  <h1 style={{textAlign: "center", backgroundColor: "grey", color: "white"}}>Чемпионы мира по шахматам</h1>
  <div
      className="grid-container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
    {champions.map((e) => (
      <Champion
        key={e.id}
        name={e.name}
        year={e.year}
        photo={e.photo}
      />
    ))}
    </div>
  </>
);
