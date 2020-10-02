import React from 'react';
import './App.css';

// ------------>        COMPONENTS         <------------- //
import Header from './components/Header';
import Footer from './components/Footer';
import Pokemon from './components/homepage/Pokemon';
import Types from './components/homepage/Types';
// import MyPokemon from './components/myPokemon/MyPokemon';
// ------------>            END            <------------- //

function App() {
  return (
    <>
    <div>
     <Header />
    <main>
      {/* <MyPokemon /> */}
      <Types />
      <Pokemon />
    </main>
     <Footer />
     </div>
    </>
  );
}

export default App;
