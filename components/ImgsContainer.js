import React from 'react'
import { View, TouchableWithoutFeedback, Image, StyleSheet, Text, ScrollView } from 'react-native'
import colors from './colors'
const LogoImage = require('../assets/camera.png')


const ImgsContainer = ({images,showPopup, pickImage, errors}) => {

  return (
    <View style={{ width:"100%", maxHeight:200}}>
      <ScrollView   >
        <View style={styles.imgsContainer}>
                {images.map((imageEl)=>
                  <TouchableWithoutFeedback key={imageEl.id}  onPress={()=>showPopup(imageEl.id)}>
                    <Image style={styles.image} source={imageEl.source}/> 
                  </TouchableWithoutFeedback> )}
                <View >
                  <TouchableWithoutFeedback onPress={pickImage}>
                    <Image source={LogoImage} style={styles.image}   />
                  </TouchableWithoutFeedback>
                  { errors.imageError && <Text style={styles.text} >Please select at least one image</Text>} 
                </View>
          </View>
        </ScrollView>
        </View>
  )
}

export default ImgsContainer

const styles = StyleSheet.create({
    imgsContainer:{
        alignSelf:"center",
        width:"90%",
        flexDirection: "row",
        flexWrap:"wrap",
    },
    image:{
      margin:4,
      width: 83, 
      height: 83,
      borderRadius:10
    },
    text:{
      color: colors.red,
      fontWeight:"bold"
    }
  
  })

  