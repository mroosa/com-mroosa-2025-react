import { useEffect } from "react";

const Console = () => {

    const toggleConsole = (console:HTMLElement): void => {
        console.classList.toggle("open");
    }

    // const submitLine = () => "";
    const clearLine = (terminal:HTMLInputElement) => terminal.value = "";
    const clearDisplay = (display:HTMLElement) => display.innerHTML = "";
    const handleKeyDown = (e:KeyboardEvent) => {
        const siteConsole = document.getElementById("console") as HTMLElement;
        const siteDisplay = document.getElementById("display") as HTMLElement;
        const siteTerminal = document.getElementById("terminal") as HTMLInputElement;
        
        if (e.key === "`") {    
            siteConsole && toggleConsole(siteConsole);
            if (siteConsole?.classList.contains("open")) {
                siteTerminal!.focus();
            } else {
                setTimeout(()=> {
                    clearLine(siteTerminal);
                }, 250)
            }
            e.preventDefault();
        }
        if (e.key === "Enter" && siteConsole?.classList.contains("open") && document.activeElement == siteTerminal) {
            let displayContents = siteDisplay!.getHTML();
            let command = siteTerminal!.value.replace(/^\s+|\s+$/gm,'');
            switch (command) {
                case "clear":
                    clearDisplay(siteDisplay);
                    break;
                case "dir":
                case "ls":
                    siteDisplay!.innerHTML = displayContents + "<p>DIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<a href=\"#\">about/</a></p><p>DIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<a href=\"#\">contact/</a></p><p>DIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<a href=\"#\">portfolio/</a></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<a href=\"#\">resume</a></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<a href=\"#\">socials</a></p>";
                    break;
                case "contra":
                case "konami":
                case "up up down down left right left right b a":
                    siteDisplay!.innerHTML = displayContents + "<p>yo!</p>";
                    break;
                default: 
                    siteDisplay!.innerHTML = displayContents + "<p>Error: unknown command: " + siteTerminal!.value + "</p>";
            }
            clearLine(siteTerminal);
        }
    }

    useEffect(() => {
        /* keypress listener (for console) */
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    },[]);

    return (
        <div id="console">
            <div id="display"></div>
            <div id="input"><input id="terminal" type="text" /></div>
        </div>
    )
}

export default Console;