import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname } = useLocation();
    const btn = useRef(null);
    
    useLayoutEffect(() => {
        console.log("use effect");
        // console.log(pathname);
        // document.body.scrollTo(0, 0);
        // there is a bug - scrollTo(0, 0) doesn't work
        // window.scrollTo(1, 0);
        btn.current.scrollIntoView();
    }, [pathname]);
    // useLayoutEffect(() => {
        //     console.log(pathname);
        //     window.scrollTo(0, 0);
        // });
    //     console.log(pathname);
    //     console.log(window.scrollY);

    // return null;

    // function scroll() {
    //     console.log("scroll");
    //     window.scrollTo(100, 0);
    // }

    return (
        <div ref={btn}></div>
    )
}