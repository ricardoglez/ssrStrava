import React, { useEffect } from 'react';

const P5Canvas = ({activities}) => {
    const renderRef = React.createRef();
    useEffect(() => {
        const p5 = require("p5");

        const sketch = new p5( p => {
            console.log(p);
            p.setup = ()  => {
                p.createCanvas(p.windowWidth, p.windowHeight);
                p.background('white');
                p.strokeWeight(5);
            }
            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight )
            }
      
            p.draw = () => {
               
            }
        });
        

    },[]);

    return(
        <div className="App">
            <div ref={renderRef}> P5 Here </div>
        </div>
    )
}

export default P5Canvas;