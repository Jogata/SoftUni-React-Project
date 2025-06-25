import "./gallery.css";

export function Gallery() {
  return (
    <div id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="grid">
            <div className="image big">
                <img src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" />
            </div>
            <div className="image">
                <img src="https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            </div>
            <div className="image">
                <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            </div>
            <div className="image">
                <img src="https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" />
            </div>
            <div className="image">
                <img src="https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
            </div>
        </div>
    </div>
  )
}