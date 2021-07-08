import './Cardss.css'

const Cardss = (props) =>{
    const classses = `Cardss ${props.classes}`;
    return( 
        <div className={classses}>
            <div className="Cardssimg">
                <img src={props.image}></img>
            </div>
            <div className="Cardssh3">
                <h3>{props.title}</h3>
            </div>
            <div className="Cardssp">
                <p>{props.para}</p>
            </div>
        </div>

    )
}

export default Cardss;