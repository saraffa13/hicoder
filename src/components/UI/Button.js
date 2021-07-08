import './Button.css'

const Button = (props) => {

        return (
            <button className={`button +${props.classes}`}>{props.children}</button>
        )

}

export default Button;