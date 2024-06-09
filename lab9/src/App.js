import ChooseCity from './components/task1/ChooseCity';
import Calculator from './components/task3/Calculator';
import DateOfBirth from'./components/task4/DateOfBirth';
import Filtration from './components/task5/Filtration';
import LoginPasswordValidation from './components/task6/LoginPasswordValidation';

function App() {
  return (
    <div className="App">
      <h1> Задание 1 </h1>
      <ChooseCity />
      <h1>Задание 3</h1>
      <Calculator />
      <h1>Задание 4</h1>
      <DateOfBirth />
      <h1>Задание 5</h1>
      <Filtration />
      <h1>Задание 6</h1>
      <LoginPasswordValidation />
    </div>
  );
}

export default App;
