import Image from './Image'
import './App.css';
import cat from './cat-2083492_1280.jpg'


function App() {
  return (
    <div className="App">
     <Image source={ cat } alternativeText={'Cute cat staring'} />
    </div>
  );
}

export default App;
