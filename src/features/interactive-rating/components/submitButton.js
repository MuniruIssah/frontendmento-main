import React from 'react';

const SubmitButton = ({submit}) => {
    return (
        <button type={'button'} onClick={submit} className={'w-full py-3 uppercase text-sm md:text-base text-white bg-[#FB7413] rounded-3xl  hover:text-[#FB7413] hover:bg-white transition-all ease-in-out'}>
            Submit
        </button>
    );
};

export default SubmitButton;