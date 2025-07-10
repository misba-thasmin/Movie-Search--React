import logo from './logo.svg';
import './App.css';
import AddMovie from './components/AddMovie';
import SearchMovie from './components/SearchMovie';
import ViewAllMovie from './components/ViewAllMovie';

function App() {
  return (
    <div>
      <AddMovie />
      <SearchMovie />
      <ViewAllMovie />
    </div>
  );
}

export default App;
