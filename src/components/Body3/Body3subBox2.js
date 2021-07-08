import './Body3subBox2.css'
import Button from '../UI/Button'
import Image from '../../images/6th.jpg'
const Body3subBox2 =()=>{
    return(
        <div className="Body3subBox2">
            <div className="Body3subBox2div1">
                <img src={Image}></img>
            </div>
            <div className="Body3subBox2div2">
                <h1>How does HiCoder help?</h1>
                <h3>HiCoder resembeles software development and marketing altogether to develop applications that can be used by real user than keeping on Github.</h3>
                <p>HiCoder understands the struggle, peer pressure an engineering student goes into throughout curriculum. We believe, Most engineering students who can be part of the core software industry end up having a tech support or customer care job just because college never taught trending technology, project Management or encouraged students to their own projects.</p>
                <Button>Know More</Button>
            </div>
        </div>
    )
}

export default Body3subBox2;


