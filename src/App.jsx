import { useState } from "react";
import Input from "./Input";
import { cities } from "./cities";

function App() {
  const [hint, setHint] = useState("");
  const [value, setValue] = useState("");
  

  const handleChange = (e) => {
    setValue(e.target.value);

    const find = cities.find((i) => i.startsWith(value));
    setHint(find || "");
  };

  return <Input hint={hint} handleChange={handleChange} />;
}

export default App;
