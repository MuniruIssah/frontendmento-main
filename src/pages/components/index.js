import React from 'react';
import Layout from "../../components/Layout";

const Index = () => {
    return (
        <Layout>
        <div className={'w-full  max-w-screen-lg mx-auto text-left flex flex-col justify-start space-y-10'}>
            <div className={'w-full max-w-screen-lg mx-auto  text-left flex flex-col space-y-10'}>
                <span className={'text-4xl'}>Components</span>
                <div className={'grid gap-5'} style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))"}}>
                    {new Array(5).fill(0).map((item,index)=><div className={'h-52 bg-gray-400 rounded'} key={index}></div>)}

                </div>

            </div>

        </div>
        </Layout>
    );
};

export default Index;

export const Head = () => <title>Components</title>
