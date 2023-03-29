import { Navigate, useParams } from "react-router-dom";
import {useState} from "react";
import {resendConfirmationCode, confirmSignUp, signIn } from "../Utils/AuthenticationManager.js"; 
import VerifyRegistrationView from "../Views/VerifyRegistrationView.jsx";

export default function VerifyRegistrationViewController() {
    const [validationCode, setValidationCode] = useState('')
    let params = useParams();

    const onVerify = async (e) => {
        e.preventDefault();
        let isConfirmed = confirmSignUp(params.username, validationCode)
        if (isConfirmed) {
            Navigate(`/registrationsucces`)
        } else {

        }
};

return (<VerifyRegistrationView/>)
}