// components/Loading.js
const Loading = () => {
  return (
    <div className="container pt-10 justify-center items-center flex">
      <button
        type="button"
        className="bg-[#0ff] cursor-not-allowed opacity-75 px-4 py-2 rounded-md flex items-center justify-center"
      >
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" />
        </svg>
        Loading...
      </button>

      <div className="neon-loader">
        <div className="neon-loader-ring"></div>
      </div>
    </div>
  );
};

export default Loading;
