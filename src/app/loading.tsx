

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* Animated Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        <div className="absolute w-10 h-10 bg-blue-600 rounded-full animate-pulse opacity-20"></div>
      </div>

      {/* Loading Text */}
      <h2 className="mt-8 text-2xl font-bold text-blue-700 tracking-wide">
        Loading...
      </h2>

      <p className="mt-2 text-gray-500 text-sm animate-pulse">
        Please wait while we prepare everything for you.
      </p>

      {/* Loading Progress Animation */}
      <div className="w-48 h-1.5 bg-blue-100 rounded-full mt-6 overflow-hidden">
        <div className="h-full w-1/2 bg-blue-600 rounded-full animate-pulse"></div>
      </div>

    </div>
  );
};

export default LoadingPage;
