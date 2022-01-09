import { Component } from "react/cjs/react.production.min"

import './styles.css'

export class Button extends Component {
    render() {
        const {text, onclick, disabled} = this.props
        return (
            <button disabled={disabled} 
            onClick={onclick} className="button-more">
                {text}
            </button>
        )
    }
}