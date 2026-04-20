import { useEffect, useState } from "react";

function App() {
const [data, setData] = useState("");

useEffect(() => {
fetch("http://127.0.0.1:64360/api")
.then(res => res.json())
.then(data => setData(data.message));
}, []);

return ( <div> <h1>Frontend App</h1> <p>{data}</p> </div>
);
}

export default App;
