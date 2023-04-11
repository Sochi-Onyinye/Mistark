import BusinessPage from "../Views/BusinessPage";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBusinessesFromDatabase } from "../Utils/DatabaseManager";
export default function BusinessPageController() {
    let params = useParams();
    const businessID = params.businessID;
    useEffect(async () => {
        const response = await fetchBusinessesFromDatabase(businessID)
        const business = response.data.item[0]
    }, [])

    return (<BusinessPage/>)
}