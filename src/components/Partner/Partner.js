import './Partner.css'
import imagea from '../../images/9th.jpg'
import imageb from '../../images/10th.jpg'
import imagec from '../../images/11th.jpg'
import imaged from '../../images/12th.jpg'
import Crousel from '../UI/Crousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Partner = () =>{
    return(
        <div className="Partner">
            <div className="Partnerdiv1">
                <h1>Partner & Associates</h1>
            </div>
            <div className="Partnerdiv2">
                <Crousel imagea={imagea} imageb={imageb} imagec={imagec} imaged={imaged} />

                {/* <Crousel imageb={imageb} />
                <Crousel imagec={imagec} />
                <Crousel imaged={imaged} /> */}
            </div>
        </div>
    )
}

export default Partner ;