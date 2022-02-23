import { Component } from "react";
import './component_css/Button.css';

class Button extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            pressed: false
        }
    }


    render() {
        return (
            <div className="btn-container">
                <div className={"btn " + (this.state.pressed ? "pressed" : "")}
                    onMouseDown={() => this.setState({ pressed: true })}
                    onMouseUp={() => this.setState({ pressed: false })}
                    onMouseLeave={() => this.setState({ pressed: false })}>
                        {this.props.children}
                </div>
            </div>
        )
    }
}

export default Button;