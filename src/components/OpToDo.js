import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddToDo from './AddToDo';
import ListToDo from './ListToDo';


function OpToDo() {

    const [list, setList] = useState([])
    const [act, setAct] = useState("")

    const addList = (e) => {
        if (!e.text || /^\s*$/.test(e.text)) {
            return;
        }

        const newList = [e, ...list]
        setList(newList)
        console.log(...list)
    }

    const updateList = (listId, nValue) => {
        if (!nValue.text || /^\s*$/.test(nValue.text)) {
            return;
        }

        setList(pv => pv.map(it => (it.id === listId ? nValue : it)))
    }


    const removeItem = (id) => {
        const removeIt = [...list].filter(e => e.id !== id)

        setList(removeIt)
    }


    const completeTodo = (id) => {
        let updateList = list.map(e => {
            if (e.id === id) {
                e.isComplete = !e.isComplete
            }

            return e
        })

        setList(updateList)
    }

    return (
        <>

            <h1 className="text-center">Lista de Tareas</h1>
            <AddToDo onSubmit={addList} />
            <div className="container">
                <input type="text" className="form-control act" placeholder="Buscar una actividad..." onChange={e => { setAct(e.target.value) }}></input>
            </div>
            <ListToDo list={list} completeTodo={completeTodo} removeItem={removeItem} updateList={updateList} act={act} />

        </>


    )
}

export default OpToDo;
