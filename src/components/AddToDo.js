import React, { useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AddToDo(props) {
  const[add, setAdd]=useState(props.edit ? props.edit.value : ''); 

  // const inputRef = useRef(null)

  // useEffect(()=>{
  //   inputRef.current.focus()
  // })

  const handleChange=(e)=>{
    setAdd(e.target.value);
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random()*1000),
      text: add
    })

    setAdd('')
  }

  return (
    <>
      <div className="container">
        <h1>Prueba</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Titulo</label>
            {props.edit ? 
                            (
                            <>
                            <input type="text" 
                            value={add} 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            onChange={handleChange} 
                            /> {/*ref={inputRef}*/}
                            
                            <button type="submit" className="btn btn-primary">Actualizar</button>
                            </>) :
                            (
                            <>
                            <input type="text" 
                            value={add} 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            onChange={handleChange} 
                            />
                            
                            <button type="submit" className="btn btn-primary">Agregar</button>
                            </>)
                          }
            
  
          </div>
          {/* <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Descripcion</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div> */}
          {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
          
        </form>
      </div>

    </>
  )
}

export default AddToDo;
