import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddToDo from './AddToDo';
import ListToDo from './ListToDo';
//import SearchList from './SearchList';


function OpToDo() {

    const [list, setList] = useState([])
    const [act, setAct]=useState("")

    const addList = (e) => {
        if(!e.text || /^\s*$/.test(e.text)){
            return;
        }

        const newList = [e, ...list]
        setList(newList)
        console.log(...list)
    }

    const updateList=(listId, nValue)=>{
        if(!nValue.text || /^\s*$/.test(nValue.text)){
            return;
        }

        setList(pv=>pv.map(it=>(it.id === listId ? nValue:it)))
    }


    const removeItem=(id)=>{
        const removeIt = [...list].filter(e => e.id !== id)

        setList(removeIt)
    }


    const completeTodo =(id)=>{
        let updateList = list.map(e=>{
            if(e.id === id){
                e.isComplete = !e.isComplete
            }

            return e
        })

        setList(updateList)
    }

    return (
        <>
            
            <h1 className="text-center">Lista de Tareas</h1>
            <AddToDo onSubmit={addList}/>
            <div className="container">
                <input type="text" className="form-control act" placeholder="Buscar una actividad..." onChange={e=>{setAct(e.target.value)}}></input>
            </div>
            <ListToDo list={list} completeTodo={completeTodo} removeItem={removeItem} updateList={updateList} act={act}/>
            
            
            {/* <div className="container">
                <div className="card text-dark bg-light mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Light card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div> */}


        </>


    )
}

export default OpToDo;
