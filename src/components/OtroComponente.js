//{}[]

import React from 'react';

export default function OtroComponente(props){

return (
<div>
<ul>
    
    
    <li>{props.numero}</li>
    <li>{props.booleano ? 'soy consequencia de un booleano' : 'en todo caso soy un booleano'}</li>
 
    <li>{props.otroString}</li>
    <li>{props.array.join(',')}</li>
     <li>{props.objeto.enunciado + ' ' + props.objeto.nombre + ' - ' + props.objeto.apellido +' - ' + props.objeto.email}</li>
</ul>
</div>
);
}

//OtroComponente.defaultProps={titulo:'soy un default props'}