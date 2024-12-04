import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">Hamra Academy?</span>
      </h1>
      
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
        Welcome to Hamra Academy &ndash; where growth meets opportunity. Our mission is to empower individuals to unlock their full potential by mastering the art and science of project management and developing essential interpersonal skills.
          <br />
          <br />
          Founded by Jafar Hamra, Hamra Academy was born from a deep understanding of the modern professional&apos;s need to adapt, communicate, and lead in an increasingly dynamic world. With years of experience and a passion for education, 
          I envisioned a platform that goes beyond theoretical knowledge to deliver real-world solutions and strategies that professionals can immediately apply.
          <br />
          <br />
          At Hamra Academy, we believe that growth is a continuous journey, and we are here to guide you every step of the way. Whether you&apos;re looking to advance your career, transition into a new role, or simply enhance your skills, we provide the resources and support you need to succeed.
          <br />
          <br />
          <h2>Why Choose Us?</h2>
<p>&mdash;Practical Learning: Our courses are designed to bridge the gap between knowledge and application, helping you tackle real-world challenges with confidence.</p>
<p>&mdash;Expert Guidance: Learn from seasoned professionals and educators with years of experience in project management and communication.</p>
<p>&mdash;Community-Driven: Join a growing network of learners and professionals who support and inspire each other.</p>
<p>&mdash;Flexible Access: Whether you&apos;re a working professional or a student, our platform offers courses and resources tailored to your schedule and goals.</p>
          <br />
          <br />
          <h2>Our Focus Areas:</h2>

          <p>&mdash;Project Management: From fundamentals to advanced methodologies, we cover every aspect of planning, execution, and successful delivery.</p>
          <p>&mdash;Interpersonal Skills: Master communication, leadership, teamwork, and emotional intelligence to stand out in any professional setting.</p>
          <p>&mdash;Practical Tools: Gain hands-on experience with project management software and tools that are indispensable in today&apos;s workplace.</p>
          <br />
          <br />
          <h2>Join Us Today</h2>
Take the first step toward transforming your professional life. Explore our courses, connect with like-minded individuals, and let&apos;s grow together!
        </p>
        <br />
        <span className="text-[22px]">Jafar Hamra</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of Hamra Academy
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
