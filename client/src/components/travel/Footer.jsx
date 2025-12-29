import { useRef, useState } from "react";

const catCount = 10;
const catList = new Array(catCount);

for (let i = 0; i < catCount; i++) {
    const bucket = Math.floor(Math.random() * catCount) % 2;
    let imageUrl = "";

    switch (bucket) {
        case 0: {
            imageUrl = "https://placecats.com/neo/250/200";
            break;
        }
        case 1: {
            imageUrl = "https://placecats.com/millie/250/200";
            break;
        }
        case 2:
        default: {
            imageUrl = "https://placecats.com/bella/250/200";
            break;
        }
    }
    catList[i] = {
        id: i,
        imageUrl,
    };
}

export function CatFriends() {
    const selectedRef = useRef(null);
    const [index, setIndex] = useState(0);

    return (
        <div className="test-section">
            <nav>
                <button onClick={() => {
                    flushSync(() => {
                        if (index < catList.length - 1) {
                            setIndex(index + 1);
                        } else {
                            setIndex(0);
                        }
                    });
                    selectedRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center"
                    });
                }}>
                    Next
                </button>
            </nav>
            <div>
                <ul style={{
                    width: "400px", 
                    whiteSpace: "nowrap", 
                    border: "1px solid white", 
                    overflow: "hidden"
                }}>
                    {catList.map((cat, i) => (
                        <li
                            key={cat.id}
                            ref={index === i ?
                                selectedRef :
                                null
                            }
                            style={{
                                display: "inline", 
                                padding: "0.5rem"
                            }}
                        >
                            <img
                                className={
                                    index === i ?
                                        "active"
                                        : ""
                                }
                                src={cat.imageUrl}
                                alt={"Cat #" + cat.id}
                                style={{
                                    width: "300px", 
                                    display: "inline"
                                }}
                            />
                            <span>{"Cat #" + cat.id}</span>
                        </li>
                    ))}
                </ul>
            </div> 
        </div> 
    );
}

// =======================================================================================

// export function Footer() {
//     return (
//         <div className="footer">
//             <div className="footer-content">
//                 <div className="footer-name">
//                     <h2>Nika Shoes</h2>
//                 </div>
//                 <div className="footer-socials">
//                     <i className="fa fa-facebook footer-icon"></i>
//                     <i className="fa fa-instagram footer-icon"></i>
//                     <i className="fa fa-twitter footer-icon"></i>
//                 </div>
//             </div>
//             <div className="copy">
//                 <p>Copyright © Nika Shoes 2024. All rights reserved</p>
//             </div>
//         </div>
//     )
// } 