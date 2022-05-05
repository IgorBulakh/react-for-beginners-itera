import React from 'react';
import User from './components/UserDesc/User'
import paintings from './paintings.json'

// type FooterProps = {
//   copyright: string;
// }


const App = () => {
  return (
    <div className="App">
      <User
        url={paintings[0].url}
        title={paintings[0].title}
        name={paintings[0].author.Name}
        lastName={paintings[0].author.Lastname}
        tel={paintings[0].contact}
      />
      
      {/* <Header />
      <section><p></p></section>
      <Footer copyright='C'/> */}
    </div>
  );

}

export default App;
