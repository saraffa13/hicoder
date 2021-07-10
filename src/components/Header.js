import Button from "./UI/Button";
import Dropdown from "./UI/Dropdown/Dropdown";
import './Header.css'
import logoImage from '../images/logo-dark.png'
const Header = () =>{
    return (
        <div className="headerBody">
            <div className="headerimageDiv">
                <img src={logoImage} />
            </div>
            <div className="headeroptionsDiv">
                <Dropdown title="hicoder +"/>
                <Dropdown title="course +"/>
                <Dropdown title="hire +"/>
                <Button>Apply Now</Button>
            </div>
        </div>
    )
}

export default Header;
