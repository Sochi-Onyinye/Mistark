import UserFeed from "../Views/UserFeed";
import { useEffect, useState, useCallback} from "react";
import { fetchAllBusinessesFromDatabase } from "../Utils/DatabaseManager";
import UserFeedGrid from "../Views/UserFeedGrid";
import { UserFeedGridItem } from "../Views/UserFeedGridItem";

export default function UserFeedViewController() {
    const [businesses, setBusinessesCards] = useState();
    const [filter, setFilter] = useState(null)
    const [subFilter, setSubFilter] =  useState(null)
    useEffect(() => {
        async function fetchBusinesses () {
            var fetched_business = null;
            if (filter === null) {
                fetched_business = await fetchAllBusinessesFromDatabase();
            } 
            else if (filter === "near me") {
                // fetched_business = await ;
            }
            else if (filter === 'category') {

                // iterate through map categories
            }

            const businessCards = fetched_business.map(business => {
                if (business === null) {
                    return null
                }
                return (<UserFeedGridItem businessName={business.getName()} profileImage={business.getProfileImage} onClick={onClickOnBusinessCard}/>);
            });
            setBusinessesCards(businessCards) 
        }
        fetchBusinesses();
    }, [filter])

    const onClickOnBusinessCard = useCallback(
        (business) => {
        navigate(`/businesses:${business.getID()}`);
    },[])

return (<UserFeed onChangeFilter={setFilter} ></UserFeed>)
}