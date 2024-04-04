import React from 'react';
import SimpleSelect from "./SimpleSelect";

const Menu = (props) => {
    return (
        <nav className="nav alert alert-dark" >
            <SimpleSelect
                onAlgoChanged={props.onAlgoChanged}
                items={props.algorithms}
            />
            <SimpleSelect
                onAlgoChanged={props.onMazeChanged}
                items={props.mazes}
            />
            <button
                className='btn btn-lg btn-secondary m-2'
                onClick={props.onCreateMaze}>
                Create Maze
            </button>
            <button
                onClick={props.onVisualize}
                className="btn btn-warning btn-lg"
            >
                Visualize
            </button>
            <button
                onClick={props.onClearPath}
                className='btn btn-danger btn-lg m-2'
            >
                Clear Path
            </button>
            <button
                onClick={props.onClearBoard}
                className='btn btn-danger btn-lg m-2'
            >
                Clear Board
            </button>
        </nav>
    );
};

export default Menu;
