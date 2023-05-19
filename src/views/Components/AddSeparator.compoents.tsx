import { useState, useEffect } from "react";

export default function AddSeparator() {
    const [animationClass, setAminationClass] = useState("start_separator");
    useEffect(() => {
        setTimeout(() => {
            setAminationClass('separator')
        }, 500);
    }, [])

    return <div className={animationClass} >
        <div className="left_dot dot"></div>
        <div className="right_dot dot"></div>
        {/* <div className="left_bracket bracket"></div>
        <div className="right_bracket bracket"></div> */}
    </div>;
}