import faker from "faker";
import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

function Suggestions() {
  const [suggestions, setSuggestion] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestion(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5 ">
        <h3 className="text-sm font-bold text-gray-400">Suggesion for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <Suggestion
          key={profile.id}
          avatar={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Suggestions;
