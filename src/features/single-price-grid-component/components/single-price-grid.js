import React from 'react';

const SinglePriceGrid = () => {
    return (
        <main className={'max-w-2xl mx-auto rounded-xl grid md:grid-cols-2 overflow-hidden'}>
            <section className={'bg-white md:col-span-2 p-12 flex flex-col gap-5'}>
                <h4 className={'text-xl md:text-2xl font-bold text-[#2AB2AF]'}>Join our community</h4>
                <div className="flex flex-col gap-3">
                    <h5 className={'md:text-lg font-bold text-[#C0DF34]'}>30-day, hassle-free money back guarantee</h5>
                    <p className={'text-sm md:text-base text-[#98A6BD] leading-7'}>Gain access to our full library of tutorials along with expert code reviews.
                        Perfect for any developers who are serious about honing their skills.</p>
                </div>

            </section>
            <div className={'bg-[#2AB2AF] text-white p-12 flex flex-col gap-4'}>
                    <h4 className={'text-lg'}>Monthly Subscription</h4>
                    <div className={'flex gap-3 items-center'}>
                        <span className={'text-3xl font-bold'}>$29</span>
                        <span className={'opacity-60 font-light'}>per month</span>
                    </div>
                    <span className={'font-light'}>Full access for less than $1 a day</span>
                    <button className={'py-3 bg-[#C0DF34] rounded-md shadow hover:shadow-md hover:scale-105 transition-all ease-in-out'}>Sign Up</button>
                </div>
                <div className={'bg-[#2AB2AF]/80 p-12 text-white flex flex-col gap-4'}>
                    <h4 className={'text-lg'}>Why Us</h4>
                    <div className={'flex flex-col text-sm opacity-75'}>
                        <span>Tutorials by industry experts</span>
                        <span>Peer & expert code review</span>
                       <span> Coding exercises</span>
                        <span>Access to our GitHub repos</span>
                       <span> Community forum</span>
                       <span> Flashcard decks</span>
                        <span>New videos every week</span>
                    </div>
                </div>
        </main>
    );
};

export default SinglePriceGrid;