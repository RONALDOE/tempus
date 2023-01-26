import Typed from "typed.js";
import { useEffect, useRef } from "react";
import '../../../css/writing.css'
const Writing = () => {

const el = useRef(null);

useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ["Time Saved", "Agility", "Teamwork", "Ease", "Far but Close"],
        startDelay: 150,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 200,
        smartBackspace: true,
        loop: true,
        showCursor: true,
    });
    

    return () => {
        typed.destroy();
    };
    }, []);

    return (
        
    <div id="writingContainer">
        <h6>Tempus<br/>
         <span id='equal'>=</span><br/>
          <span id='typedText' ref={el} /></h6>
    </div>
    );
};
export default Writing;
