// import React from 'react';
// import './style.css';

// const Rect = (props) => {
//     const checkColor = () => {
//         if (props.rect.isSorted) {
//             return "green";
//         } else if (props.rect.isSorting) {
//             return "yellow";
//         } else {
//             return "blue";
//         }
//     };

//     return (
//         <div
//             className='rect'
//             style={{
//                 height: props.rect.width,
//                 background: checkColor(),
//                 margin: props.marg,
//                 // float:'left',
//                 verticalAlign: 'middle'
//             }}
//         >

//         </div>
//     );
// };





import React, { Component } from 'react';
import './style.css';
class Rect extends Component {

    render() {
        return (
            <div
                className='rect'
                style={{
                    height: this.props.rect.width,
                    background: this.checkColor(),
                    margin: this.props.marg,
                    // float:'left',
                    'vertical-align': 'middle'
                }}
            >

            </div>
        );
    }
    checkColor = () => {
        if (this.props.rect.isSorted) {
            return "green";
        } else if (this.props.rect.isSorting) {
            return "yellow";
        } else {
            return "Blue"
        }
    }
}


export default Rect;
