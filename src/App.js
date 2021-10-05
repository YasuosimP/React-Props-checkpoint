import logo from './logo.svg';
import './App.css';
import Component from './profil/Component'
import image from './tanjiro.jpg'

function App() {
  const alertMe=()=>{
    alert('Hamza Ayechi')
  }

  return ( 
    <div>
    <Component   alertMe={alertMe}>
      <img src={image} width={200} heigh={200}/>
    </Component>
    
    </div>
  );
}

export default App;
