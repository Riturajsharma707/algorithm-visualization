import React from 'react'
import Typewriter from 'typewriter-effect'

export const Mytypewriter = () => {
    return (
        <div className="type display-3">
            <span className="badge badge-dark">
                <Typewriter
                    options={{
                        strings: ['Graph Algorithms', 'Sorting Algorithms', "8 Queen"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
        </div>
    );
}
