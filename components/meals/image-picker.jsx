'use client'
import styles from "./image-picker.module.css"
import { useState,useRef } from "react"
import Image from "next/image"
const ImagePicker = ({label,name}) => {
  const [pickedImage,setPickedImage]=useState()
  const imageInputRef=useRef();
  function handlePickCLick(){
    imageInputRef.current.click()
  }
  function handleImageChange(event){
    const file=event.target.files[0]
    if(!file){
      setPickedImage(null)
      return
    }
    const fileReader=new FileReader()
    fileReader.onload=()=>{
      setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file);
   

  }
  return (
    <>
    <div className={styles.picker}>
        <label htmlFor={name}>{label} </label>
        <div className={styles.controls}>
          <div className={styles.preview}>
            {!pickedImage && <p>No image Selected yet</p>}

            {pickedImage && <Image src={pickedImage} alt='user selected image' fill></Image>}
          </div>
        <input 
        className={styles.input}
        type='file'
         id={name}
        accept='image/png,image/jpeg'
        name={name} 
        ref={imageInputRef}
        onChange={handleImageChange}
        />
        <button className={styles.button} type='button' onClick={handlePickCLick}>Pick An Image</button>
        </div>
    </div>
    </>
    
  )
}

export default ImagePicker