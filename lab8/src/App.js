import Timer10to0 from './components/task1/Timer10to0';
import Timer0ToInfinity from './components/task2/Timer0ToInfinity';
import PrimeNums from'./components/task3/PrimeNums';
import Ticker from './components/task5/Ticker';

function App() {
  return (
    <div className="App">
      <h1> Задание 1 </h1>
      <Timer10to0 />
      <h1>Задание 2</h1>
      <Timer0ToInfinity />
      <h1>Задание 3</h1>
      <PrimeNums />
      <h1>Задание 5</h1>
      <Ticker s="привет!" />
    </div>
  );
}

export default App;
