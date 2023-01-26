import React from 'react'

export default function Total(props) {
  return (
    <p className='total'>Общее кол-во задач: № - <span>{props.count}</span></p>
  )
}
