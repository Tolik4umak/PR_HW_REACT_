import { useState } from 'react';
import './App.css';
import Contant from './components/Contant/Contant';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Total from './components/Total/Total';
import axios from "axios";
import { useEffect } from 'react';


function App() {

  const [cources , setCources] = useState([])

  const fetchAxios = (link) => {
    return axios.get(link)
  }

  useEffect(() => {
    fetchAxios('http://localhost:3001/courses')
      .then(resp => setCources(resp.data))
      .catch(err => alert(err))
  },[])

  const addCard = (cource) => {
    axios.post("http://localhost:3001/courses",{
      ...cource
    })
      .then(resp => setCources([...cources, resp.data]))

  }

  const delCard = (delId) => {
    axios.delete(`http://localhost:3001/courses/${delId}`)
    .then((resr) => {
        const newArr = cources.filter(({id}) => id !== delId)
        setCources(newArr)
      })

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
              <button onClick={() => delCard(course.id)}>delete</button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
