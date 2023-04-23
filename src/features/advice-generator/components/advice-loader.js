import React from 'react';
import '../index.css'
import FadeLoader from "react-spinners/FadeLoader";
const AdviceLoader = () => {
    return (
        <div className="text-white flex justify-center items-center space-x-2 text-center">

           <FadeLoader color={'#52FFA8'} className={'text-[#52FFA8] w-10 h-10'} />
            <span>Loading</span>
        </div>
    );
};

export default AdviceLoader;