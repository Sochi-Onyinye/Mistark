import {React, useState, useCallback, useEffect} from "react";
import LandingPage from "../Views/LandingPage.jsx";
import { fetchAllBusinessesCategoriesFromDatabase } from "../Utils/DatabaseManager.js";
import { CategoryGridItem } from "../Views/CategoryGridItem.jsx";
import { useNavigate } from "react-router-dom";

export default function LandingPageViewController() {
    const [categoryCards, setCategoryCards] = useState();
    let navigate = useNavigate();
    const onClickOnCategoryCard = useCallback(
        (category) => {
        navigate(`/category:${category.getID()}`);
    },[navigate])
    useEffect(() => {
        fetchAllBusinessesCategoriesFromDatabase().then((category) => {
        const categoryCards = category.map(category => {
            if (category === null) {
                return null
            }
            return (<CategoryGridItem title={category.getName()} subtitle={category.getDescription()} onClick={()=>onClickOnCategoryCard(category)}></CategoryGridItem>)
        })
        setCategoryCards(categoryCards) 
        })
    },[])

    return (<LandingPage categories={categoryCards} />)
