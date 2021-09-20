import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'
import produtos from './produtos'

export default props => { 

// return (
//     <>
//    <Text style={Estilo.txtG}>
//        Lista de Produtos V2
//    </Text>
//     <FlatList 
//         data={produtos} 
//         renderItem={({item:p})=>{
//             return <Text>{p.id} {p.nome}</Text>
//         }}
//         keyExtractor={i=>i.id} 
//     />
//    </>
// )}

const produtoRender = ({item : p }) => {
    return <Text>{p.id} {p.nome}</Text>
}

return (
    <>
   <Text style={Estilo.txtG}>
       Lista de Produtos V2
   </Text>
    <FlatList 
        data={produtos} 
        renderItem={produtoRender}
        keyExtractor={i=>i.id} 
    />
   </>
)}