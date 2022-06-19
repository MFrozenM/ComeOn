import React, {useEffect} from 'react';
import classes from './categories.module.css'
import Divider from "../divider/divider";
import {useApiGet} from "../../../hooks/useApiGet";
import CategoryItem from "./categoryItem";
import {useCachedData} from "../stores/fetchedDataCache";
import {GamesApis} from "../../../apis/gamesApi";

const Categories = () => {
    const filterGamesById = useCachedData((state) => state.filterGamesById)
    const setActiveCategory = useCachedData((state) => state.setActiveCategory)
    const activeCategory = useCachedData((state) => state.activeCategory)
    const setCategories = useCachedData((state) => state.setCategories)
    const categories = useCachedData((state) => state.categories)

    const {loading, data, error} = useApiGet(GamesApis.Categories)

    useEffect(() => {
        data !== null && setCategories(data);
    }, [data])

    useEffect(() => {
        filterGamesById(activeCategory)
    }, [activeCategory])

    const renderCategoryItems = () => {
        return categories.map((category, index) => {
            return <>
                <CategoryItem key={category.id} active={activeCategory === category.id}
                              setCurrentSelected={setActiveCategory} {...category}/>
            </>
        })
    };

    if (loading) {
        return "Loading"
    }

    if (error) {
        return "Error in categories"
    }

    return (
        <div className={classes.container}>
            <span className={classes.title}>Categories</span>
            <Divider marginBottom={"40px"} marginTop={"20px"}/>

            <div data-testid="category-wrapper" className={classes.categories_list}>
                {renderCategoryItems()}
            </div>
        </div>
    );
};

export default Categories;
