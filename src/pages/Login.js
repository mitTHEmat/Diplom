import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

import FormWindow  from "../components/FormWindow";
import '../styles.css';

import Alert from "../components/Alert";
import { Input } from "../components/UI/Inputs";



function Login() 
{
	let navigate = useNavigate ();
	
	const [isAuthorized, setIsAuthorized] = useState (false);

	const [alert, setAlert] = useState ({});
	const [errors, setErrors] = useState ({});
	const [errorMessage, setErrorMessage] = useState("");
	const [formValues, setFormValues] = useState({});

	useEffect(() =>
		{
			if (isAuthorized)
			{
				return navigate ("/extranet");
			}
	}, [isAuthorized]);


	function sendRequest()
	{
		console.log('hi')
	}

	return <>
	{!isAuthorized ? <> 
		<FormWindow title={"Вход"} show={true} onSubmit={sendRequest} size={"s"} shadow={true}>
		
			{errorMessage? <span className="errorMessage">{errorMessage}</span> : null}
			
			<Input required
				title = {"Логин"}
				type = {"email"}
				name = {"login"}
				errors = {errors}
				value = {formValues}
				setValue = {setFormValues}
			/>

			<Input required
				title = {"Пароль"}
				name = {"password"}
				type = {"password"}
				errors = {errors}
				value = {formValues}
				setValue = {setFormValues}
			/>
		
			<button type={"submit"}>Войти</button>
		
		</FormWindow> 
	</> : null}
	{/* {alert.show ? <Alert setAlert={setAlert} alert={alert}/> : ""} */}
</>
}


export default Login;