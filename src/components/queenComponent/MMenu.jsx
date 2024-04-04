import React, { Component } from 'react';
import DiscreteSlider from "./Slider";



class Menu extends Component {
    render() {
        return (
            <nav className="flex nav alert alert-dark">
                <button
                    className='btn btn-secondary m-2'
                    onClick={this.props.onClear}
                    disabled={this.props.disable}
                    style={this.isClickable()}
                >
                    Clear Board
                </button>

                <DiscreteSlider
                    default={4}
                    min={1}
                    max={8}
                    step={1}
                    title="Grid size"
                    valueLabelDisplay="on"
                    onCountChange={this.props.onCountChange}
                    disable={this.props.disable}
                />
                <DiscreteSlider
                    default={50}
                    min={1}
                    max={100}
                    step={1}
                    title="Speed"
                    valueLabelDisplay="on"
                    onCountChange={this.props.onSpeedChange}
                />

                <button
                    className='btn btn-warning btn-lg '
                    onClick={this.props.onViusalize}
                    disabled={this.props.disable}
                    style={this.isClickable()}
                >
                    Visualize
                </button>

            </nav>
        );
    }
    isClickable = () => {
        if (this.props.disable) {
            return { cursor: "not-allowed" };
        } else {
            return {};
        }
    }
}


export default Menu;