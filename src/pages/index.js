import * as React from "react"
import Layout from "../components/Layout";
import { Link} from 'gatsby'


export default function IndexPage() {
    return (
        <Layout>
            <h1 className="text-4xl font-medium">
               Frontend Mentor Challenges
            </h1>
            <span className={'font-light'}>by <a href={'https://github.com/MuniruIssah'} target={'_blank'} rel="noreferrer">Issah Muniru</a></span>
            <div className={'grid grid-cols-2 gap-12'}>
                <Link to={'/components'} className="mcards components">
                    <figure className="mcard">
                        <figcaption className="mcard_title">Components</figcaption>
                    </figure>
                </Link>
                <Link to={'/pages'} className="mcards ">
                    <figure className="mcard pages">
                        <figcaption className="mcard_title">Pages</figcaption>
                    </figure>
                </Link>
            </div>

        </Layout>
    )
}

export const Head = () => <title>Home Page</title>


