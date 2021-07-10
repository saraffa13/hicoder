import './Body4.css'
import Cardss from '../UI/Cardss';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagea from '../../images/a.png'
import imageb from '../../images/b.png'
import imagec from '../../images/c.png'
import imaged from '../../images/d.png'
import imagee from '../../images/e.png'
import imagef from '../../images/f.png'
import imageg from '../../images/g.png'
import imageh from '../../images/h.png'
const Body4 = () =>{
    return (
        <div className="Body4">
            <div className="Body4div1">
                <h id="Body4div1h">WHAT YOU LEARN</h>
                <h1 id="Black">at HiCoder is useful</h1>
                <h1 id="Blue">Technology, Management & more</h1>
            </div>
            <div className="Body4div2">
                <Cardss title="Front End" image={imagea} para="Students learn to design, develope the UI following UX with industry standards."></Cardss>
                <Cardss title="Front End" image={imageb} para="Students learn to design, develope the UI following UX with industry standards."></Cardss>
                <Cardss title="Front End" image={imagec} para="Students learn to design, develope the UI following UX with industry standards."></Cardss>
                {/* <Cardss title="Front End" image={imaged} para="Students learn to design, develope the UI following UX with industry standards."></Cardss>
                <Cardss title="Front End" image={imagee} para="Students learn to design, develope the UI following UX with industry standards."></Cardss>
                <Cardss title="Front End" image={imagef} para="Students learn to design, develope the UI following UX with industry standards."></Cardss>
                <Cardss title="Front End" image={imageg} para="Students learn to design, develope the UI following UX with industry standards."></Cardss>
                <Cardss title="Front End" image={imageh} para="Students learn to design, develope the UI following UX with industry standards."></Cardss> */}
            </div>
        </div>
    )
}

export default Body4;