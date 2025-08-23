import { useEffect, useRef, useState, type DragEvent, type MouseEvent } from "react";
import { type MediaItem } from "../Media";

const Compare = ({dir, item}:{dir:string, item:MediaItem}) => {

    const gripOffsetX = 10;
    const [containerBounds, setContainerBounds] = useState<DOMRect>();
    const [gripX, setGripX] = useState<string|number>("50%");
    const [beforeX, setBeforeX] = useState<string|number>("50%");
    const [dragging, setDragging] = useState(false);
    const isBeingDragged = useRef(null);
    const beforeFrame = useRef(null);
    const container = useRef(null);

    const dragMouseDown = (e:MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (container.current) {
            const dragContainer:HTMLElement = container!.current;
            setContainerBounds(dragContainer.getBoundingClientRect());
        }
        if (isBeingDragged.current) {
            const currentGrip:HTMLElement = isBeingDragged.current;
            setGripX(currentGrip.offsetLeft);
            setDragging(true)
        }
        window.addEventListener("mouseup", stopDragging);
    }
    const stopDragging = () => {
        setDragging(false);
        window.removeEventListener("mouseup", stopDragging);
    }

    // TODO: Figure out proper TS Event (MouseEvent thorws overload error)
    const dragElement = (e: any) => {
        const diff = (e.clientX - gripOffsetX) - containerBounds!.left;
        const rightEdge = containerBounds!.right - containerBounds!.left;
        if (diff > -1 && diff < rightEdge) {
            setGripX(diff);
            setBeforeX(`calc(100% - ${diff}px`);
        }
    }
    
    const Grip = () => {
        return (
            <button className="grip" style={{left:gripX}} ref={isBeingDragged} onMouseDown={dragMouseDown} role="presentation"></button>
        )
    }

    const AfterImage = () => {
        const content_after = item.content[1];
        const contentURL_after = `/projects/${dir}/${content_after.src}`;

        return (
            <img
                className="after no-shadow"
                src={contentURL_after}
                width={content_after.width}
                height={content_after.height}
                alt={content_after.alt}
                aria-label="After Image"
            />
        )
    }

    const BeforeImage = () => {
        const content_before = item.content[0];
        const contentURL_before = `/projects/${dir}/${content_before.src}`;

        return (
            <div className="before" style={{right:beforeX}} ref={beforeFrame}>
                <img
                    className="no-shadow"
                    src={contentURL_before}
                    width={content_before.width}
                    height={content_before.height}
                    alt={content_before.alt}
                    aria-label="Before Image"
                />
            </div>
        )
    }


    useEffect(() => {
        // Only use event listener when an item is being dragged
        if (dragging) {
            window.addEventListener("mousemove", dragElement);
            return () => {
                window.removeEventListener("mousemove", dragElement);
            }
        }
    },[dragging])

    return (
        <div className={item.frame} role="presentation">
            <div className="onion" ref={container} role="presentation">
                <Grip />
                <AfterImage />
                <BeforeImage />
            </div>
        </div>
    )
}

export default Compare;