import { useState } from 'react';

export function AccordionMenu({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="accordion-menu">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div
                        className="accordion-header"
                        onClick={() => handleClick(index)}
                    >
                        {item.title}
                        {activeIndex === index ?
                            <i className="fa fa-plus accordion-icon"></i> :
                            <i className="fa fa-minus accordion-icon"></i>}
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content">
                            {item.content}
                        </div>
                    )}
                    {index !== items.length - 1 && <hr className="separator" />}
                </div>
            ))}
        </div>
    );
}