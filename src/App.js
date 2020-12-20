import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😂": "laughing",
  "😡": "angry",
  "🎂": "cake",
  "😴": "sleeping",
  "🤔": "thinking",
  "": "empty"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiClickHandler(emoji) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this emoji in over dictionary";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>emoji search</h1>
      <input onChange={onChangeHandler}></input>
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>

      {emojisWeKnow.map((emoji, index) => {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{
              padding: "2rem",
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
