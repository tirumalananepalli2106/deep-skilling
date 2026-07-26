import React, { Component } from "react";
import "./App.css";

function BookDetails() {
  const books = [
    { id: 1, name: "Java Programming", author: "James Gosling" },
    { id: 2, name: "React JS", author: "Jordan Walke" },
    { id: 3, name: "Python", author: "Guido van Rossum" }
  ];

  return (
    <div>
      <h2>Book Details</h2>

      {books.map((book) => (
        <div key={book.id}>
          <p><b>Book:</b> {book.name}</p>
          <p><b>Author:</b> {book.author}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Basics", author: "John" },
    { id: 2, title: "JavaScript ES6", author: "David" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <p><b>Title:</b> {blog.title}</p>
          <p><b>Author:</b> {blog.author}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

function CourseDetails() {
  const courses = [
    { id: 1, name: "React", duration: "2 Months" },
    { id: 2, name: "Spring Boot", duration: "3 Months" }
  ];

  return (
    <div>
      <h2>Course Details</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <p><b>Course:</b> {course.name}</p>
          <p><b>Duration:</b> {course.duration}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      showBooks: true,
      showBlogs: true,
      showCourses: true
    };
  }

  render() {
    return (
      <div className="App">

        <h1>Blogger Application</h1>

        {/* Conditional Rendering using && */}
        {this.state.showBooks && <BookDetails />}

        {/* Conditional Rendering using Ternary */}
        {this.state.showBlogs ? <BlogDetails /> : <h3>No Blogs Available</h3>}

        {/* Conditional Rendering using Element Variable */}
        {(() => {
          let component;
          if (this.state.showCourses) {
            component = <CourseDetails />;
          } else {
            component = <h3>No Courses Available</h3>;
          }
          return component;
        })()}

      </div>
    );
  }
}

export default App;