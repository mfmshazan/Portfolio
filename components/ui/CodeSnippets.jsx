"use client";
import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

export default function CodeSnippets() {
  const fakeProjects = [
    {
      name: "Portfolio Website",
      code: `function Portfolio() {
  return <div>Hello, this is my portfolio!</div>;
}`
    },
    {
      name: "E-commerce UI",
      code: `const Cart = () => {
  const items = ['Shirt', 'Shoes'];
  return items.map(item => <li>{item}</li>);
};`
    },
    {
      name: "Blog Platform",
      code: `class Blog {
  constructor(posts) {
    this.posts = posts;
  }
  render() {
    return this.posts.map(post => <p>{post.title}</p>);
  }
}`
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fakeProjects.length);
    }, 5000); // change project every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentProject = fakeProjects[currentIndex];

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      

      <div className="bg-gray-900 text-gray-100 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">{currentProject.name}</h3>
        <div className="bg-gray-800 p-4 rounded-md font-mono text-sm">
          <ReactTyped
            strings={[currentProject.code]}
            typeSpeed={30}
            backSpeed={20}
            loop
            showCursor={true}
            cursorChar="|"
          />
        </div>
      </div>
    </div>
  );
}

export { CodeSnippets };
