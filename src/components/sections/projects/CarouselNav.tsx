import { useEffect, useState, type MouseEventHandler } from "react";
import { type MediaItem } from "./Media";

interface CarouselNavProps {
    mediaItems: MediaItem[],
    defaultDot: number,
    handleClick: CallableFunction,
    numMedia: number
}

const CarouselNav = ({mediaItems, defaultDot, handleClick, numMedia}:CarouselNavProps) => {

    const [activeDot, setActiveDot] = useState(defaultDot);

        const clickDot = (e:MouseEvent) => {
            const currentDot = Number((e.currentTarget as HTMLElement).getAttribute('data-id'));
            setActiveDot(currentDot);
            handleClick(currentDot);
            e.preventDefault();
        }

        const Dot = ({dataId, active}:{dataId:number, active:number}) => {
            const dotClass = dataId===active ? "active" : undefined;
            return (
                <li className={dotClass} data-id={dataId.toString()} onClick={clickDot}>
                    <a href="#" title={`Slide ${dataId+1}`}>{`Slide ${dataId+1}`}</a>
                </li>
            )
        }

        useEffect(() => {

        },[])

        if (numMedia > 1) {
            return (
                <ul className="carousel-nav">
                    {mediaItems.map((d, key) => (
                        <Dot key={key} active={activeDot} dataId={key} />
                    ))}
                </ul>
            )
        }
        return null    

}

export default CarouselNav;