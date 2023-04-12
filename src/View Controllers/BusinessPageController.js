import BusinessPage from "../Views/BusinessPage.jsx";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBusinessesFromDatabase } from "../Utils/DatabaseManager.js";

export default function BusinessPageController() {
    let params = useParams();
    const businessID = params.businessID;
    let reviews = null
    let services = null
    let businessInfo = null;

    useEffect(() => { async function fetchBusiness() {
        const response = await fetchBusinessesFromDatabase(businessID)
        businessInfo = response.data.getBusiness;
        reviews = businessInfo.reviews
        services = businessInfo.services
    }  
    fetchBusiness()
    }, [])
    if (businessInfo !== null) {


    }
    return (<BusinessPage/>)
}