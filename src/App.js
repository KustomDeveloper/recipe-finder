import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import SearchBar from './component/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
