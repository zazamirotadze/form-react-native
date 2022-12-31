import React, { useState } from 'react';
import {  View,  StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import colors from './components/colors';
import Popup from './components/Popup';
import ImgsContainer from './components/ImgsContainer';
import SubmitBtn from './components/SubmitBtn';
import Inputs from './components/Inputs';


export default function ImagePickerExample() {
  const [images, setImages] = useState([])
  const [errors, setErrors] = useState({
    imageError: false,
    titleError:false,
    priceError:false,
    categoiryError:false,
    DescriptionError:false,
  })
  const [formData, setFormData] = useState({
    title:"",
    price:"", 
    category:"",
    description:""
  })
  const [idToRemove, setIdToRemove] = useState("")
  const [isPopUpShown, setIsPopUpShown] = useState(false)
  const [yesIsClicked, setYesIsClicked] = useState(false)
  const [noIsClicked, setNoIsClicked] = useState(false)
  
 
  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setErrors((prevErrors => { return {...prevErrors, imageError:false} }    ))
      setImages(prevImages => 
        [
          ...prevImages, 
          {
            id:result.assets[0].uri ,
            source:{uri: result.assets[0].uri } 
          }
        ] 
      )
    }
  };

  const submitData = () =>{
    // check image input
    if(images.length===0){
      setErrors((prevErrors => { return {...prevErrors, imageError:true} }    ))
    }else if(images.length !==0){ setErrors((prevErrors => { return {...prevErrors, imageError:false} }    )) }
    //
    // check title input
    if(formData.title===""){
      setErrors((prevErrors => { return {...prevErrors, titleError:true} }    ))
    }else if(formData.title!==""){  setErrors((prevErrors => { return {...prevErrors, titleError:false} }    ))  }
    //
    // check title input
    if(formData.price===""){
      setErrors((prevErrors => { return {...prevErrors, priceError:true} }    ))
    }else if(formData.price!==""){  setErrors((prevErrors => { return {...prevErrors, priceError:false} }    ))  }
    //
    // check title input
    if(formData.category===""){
      setErrors((prevErrors => { return {...prevErrors, categoiryError:true} }    ))
    }else if(formData.category!==""){  setErrors((prevErrors => { return {...prevErrors, categoiryError:false} }    ))  }
    //
    // check title input
    if(formData.description===""){
      setErrors((prevErrors => { return {...prevErrors, DescriptionError:true} }    ))
    }else if(formData.description!==""){  setErrors((prevErrors => { return {...prevErrors, DescriptionError:false} }    ))  }
    //
  
    //submit data

    if(images.length>0 &&  formData.title &&  formData.price &&  formData.category &&  formData.description){
      alert("data is submited")
      setTimeout(() => {
        setImages([])
        setErrors({
          imageError: false,
          titleError:false,
          priceError:false,
          categoiryError:false,
          DescriptionError:false,
        })
        setFormData({
          title:"",
          price:"", 
          category:"",
          description:""
        })
      }, 100);
    }
  

    //
  } 

  const showPopup = (id) =>{
    setIdToRemove(id)
    setIsPopUpShown(true)
  }
  const removeImage = () =>{
    setYesIsClicked(true)
    setTimeout(() => {
      setIsPopUpShown(false)
      setImages(prevImages => {
        const filteredImage = prevImages.filter(element => element.id !== idToRemove) 
        return filteredImage
      })
      setYesIsClicked(false)
    }, 100);

  }

  return (
  
        <View style={styles.container}>
          <Popup  
            removeImage={removeImage} 
            isPopUpShown={isPopUpShown}
            setIsPopUpShown={setIsPopUpShown}
            yesIsClicked={yesIsClicked}
            noIsClicked={noIsClicked}
            setNoIsClicked={setNoIsClicked}
            
          />
          <ImgsContainer 
            images={images} 
            showPopup={showPopup}
            pickImage={pickImage}
            errors={errors}
          />
          <Inputs
            errors={errors}
            formData={formData}
            setFormData={setFormData}
          />
          <SubmitBtn submitData={submitData}/>
        </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    paddingTop:24,
    backgroundColor: colors.white
  },
  scrollView: {
    position:"absolute",
    zIndex:-100
  }
});


