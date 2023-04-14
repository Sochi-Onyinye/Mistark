import BusinessLoginView from "../Views/BusinessLoginView.jsx";
import {React, useCallback, useState} from "react";
import UserLoginView from '../Views/UserLoginView.jsx'
import { emailValidator, signIn } from "../Utils/AuthenticationManager.js"; 
import { useNavigate } from "react-router-dom";


export default function BusinessLoginViewController() {
    const [input, setInput] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState(null)
    let navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    
    const formSubmitter = async (e) => {
        e.preventDefault();
        const {isUserSignedIn, user, error} = await signIn(input.email, input.password)
        if (isUserSignedIn) { 
            navigate(`/business/${24}`);
         }
        else {
            setErrorMessage(error.message);
    }
};

return (
    <BusinessLoginView errorMessage={errorMessage} onSubmit={formSubmitter} handleChange={handleChange}/>)

}