import React, { useState } from 'react'

export default function Form({addCard}) {

    const onClick = (e) => {
        e.preventDefault()
        const course = {
            id: Date.now(),
            name: e.target.title.value ,
            parts: [...parts]
        }

        addCard(course)
        setParts([])
        e.target.title.value = ''

    }

    const addInput = (event) => {
        event.preventDefault()
        setParts([...parts, {
            id: Date.now(),
            name: "",
            tasks: ""
          }])
    }

    const [parts, setParts] = useState([])

    const changeTasks = (e, findId) => {
        const target = parts.find(({id})=> findId===id)
        target.tasks = +e.target.value
    }

    const changeName = (e, findId) => {

        const target = parts.find(({id})=> findId===id)
        target.name = e.target.value

    }

  return (
    <div>
        <form onSubmit={(e) => onClick(e)}>

            <input type="text" name='title' placeholder='title'/>
            <button type='text' onClick={(event) => addInput(event)}>add parts</button>

            {parts.map(({id}, index) => (
                <div key={id}>
                    <input onChange={(e) => changeTasks(e, id)} type="number" placeholder={`tasks ${index+1}`}/>
                    <input onChange={(e) => changeName(e, id)} type="text" placeholder={`name ${index+1}`}/>
                </div>
            ) )}
            
            <input type="submit"/>
        </form>
    </div>
  )
}
