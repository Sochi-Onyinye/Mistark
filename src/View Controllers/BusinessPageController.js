import BusinessPage from "../Views/BusinessPage.jsx";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBusinessesFromDatabase } from "../Utils/DatabaseManager.js";

export default function BusinessPageController() {
  let params = useParams();
  const [reviewsCards, setReviewCards] = useState(null)
  const [serviceCards, setServiceCards] = useState(null)
  
  useEffect(() => {
    async function fetchBusiness() {
      const response = await fetchBusinessesFromDatabase(params.businessID);
      const businessInfo = response.data.getBusiness;
      reviews = 
      if (businessInfo !== null) {
        const reviewsCards = businessInfo.reviews.map((review) => {
          if (review === null) {
            return null;
          }
          //grid for review card
        });
        setReviewCards(reviewsCards)
        const servicesCards = businessInfo.services.map((service) => {
          if (service === null) {
            return null;
          }
          //service cards
        });
        setServiceCards(serviceCards)
      }
    }
    fetchBusiness();
  }, []);
  return <BusinessPage businessInfo={businessInfo} reviews={reviewsCards} serviceCards={serviceCards} />;
}
