
import './App.css';
import Bio from './profile/component/bio';
import FullName from './profile/component/fullName';
import Profission from './profile/component/profission';

function App() {
  const handlealert=()=> {
    alert( "houssem")
  }
  return (
    <div className="App">
      <FullName Name={"houssem klai"} handlealert={handlealert} />
      <Bio Bio={"houssem klai , licence Micro finance  ,bac+3"} />
      <Profission Profission={"go my code"}>

        <img src="https://picfiles.alphacoders.com/311/thumb-1920-311202.jpg"/>
      </Profission>
   
    </div>
  );
}

export default App;
