import React from 'react'
import Header from '../Header/Header'
import Contant from '../Contant/Contant'
import Total from '../Total/Total'
import s from './style.module.css'
import { useState } from 'react'
import Form from '../Form/Form'
import courseRequests from '../../sevices/courses'

export default function Card({id , name , parts, delCard}) {

  const [course, setCourse] = useState({id,name,parts})
  const [mode, setMode] = useState(true)

  const changeData = (data) => {
    courseRequests
        .changeOneCourse(id, data)
        .then(resp => {
            setCourse(resp.data)
            setMode(true)
        })
  }
    
  return (
    <>
        {
            mode ? (
            <div className={s.box}>
                <Header title={course.name}/>
                <Contant parts={course.parts}/>
                <Total count={course.parts.reduce((acum,val) => acum + val.tasks ,0)}/>
                <button onClick={() => delCard(course.id)}>delete</button>
                <button onClick={() => setMode(false)}>update</button>
            </div>):(

            <div className={s.box}>
                <Form dataAction={changeData} data={course} buttonName={'Update'} />
                <button onClick={() => setMode(true)}>cancel</button>
            </div>

            )
        }
       
    </>
 
  )
}
