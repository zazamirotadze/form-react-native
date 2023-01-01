import React from 'react'
import { TouchableWithoutFeedback, View, StyleSheet, Text } from 'react-native'
import colors from './colors'

const SubmitBtn = ({submitData}) => {
  return (
    <TouchableWithoutFeedback onPress={()=>{
     
      submitData() 
      } 
    }>
        <View style={styles.postBtn}><Text style={styles.btnText}>POST</Text></View>
    </TouchableWithoutFeedback>
  )
}

export default SubmitBtn


const styles = StyleSheet.create({
  postBtn:{
    backgroundColor:colors.red,
    width:"90%",
    height:70,
    borderRadius:40,
    justifyContent:"center",
    alignItems:"center",
    marginTop:25,
    alignSelf:"center"
  },
  btnText:{
    color:colors.white,
    fontSize:20,
    fontWeight:"bold"
  }
  
})