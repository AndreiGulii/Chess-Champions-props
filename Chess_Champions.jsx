const root = ReactDOM.createRoot(document.getElementById("root"));
const champions = [
  {
    name: "Анатолий Карпов",
    year: 1975,
    photo: "medien/Karpov.jpeg",
  },
  {
    name: "Гарри Каспаров",
    year: 1985,
    photo: "medien/Kasparow.jpeg",
  },
  {
    name: "Владимир Крамник",
    year: 2000,
    photo: "medien/Kramnik.jpeg",
  },
  {
    name: "Вишванатан Ананд",
    year: 2007,
    photo: "medien/Anand.jpeg",
  },
  {
    name: "Магнус Карлсен",
    year: 2013,
    photo: "medien/Karlsen.jpeg",
  },
  {
    name: "Дин Лижэнь",
    year: 2023,
    photo: "medien/Lijeni.png",
  },
  {
    name: "Гукеш Доммараджу",
    year: 2024,
    photo: "medien/Dommaradju.png",
  },
  {
    name: "Александр Халифман",
    year: 1999,
    photo: "medien/Halifman.jpeg",
  },
  {
    name: "Руслан Пономарев",
    year: 2002,
    photo: "medien/Ponomarev.jpeg",
  },
  {
    name: "Рустам Касымджанов",
    year: 2004,
    photo: "medien/Kasimdjanov.jpeg",
  },
  {
    name: "Веселин Топалов",
    year: 2005,
    photo: "medien/Topalov.jpeg",
  },
];

const Champion = (props) => {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <p>Year: {props.year}</p>
      <img src={props.photo} alt={props.name} style={{ maxWidth: "250px" }} />
    </>
  );
};

root.render(
  <>
    {champions.map((e) => (
      <Champion
        key={Math.random()}
        name={e.name}
        year={e.year}
        photo={e.photo}
      />
    ))}
  </>
);
