import {React, useCallback, useState} from "react";
import { emailValidator, signUp, confirmSignUp} from "../Utils/AuthenticationManager.js"; 
import { useNavigate } from "react-router-dom";
import UserRegistration from '../Views/UserRegistration.jsx'
import {v4 as genID} from 'uuid';
import User from '../Models/User.js'
import UserLoginView from "../Views/UserLoginView.jsx";
import UserLoginViewController from "../View Controllers/UserLoginViewController.js"

export default function UserRegistrationViewController() {
    const [input, setInput] = useState({ email: '', password: '', firstName:'', lastName:'', dob:'', phoneNumber:'' });
    const [errorMessage, setErrorMessage] = useState(null)
    let navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const formSubmitter = async (e) => {
        e.preventDefault();
        console.log(input)
        const newUser = new User(genID(), input.firstName, input.lastName,input.email, input.password, input.dob, input.phoneNumber);
        const {isUserCreated, user, error}= await signUp(newUser);

        if (isUserCreated) { 
            navigate(`/emailconfirmation/${newUser.getEmail()}`);
        }
        else {
            setErrorMessage(error.message)
        }
	};

    return (<UserRegistration errorMessage={errorMessage} onSubmit={formSubmitter} handleChange={handleChange}/>)
}
