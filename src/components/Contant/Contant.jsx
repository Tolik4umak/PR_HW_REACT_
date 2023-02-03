import React from 'react'
import { useState } from 'react'
import Task from '../Task/Task'
import s from './contact.module.css'

export default function Contant({parts}) {


  const [newParts, setParts] = useState(parts)

  return (
    <div className={s.container}>
      {newParts.map(({id,tasks,name}) => <Task key={id} task={tasks} part={name}/> )}
    </div>
  )
}
