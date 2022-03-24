import Header from './components/Header';
import Location from './components/Location';
import data from './data';
import './App.css';

function App() {
  const locations = data.map((location, index) => {
    return <Location key={index} {...location} />;
  });

  return (
    <div className='App'>
      <Header />
      {locations}
    </div>
  );
}

export default App;
