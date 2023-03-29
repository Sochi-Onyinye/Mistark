import {React, useCallback, useState} from "react";
import UserLoginView from '../Views/UserLoginView.jsx'
import { emailValidator, signIn } from "../Utils/AuthenticationManager.js"; 
import { useNavigate } from "react-router-dom";

export default function UserLoginViewController() {
    const [input, setInput] = useState({ email: '', password: '' });
    let navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const formSubmitter = async (e) => {
		e.preventDefault();
		// if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');
        const signedIn = await signIn(input.email, input.password)
        if (signedIn) { 
            navigate(`/userfeed`);
        }
        else {
        }
	};
    return (
    <UserLoginView onSubmit={formSubmitter} handleChange={handleChange}/>)
}