import './App.css';
import Square from './components/task1/Square';
import OnlyEven from './components/task2/OnlyEven';
import Temperature from './components/task3/Temperature';
import Button from './components/task4/Button';

function App() {
  return (
    <div className="App">
      <h1> Задание 1 </h1>
      <p>квадрат 3 равен <Square n={3}/></p>
      <h1>Задание 2</h1>
      <p>четные числа массива [14, 5, 6, 12, 21, 2]: <OnlyEven arr={[14, 5, 6, 12, 21, 2]} /></p>
      <h1>Задание 3</h1>
      <p>Температура воздуха: <Temperature t={451} /></p>      
      <p>Температура воздуха: <Temperature t={-451} /></p>
      <p>Температура воздуха: <Temperature t={0} /></p>
      <h1>Задание 4</h1>
      <p><Button /></p>
    </div>
  );
}

export default App;
