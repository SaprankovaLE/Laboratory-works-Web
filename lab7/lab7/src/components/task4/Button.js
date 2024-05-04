import { useState } from "react"

export default function Button() {
    const [color, setColor] = useState("green");
    
    const onClick = () => {
        if (color == "green") {
            setColor("red");
        } else {
            setColor("green");
        }
    };

    return (<button style={ {backgroundColor: color} } onClick={ onClick }>Нажми меня</button>)
}