import React from "react";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import styles from "./HomePage.module.css"; // Import the CSS module
import Filter from "../components/Filter/Filter";
import Blogs from "../components/Blogs/Blogs";
import JobCard from "../components/JobPost/JobPost";

function HomePage() {
  return (
    <>
      <section>
        <div className={styles["image-container"]}>
          <div className={styles["image-wrapper"]}>
            <img src={image1} alt="Image 1" className={styles["image1"]} />
            <img src={image2} alt="Image 2" className={styles["image2"]} />
          </div>
          <div className={styles["text-overlay"]}>
            <h4>Computer Engineering</h4>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "3rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="col-md-8">
                <Filter />
              </div>
              <Blogs />
              <JobCard />
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6">
                  <button className="btn btn-light border">Write a post</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-primary">+ Join group</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
