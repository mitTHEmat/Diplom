import "../styles.css";

function MainHeader() 
{
	return <div className="main__header">
		<div className="main__header-programTag">Имя приложения</div>
		<div className="main__header-authGroup">
			<div className="main__header-userName">Имя пользователя</div>
			<div className="main__header-avatar">Аватар</div>
		</div>
	</div>
}


export default MainHeader;