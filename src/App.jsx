import React from 'react';
import "./App.css";
import Card from './components/Card';



function App() {

  return (
    <div className="App">
      <Card 
        title="Caramelo" 
        buttonLabel="Clique aqui" 
        description="Cachorrinho gente boa demais" 
        src="https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg" 
        subtitle="Brazil" 
      />

      <Card 
        title="Demoninho da tasmania" 
        buttonLabel="Invoque o demoninho" 
        description="Cachorrinho gente boa demais, porem demoniaco" 
        src="https://cobasi.vteximg.com.br/arquivos/ids/265361/Pinscher.jpg?v=637021869369770000" 
        subtitle="Brazil" 
      />
    </div>
  );
};

export default App;
