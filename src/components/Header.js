import Button from "./UI/Button";
import './Header.css'
import logoImage from '../images/logo-dark.png'
const Header = () =>{
    return (
        <div className="headerBody">
            <div className="headerimageDiv">
                <img src={logoImage} />
            </div>
            <div className="headeroptionsDiv">
                <a href="#">HICODER +</a>
                <a href="#">COURSE +</a>
                <a href="#">HIRE +</a>
                <Button>Apply Now</Button>
            </div>
        </div>
    )
}

export default Header;
