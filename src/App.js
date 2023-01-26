import './App.css';
import Contant from './components/Contant/Contant';
import Header from './components/Header/Header';
import Total from './components/Total/Total';


function App() {
  const course = "Frontend Pro"
  const part1 = "Вводные занятия по React"
  const tasks1 = 10
  const part2 = "Использование React хуков"
  const tasks2 = 5
  const part3 = "Использование библиотеки react-router-dom"
  const tasks3 = 15
  return (
    <div className="App">
      <div className='box'>
        <Header title={course}/>
        <Contant data={{part1, part2, part3, tasks1, tasks2, tasks3}}/>
        <Total count={tasks1+tasks2+tasks3}/>
      </div>
      <p>Версия 2.1</p>
    </div>
  );
}

export default App;
