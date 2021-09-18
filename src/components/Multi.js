import React from "react"
import { Text } from 'react-native'

import Estilo from './estilo'

// export default function Comp(){        
//     return <Text>Texto 1</Text>    
// }

// export function Comp1(){
//     return <Text>Texto 2</Text>    
// }

// export function Comp2(){
//     return <Text>Texto 3</Text>    
// }


function Comp(){        
    return <Text style={Estilo.txtG}>Texto 1</Text>    
}

function Comp1(){
    return <Text style={Estilo.txtG}>Texto 2</Text>    
}

function Comp2(){
    return <Text style={Estilo.txtG}>Texto 3</Text>    
}

export {Comp1,Comp2}
export default Comp