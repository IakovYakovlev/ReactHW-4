import React from 'react';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';
import styles from './starWarsNameClass.css';

interface IStarWarsNameClassState{
  name: string;
  count: number;
}

export class StarWarsNameClass extends React.PureComponent<{}, IStarWarsNameClassState> {
  // Инициализация состояния через перегрузку
  state: Readonly<IStarWarsNameClassState> = { name: this.randomName(), count: 0};
  
  // // Инициализация состояния через конструктор.
  // constructor(props: {}){
  //   super(props);

  //   this.state = { name: '123' }
  // }

  public render() {
    console.log('>>', this.state.count);
    return (
      // <section className={styles.container}>
      //   <span className={styles.name}></span>
      //   <div className={styles.gap} />
      //   <button className={styles.button}>Мне нужно имя</button>
      // </section>
      <section>
        <div className={styles.examples}>{this.state.name}</div>
        <div />
        <button className={styles.examples} onClick={this.handleClick}>Мне нужно имя!</button>
      </section>
    );
  }

  // Метод для нажания на кнопку
  private handleClick = () => {
    this.setState({ name: this.randomName() });
    
    // В этом случае, реакт гарантирует, что данные будут актуальные.
    //this.setState((state, props) => ({ count: state.count + 1 }), () => { console.log('>>', this.state.count)});
    
    // В таком варианте в реакте используется бачин.
    // Способность реакта группировать идущие друг за другом изменения состояния.
    this.setState((state, props) => ({ count: state.count + 1 }));
    this.setState((state, props) => ({ count: state.count + 1 }));

    // Если нужно получить правильное состояние объекта, необходимо использовать callback.
    //console.log('>>', this.state.count);
    // В этом случае, реакт не гарантирует, что данные будут актуальные.
    //this.setState({ count: this.state.count + 1 }) // wrong!
  }

  // Метод для обновления имени
  private randomName(): string {
    return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 })
  }
}