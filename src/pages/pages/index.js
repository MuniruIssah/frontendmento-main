import React from 'react';
import Layout from "../../components/Layout";
import {pages} from "../../utils";
import Card from "../../components/Card";

const Index = () => {
    return (
        <Layout>
            <div className={'w-full max-w-screen-lg mx-auto  text-left flex flex-col space-y-10'}>
                <span className={'text-4xl'}>Pages</span>
                <div className={'grid gap-5'} style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))"}}>
                    {/**/}
                    {pages.length>0?
                        <>{pages.map((item,index)=><Card key={index} {...item}/>)}</>:
                    <>
                        <span className={'text-xl'}>Sorry, There are no pages here yet.</span>
                    </>}
                </div>

            </div>
        </Layout>
    );
};

export default Index;

export const Head = () => <title>Pages</title>
