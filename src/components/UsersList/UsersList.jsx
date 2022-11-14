import { useContext, useState } from 'react'
import './UserList.css'
import UserContext from '../../context/UserContext'


export const UserList = () =>{
    const [usersReducer  , dispatch] = useContext(UserContext)
    /*
    const getFetchi = async () => {
      const url = "http://localhost:5000/tasks";
      const res = await fetch(url, {                //This is a call to api to can use a database.
        mode: "no-cors",
      });
      const json = await res.json();
      return json;
    };
    */
    
   /* Then  we use a useeffect
   
    useEffect(() =>{
        const usersList =getFetchi()
        setUserList(useList)
    })

   */
  
    const [showInput , setShowInput ] = useState(false)
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')

  
    return(
        <article className='container'>
            <div className='list'>
            {
                usersReducer?.map((user , index) => <div className={`list__card animate__animated animate__backInDown }`} key={user.id}>
                    <p className="list__item"><span className='list__item--bold'>Name:</span> {user.name}</p>
                    <p className="list__item"><span className='list__item--bold'>Email:</span> {user.email}</p>
                    <div className='list__buttons'>
                        <button className='list__button list__button--remove' onClick={()=> dispatch({
                            type:"remove" ,
                            payload:user.id    
                        })}>Remove</button>
                       <button onClick={()=> setShowInput(!showInput)}  className='list__button list__button--edit'>{
                        showInput ? 'X' : 'Edit'
                       }</button>
                     
                    </div>
     
                    <div className='list__update'>
                        <input   onChange={(e) => setName(e.target.value)} className={showInput ? 'input__show' : 'input__hide'} type="text" placeholder='New Name:' />
                        <input onChange={(e) => setEmail(e.target.value)} className={showInput ? 'input__show' : 'input__hide'} type="text" placeholder='New Email:' />
                    </div>
                    <button  onMouseDown={() =>  dispatch({
                        type: 'update',
                        payload: {"id": user.id , "name": name , "email" : email}
                    }) } className={showInput ? 'button_active ' : 'button_hide'} onClick={() => setShowInput(false)}>✔</button>
           
                </div>)
            }
            </div>
        </article>
    )   
}