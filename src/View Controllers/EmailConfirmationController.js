import { useNavigate, useParams } from "react-router-dom";
import {useState} from "react";
import {resendConfirmationCode, confirmSignUp, signIn } from "../Utils/AuthenticationManager.js"; 
import EmailConfirmation from "../Views/EmailConfirmation.jsx";

export default function EmailConfirmationController() {
    let navigate = useNavigate();
    let params = useParams();
    const [errorMessage, setErrorMessage] = useState(null)
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
                setErrorMessage(error.message)
        }
};

return (<EmailConfirmation errorMessage={errorMessage} email={params.username} onVerify={onVerify} handleChange={handleChange}/>)
}