import React from 'react';
import Node from "./Node";
import './grid.css';

const Grid = (props) => {
    const { grid, onMouseDown, onMouseEnter, onMouseUp } = props;

    return (
        <div className="Grid">
            {grid.map((row, rowidx) => {
                return (
                    <div key={rowidx}>
                        {row.map((node, nodeidx) => {
                            const { row, col, isWall, visitedNode } = node;
                            return (
                                <Node
                                    key={nodeidx}
                                    row={row}
                                    col={col}
                                    node={node}
                                    isWall={isWall}
                                    visitedNode={visitedNode}
                                    onMouseDown={onMouseDown}
                                    onMouseEnter={onMouseEnter}
                                    onMouseUp={onMouseUp}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Grid;
