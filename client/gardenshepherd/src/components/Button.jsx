import { Component } from "react";
import './component_css/Button.css';


class Button extends Component {

    constructor(props) {
        super(props)
        
        this.onClick = () => {};

        this.state = {
            pressed: false
        }
    }

    render() {
        return (
            <div data-testid="button-test" className="btn-container">
                <div className={"btn " + (this.state.pressed ? "pressed" : "")}
                    onClick={() => {
                    if(this.props.onClick) this.props.onClick();
                    }}
                    onMouseDown={() => this.setState({ pressed: true })}
                    onMouseUp={() => this.setState({ pressed: false })}
                    onMouseLeave={() => this.setState({ pressed: false })}
                >
                        {this.props.children}
                </div>
            </div>
        )
    }
}

export default Button;