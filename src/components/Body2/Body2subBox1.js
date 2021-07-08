import './Body2subBox1.css'
import react, { Fragment } from 'react';
import thirdimage from '../../images/3rd.jpg'
const Body2subBox1 = () => {
    return (
        <div className="Body2subBox1">
            <div className="Body2subBox1div1">
                <img src={thirdimage}></img>
            </div>
            <div className="Body2subBox1div2">
                <h3>HICODER</h3>
                <h1><span>We help students learn</span></h1>
                <h1>
                    Full Stack Development.</h1>
                <p>HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.</p>
            </div>
        </div>
    )
}

export default Body2subBox1;