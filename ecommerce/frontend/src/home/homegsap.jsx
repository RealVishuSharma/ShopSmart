import React, {useEffect, useRef} from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const GSAPAnimation = () => {
    const boxRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);
    const timelineRef = use(null);
    const containerRef = useRef(null);
}

useEffect(() => {

    gsap.to(boxRef.current, {
        
    })

})