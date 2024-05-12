import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
						<li>
							<Link to={"/login"}><div>Выйти</div></Link>
						</li>
						<li>
							<Link to={"/login"}><div>Войти</div></Link>
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