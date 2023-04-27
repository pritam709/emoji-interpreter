import { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiMeanings = {
    "😀": "Grinning",
    "😅": "Sweat smile",
    "😇": "Innocent",
    "😑": "Expressionless",
    "🥳": "Partying face"
  };

  var emojiWeKonw = Object.keys(emojiMeanings);
  var [inputMeaning, setInput] = useState("translation will appear here..");
  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiMeanings[userInput];

    if (meaning === undefined) {
      meaning = "Sorry we dont have this emoji in our emojipedia!!!";
      setInput(meaning);
    } else {
      setInput(userInput + ":" + meaning);
    }
  }

  function spanClickHandler(item) {
    var meaning = emojiMeanings[item];
    setInput(item + " " + meaning);
  }

  return (
    <div className="App">
      <h1>confused with emojies????</h1>
      <h2>So lets find meaning of an emoji </h2>
      <input
        placeholder="Srearch your emoji"
        id="userInput"
        onChange={inputChangeHandler}
      />
      <h3>{inputMeaning}</h3>
      <h3>emojis that we have are following:</h3>
      {emojiWeKonw.map((item) => {
        return (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => spanClickHandler(item)}
            key={item}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
