import * as React from 'react'
import { Link} from 'gatsby'
import {useState} from "react";
import Loader from "./loader";

const Layout = ({children }) => {
    const [loading,setLoading]=useState(true)

    React.useEffect(()=>{
        setTimeout(function() { //Start the timer
            setLoading(false)
        }, 2000)
    },[])

    if(loading) return <Loader/>
    return (
        <div className={'App'}>
            <nav className='w-full flex justify-end p-5'>
                <ul className={'flex items-center space-x-5'}>
                    <li className={''}>
                        <Link to="/" className={''}>
                            Home
                        </Link>
                    </li>
                    <li className={''}>
                        <Link to="/components" className={''}>
                            Components
                        </Link>
                    </li>
                    <li className={''}>
                        <Link to="/pages" className={''}>
                            Pages
                        </Link>
                    </li>
                </ul>
            </nav>
            <main className={'min-h-[80vh] w-full flex flex-col items-center justify-center space-y-10'}>
                {children}
            </main>
        </div>
    )
}

export default Layout