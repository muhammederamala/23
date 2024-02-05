import React from "react";

import blog1 from "../../assets/blogs/blog1.svg";
import blog2 from "../../assets/blogs/blog2.svg";
import blog3 from "../../assets/blogs/blog3.svg";

import author1 from "../../assets/author/author1.svg";
import author2 from "../../assets/author/author2.svg";
import author3 from "../../assets/author/author3.svg";

function Blogs() {
  const blogs = [
    {
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      author: "Sarthak Kamra",
      authorImage: author1,
      views: "1.4k views",
      category: "article",
      imageUrl: blog1,
      datePosted: "Post Date 1",
      location: "Location 1",
      content:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    },
    {
      title: "Title for Blog 2",
      author: "Author Name 2",
      authorImage: author2,
      views: "1.4k views",
      excerpt: "Excerpt for Blog 2",
      imageUrl: blog2,
      datePosted: "Post Date 2",
      location: "Location 2",
      content: "Content for Blog 2...",
    },
    {
      title: "Title for Blog 3",
      author: "Author Name 3",
      authorImage: author3,
      views: "1.4k views",
      excerpt: "Excerpt for Blog 3",
      imageUrl: blog3,
      datePosted: "Post Date 3",
      location: "Location 3",
      content: "Content for Blog 3...",
    },
  ];

  return (
    <div>
      {blogs.map((blog, index) => (
        <div className="container" key={index} style={{ marginBottom: "3rem" }}>
          <div className="col-md-12">
            <img
              src={blog.imageUrl}
              alt={`Blog ${index + 1}`}
              style={{ marginBottom: "2rem" }}
            />
            <p>{blog.category}</p>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-4" style={{ padding: "0px" }}>
                  <img src={blog.authorImage} alt={`Author ${index + 1}`} />
                </div>
                <div className="col-md-8 d-flex align-items-center justify-content-center">
                  <p className="m-0">
                    <strong>{blog.author}</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <p className="m-0">{blog.views}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
