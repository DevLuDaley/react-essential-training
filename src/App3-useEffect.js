import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  let [emotion, setEmotion] = useState("happy")
  let [duece, setDuece] = useState("tired")
  // console.log('🚀 ~ file: App.js ~ line 6 ~ App ~ emotion ', emotion );
  useEffect(()=> {
    console.log(`It's ${emotion} around here`)
  // })
  }, [emotion])

  useEffect(()=> {
    console.log(`She looks ${duece}`)
  // })
  }, [duece])
  return (
<>
      <div className="App">
        <h1> Hello Worlds</h1>
        <h1> Current vibe is {emotion} & energy level is {duece} </h1>


        <button onClick={() => setEmotion(emotion == "jovial" ? emotion = "happy" : emotion = "jovial" )} > toggle my emotions </button>
        
        <button onClick={() => setEmotion("enthused")} > Enthuse </button>
        <button onClick={() => setDuece("energized")} > Energize </button>
        <button onClick={() => setDuece("tired")} > unwind </button>
      </div>
</>
  );
}

export default App;
