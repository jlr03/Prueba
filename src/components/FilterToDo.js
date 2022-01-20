import React, { useState, useEffect} from 'react';

function FilterToDo() {

    let componentMounted = true;
    const [comCat, setComCat] = useState([]);

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
            <h1>prueba api</h1>
        </>
    )
}

export default FilterToDo;
