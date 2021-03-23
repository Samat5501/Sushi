import React from 'react'
import './App.css';
// import { Card } from './Components/Card/Header';
import Main from './Components/Main/Main';
import sushi_1 from './images/sushi-1.jpg'
import sushi_2 from './images/sushi-2.jpg'
import sushi_3 from './images/sushi-3.jpg'
import sushi_4 from './images/sushi-4.jpeg'

function App() {
  const data = [
    {
      img: sushi_1,
      title: "унаги урамаки",
      text: "угорь, авокадо, силивочный сыр, огурец, соус унаги, кунжут",
      count: "1900,00 ТГ",
      pieces: "8 штук",
      button: "Калорийность Ккал 298",
      minus: "-",
      input: "1",
      plus: "+",
      add: "Добавить корзину",
    },
    {
      img: sushi_2,
      title: "мадрид ролл",
      text: "Ласось, авокадо, спайси соус, перец чили, икра тобико.",
      count: "1100,00 ТГ",
      pieces: "8 штук",
      button: "Калорийность Ккал 275",
      minus: "-",
      input: "1",
      plus: "+",
      add: "Добавить корзину",
    },
    {
      img: sushi_3,
      title: "теплая креветка с моцареплой",
      text: "Теплый ролл-Креветка, тамаго, огурец, сливочный сыр, икра тобико, моцарелла.",
      count: "1700,00 ТГ",
      pieces: "8 штук",
      button: "Калорийность Ккал 257",
      minus: "-",
      input: "1",
      plus: "+",
      add: "Добавить корзину",
    },
    {
      img: sushi_4,
      title: "фреш ролл с баклажаном",
      text: "Рисовая Бумага, лист салата, баклажан в чесносном соусе, помидор.",
      count: "550,00 ТГ",
      pieces: "8 штук",
      button: "Калорийность Ккал 235",
      minus: "-",
      input: "1",
      plus: "+",
      add: "Добавить корзину",
    },
  ];
  return (
    <div className="Card">
      {/* {data.map((el, id) => {
        // return <Main data={el} key={id} />;
        return <Main data={el} key={id} />; */}
      {/* })} */}
      {data.map((im) => {
        return <Main data={im}  />;
      })}
    </div>
  );
}

export default App;
