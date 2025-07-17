import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./product.css";

export function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error("Error fetching product data: ", error);
        });
    }
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <button
        onClick={() => navigate(-1)}
        className="back-btn"
      >
        Back
      </button>
      <img
        src={product.images[0]}
        alt={product.title}
      />
      <h1>{product.title}</h1>
      <p className="description">{product.description}</p>
      <div className="flex">
        <p className="price">Price: ${product.price}</p>
        <p className="rating">Rating: {product.rating}</p>
      </div>
    </div>
  );
};