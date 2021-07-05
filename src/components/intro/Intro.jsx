import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const aboutme1 = useRef();

    useEffect(()=>{
        init(aboutme1.current, { 
            typeSpeed: 80, 
            backSpeed: 30,
            loop: true,
            showCursor: true,
            strings: ['I am a Computer Science student', 'I make random stuff when i\'m bored :P'] 
        });
    },[])

    return (
        <div className="intro" id="intro">
            <h2>Hi There! I'm</h2>
            <h1>Christian Ilagan</h1>
            <h3>
                <span ref={aboutme1}></span>
            </h3>

            <a href="#projects">
                <img src="images/down.png" alt="" />
            </a>
        </div>
    )
}
