import { useNavigate, useParams } from "react-router-dom";
import {useState} from "react";
import {resendConfirmationCode, confirmSignUp, signIn } from "../Utils/AuthenticationManager.js"; 
import EmailConfirmation from "../Views/EmailConfirmation.jsx";

export default function EmailConfirmationController() {
    let navigate = useNavigate();
    let params = useParams();
    const [error, setError] = useState()
    const [validationCode, setValidationCode] = useState('')
    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setValidationCode(e.target.value);
    }

    const onVerify = async (e) => {
        e.preventDefault();
        const {isSignUpConfirmed, error} = await confirmSignUp(params.username, validationCode)
        if (isSignUpConfirmed) {
            navigate(`/registrationsuccess`)
        } else {
            console.log(error)
            setError(error)
        }
};

return (<EmailConfirmation email={params.username} onVerify={onVerify} handleChange={handleChange}/>)
}