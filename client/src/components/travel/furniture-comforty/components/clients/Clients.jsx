import { useRef } from "react";
import "./clients.css";

export function Clients() {
    const clients = [
        {
            id: 1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat quibusdam, pariatur tempora quod error voluptatum vel expedita, vero, obcaecati modi voluptate ipsum sit. Tempore perspiciatis odio, ducimus dolorem vero quo officiis sed adipisci harum sequi minima nam esse minus in rem suscipit similique est voluptatum velit labore odit molestiae.",
            name: "John Doe",
            position: "CEO, Company",
        },
        {
            id: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat quibusdam, pariatur tempora quod error voluptatum vel expedita, vero, obcaecati modi voluptate ipsum sit. Tempore perspiciatis odio, ducimus dolorem vero quo officiis sed adipisci harum sequi minima nam esse minus in rem suscipit similique est voluptatum velit labore odit molestiae.",
            name: "John Doe",
            position: "CEO, Company",
        },
        {
            id: 3,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat quibusdam, pariatur tempora quod error voluptatum vel expedita, vero, obcaecati modi voluptate ipsum sit. Tempore perspiciatis odio, ducimus dolorem vero quo officiis sed adipisci harum sequi minima nam esse minus in rem suscipit similique est voluptatum velit labore odit molestiae.",
            name: "John Doe",
            position: "CEO, Company",
        },
        {
            id: 4,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat quibusdam, pariatur tempora quod error voluptatum vel expedita, vero, obcaecati modi voluptate ipsum sit. Tempore perspiciatis odio, ducimus dolorem vero quo officiis sed adipisci harum sequi minima nam esse minus in rem suscipit similique est voluptatum velit labore odit molestiae.",
            name: "John Doe",
            position: "CEO, Company",
        },
    ];

    const track = useRef();
    
    function scrollLeft() {
        const width = track.current.clientWidth;
        // const slides = Math.floor(width / 300);
        track.current.scrollLeft += width;
    }

    function scrollRight() {
        const width = track.current.clientWidth;
        // const slides = Math.floor(width / 300);
        track.current.scrollLeft -= width;
    }

    return (
        <div className="clients max-width ">
            <h3>What clients say about us</h3>

            <div className="slider">
                <div className="slider-track" ref={track}>
                    {
                        clients?.map((client, index) => (
                            <div key={index} className="slide">
                                <div className="client-card">
                                    <p className="description">{client?.description}</p>
                                    <div className="user-info">
                                        <span><i className="fa fa-user-o"></i></span>
                                        <div>
                                            <h4>{client?.name}</h4>
                                            <p>{client?.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button id="prev" className="arrow" onClick={scrollLeft}>
                    <i className="fa fa-angle-double-left"></i>
                </button>
                <button id="next" className="arrow" onClick={scrollRight}>
                    <i className="fa fa-angle-double-right"></i>
                </button>
            </div>

        </div>
    );
};