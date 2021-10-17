import { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";

function Stories() {
  const [suggestion, setSuggestion] = useState([]);
  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestion(suggestion);
  }, []);

  return (
    <div className="flex items-center space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestion.map((profile) => (
        <Story
          key={profile.id}
          username={profile.username}
          avatar={profile.avatar}
        />
      ))}
    </div>
  );
}

export default Stories;
