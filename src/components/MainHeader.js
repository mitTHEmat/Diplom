import { useEffect, useState } from "react";
import "../styles.css";

function MainHeader() 
{

	const [showDropdown, setShowDropdown] = useState(false);

	useEffect(()=>{
		console.log(showDropdown)
	},[showDropdown])

	return <div className="main__header">
		<div className="main__header-content">
			<div className="main__header-burgerMenu">
				
			</div>
			<div className="main__header-programTag">Имя приложения</div>
			<div className="main__header-authGroup">
				<div className="main__header-userName">
					<span onClick={()=>setShowDropdown(!showDropdown)}>Имя пользователя</span>
					{ showDropdown && 
					<ul className="main__header-userName-menu">
						<li onClick={()=>console.log('Выход')}>
							<div>Выйти</div>
						</li>
						<li onClick={()=>console.log('Вход')}>
							<div>Войти</div>
						</li>
					</ul>}
				</div>
				<div className="main__header-avatar">

				</div>
			</div>
		</div>
	</div>
}


export default MainHeader;