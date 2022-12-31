import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import colors from "./colors";

const Inputs = ({errors, formData, setFormData}) => {
    
    
  return (
    <SafeAreaView style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={formData.title}
        onChangeText={(text)=>setFormData((prevObject) => {return { ...prevObject, title: text }})}
      />
      { errors.titleError && <Text style={styles.text} >Title is a required field</Text>}
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={formData.price}
        onChangeText={(text)=>setFormData((prevObject) => {return { ...prevObject, price: text }})}
      />
       { errors.priceError &&<Text style={styles.text} >Price is a required field</Text>}
    <TextInput
        style={styles.input}
        placeholder="Categoy"
        value={formData.category}
        onChangeText={(text)=>setFormData((prevObject) => {return { ...prevObject, category: text }})}
      />
      { errors.categoiryError &&<Text style={styles.text} >Category is a required field</Text>}
    <TextInput
        style={styles.input}
        placeholder="Description"
        value={formData.description}
        onChangeText={(text)=>setFormData((prevObject) => {return { ...prevObject, description: text }})}
      />
      { errors.DescriptionError && <Text style={styles.text} >Desctiption is a required field</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop:15,
    borderWidth: 1,
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:20,
    borderRadius:40,
    fontSize:20,
    backgroundColor:colors.gray,
    borderColor:colors.gray,
    width:"98%",
    marginLeft:3
  },
  inputContainer:{
    width:"92%",
    marginTop:5
  },
  text:{
    color:colors.red,
    fontWeight: "bold",
    marginTop:10
  }
});

export default Inputs;