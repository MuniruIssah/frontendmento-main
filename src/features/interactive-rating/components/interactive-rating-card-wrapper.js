import React from 'react';

const InteractiveRatingCardWrapper = ({children}) => {
    return (
        <div className={'w-full max-w-sm rounded-2xl md:rounded-3xl bg-gradient-to-b from-[#252D37] to-[#181B1E] p-6  md:p-7 '}>
            {children}
        </div>
    );
};

export default InteractiveRatingCardWrapper;