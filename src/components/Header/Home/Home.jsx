import { Link } from 'react-router-dom'
import './Home.css'
import 'animate.css';

export const Home = ({img}) =>{
    return(
        <article className="container">
            <div className='main'>
                <h1 className="main__title animate__animated animate__flipInX">Welcome To My Page</h1>
                <img src={img} alt="Main_Image " className='main__image animate__animated animate__jackInTheBox'/>
                <div className="main__buttons">
                    <Link className='main__links main__links--add animate__animated animate__backInRight' to="/form">Add User</Link>
                    <Link className='main__links main__links--see animate__animated animate__backInRight' to="/users">See All Users</Link>
                </div>
            </div>
        </article>
    )
}