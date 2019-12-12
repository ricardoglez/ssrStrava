const sketch = ( W, H ) => ( p ) => {
    p.setup = () => {
        p.createCanvas( W, H );
    };

    p.draw = () => {
        p.background(220);
        
    }
}