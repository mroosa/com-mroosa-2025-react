import { useEffect, useState } from "react";

/**
 * Hook to implement mouse-based background movement with useEffect
 * @returns {midPos, backPos}
 */
export const movingBackgrounds = () => {
    // Set values for moving backgrounds
    const [origX, setOrigX] = useState(0);
    const [midPos, setMidPos] = useState(window.innerWidth / 2);
    const [backPos, setBackPos] = useState(window.innerWidth / 2);

    const handleMouseMovement = (e:MouseEvent) => {
        const dir = e.clientX > origX ? 1: -1;
        setMidPos(midPos => midPos - dir/3);
        setBackPos(backPos => backPos - dir/9);
        setOrigX(e.clientX);
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMovement);
        return () => {
            window.removeEventListener("mousemove", handleMouseMovement);
        }
    }, [handleMouseMovement])

    return {
        midPos: midPos,
        backPos: backPos
    }
}

