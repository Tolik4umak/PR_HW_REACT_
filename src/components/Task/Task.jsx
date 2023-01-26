import React from 'react'
import s from './task.module.css'

export default function Task(props) {
  return (
    <p className={s.mytask}>{props.task} {props.part}</p>
  )
}
