import { NavLink , Link} from 'react-router-dom'
import './Header.css' 

export const  Header =  () =>{
    return(
        <header>
            <div className='container'>
                <h3 className='logo'><Link to="/">RogerDev</Link></h3>
                <nav className="nav">
                    <li className="nav__item"><NavLink className={({isActive}) => isActive ? "nav__link--active" : "nav__link" } to="/">Home</NavLink></li>
                    <li className="nav__item"><NavLink className={({isActive}) => isActive ? "nav__link--active" : "nav__link" } to="/form">New User</NavLink></li>
                    <li className="nav__item"><NavLink className={({isActive}) => isActive ? "nav__link--active" : "nav__link" } to="/users">All Users</NavLink></li>
                </nav>
            </div>
        </header>
    )
}