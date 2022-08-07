// import React from 'react';
// import { starWars, uniqueNamesGenerator } from 'unique-names-generator';

// interface INamesState {
//   adjective: string;
//   starWarsWord: string;
// }

// class Names extends React.Component<{}, INamesState> {
//   constructor(props: {}) {
//     super(props);

//     this.state = {
//       adjective: this.generateWord(adjective),
//       starWarsWord: this.generateWord(starWars),
//     }
//   }

//   // Специальная штука, жизненный цикл компонента.
//   // 
//   public componentDidMount(): void {
//     const interval = setInterval(() => {
//       this.setState({ adjective: this.generateWord(adjective) })
//     }, 2000);

//     setTimeout(() => {clearInterval(interval)}, 6000);
//   }

//   public render() {
//     return (
//       <h1 className={styles.words}>
//         <Adjective adjective={this.state.adjective} />
//         {'\u00A0'}
//         <StarWarsWord starWarsWord={this.state.starwarsWord} />
//       </h1>
//     );
//   }

//   private generateWord(dictionary: string[]): string {
//     const defaultGeneratorConfig: Config = {
//       length: 1,
//       dictionaries: []
//     };

//     return uniqueNamesGenerator(Object.assign(
//       {},
//       defaultGeneratorConfig,
//       { dictionaries: [dictionary]}
//     ))
//   }
// }
// interface IFirstNameProps {
//   adjective: string;
// }

// class Adjective extends React.Component<IFirstNameProps> {
//   render() {
//     console.log('=================');
//     console.log('>> Adjective is printing');
//     return <span>{this.props.adjective}</span>
//   }
// }

// interface ILastNameProps {
//   starWarsWord: string;
// }

// class StarWarsWord extends React.Component<ILastNameProps> {
//   render() {
//     console.log('>> SW word is printing');
//     return <span>{this.props.starWarsWord}</span>
//   }
// }
