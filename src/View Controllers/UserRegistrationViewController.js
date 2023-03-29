import {React, useCallback, useState} from "react";
import { emailValidator, signUp, confirmSignUp} from "../Utils/AuthenticationManager.js"; 
import { useNavigate } from "react-router-dom";
import UserRegistrationView from '../Views/UserRegistrationView.jsx'
import {v4 as genID} from 'uuid';
import User from '../Models/User.js'
import UserLoginView from "../Views/UserLoginView.jsx";
import UserLoginViewController from "../View Controllers/UserLoginViewController.js"

export default function UserRegistrationViewController({navigation}) {
    const [input, setInput] = useState({ email: '', password: '', firstName:'', lastName:'', dob:'', phoneNumber:'' });
    const [errorMessage, setErrorMessage] = useState('')
    let navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const formSubmitter = async (e) => {
        e.preventDefault();
        console.log(input)
        const user = new User(genID(), input.firstName, input.lastName,input.email, input.password, input.dob, input.phoneNumber);
        const signedUpUser = await signUp(user)
        if (signedUpUser) { 
            navigate(`/VerifyRegistration/${user.getEmail()}`);
        }
        else {
            setErrorMessage(signedUpUser)
        }
	};

    return (<UserRegistrationView onSubmit={formSubmitter} handleChange={handleChange}/>)
}
