import React, { useState } from "react"

export default function FormWindow (props)
{
	function handleSubmit (e)
	{
		e.preventDefault ()

		let data = []
		for (let element of e.target.elements)
		{
			console.log(element)
			if (element.nodeName == "INPUT" || element.nodeName == "SELECT" || element.nodeName == "TEXTAREA")
			{
				if (element.type == "checkbox")
				{
					data.push({
						name:element.name,
						value:element.checked,
						files: element.files
					})
				} else
				{
					data.push({
						name:element.name,
						value:element.value,
						files: element.files
					})
				}
			}
		}

		props.onSubmit(data)
	}

	function show ()
	{
		if (props.setShow)
		{

			props.setShow(false)
		}
	}

	return <>
		{props.show?
		<>
			<div className="shadowLayer"  style={props.shadow? null : {display: "none"}} onClick={()=> {show()}}></div>
			<div className={props.size == "xl" ? "formWindow xl" : props.size == "l" ? "formWindow l" : "formWindow s"}>
				<div className="formWindow__wrapper">
					<div className="formWindow__title">{props.title}</div>
					{props.canClose ? <div className="formWindow__close" onClick={()=> {show()}}></div> : ""}
					<form onSubmit={handleSubmit}>
						{props.children}
					</form>
				</div>
			</div>
		</> : null}
	</>
}