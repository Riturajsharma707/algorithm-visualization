import React from 'react'
import Rect from "./Rect";
import FlipMove from 'react-flip-move';


const Rects = (props) => {
    let margin = 5;
    if (props.rects.length > 50) {
        margin = 1;
    }
    return (
        <div>
            <FlipMove
                className="d-flex justify-content-center align-items-end"
                duration={props.speed}
            // easing="cubic-bezier(.12,.36,.14,1.2)"
            >
                {props.rects.map((rect, rectidx) => {
                    return (
                        <Rect
                            marg={margin}
                            key={rect.kk}
                            rect={rect}
                        />
                    );
                })}
            </FlipMove>
        </div>
    );
}


export default Rects;