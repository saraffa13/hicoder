import './Body2subBox2.css'
import react, { Fragment } from 'react';
import fourthimage from '../../images/4th.jpg'
import Button from '../UI/Button'
const Body2subBox2 = () => {
    return (
        <div className="Body2subBox2">
            <div className="Body2subBox2div2">
                {/* <h3>HICODER</h3> */}
                <h1>Trained on the most in-demand Technology Skills</h1>
                {/* <h1>Full Stack Development.</h1> */}
                <p>HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.</p>
                <p>End to End Project Analysis, Design & Development</p>
                <p>Authentication, Geo Tracking, Payment Gateway</p>
                <p>Analytics, SEO, Data Representation, Industry Standards</p>
                <p>Max Pro Resume, Soft Skills, Client Expectation Management</p>
                <Button className="Body2subBox2div1button">APPLY NOW</Button>
            </div>
    
            <div className="Body2subBox2div1">
                <img src={fourthimage}></img>
            </div>
        </div>
    )
}

export default Body2subBox2;