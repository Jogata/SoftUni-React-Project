import "./demo.css";

// export function Demo() {
//     return (
//         <div className="demo" id="demo">
//             <div className="container">
//                 <div className="col-1">
//                     <p>More Than 100 Financial Planners,</p>
//                     <p>One Philosophy</p>
//                     <p>Every single one of our financial advisors receives
//                         rigorous training according to John Doe's philosophy
//                         based on academic research (including that of a Nobel
//                         laureate in Economics) and Behavioral Finance.
//                     </p>
//                     <button className="button">Get your free financial analysis</button>
//                 </div>
//                 <div className="col-2">
//                     <iframe width="570" height="320" src="https://www.youtube.com/embed/oeqP5JtihMA" title="Youtube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
//                 </div>
//             </div>
//         </div>
//     )
// }

export function Skills() {
  return (
    <section className="skills">
        <h2 className="skill-title">What I do</h2>
        <p className="description">
            I am a skilled and passionate frontend developer 
            Demo text: This is a demo text. I will add more 
            to it later when i am done Demo text: This is a 
            demo text. I will add more to it later when i am done.
        </p>
        <div className="skillBars">
            <div className="skillBar">
                <i className="fa fa-paint-brush" aria-hidden="true"></i>
                <div className="skillText">
                    <h3>UI/UX Design</h3>
                    <p>
                        Demo text:Demo text: This is a demo text. 
                        I will add more to it later when i am done
                    </p>
                </div>
            </div>
            <div className="skillBar">
                <i className="ri-palette-line"></i>
                <div className="skillText">
                    <h3>Web Design</h3>
                    <p>
                        Demo text: This is a demo text. I will 
                        add more to it later when i am done
                    </p>
                </div>
            </div>
            <div className="skillBar">
                <i className="fa fa-television" aria-hidden="true"></i>
                <div className="skillText">
                    <h3>App Design</h3>
                    <p>
                        This is a demo text, i will add more to it 
                        Demo text: This is a demo text. I will add 
                        more to it later when i am done
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}