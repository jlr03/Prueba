## Incovenientes durante la prueba

Durante el desarrollo de la prueba tuve incovenientes con la API que solicitaban para el desarrollo de la prueba: https://catfact.ninja/docs .\
Intenté obtener los datos usando fetch pero me lanzaba un error por problemas de CORS, probé instalando una extensión de google, Moesif CORS, pero no dio solución.\
También le agregué un codigo al fetch para habilitar los permisos del CORS pero apareció un nuevo error sobre un EndPoint el cual no pude solucionar.\
El codigo usado para obtener los datos de la API se encuentra en el componente FilterToDo.

## Funciones

El aplicativo agrega, edita y elimina las actividades ingresadas.\
Muestra las actividades pendientes y realizadas.\
Busca las actividades por descripción.\
Para marcar una actividad como realizada se debe dar click en la descricpión.
