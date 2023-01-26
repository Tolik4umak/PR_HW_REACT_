import React from 'react'
import Task from '../Task/Task'
import s from './contact.module.css'

export default function Contant({data}) {
  return (
    <div className={s.container}>
        <Task task={data.tasks1} part={data.part1}/>
        <Task task={data.tasks2} part={data.part2}/>
        <Task task={data.tasks3} part={data.part3}/>
    </div>
  )
}
