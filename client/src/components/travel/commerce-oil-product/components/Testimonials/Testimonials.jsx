import "./testimonials.css";
import person from "../../images/person.jpg";

export function Testimonials() {
    return (
        <section className="testimonials">
            <div className="test">
                <h1 className="test-head">Testimonial</h1>
                <p className="test-desc">See what our customers have said about us
                    in the below section on your screen
                </p>
            </div>
            <div className="test-customer">
                <div className="test-disc">
                    <img src={person} alt="" />
                    <p className="talk">I recommend the argan seed oil produced by 
                        healing bird to use. I have made use of it and  it has helped my hair
                        growth journey significantly I recommend the argan seed oil produced by
                        healing bird to use. I have made use of it and it has helped my hair
                        growth journey significantly.
                    </p>
                </div>
                <div className="test-disc">
                    <img src={person} alt="" />
                    <p className="talk">I recommend the argan seed oil produced by 
                        healing bird to use. I have made use of it and  it has helped my hair
                        growth journey significantly. I recommend the argan seed oil produced by
                        healing bird to use. I have made use of it and it has helped my hair
                        growth journey significantly.
                    </p>
                </div>
                <div className="test-disc">
                    <img src={person} alt="" />
                    <p className="talk">I recommend the argan seed oil produced by 
                        healing bird to use. I have made use of it and it has helped my hair
                        growth journey significantly I recommend the argan seed oil produced by
                        healing bird to use. I have made use of it and it has helped my hair
                        growth journey significantly.
                    </p>
                </div>
            </div>
        </section>
    )
}