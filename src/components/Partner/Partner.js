import './Partner.css'
import imagea from '../../images/9th.jpg'
import imageb from '../../images/10th.jpg'
import imagec from '../../images/11th.jpg'
import imaged from '../../images/12th.jpg'

const Partner = () =>{
    return(
        <div className="Partner">
            <div className="Partnerdiv1">
                <h1>Partner & Associates</h1>
            </div>
            <div className="Partnerdiv2">
                <img src={imagea}></img>
                <img src={imageb}></img>
                <img src={imagec}></img>
                <img src={imaged}></img>
            </div>
        </div>
    )
}

export default Partner ;