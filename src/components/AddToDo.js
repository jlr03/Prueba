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
        <form onSubmit={handleSubmit} className="py-5 container">
            {props.edit ?
              (
                <>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <input type="text"
                          value={add}
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col">
                        <button type="submit" className="btn btn-success" id="button-addon2">Actualizar</button>
                      </div>
                    </div>
                  </div>

                </>) :
              (
                <>
                  <div className="container">
                    <div className="row">
                        <div className="col">
                            <input type="text"
                              value={add}
                              className="form-control"
                              placeholder="Agregar una actividad"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col">
                            <button type="submit" className="btn btn-primary" id="button-addon2">Agregar</button>
                          </div>

                        </div>
                  </div>
                </>)
            }

        </form>

    </>
  )
}

export default AddToDo;
