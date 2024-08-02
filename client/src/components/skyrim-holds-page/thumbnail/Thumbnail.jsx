import "./thumbnail.css";

export default function Thumbnail({ img, title }) {
  return (
    <>
      <div className="thumbnail">
        <img src={img} />
        <div className="thumbnail-content">
          <div className="thumbnail-title">
            {title}
          </div>
        </div>
      </div>
    </>
  )
}