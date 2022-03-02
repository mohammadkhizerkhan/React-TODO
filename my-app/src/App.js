import './App.css';
import AddTask from './components/AddTask';
import Complete from './components/Complete';
import Header from './components/Header';
import InComplete from './components/InComplete';

function App() {
  return (
    <div className="App">
        <Header />
        <AddTask />
        {/* <InComplete/> */}
        <Complete/>
    </div>
  );
}

export default App;
