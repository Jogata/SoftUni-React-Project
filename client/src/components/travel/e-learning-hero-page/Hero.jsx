import student from './images/s2.jpg'
import student1 from "./images/s1.jpg";
import student2 from "./images/s3.jpg";
import student3 from "./images/s4.jpg";

export function Hero() {
  return (
    <div>
        <section>
        <div>
          <h1>
            <span>Empower</span> Your Future with
            Cutting-Edge <span>Skills</span>
          </h1>
          <p>
            Unlock your potential with courses designed to help you thrive in
            the digital age. From coding to creative arts, we provide the tools
            you need to succeed.
          </p>
          <div>
            <a
              href="#"
            >
              Enroll Now
            </a>
            <a
              href="#"
            >
              Explore Courses
            </a>
          </div>
          
        </div>

        <div>
          <div>
            <img
              src={student}
              alt="Student"
            />
            <img
              src={student1}
              alt="Student"
            />
          </div>

          <div>
            <img
              src={student2}
              alt="Student"
            />
            <img
              src={student3}
              alt="Student"
            />
          </div>
        </div>
      </section>
    </div>
  );
};