import img1 from "../../../../../images/room-1.jpeg";

export function Home() {
    // console.log(hotels[0].fields.images[0].fields.file.url);
    // const img = hotels[0].fields.images[0].fields.file.url;
    return (
        <div className="page full-screen" 
            style={{position: "relative", width: "100%"}}
        >
            <h1 className="cursive" 
                style={{
                    position: "absolute", 
                    top: "10%", 
                    width: "100%", 
                    fontSize: "5rem", 
                    textAlign: "center", 
                    textTransform: "uppercase" 
                }}>
                    hotels
                </h1>
            <img src={img1} alt="" style={{flex: "1", objectFit: "cover"}} />
        </div>
    )
}