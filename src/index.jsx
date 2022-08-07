import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './Header';
import { StarWarsNameClass } from './shared/StateExamples/StarWarsNameClass/StarWarsNameClass';
import { StarWarsNameFunction } from './shared/StateExamples/StarWarsNameFunction/StarWarsNameFunction';
import { App } from './App';

// window.addEventListener('load', () => {
//     ReactDOM.render(<Header />, document.getElementById('react_root'));

window.addEventListener('load', () => {
    ReactDOM.render(<App />, document.getElementById('react_root'));

// window.addEventListener('load', () => {
//     ReactDOM.render(<StarWarsNameFunction />, document.getElementById('react_root'));
});
