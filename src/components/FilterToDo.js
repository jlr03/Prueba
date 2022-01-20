import React, { useState, useEffect} from 'react';

function FilterToDo() {

    let componentMounted = true;
    const [comCat, setComCat] = useState([]);

    /* const componentDidMount=()=>{
        fetch("https://catfact.ninja/docs")
        .then(response => console.log(response))
    }

    useEffect(()=>{


    }) */
    
    /* useEffect(() => {
    
        obtenerD()

    }, []);

    const obtenerD = async ()=>{
        const data = await fetch('https://catfact.ninja/docs', {'mode':'no-cors',
                                                                'headers':{
                                                                             'Access-Control-Allow-Origin': '*',
                                                                          }})
        const gatos = await data.json()
        console.log(gatos)
    }
 */

    /* , {'mode':'no-cors',
                                                                        'headers':{
                                                                                    'Access-Control-Allow-Origin': '*',
                                                                                  }}
 */
    useEffect(() => {
        const getProducts = async () => {

            const response = await fetch('https://catfact.ninja/docs', 
                                         {'mode':'no-cors', 'headers':{
                                                        'Access-Control-Allow-Origin': '*',
                                                        'Access-Control-Allow-Credentials' : true 
                                                    }})
            if (componentMounted) {
                setComCat(await response.clone().json());
                
            }

            return () => {
                componentMounted = false;
            };
        };

        getProducts();
    }, []);

    console.log(comCat); 
    return (
        <>
           {/*  <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Buscar por Texto</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
            </div>
            <br />
            <br /> */}

            <h1>prueba api</h1>


        </>
    )
}

export default FilterToDo;
