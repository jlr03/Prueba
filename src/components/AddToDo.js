import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AddToDo(props) {
  const [add, setAdd] = useState(props.edit ? props.edit.value : '');
  const [num, setNum]= useState('');
  const [com, setCom] = useState([]);

  let componentMounted = true;
  let comenF="";

  useEffect(() => {
    const getProducts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')

      if (componentMounted) {
        setCom(await response.clone().json());
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);


  for (let i = 0; i < num; i++) {

    let v = Math.floor(Math.random() * (100 - 1 + 1) + 1)
    
    com.map(function (it) {

      if (it.id == v) {
          comenF = comenF+"\n"+it.title
      }
    })
  }
            
  const handleChange = (e) => {
    setAdd(e.target.value);
  }
  
  const handleChange2=(e)=>{
    
    setNum(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: add+""+comenF
    })
    
    console.log(add+""+comenF)
    setAdd('')
    setNum('')
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
                        <label class="form-label">Editar una actividad</label>
                        <input type="text"
                          value={add}
                          className="form-control"
                          onChange={handleChange}
                        />
                    </div>
                    <div className="col">
                       <button type="submit" className="btn btn-success" id="button-addon2" style={{marginTop:'32px'}}>Actualizar</button>
                    </div>
                </div>
              </div>
            </>) :
          (
            <>
              <div className="container">
                  <div className="row">
                      <div className="col">
                          <label class="form-label">Escribe una nueva actividad</label>
                          <input type="text"
                            value={add}
                            className="form-control"
                            onChange={handleChange}
                          />
                      </div>
                      <div className="col">
                          <label class="form-label">Indique el número de frases que desea</label>
                          <input type="number"
                            value={num}
                            className="form-control"
                            onChange={handleChange2}
                            style={{width:"120px"}}
                          />
                      </div>
                  </div>
                  <br></br>
                  <div className="row">
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
