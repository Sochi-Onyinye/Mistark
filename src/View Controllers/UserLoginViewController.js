import {React, useCallback, useState} from "react";
import UserLoginView from '../Views/UserLoginView.jsx'
import { emailValidator, signIn } from "../Utils/AuthenticationManager.js"; 
import { useNavigate } from "react-router-dom";

export default function UserLoginViewController() {
    const [input, setInput] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState(null)
    let navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const formSubmitter = async (e) => {
        console.log("clicked")
		e.preventDefault();
        const {isUserSignedIn, user, error} = await signIn(input.email, input.password)
        if (isUserSignedIn) { 
            navigate(`/userfeed`);
        }
        else {
            setErrorMessage(error.message);
        }
	};
    return (
    <UserLoginView errorMessage={errorMessage} onSubmit={formSubmitter} handleChange={handleChange}/>)
}