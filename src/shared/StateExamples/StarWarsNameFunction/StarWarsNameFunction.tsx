import React from "react";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";

interface IStarWarsNameFunctionState {
  name: string;
  count: number;
}

// Состаяния в функциональных компонентах появились только с версии 16.
export function StarWarsNameFunction() {
  const randomName = () => uniqueNamesGenerator({dictionaries: [starWars], length: 1 });

  // // Это хук. Хуки можно использовать только в функциональных компонентах.
  // // name - состояние, setName - функция
  // const [name, setName] = React.useState(randomName);
  // const [count, setCount] = React.useState(0);
  // const handleClick = () => { 
  //   setName(randomName);
  //   setCount((prevCount) => prevCount + 1);
  // };
  // console.log('>>', count);

  // Второй способ.
  const [state, setState] = React.useState<IStarWarsNameFunctionState>({ name: randomName(), count: 0 });
  const handleClick = () => {
    // спред стейт. Если необходимо обновить только один объект.
    setState((prevState) => ({ ...prevState, name: randomName() }))
    setState((prevState) => ({ ...prevState, count: prevState.count + 1 }))
  }
  console.log('>>', state.count);

  return(
    <section>
      <span>{state.name}</span>
      <div />
      <button onClick={handleClick}>Мне нужно имя!</button>
    </section>
  )
}