import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react/cjs/react.development';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {TiEdit} from 'react-icons/ti'
import AddToDo from './AddToDo';

function ListToDo({list, completeTodo, removeItem, updateList, act}) {

    const [edit, setEdit]=useState({
        id: null,
        value:''
    })
  
  const submitUpdate=(value)=>{
      updateList(edit.id, value)
      setEdit({
        id: null,
        value:''})
  }

  if(edit.id){
      return <AddToDo edit={edit} onSubmit={submitUpdate}/>
  }

  return(
        
       list.filter((list)=>{
           if(act == ""){
               return list
           }
           else if(list.text.toLowerCase().includes(act.toLowerCase())){
               return list
           }
       }).map((list, index)=>(
                
          <div className={list.isComplete ? 'container todo-row complete' : 'container todo-row'} key={index}>

                <div key={list.id} onClick={()=>completeTodo(list.id)}>{list.text}</div>


                <div className="icons">
                <AiOutlineCloseCircle onClick={()=>removeItem(list.id)} className='delete-icon'/>
                <TiEdit onClick={()=>setEdit({id:list.id, value:list.text})} className='edit-icon'/>

                </div>
            </div>
       ))
       
       /* list.map((list, index)=>(
        <div className={list.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

            <div key={list.id} onClick={()=>completeTodo(list.id)}>{list.text}</div>

        
        <div className="icons">
           <AiOutlineCloseCircle onClick={()=>removeItem(list.id)} className='delete-icon'/>
           <TiEdit onClick={()=>setEdit({id:list.id, value:list.text})} className='edit-icon'/>

        </div>
       </div>
       )) */


  )
}

export default ListToDo;
