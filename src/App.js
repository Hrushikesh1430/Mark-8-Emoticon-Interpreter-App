import { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "😊": "Smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑":
      "annoyance" /** add some more to show how the app now expands when there's new data */
  };

  const emoji_list = Object.keys(emojiDictionary);
  const intial = "Your emoji text will appear here";
  const [emoji, setEmoji] = useState("");
  const [result, setResult] = useState(intial);

  const emojiHandler = (event) => {
    var current_emoji = event.target.value;
    setEmoji(current_emoji);
    if (current_emoji === "") {
      setResult(intial);
    } else {
      if (current_emoji in emojiDictionary) {
        setResult(emojiDictionary[current_emoji]);
      } else {
        setResult("Emoji not found");
      }
    }
  };

  const emojiClickHandler = (item) => {
    setEmoji(item);
    setResult(emojiDictionary[item]);
  };
  console.log(result);
  return (
    <div className="App">
      <h1>Enter your emoji here</h1>
      <input type="text" className="emojiinput" onChange={emojiHandler}></input>

      <p style={{ fontSize: "30px" }}>{emoji}</p>
      <p>{result}</p>

      <p className="click-inst">
        Click on some emojis down here to see the magic or type your own
      </p>
      <ul>
        {emoji_list.map((item, index) => {
          return (
            <li key={index} onClick={() => emojiClickHandler(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
