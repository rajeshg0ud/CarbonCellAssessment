import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header relative">
        <Home />
      </header>
    </div>
    </Router>
  );
}

export default App;
