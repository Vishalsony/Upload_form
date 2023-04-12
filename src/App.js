import './App.css';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';
import Comp3 from './Components/Comp3';

function App() {
  return (

    <div>
    
    <div className="container-fluid bg-danger ab1 m-0">
        <div className="row vish justify-content-between" >
            <div className="col-2 sec1 ">
              <Comp1/>
            </div>

            <div className="col-5 bg-white">
            <Comp2/>
            </div>

            <div className="col-4 bg-white">
            <Comp3/>
            </div>
    
         </div>
    </div>

    </div>

  );
}

export default App;
