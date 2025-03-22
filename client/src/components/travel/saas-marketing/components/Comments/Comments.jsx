import "./comments.css";

export function Comments() {
    const comments = [
        {
            text: "Since switching to Trevo, our marketing efficiency has skyrocketed.", 
            name: "Emily Johnson", 
            title: "CTO German"
        }, 
        {
            text: "The insights we get from the analytics have tranformed our approach to marketing.", 
            name: "Jane Doe", 
            title: "Entrepreneur"
        }, 
        {
            text: "Our lead conversion rates have doubled since we started using Trevo.", 
            name: "Lucas Andrew", 
            title: "Investor"
        }, 
        {
            text: "We're now able to target our campaigns with precision and see real results since using you product.", 
            name: "Indu Ethan", 
            title: "Freelancer"
        }, 
        {
            text: "The automation tools are easy to use and have freed up our team to focus on creative strategies.", 
            name: "Chris Andrew", 
            title: "Consultant"
        }
    ];

    return (
        // <h1>comments section</h1>
        <div className="comments">
            <h2>What Our Clients Say About Us</h2>
            <div className="slider">
                {comments.map((comment, index) => {
                    return (
                        <div key={index} className="comment">
                            <p className="comment-text">
                                {comment.text}
                            </p>
                            <p className="comment-author">
                                {comment.name}
                            </p>
                            <p className="comment-title">
                                {comment.title}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}