import React from 'react';
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import {components} from "../../utils";

const Index = () => {
    return (
        <Layout>
        <div className={'w-full  max-w-screen-lg mx-auto text-left flex flex-col justify-start space-y-10'}>
            <div className={'w-full max-w-screen-lg mx-auto  text-left flex flex-col space-y-10'}>
                <span className={'text-4xl'}>Components</span>
                <div className={'grid gap-5'} style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))"}}>
                    {components.map((item,index)=><Card key={index} {...item}/>)}
                </div>

            </div>

        </div>
        </Layout>
    );
};

export default Index;

export const Head = () => <title>Components</title>
