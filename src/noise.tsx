import './noise.css';
import { CSSProperties } from "react";

interface NoiseProps {
    opacity?: number;
    style?: CSSProperties;
}

export default function Noise({ opacity = 0.06, style = {} }: NoiseProps) {
    return (
        <div className="noise" style={{
            opacity,
            ...style
        }}/>
    )
}
