import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import { useEffect } from 'react';
import Card from './components/Card/Card';
import courseRequests from './sevices/courses'


function App() {

  const [cources , setCources] = useState([])

  useEffect(() => { 
    courseRequests
      .getAllCourses()
      .then(resp => setCources(resp.data))
      .catch(err => alert(err))
  },[])

  const addCard = (course) => {
    courseRequests
      .addOneCourse(course)
      .then(resp => setCources([...cources, resp.data]))
  }

  const delCard = (delId) => {
    courseRequests
      .deleteOneCourse(delId)
      .then((resr) => {
        const newArr = cources.filter(({id}) => id !== delId)
        setCources(newArr)
      })
  }

  return (
    <div className="App">
      <Form dataAction={addCard}/>
      <div className='box'>
        {cources.map((course) => (
            <Card key={course.id} {...course} delCard={delCard} />
          )
        )}
      </div>
    </div>
  );
}

export default App;
