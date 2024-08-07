import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../../hooks/useForm";
import { useCreateRaid } from "../../../hooks/useRaids";
import PageNavigation from "../../navigation/PageNavigation";

export default function CrateRaidPage() {
  const navigate = useNavigate();
  const createRaid = useCreateRaid();
  const [errors, setErrors] = useState("");

  const [formData, changeFormHandler, submitForm] = useForm(
    { "location": "", "level": "", "region": "", "time": "", "min": "", "max": "" },
    (data) => {
      //   const location = data["location"];
      //   const level = data["level"];
      //   const region = data["region"];
      //   const time = data["time"];
      //   const min = data["min"];
      //   const max = data["max"];
      try {
        createRaid(data);
        navigate("/raids");
      } catch (error) {
        // console.log(typeof error);
        // const { message } = await error.json();
        const { message } = JSON.parse(error);
        // console.log(error.message);
        setErrors(message);
      }
    }
  )

  return (
    <>
      <div className="page dark-bg full-screen">

        <PageNavigation />

        <main>

          <section className="page-content">
            <div className="wrapper">

              {/* <div className="form-container login flip-left"> */}
              <div className={`form-container`}>
                <h1 className="cursive">Create Raid</h1>
                <form onSubmit={submitForm}>
                  <label htmlFor="location">
                    Location
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={formData.location}
                      onChange={changeFormHandler}
                    />
                  </label>
                  <label htmlFor="level">
                    Level
                    <input
                      type="text"
                      name="level"
                      id="level"
                      value={formData.level}
                      onChange={changeFormHandler}
                    />
                  </label>
                  <label htmlFor="enemies">
                    Enemies
                    <input
                      type="text"
                      name="enemies"
                      id="enemies"
                      value={formData.password}
                      onChange={changeFormHandler}
                    />
                  </label>
                  <label htmlFor="region">
                    Region
                    <input
                      type="text"
                      name="region"
                      id="region"
                      value={formData.password}
                      onChange={changeFormHandler}
                    />
                  </label>
                  <label htmlFor="time">
                    Time
                    <input
                      type="text"
                      name="time"
                      id="time"
                      value={formData.password}
                      onChange={changeFormHandler}
                    />
                  </label>
                  <label htmlFor="min">
                    Min Players
                    <input
                      type="text"
                      name="min"
                      id="min"
                      value={formData.password}
                      onChange={changeFormHandler}
                    />
                  </label>
                  <label htmlFor="max">
                    Max Players
                    <input
                      type="text"
                      name="max"
                      id="max"
                      value={formData.password}
                      onChange={changeFormHandler}
                    />
                  </label>
                  <button type="submit">create</button>
                </form>
              </div>
            </div>

            {errors && (
              <p className="error">
                <span>{errors}</span>
              </p>
            )}

          </section>

        </main>

      </div>
    </>
  )
}