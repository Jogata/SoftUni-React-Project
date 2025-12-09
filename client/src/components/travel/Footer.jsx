// ================================ Challenge 4: Implement multiple selection ================================

import { useState } from "react";

const letters = [{
    id: 0,
    subject: "Ready for adventure?",
    isStarred: true,
}, {
    id: 1,
    subject: "Time to check in!",
    isStarred: false,
}, {
    id: 2,
    subject: "Festival Begins in Just SEVEN Days!",
    isStarred: false,
}];

export function MailClient() {
    const [selectedIds, setSelectedIds] = useState([]);

    const selectedCount = selectedIds.length;

    function handleToggle(toggledId) {
        if (selectedIds.includes(toggledId)) {
            setSelectedIds(selectedIds.filter(id =>
                id !== toggledId
            ));
        } else {
            setSelectedIds([
                ...selectedIds,
                toggledId
            ]);
        }
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isSelected={
                            // letter.id === selectedId
                            selectedIds.includes(letter.id)
                        }
                        onToggle={handleToggle}
                    />
                ))}
                <hr style={{margin: "1rem 0"}} />
                <p>
                    <b>
                        You selected {selectedCount} letters
                    </b>
                </p>
            </ul>
        </>
    );
}

function Letter({
    letter,
    onToggle,
    isSelected,
}) {
    console.log(letter.id);
    return (
        <li className={
            isSelected ? "selected" : ""
        }>
            <label style={{
                display: "inline-flex", 
                gap: "0.5rem", 
                padding: "0.5rem 0"}}
            >
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {
                        onToggle(letter.id);
                    }}
                />
                {letter.subject}
            </label>
        </li>
    )
}

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
