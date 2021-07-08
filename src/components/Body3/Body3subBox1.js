import './Body3subBox1.css'
import fifthimage from '../../images/5th.jpg'
import image1 from '../../images/personalised.png'
import image2 from '../../images/Production.png'
import TempCard from './TempCard'
const Body3subBox1 =()=>{
    const h11=`Personalized Training`;
    const h12=`Production Products`;
    const p11=`We understand the weakness of students coming from poor educational backgrounds. HiCoder avails resources and extra after-class support to match the criteria and keep up with tech.`;
    const p12=`Every student ends up making around 3 projects that are wholesome, cloud-hosted and can be used for a commercial purpose.`;
    return(
        <div className="Body3subBox1">
            <div className="Body3subBox1div1">
                <div>
                    <h1>Why HiCoder?</h1>
                    <p>HiCoder enables students to think about real-world problems, design, and develop the right solution.<a href="#"> know more</a></p>
                </div>
                <TempCard image={image1} heading={h11} para={p11}/>
                <TempCard image={image2} heading={h12} para={p12}/>
                
            </div>
    
            <div className="Body3subBox1div2">
                <img src={fifthimage}></img>
            </div>
        </div>
    )
}

export default Body3subBox1;


