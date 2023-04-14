import { useEffect, useState, useCallback} from "react";
import { fetchAllBusinessesFromDatabase } from "../Utils/DatabaseManager.js";
import UserFeed from "../Views/UserFeed.jsx";
import { useNavigate } from "react-router-dom";
import UserFeedGridItem from "../Views/UserFeedGridItem.jsx";


export default function UserFeedViewController() {
    let navigate = useNavigate();
    const [businessesCards, setBusinessesCards] = useState();
    const [filter, setFilter] = useState(null);
    const [subFilter, setSubFilter] =  useState(null);
    useEffect(() => {
        async function fetchBusinesses () {
            var fetched_businesses = null;
            if (filter === null) {
                fetched_businesses = await fetchAllBusinessesFromDatabase();
            } 
            else if (filter === "Near me") {
                // fetched_business = await ;
            }
            else if (filter === 'category') {

                // iterate through map categories
            }

            const businessCards = fetched_businesses.map(business => {
                if (business === null) {
                    return null
                }
                return (<UserFeedGridItem businessName={business.getName()} profileImage={business.getProfileImage()} onClick={()=>onClickOnBusinessCard(business)}/>);
            });
            setBusinessesCards(businessCards) 
        }
        fetchBusinesses();
    }, [filter])

    const onClickOnBusinessCard = useCallback(
        (business) => {
        navigate(`/business/${business.getID()}`);
    },[])

return (<UserFeed businessCards={businessesCards} onChangeFilter={setFilter} ></UserFeed>)
}