// import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
// import logo from './logo.svg';
import './App.css';

const user = {
  userName: 'Igor Bulach',
  userContact: '0979540954'
}

type FooterProps = {
  copyright: string;
}

const Header = () => {
  return <header><h1>{user.userName}</h1></header>
}
const Footer: React.FC<FooterProps> = (props) => {
  return <footer><a href="tel:+380979540954">tel:{user.userContact}</a><div>copy{props.copyright}</div></footer>
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <section><p>Мене звати Ігор, я фотограф з м. Макарів, перед війною почав вивчати HTML/CSS/JS. З початком війни побачив як суттєво страждає наша економіка. Тенденція пост воєнного майбутнього на розвиток країни бачу в технологічній індустрії, саме тому вирішив ще почати вивчати React, що надасть мені чудову змогу приєднатися до лав тих хто буде на фронті економічного підняття України.</p></section>
      <Footer copyright='C'/>
    </div>
  );

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
