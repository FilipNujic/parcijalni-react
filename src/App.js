import { useState } from "react";
import Forma from "./components/Forma";
import Detalji from "./components/Detalji";

export const App = () => {
  const [input, setInput] = useState("");
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleFetchUsername = async (e) => {
    e.preventDefault();
    await fetch(`https://api.github.com/users/${input}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  const handleFetchRepo = async (e) => {
    e.preventDefault();
     await fetch(`https://api.github.com/users/${input}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data));
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center ">
      <Forma
        input={input}
        handleChange={handleChange}
        handleFetchUsername={handleFetchUsername}
      />
      <div>
        <img src={user.avatar_url} alt="" />
      </div>
      <p className="text-white">User: {user.name}</p>
      <p className="text-white">Location: {user.location}</p>
      <p className=" text-white">Bio: {user.bio}</p>
      <button
        className="px-4 py-2 my-2 bg-blue-500 text-white hover:bg-blue-400 rounded-full"
        id="button"
        onClick={handleFetchRepo}
      >Prikazi korisnicke repozitorije</button>
      <ul>
      {repos.map((item) => (
        <Detalji key={item.id} avatar={item.svn_url} name={item.name} />
      ))}
      </ul>
    </div>
  );
};

export default App;
