import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Membro from './Membro'

export default props => { 
return (
   <>
   <Text style={estilo.txtG}>Membros da Família</Text>
      {props.children}
   </>
)}