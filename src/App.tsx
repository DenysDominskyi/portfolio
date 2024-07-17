import './App.css';

import { Home } from './layout/pages/home/Home';
import { Header } from './layout/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;