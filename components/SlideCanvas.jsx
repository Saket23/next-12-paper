import { useEffect, useRef,  } from "react"
import paper from "paper";


export default function SlideCanvas () {
    const canvasRef = useRef(null);
    
    
    useEffect(() => {
        paper.install(window);
    
        paper.setup(canvasRef.current ?? '');
        
        const rect = new paper.Rectangle(
            new paper.Point(50, 50),
            new paper.Point(100, 100),
        )

        const path = new paper.Path.Rectangle(rect);
        path.fillColor = new paper.Color(1, 0, 0.5);
    }, [])

    return (
        <canvas ref={canvasRef} className="h-full w-full"></canvas>
    )
}