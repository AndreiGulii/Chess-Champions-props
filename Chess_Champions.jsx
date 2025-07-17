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
  const [isEdit, setIsEdit] = React.useState(false);
  const [nameChanged, setName] = React.useState(props.name)
  const [yearChanged, setYear] = React.useState(props.year)

// 1. Создание абстрактной (не связанной с конкретным элементом) ссылки
const inputName = React.useRef();
const inputYear = React.useRef();

  return isEdit ? (
    
    <div className="card mx-auto my-3" style={{maxWidth: "400px"}}>   
    <img src={props.photo} className="card-img-top" alt={props.name}></img>
    <div className="card-body">
      {/* 2. Соединение абстрактной ссылки inputName и inputYear с конкретным элементом в качестве 
      дефолтного значения устанавливаем измененные значения имени и года*/}
      <input ref={inputName} type="text" defaultValue={nameChanged} />
      <input ref={inputYear} type="text" defaultValue={yearChanged}/>
      <button className="btn btn-success" onClick={() => {
        champions.name = setName(inputName.current.value);
        champions.year = setYear (inputYear.current.value);
        setIsEdit(false);
      }}>Save</button>
    </div>
    </div>
  ):(
    
    <div className="card mx-auto my-3" style={{maxWidth: "400px"}}>   
    <img src={props.photo} className="card-img-top" alt={props.name}></img>
    <div className="card-body">
    </div>
    {/* Не забываем установить для вывода изменённое имя и год*/}
      <h2 className="card-title">{nameChanged} </h2>
      <p className="card-text mx-auto my-auto">{yearChanged} </p>
      <button className="btn btn-warning" onClick={()=> setIsEdit(true)}>Edit Name or Year</button>
    </div>
  )
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
