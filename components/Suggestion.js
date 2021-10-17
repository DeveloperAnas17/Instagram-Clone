function Suggestion({ avatar, username }) {
  console.log(username);
  return (
    <div className="flex items-center justify-between mt-3">
      <div className="flex items-center flex-1">
        <img
          className="w-10 h-10 rounded-full border p-1"
          src={avatar}
          alt=""
        />
        <h3 className="ml-2 text-sm font-semibold">{username}</h3>
      </div>
      <button className="text-sm text-blue-400">Follow</button>
    </div>
  );
}

export default Suggestion;
