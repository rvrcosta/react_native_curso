import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo'

function Aleatorio (props){
    const delta = props.max - props.min + 1
    const aleatorio = parseInt(Math.random() * delta) + props.min
    return (
        <Text style={Estilo.txtG}>O valor aleatório é {aleatorio}</Text>
    )
}

// function Aleatorio (props){
//     const {min,max} = props
//     const delta = max - min + 1
//     const aleatorio = parseInt(Math.random() * delta) + min
//     return (
//         <Text style={Estilo.txtG}>O valor aleatório é {aleatorio}</Text>
//     )
// }

// function Aleatorio ({min,max}){    
//     const delta = max - min + 1
//     const aleatorio = parseInt(Math.random() * delta) + min
//     return (
//         <Text style={Estilo.txtG}>O valor aleatório é {aleatorio}</Text>
//     )

// }

export default Aleatorio
