import './TempCard.css'

const TempCard = (props) =>{
    return(
        <div className="TempCard">
            <div className="TempCarddiv1">
                <img src={props.image}></img>
            </div>
            <div className="TempCarddiv2">
                <h2>{props.heading}</h2>
                <p>{props.para}</p>
            </div>
        </div>
    )
}

export default TempCard;