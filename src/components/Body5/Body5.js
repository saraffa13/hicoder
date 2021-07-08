import './Body5.css'
import image from '../../images/6th.jpg'
const Body5 = () =>{
    return(
        <div className="Body5">
            <div className="Body5div1">
                <h3 className="Body5div1h3">THOUGHTS ON HICODER SYLLABUS</h3>
                <h1 className="Body5div1h1">Reviews by Industry Experts</h1>
            </div>
            <div className="Body5div2">
                <div className="Body5div2Box1">
                    <img src={image}></img>
                </div>
                <div className="Body5div2Box2"></div>
            </div>

        </div>
    )
}

export default Body5;