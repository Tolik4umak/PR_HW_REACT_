import { useState } from 'react';
import './App.css';
import Contant from './components/Contant/Contant';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Total from './components/Total/Total';


function App() {

  const sourceCourses = [
    {
      id: 1,
      name: "Frontend Pro",
      parts: [
        {
          id: 1,
          name: "Вводные занятия по React",
          tasks: 10
        },
        {
          id: 2,
          name: "Использование React хуков",
          tasks: 5
        },
        {
          id: 3,
          name: "Использование библиотеки react-router-dom",
          tasks: 15
        }
      ]
      
    }
  ]

  const [cources , setCources] = useState(sourceCourses)

  const addCard = (cource) => {
    setCources([...cources, cource])
  }



  return (
    <div className="App">
      <Form addCard={addCard}/>
      <div>
        {cources.map((course) => (
            <div key={course.id} className='box'>
              <Header title={course.name}/>
              <Contant parts={course.parts}/>
              <Total count={course.parts.reduce((acum,val) => acum+ val.tasks ,0)}/>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
