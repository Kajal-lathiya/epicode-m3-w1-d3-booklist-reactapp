import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import horrorArray from "./horror.json";
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <WarningSign content=' This is a alert — check it out!' />
      <MyBadge bgcolor='success' />
      <BookList books={horrorArray} />
    </div>
  );
}


export default App;
