import UserFeed from "../Views/UserFeed";
import { useEffect, useState, useCallback} from "react";
import { fetchAllBusinessesFromDatabase } from "../Utils/DatabaseManager";
import UserFeedGrid from "../Views/UserFeedGrid";

export default function UserFeedViewController() {
    const [businesses, setBusinessesCards] = useState();
    const [filter, setFilter] = useState(null)
    useEffect(() => {
        async function fetchBusinesses () {
            var fetched_business = null;
            if (filter === null) {
                fetched_business = await fetchAllBusinessesFromDatabase();
            } 
            else {
                //need to know all filters y'all thinking about
            }
            const businessCards = fetched_business.map(business => {
                if (business === null) {
                    return null
                }
                return (<UserFeedGrid businessName={business.getName()} />);
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