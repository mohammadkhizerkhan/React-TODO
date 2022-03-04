import './App.css';
import AddTask from './components/AddTask';
import Complete from './components/Complete';
import InComplete from './components/InComplete';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AddTask />
       <Routes>
          <Route path='/Incomplete' element={<InComplete />}/>
          <Route path='/Complete' element={<Complete />}/>
       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
