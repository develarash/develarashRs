import React, { useState,useContext } from "react";
import { tokenContext } from "../context/getdatacntx";
import "../styles/questions.css";
const Question = () => {
  const data = [
    {
      question: "Tell me about yourself ؟",
      answer:
        "My name is Arash full JavaScript developer I was born in 1999 and studied computer software in high school and university I have participated in startup projects and cooperated with software companies, and now I can fulfill all your expectations from a fullstack programmer.",
    },
    {
      question: "Where are you based now?",
      answer:
        "I am currently based in Iran",
    },
    {
      question: "Do you speak another language besides English?",
      answer:
        "Yes, intermediate level French",
    },
    {
      question: "What is your plan in the future of your work?",
      answer:
        " My plan is to develop individual skills and implement new ideas with the team",
    },
    {
      question: "Do you have the ability to deal with bugs and errors?",
      answer:
        " Yes, I try to fix the errors and bugs that occur in the work process with persistence",
    },
    {
      question: "Do you have the ability to use and implement the skills mentioned by you ?",
      answer:
        "Yes, I am able to develop with them. All the skills I have mentioned are used to develop group tasks",
    },
    {
      question: "What is your greatest strength?",
      answer:
        "In my opinion, I am a persistent person and I can say that as one of my strengths",
    },
    {
      question: "Tell me about a time you were successful on a team ?",
      answer:
        "In teamwork, the progress and success of the team is actually the same as personal progress and success, and the product and service created by us is proud.",
    },
    {
      question: "What would your teammate say about you ?",
      answer:
        "This is a question with different views After a short period of working with me, they notice my efforts to do things correctly and on time And they also know that I try to provide the best in my position",
    },
   
   
    {
      question: "Tell me about something you’ve accomplished that you are proud of ? ",
      answer:
        "I am proud of all the projects that I have worked on,😉 ",
    },
 
  ];
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="accordion">
      <h1>      Some questions that might help you get to know me better
</h1>
      {data.map((item, i) => (
        <div className="itemAccordion" key={i}>
          <div
            className={selected === i ? "title yellow" : "title white"}
            onClick={() => toggle(i)}
          >
            <h2>
              {" "}
              <span>{i + 1} -</span>
              {item.question}
            </h2>
            <span>{selected === i ? "-" : "+"}</span>
          </div>
          <div className={selected === i ? "content show" : "content"}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;


// {
//   question: "Why should we hire you?",
//   answer:
//     "As a front-end and back-end developer, I do my best to develop and implement the company's needs.",
// },
// {
//   question: "Why do you want to work here?",
//   answer:
//     "According to your needs, I have the ability to implement the services provided by you, and in addition to the development of the company, I want to develop my capabilities in the field of developing large applications.",
// },
//  {
//   question: "Why do you want to leave your current role? ",
//   answer:
//     "This has been completed with the satisfaction of my colleagues and partners And my tasks have been completed I also do this to improve my talent and projects",
// },
// {
//   question: "Describe your most challenging project ? ",
//   answer:
//     "As far as I remember, it was the biggest challenge in the previous two years that there were a series of changes in the customs and financial laws of the target country, which caused fundamental changes in the project and the company, and we tried to resolve them.",
// },