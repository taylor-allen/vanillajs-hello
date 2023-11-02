/* eslint-disable */

import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");

  let generateExcuse = () => {
    let pronoun = ["A", "The"];
    let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pinecone"];
    let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
    let possession = ["homework", "toe", "car", "shoe"];
    let where = [
      "on the street",
      "in my house",
      "in my driveway",
      "at the gym"
    ];

    let proIndex = Math.floor(Math.random() * pronoun.length);
    let subjIndex = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possessionIndex = Math.floor(Math.random() * possession.length);
    let whereIndex = Math.floor(Math.random() * where.length);

    return (
      pronoun[proIndex] +
      " " +
      subject[subjIndex] +
      " " +
      action[actionIndex] +
      " " +
      possession[possessionIndex] +
      " " +
      where[whereIndex]
    );
  };
};
