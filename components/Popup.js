import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import colors from './colors'




const Popup = ({removeImage, isPopUpShown, setIsPopUpShown, yesIsClicked, noIsClicked, setNoIsClicked }) => {

  return (
    <>{isPopUpShown && 
    <>
      <View style={styles.overlay}></View>
      <View style={styles.popup}>
          <View style={styles.textContainer}>
            <Text style={styles.delete}>Delete</Text>
            <Text style={styles.question}>Are you sure you want to delete this image?</Text>
          </View>
        <View style={styles.btnContainer} >
          <TouchableWithoutFeedback  onPress={()=>removeImage()}>
            <Text style={ yesIsClicked? styles.yesBtnClicked : styles.yesBtn}>Yes</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback  
            onPress={()=>{
              setNoIsClicked(true)
              setTimeout(() => {
                setIsPopUpShown(false)
                setNoIsClicked(false)
              }, 100);
            }}>
            <Text style={ noIsClicked? styles.noBtnClicked : styles.noBtn} >No</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </>
    }</>
  )
}
export default Popup


const styles = StyleSheet.create({
  overlay:{
    width: "100%",
    height: "200%",
    opacity:0.6,
    backgroundColor: colors.gray,
    position:"absolute",
    top:0,
    left:0,
    zIndex: 1,
    
  },
  popup:{
    backgroundColor: colors.white,
    zIndex: 2,
    position: "absolute",
    top:"50%",
    borderRadius:10,
    paddingTop:20,
    width:"70%"
  },
  delete:{
    fontWeight:"bold",
    textAlign:"center",
    fontSize:20
  },
  question:{
    textAlign:"center",
    fontSize:15,
    
  },
  btnContainer:{
    flexDirection:"row",
    marginTop:40,
  },
  textContainer:{
    alignSelf:"center",
    width:"80%"
  },
  noBtn:{
    width:"50%",
    paddingTop:15,
    paddingBottom:15,
    fontSize:20,
    color:"cyan",
    textAlign:"center",
    borderTopWidth:1,
    borderLeftWidth:0.5,
    borderColor:"#CCCCCC",
    backgroundColor: colors.white,
    borderBottomRightRadius:10
    
  },
  yesBtn:{
    width:"50%",
    paddingTop:15,
    paddingBottom:15,
    fontSize:20,
    color:"cyan",
    textAlign:"center",
    borderTopWidth:1,
    borderLeftWidth:0.5,
    borderColor:"#CCCCCC",
    backgroundColor: colors.white,
    borderBottomLeftRadius:10
  },
  noBtnClicked:{
    width:"50%",
    paddingTop:15,
    paddingBottom:15,
    fontSize:20,
    color:"cyan",
    textAlign:"center",
    borderRightWidth:0.5,
    borderColor:"#CCCCCC",
    borderTopWidth:1,
    backgroundColor: "#CCCCCC",
    borderBottomRightRadius:10
  },
  yesBtnClicked:{
    width:"50%",
    paddingTop:15,
    paddingBottom:15,
    fontSize:20,
    color:"cyan",
    textAlign:"center",
    borderRightWidth:0.5,
    borderColor:"#CCCCCC",
    borderTopWidth:1,
    backgroundColor: colors.gray,
    borderBottomLeftRadius:10
  }
})