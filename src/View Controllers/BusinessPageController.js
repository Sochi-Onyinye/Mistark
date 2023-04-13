import BusinessPage from "../Views/BusinessPage.jsx";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBusinessesFromDatabase, createBusinessesFromDatabaseMap,  getS3urlFromFileName } from "../Utils/DatabaseManager.js";
import ServiceGridItem from "../Views/ServiceGridItem.jsx";

export default function BusinessPageController() {
  let params = useParams();
  const [reviewsCards, setReviewCards] = useState(null)
  const [serviceCards, setServiceCards] = useState(null)
  const [business, setBusiness]   = useState(null)
  useEffect(() => {
    console.log("useEffect")
    async function fetchBusiness () {
      const response = await fetchBusinessesFromDatabase(params.businessID);
      console.log(response)
      const businessInfo = response.data.getBusiness;
      const business = await createBusinessesFromDatabaseMap([businessInfo])
      setBusiness(business)
      if (businessInfo !== null) {
        const reviewsCards = businessInfo.reviews.items.map((review) => {
          if (review === null) {
            return null;
          }
          return review
        });
        setReviewCards(reviewsCards)
        console.log(businessInfo)
        const serviceCards = await Promise.all(businessInfo.services.items.map(async(service) => {
          if (service === null) {
            return null;
          }

          let imageUrl = await getS3urlFromFileName(service.image)
          return <ServiceGridItem serviceName={service.title} serviceImage={imageUrl} serviceDescription={service.description}/>
        }));
        console.log(serviceCards)
        setServiceCards(serviceCards)

      }
    }
    fetchBusiness();
  },[]);

  return <BusinessPage business={business?business[0]:null} reviews={reviewsCards} serviceCards={serviceCards} />;
}
