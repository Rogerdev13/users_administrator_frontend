import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import './Form.css'
import { handleForm } from '../../functions/form'
import 'animate.css'

export const Form = ({title , buttoncontent , exit=''}) =>{

    const [userReducer , dispatch] = useContext(UserContext)
    console.log(userReducer)
    const [send , setSend] = useState(false)

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const id = new Date()

    const showError = () =>{
        alert('Vegano filled all the fields ')
    }

    return(
        <div className='container '>
            <Link className='form__back animate__animated animate__fadeInUp' to={`/${exit}`}>Get Back</Link>
            <div className={send ? 'form__send form__message--show'  : 'form__send form__message'}>User Created Succesfully</div>

            <div className='form'>
                <h2 className='form__title animate__animated animate__fadeInUp'>{title}</h2>
            <form onSubmit={handleForm}  className='form__form animate__animated animate__fadeInRight'>
                    <div className='form__group'>
                        <label className='form__label'  htmlFor="form_user">Name User:</label>
                        <input onChange={(e)=> setName(e.target.value)} id="form_user" className='form__control'  type="text" placeholder='Name user:' />
                    </div>
                    <div className='form__group'>
                        <label className='form__label' htmlFor="form__email">Email User:</label>
                        <input onChange={(e)=> setEmail(e.target.value)} id="form__email" className='form__control' type="text" placeholder='Email user:' />
                    </div>
                    
                   
                    <button onMouseDown={()=> name && email ? setSend(true) : setSend(false)}  className='form__submit' onClick={()=> name && email ? dispatch({ 
                            type:"add" ,
                            payload:{"id": id , "name" : name , "email": email}   
                        }) : showError()}>{buttoncontent}</button>
                </form> 
            </div>
        </div>
    )
}