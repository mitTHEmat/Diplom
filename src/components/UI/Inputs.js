import React, { useState, useEffect } from "react"

export function Input (props)
{
	
	return <>
		<label className={props.type == "checkbox" ? "checkbox" : ""}>
			<span className="title">{props.title} {props.required? <span className="required">*</span> : null}</span>
				<div className="itemWrapper">
					<input className={props.errors[props.name] && props.errors[props.name].length > 0 ? "item error" : "item"} 
							readOnly = {props.readonly} autocomplete = {props.autocomplete} 
							type={props.type} placeholder={props.placeholder} name={props.name} 
							value={props.value[props.name]} defaultChecked={props.value[props.name]} 
							onChange={(e) => {props.value[props.name] = props.type == "checkbox" ? e.target.checked : e.target.value; props.setValue({...props.value})}}/>
				</div>
				{props.errors[props.name]? 
					<> 
					{props.errors[props.name].map(
						(error) => 
						<><span className="error">{error}</span><br/></>
						) 
					} 
					</>
					: null
				}
		</label>
	</>
}

export function FileInput (props)
{
	
	return <>
		<label>
			<span className="title">{props.title} {props.required? <span className="required">*</span> : null}</span>
				<div className="itemWrapper">
					<input className={props.errors[props.name]? "item error" : "item"} 
							readOnly = {props.readonly} autocomplete = {props.autocomplete} 
							type={'file'} placeholder={props.placeholder} name={props.name} 
							value={props.value} defaultChecked={props.value} 
							onChange={(e) => {props.setValue(e.target.files[0])}}/>
				</div>
			{props.errors[props.name]? 
			<> 
			{props.errors[props.name].map(
				(error) => 
				<><span className="error">{error}</span><br/></>
				) 
			} 
			</>
			: null}
		</label>
	</>
}

// export function SimpleInput (props)
// {
// 	useEffect (() =>
// 	{
// 		if (props.value)
// 		{
// 			setValue (props.value)
// 		}
// 		else
// 		{
// 			setValue ("")
// 		}
// 	}, [props])

// 	useEffect (() => {
// 		if (props.errors) {
// 			setErrors (props.errors)
// 		}
// 	}, [props])

// 	const [value, setValue] = useState ()
// 	const [errors, setErrors] = useState ([])
// 	return <>
// 		<label className={props.type == "checkbox" ? "checkbox" : ""}>
// 			<span className="title">{props.title} {props.required? <span className="required">*</span> : null}</span>
// 				<div className="itemWrapper">
// 					{props.numeric
// 						?	<input className={errors[props.name]? "item error" : "item"} 
// 								readOnly = {props.readonly} autocomplete = {props.autocomplete} 
// 								type={props.type} placeholder={props.placeholder} 
// 								name={props.name} value={value} defaultChecked={props.value} 
// 								onChange={(e) => {setValue(e.target.value), props.exportValue(e.target.value)}}
// 								onInput={(e) => {e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0')}}
// 								/> 
// 						:	<input className={errors[props.name]? "item error" : "item"} 
// 								readOnly = {props.readonly} autocomplete = {props.autocomplete} 
// 								type={props.type} placeholder={props.placeholder} 
// 								name={props.name} value={value} defaultChecked={props.value} accept = {props.accept} 
// 								onChange={(e) => {setValue(e.target.value), props.exportValue(e.target.value)}}
// 								/>
// 					}
// 				</div>
// 			{errors[props.name]? <span className="error">{errors[props.name]}</span> : null}
// 		</label>
// 	</>
// }


// (\d+)°(\d+)'(\d+(?:\.\d+)?)\s
export function GeoInput (props)
{
	useEffect (() =>
	{
		if (props.value)
		{
			setValue (props.value)
		}
		else
		{
			setValue ("")
		}
	}, [props])

	useEffect (() => {
		if (props.errors) {
			setErrors (props.errors)
		}
	}, [props])

	const [value, setValue] = useState ('')
	const [errors, setErrors] = useState ([])

	const mask = `__°__'____"`

	function formatValue (e)
	{
		let state ='';
		let newString = e.target.value;
		for(let i in newString)
		{
			if(newString[i].match(/\d/))
			{
				state += newString[i];
			}
		}

		var degree = state.slice(0,2),
       		minute = state.slice(2,4),
        	second = state.slice(4,8);

		if (degree) degree += '°';
		if (minute) minute += "'";
		if (second) second += '"';

		console.log( [degree, minute, second].join(' '))

		setValue([degree, minute, second].join(' '));
	}	

	
	return <>
		<label className={props.type == "checkbox" ? "checkbox" : ""}>
			<span className="title">{props.title} {props.required? <span className="required">*</span> : null}</span>
				<div className="itemWrapper">
					<input type="text" name="latlon" onChange={(e)=>{formatValue(e)}} value={value}/>
				</div>
			{errors[props.name]? <span className="error">{errors[props.name]}</span> : null}
		</label>
	</>
}


export function TextArea (props)
{
	return <>
		<label>
			<span className="title">{props.title} {props.required? <span className="required">*</span> : null}</span>
				<div className="itemWrapper">
					<textarea className={props.errors[props.name]? "item error" : "item"} 
					placeholder={props.placeholder} 
					name={props.name} 
					value={props.value[props.name]} 
					onChange={(e) => {props.value[props.name] = e.target.value; props.setValue({...props.value})}}/>
				</div>
			{props.errors[props.name]? <span className="error">{props.errors[props.name]}</span> : null}
		</label>
	</>
}

