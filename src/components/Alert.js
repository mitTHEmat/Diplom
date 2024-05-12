import React, {useEffect} from 'react';

function Alert ({setAlert, alert})
{
	useEffect (() =>
	{
		let timer = setTimeout (() =>
		{
			setAlert ({show: false})
		}, 4000);

		return () =>
		{
			clearTimeout (timer);
		};

	}, [alert]);


	return (
		<div className={(alert.type === "error") ? "alert error" : (alert.type === "success") ? "alert success" : "alert"}>
			<div className="alert__wrapper">
				<div className="alert__title"><strong>{alert.title}</strong></div>
				<div className="alert__message">{alert.message}</div>
				<a className="alert__close" onClick={()=> setAlert ({show: false})}></a>
			</div>
		</div>
	);
}


export default Alert
