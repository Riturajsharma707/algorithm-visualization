import React from 'react';
import './node.css';

const Node = (props) => {
    const { row, col, isVisited, onMouseDown, onMouseEnter, onMouseUp } = props;

    const getClassName = () => {
        if (props.node.isWall === true) {
            return "node node-wall";
        } else if (props.node.isStartNode === true) {
            return "node node-start";
        } else if (props.node.isEndNode === true) {
            return "node node-end";
        } else if (props.node.ispathNode) {
            return 'node node-shortest-path';
        } else if (props.node.isVisited === true) {
            return "node node-visited";
        } else {
            return "node";
        }
    };

    return (
        <div
            id={`node-${row}-${col}`}
            className={getClassName()}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseUp={() => onMouseUp(row, col)}
        />
    );
};

export default Node;
