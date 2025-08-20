
const maxHits = 6; // for "special" blocks

export const hitBlock = (b: HTMLElement, callback:CallableFunction) => {
    // get num of hits on block
    let blockHits: number = typeof(b.getAttribute('data-hits')) !== "undefined" ? Number(b.getAttribute('data-hits')) : 0;
    // check for state change
    if (blockHits <= maxHits) {
        // add animation
        b.classList.add("brick-hit");
        setTimeout(() => {
            b.classList.remove("brick-hit");
        }, 250);

        // only count hits for "special" blocks
        if (b.classList.contains("special")) {
            const star = document.createElement('span');
            b.append(star);
            star.classList.add('star');
            setTimeout(() => {
                star.remove();
            }, 1000);
            if (blockHits == maxHits) {
                b.classList.add("spent");
                setTimeout(() => {
                    callback();
                }, 250);                
            }
            blockHits++;
            b.setAttribute("data-hits", blockHits.toString());
        }
    }
}

interface BrickProps {
    letter: string,
    handleClick: any,
    special?: boolean
}

const Brick = ({ letter, handleClick, special }: BrickProps) => {

    

    let classes = "brick";
    if (special) {
        classes += " special";
    }

    return (
        <span className={classes} role="presentation" onClick={handleClick}>{letter}</span>
    )
}

export default Brick;