"use client"

import classes from './image-picker.module.css'
import { useRef, useState } from 'react'
import Image from 'next/image'

export default function ImagePicker({label, name}) {
	const [pickedImage, setPickedImage] = useState(null)
	const imageInputRef = useRef()
	
	const handlePickClick = () => {
		imageInputRef.current.click();
	}
	
	const handleImageChange = (e) => {
		const file = e.target.files[0]
		
		if(!file) {
			setPickedImage(null);
			return;
		}
		
		const fileReader = new FileReader()
		fileReader.onload = () => setPickedImage(fileReader.result)
		fileReader.readAsDataURL(file)
	}
	
	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p>No image selected yet</p>}
					{pickedImage && <Image src={pickedImage} alt="Preview" fill />}
				</div>
				<input required className={classes.input} type="file" id="image" accept={"image/jpeg, image/png"} name={name} ref={imageInputRef} onChange={handleImageChange} />
				<button className={classes.button} type="button" onClick={handlePickClick}>Select image</button>
			</div>
		</div>
	)
}
