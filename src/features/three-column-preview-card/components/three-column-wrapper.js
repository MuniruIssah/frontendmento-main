import React from 'react';
import {threeColumnItems} from "../utils";
import ThreeColumnCard from "./three-column-card";

const ThreeColumnWrapper = () => {
    return (
        <div className={'max-w-4xl grid rounded overflow-hidden '} style={{gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))'}}>
            {threeColumnItems.map((item,index)=><ThreeColumnCard {...item} key={index} />)}
        </div>
    );
};

export default ThreeColumnWrapper;