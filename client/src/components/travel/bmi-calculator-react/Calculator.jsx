import {useState} from "react";
import "./styles.css";
import underweight from "./images/underweight.png";
import healthy from "./images/healthy.png";
import overweight from "./images/overweight.png";

export function Calculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height) * 703);
      setBmi(bmi.toFixed(1));

      // Logic for message
      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  }

  //  show image based on bmi calculation
  let imgSrc = null;
  
  if(bmi > 0 && bmi < 25) {
    imgSrc = underweight;
  } else if (bmi >= 25 && bmi < 30) {
    imgSrc = healthy;
  } else if(bmi >= 30) {
    imgSrc = overweight;
  }

  let reload = () => {
    window.location.reload();
  }

  return (
    <div className="calculator">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}