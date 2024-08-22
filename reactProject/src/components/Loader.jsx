const Loader = () => {
  return (
    <>
      <div className="text-center">
        <div className="w-40 h-40 border-4 border-dashed rounded-full animate-spin border-black mx-auto"></div>
        <h2 className="text-zinc-900 font-bold text-2xl mt-4">Loading...</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Data fetching please wait!
        </p>
      </div>
    </>
  );
};

export default Loader;
