import React from 'react';
import classes from './categoryItem.module.css'

const CategoryItem = ({id, active, setCurrentSelected, name}) => {
    const onCategorySelect = () => {
        setCurrentSelected(id)
    };

    return (
        <span data-testid={`category-${id}`} onClick={onCategorySelect} className={classes.title} style={{color: active && "#8db40d"}}>
            {name}
        </span>
    );
};

export default CategoryItem;
