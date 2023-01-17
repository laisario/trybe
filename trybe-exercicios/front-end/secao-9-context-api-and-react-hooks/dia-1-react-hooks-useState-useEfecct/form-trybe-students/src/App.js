import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModulo] = useState();

  return (
    <form>
      <input
        type="text"
        placeholder="Nome completo"
        id="name" value={name}
        onChange={ ({target}) => setName(target.value) }
       />

      <input
        type="number"
        placeholder="Age"
        id="age"
        value={age}
        onChange={ ({target}) => setAge(target.value) }
       />

      <input 
        type="text" 
        placeholder="Cidade" 
        id="city"
       value={city} 
       onChange={ ({target}) => setCity(target.value) } 
      />

      <input
        type="radio"
        id="fundamentos"
        value="Fundamentos"
        checked={module === 'Fundamentos'} 
        name="modulo"
        onChange={ ({target}) => setModulo(target.value) }
      />
      <label htmlFor="fundamentos">Fundamentos</label>

      <input
        type="radio"
        id="front-end"
        value="Front-end"
        checked={module === 'Front-end'}
        name="modulo"
        onChange={ ({target}) => setModulo(target.value) }
      />
      <label htmlFor="front-end">Front-end</label>
      <input
        type="radio"
        id="back-end" 
        value="Back-end" 
        checked={module === 'Back-end'} 
        name="modulo"
        onChange={ ({target}) => setModulo(target.value) }
      />
      <label htmlFor="back-end">Back-end</label>
      <input
        type="radio"
        id="ciencia-da-computacao"
        value="Ciência da computação"
        checked={module === 'Ciência da computação'} 
        name="modulo"
        onChange={ ({target}) => setModulo(target.value) }
      />
      <label htmlFor="ciencia-da-computacao">Ciência da computação</label>
      <button
        type="submit"
      >Enviar</button>
    </form>

  );
}

export default App;
