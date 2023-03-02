import React, { useState } from 'react'
import { useEffect } from 'react'
import s from './style.module.css'

export default function Form({dataAction ,data, buttonName}) {


    const [parts, setParts] = useState([])
    const [title, setTitle] = useState('')
  

    const onClick = (e) => {
        e.preventDefault()
        const course = {
            id: Date.now(),
            name: title,
            parts: [...parts]
        }

        dataAction(course)
        setParts([])
        setTitle('')

    }

    const addInput = (event) => {
        event.preventDefault()
        setParts([...parts, {
            id: Date.now(),
            name: "",
            tasks: ""
          }])
    }

    const deleteInput = (event) => {
        event.preventDefault()
        const target = parts.filter((_, index) => index!==parts.length-1)
        setParts(target)
    }


    const changeTasks = (e, findId) => {
        const newParts = [...parts]

        const target = newParts.find(({id})=> findId===id)
        target.tasks = +e.target.value

        setParts(newParts)
    }

    const changeName = (e, findId) => {
        const newParts = [...parts]

        const target = newParts.find(({id})=> findId===id)
        target.name = e.target.value

        setParts(newParts)
    }


    useEffect(() => {
        if(data){
            setTitle(data.name)
            setParts(data.parts)
        }
    },[])
   

  return (
    <div>
        <form className={s.form} onSubmit={(e) => onClick(e)}>

            
            <div  className={s.input_box}>
                <input 
                    className={s.title}
                    type="text" 
                    name='title' 
                    placeholder='title' 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button 
                    className={s.delete_part}
                    type='text' 
                    onClick={(event) => deleteInput(event)}>delete part
                </button>
                <button 
                    className={s.add_part}
                    type='text' 
                    onClick={(event) => addInput(event)}>add part
                </button>
            </div>    

            {parts.map(({id}, index) => (
                <div className={s.input_box} key={id}>
                    
                    <input 
                        onChange={(e) => changeTasks(e, id)} 
                        type="number" 
                        placeholder={`tasks ${index+1}`}
                        value={`${parts[index].tasks}`}
                    />

                    <input 
                        onChange={(e) => {
                            changeName(e, id)
                            
                        }} 
                        type="text" 
                        placeholder={`name ${index+1}`}
                        value={`${parts[index].name}`}
                    />

                </div>
            ) )}
            
            <button className={s.submit} type='text'>{buttonName ? buttonName: 'Create new card'}</button>
            
        </form>
    </div>
  )
}
