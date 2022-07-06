import { Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native'
import React, { Component } from 'react'
import { getRegister } from './controllers/controllers'

export function SubmitNavigationButtom(props){

  return(
    <View>
      <TouchableOpacity disabled={props.valid} style={styles.button} onPress={
        ()=>{
          console.log(props.send)
          getRegister(props.send).then(response=> console.log(response)).then(props.navigation.navigate(props.dir, {name:props.dir})) 
          }}>
            <Text style={styles.text}>{props.text}</Text>
         </TouchableOpacity>
    </View>
  )
}

export function NormalNavigationButtom(props){
  return(
    <View>
      <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate(props.dir, {name:props.dir})}>
            <Text style={styles.text}>{props.text}</Text>
         </TouchableOpacity>
    </View>
  )
}


export default class CustomButtoms extends Component {
  render() {
    return (
      <View>
         <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate(this.props.dir, {name:this.props.dir})}>
            <Text style={styles.text}>{this.props.text}</Text>
         </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'purple',
        paddingVertical: 15,
        borderRadius: 40,
        margin: 10,
      },
    text:{
        textAlign:'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})