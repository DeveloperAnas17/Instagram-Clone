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
  console.log(suggestion);

  return (
    <div className="">
      {suggestion.map((profile) => (
        <Story key={profile.id} name={profile.name} avatar={profile.avatar} />
      ))}
    </div>
  );
}

export default Stories;
