import './App.css';
import Counter from './components/Counter';
import Movieslist from './components/MoviesList';
import UFList from './components/UFList';

function App() {
  return (
    <>
    < Movieslist/>
    < Counter initialNumber={0} />
    < UFList />
    </>
  );
}

export default App;
