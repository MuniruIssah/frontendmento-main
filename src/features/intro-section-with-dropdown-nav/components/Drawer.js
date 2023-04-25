import React from 'react';
import ReactModal from 'react-modal'
import closeIcon from '../images/icon-close-menu.svg'
import '../index.css'
import {DropdownLow} from "./Dropdown";
import {company, features} from "./Header";

const Drawer = ({show,close}) => {
    return (
        <ReactModal
            isOpen={show}
            contentLabel="Minimal Modal Example"
            style={drawerStyles}
        >

            <button onClick={close} className={'self-end'}>
                <img src={closeIcon} alt="close" className=""/>
            </button>
            <div className={'w-full flex flex-col space-y-5 items-start text-left text-[18px] mt-6'}>
                <DropdownLow title={'Features'} content={features} />
                <DropdownLow title={'Company'} content={company} />
                <span className="btn ternary text-xl font-medium">Careers</span>
                <span className="btn ternary text-xl font-medium">About</span>
            </div>
            <div className={'w-full flex flex-col items-stretch text-xl mt-10 space-y-4'}>
                <button className="btn ternary font-medium">Login</button>
                <button className="btn secondary text-xl rounded-2xl font-medium">Register</button>
            </div>
        </ReactModal>
    );
};

export default Drawer;


const drawerStyles={
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        width:'70vw',
        marginLeft:'auto',
        border: '1px solid #ccc',
        background: '#FAFAFA',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
        padding: '20px',
        display:'flex',
        flexDirection:'column'
    }
}