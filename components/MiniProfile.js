function MiniProfile() {
  return (
    <div className="mt-8 flex items-center justify-between ml-10">
      <img
        className="rounded-full w-16 h-16 border p-[2px] "
        src="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s48-c-k-c0x00ffffff-no-rj"
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">@anasabbasi</h2>
        <h3 className="font-semibold text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
