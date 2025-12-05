const HeroSkeleton = () => {
  return (
    <div className="md:pt-28 pb-28 py-12 relative h-full w-full bg-[#0f172a] overflow-hidden">
      {/* Background skeleton */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_39px]"></div>

      <div className="grid md:grid-cols-2 grid-cols-1 container md:gap-20 gap-10 pt-10">
        {/* Left Column Skeleton */}
        <div className="text-[#ffffff] relative">
          {/* Title skeleton */}
          <div className="mb-8">
            <div className="h-4 w-32 bg-gray-800 rounded-full mb-4 animate-pulse"></div>
            <div className="h-12 bg-gray-800 rounded-lg w-3/4 mb-3 animate-pulse"></div>
            <div className="h-10 bg-gray-800 rounded-lg w-2/3 animate-pulse"></div>
          </div>

          {/* Bio card skeleton */}
          <div className="relative p-6 rounded-xl bg-gray-900/50 border border-gray-800 mb-6">
            <div className="space-y-3">
              <div className="h-4 bg-gray-800 rounded-full w-full animate-pulse"></div>
              <div className="h-4 bg-gray-800 rounded-full w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-800 rounded-full w-4/5 animate-pulse"></div>
              <div className="h-4 bg-gray-800 rounded-full w-3/4 animate-pulse"></div>
            </div>

            {/* Bullet points skeleton */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
                <div className="h-3 bg-gray-800 rounded-full w-4/5 animate-pulse"></div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="h-3 bg-gray-800 rounded-full w-3/4 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>

            {/* Stats grid skeleton */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="text-center p-3 rounded-lg bg-gray-800/50 animate-pulse"
                  >
                    <div className="h-8 bg-gray-800 rounded-lg mb-2 w-12 mx-auto"></div>
                    <div className="h-3 bg-gray-800 rounded-full w-16 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons skeleton */}
          <div className="md:flex md:space-y-0 space-x-7">
            <div className="h-12 bg-gray-800 rounded-xl w-48 animate-pulse"></div>
            <div className="h-12 bg-gray-800 rounded-xl w-40 animate-pulse mt-4 md:mt-0"></div>
          </div>
        </div>

        {/* Right Column Skeleton */}
        <div className="rounded-2xl mt-4">
          <div className="relative">
            {/* Image container skeleton */}
            <div className="relative overflow-hidden rounded-[24px] bg-gray-900 border border-gray-800 p-3">
              <div className="w-full h-[500px] md:h-[610px] bg-gray-800 rounded-2xl animate-pulse"></div>

              {/* Badges skeleton */}
              <div className="absolute top-7 right-1">
                <div className="px-5 py-3 bg-gray-800 rounded-full w-32 animate-pulse"></div>
              </div>
              <div className="absolute bottom-96 left-1">
                <div
                  className="px-5 py-3 bg-gray-800 rounded-full w-40 animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
              </div>
              <div className="absolute bottom-52 left-1">
                <div
                  className="px-5 py-3 bg-gray-800 rounded-full w-32 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
              <div className="absolute bottom-6 left-1">
                <div
                  className="px-5 py-3 bg-gray-800 rounded-full w-28 animate-pulse"
                  style={{ animationDelay: "0.7s" }}
                ></div>
              </div>

              {/* Status indicator skeleton */}
              <div className="absolute top-8 left-8">
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-800 rounded-full w-48 animate-pulse">
                  <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                  <div className="h-3 bg-gray-700 rounded-full w-32"></div>
                </div>
              </div>
            </div>

            {/* Stats card skeleton */}
            <div className="absolute -bottom-10 -right-10 md:block hidden">
              <div className="relative p-6 bg-gray-900 border border-gray-800 rounded-3xl min-w-[280px] animate-pulse">
                <div className="text-center mb-4">
                  <div className="h-10 bg-gray-800 rounded-lg mb-2 w-24 mx-auto"></div>
                  <div className="h-3 bg-gray-800 rounded-full w-32 mx-auto"></div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  <div className="h-3 bg-gray-800 rounded-full w-28"></div>
                  <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                </div>
                <div className="mt-4 w-full h-2 bg-gray-800 rounded-full"></div>
              </div>
            </div>

            {/* Social icons skeleton */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-4 md:gap-5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-gray-800 w-12 h-12 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
