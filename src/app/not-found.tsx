import Link from "next/link";



const NotfoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="text-center max-w-lg">

        {/* 404 Illustration */}
        <h1 className="text-[120px] sm:text-[160px] font-extrabold text-blue-600 leading-none drop-shadow-lg">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 text-lg mt-4 leading-relaxed">
          Sorry, the page you are looking for doesnt exist
          or has been moved to another location.
        </p>

 
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          ← Back to Home
        </Link>

        <p className="text-sm text-gray-400 mt-10">
          Error Code: 404 | Lost in the digital world?
        </p>

      </div>
    </div>
  );
};

export default NotfoundPage;
