import {Navigate} from 'react-router-dom'
import { useAuth } from './firebase';


  const ProtectedOne = () => {

    const currentUser = useAuth()

   if(!currentUser){
      return (<Navigate to='/register'/>)
   }else{
    (<Navigate to={'/'}/>)
   }
    
}

export default ProtectedOne;