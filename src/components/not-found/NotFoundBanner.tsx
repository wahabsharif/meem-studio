import Link from "next/link";
import React from "react";

const NotFoundBanner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col items-center">
        <div className="glitch my-10">
          <h1 className="text-9xl font-bold">4 0 4</h1>
          <h1 className="text-9xl font-bold">4 0 4</h1>
          <h1 className="text-9xl font-bold">4 0 4</h1>
        </div>
        <div className="text-center mt-8">
          <p className="text-4xl my-4">Page Not Found</p>
          <p className="text-2xl mt-2">
            The page you are looking for does not exist.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundBanner;
