//{}[]
import React, {Component} from 'react';
import data from '../helpers/data.json';

function ElementoLista (props){
    return(

        <li>
            <a href={props.el.web}>{props.el.name}</a>
            </li>
    )




}


export default class RenderizadoElementos extends Component{
    constructor(props){
super(props);

this.state={ seasons:['verano','otoño','invierno','primavera'],};


}
    render(){
        return(
            <div>
                <h3>Renderizado de elementos</h3>
                <h3>Estaciones del año</h3>
                <ol>{this.state.seasons.map((el)=>(<li>{el}</li>))}</ol>

                <h3>Frameworks frontend</h3>
                <ul>
                
                {data.frameworks.map((el,index)=>(<ElementoLista key ={index} el={el}/>))}

                </ul>
            </div>
        )




}


}
