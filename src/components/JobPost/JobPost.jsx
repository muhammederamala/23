import React from "react";
import styles from "./JobPost.module.css";

import jobImage from "../../assets/jobPoster/JobPoster1.svg";

const JobCard = () => {
  const job = {
    title: "Software Developer",
    company: "Innovaccer Analytics Private Ltd.",
    location: "Noida, India",
    views: "1.4k views",
    author: "Joseph Gray",
    authorImage: jobImage,
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h5>
          <strong>Job</strong>
        </h5>
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.title}>{job.title}</h2>

        <p className={styles.company}>{job.company}</p>
        <p className={styles.location}>{job.location}</p>
        <button
          style={{
            width: "100%",
            backgroundColor: "white",
            color: "#02B875",
            border: "0.5px solid grey",
            borderRadius: "7px",
            padding: "8px",
          }}
        >
          Apply on Timesjobs
        </button>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <img
                src={job.authorImage}
                alt={`Author ${job.author}`}
                className={styles.authorImage}
              />
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <p className={`m-0 ${styles.views}`}>{job.views}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
