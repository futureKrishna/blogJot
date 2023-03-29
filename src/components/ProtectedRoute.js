import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("login");
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

/*
export const details = [
  {
    id: 508429,
    name: "krishna",
    email: "krishna10@gmail.com",
    gender: "male",
    status: "active",
  },
  {
    id: 512016,
    name: "rishabh",
    email: "rishabhsharma20@gmail.com",
    gender: "male",
    status: "active",
  },
  {
    id: 508552,
    name: "prachal",
    email: "prachalgupta@gmail.com",
    gender: "male",
    status: "active",
  },
  {
    id: 508572,
    name: "prashansa",
    email: "prashansatiwari@gmail.com",
    gender: "male",
    status: "active",
  },
];

export const allBlogs = [
  {
    id: 5596,
    user_id: 508429,
    title: "Ancient Monuments",
    body: "Ancient monuments are structures built by humans in the distant past often with a significant cultural or historical value These monuments are often made of stone or other durable materials and have survived for thousands of years Ancient monuments can be found all over the world, from the pyramids of Egypt to the Stonehenge in England Many ancient monuments were built by ancient civilizations such as the Egyptians, Greeks, Romans, and Mayans These structures often served important religious",
  },
  {
    id: 5613,
    user_id: 508429,
    title: "Numbers",
    body: "Mathematicians are professionals who study and explore the principles of numbers, quantities, and shapes. They use logical reasoning, critical thinking, and problem-solving skills to develop theories and solve complex problems. They contribute to many fields of study, including science, engineering, finance, and technology.",
  },
  {
    id: 5612,
    user_id: 508552,
    title: "Numbers",
    body: "Numbers are the foundation of mathematics and provide a universal language for quantifying and measuring the world around us. They can represent everything from physical quantities, like distance and time, to abstract concepts, like ideas and emotions. Numbers come in many forms, including whole numbers, fractions, decimals, and even complex numbers.",
  },
  {
    id: 5599,
    user_id: 508552,
    title: "Dancers",
    body: "Dancing is a form of rhythmic movement that is enjoyed by people all over the world. It is a universal language that can express emotions, tell stories, and bring people together. Dancing has many benefits, including improving physical fitness, coordination, and balance, as well as reducing stress and boosting mood. It is also a form of creative expression that allows individuals to explore their own unique style and personality. ",
  },
];
*/
