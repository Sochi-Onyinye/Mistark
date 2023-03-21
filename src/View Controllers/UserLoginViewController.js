import {React, useCallback} from "react";
import UserLoginView from '../Views/UserLoginView.jsx'

export default function UserLoginViewController() {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
    })

    const handle

    return (
    <UserLoginView onSubmit={handle}>

    </UserLoginView>)

}