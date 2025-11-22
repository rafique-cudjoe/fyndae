export default function StatsSection() {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-16 lg:p-20">
      <div className="max-w-[1232px] mx-auto">
        <div className="flex flex-col items-center gap-10 mb-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold leading-[140%] tracking-[-0.056em]">
              In a remarkably short period,{" "}
              <span className="text-green-70">Fyndae</span> has connected
              thousands of users, verified hundreds of profiles and institutions
              and facilitated the recovery of countless missing items through
              authentic leads and secure rewards.
            </h2>
            <p className="text-lg md:text-xl max-w-[1130px] text-black leading-[150%]">
              With a strong verification engine and a transparent recovery
              system, we're building a safer, more reliable way for people to
              find what they've lost and confirm who they can trust.
            </p>
          </div>

          <div className="flex items-center gap-1 px-4 py-4 rounded-3xl border border-gray-40 bg-[#F7F7F8]">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6871 15.3805L14.3831 17.6158C15.0599 18.0255 15.8882 17.4199 15.71 16.654L14.7304 12.4504L17.9989 9.61836C18.5955 9.10182 18.2749 8.12218 17.4912 8.05984L13.1897 7.69469L11.5065 3.72267C11.2037 3.0013 10.1706 3.0013 9.86779 3.72267L8.18458 7.68579L3.88304 8.05093C3.09932 8.11327 2.77871 9.09292 3.3754 9.60946L6.64386 12.4415L5.66421 16.6451C5.4861 17.411 6.31434 18.0166 6.99119 17.6069L10.6871 15.3805Z"
                  fill="#0A463D"
                />
              </svg>
            ))}
            <span className="ml-1 text-gray-100 font-medium text-base leading-[140%]">
              4.8 (1700+ Reviews)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-6">
          <div className="flex flex-col items-center gap-5">
            <div className="text-green-70 text-4xl md:text-5xl font-bold leading-[140%]">
              270+
            </div>
            <div className="text-[#333] text-center text-lg font-semibold leading-[150%]">
              Reports Solved
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="text-green-70 text-4xl md:text-5xl font-bold leading-[140%]">
              98%
            </div>
            <div className="text-[#333] text-center text-lg font-semibold leading-[150%]">
              Satisfaction Rate
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="text-green-70 text-4xl md:text-5xl font-bold leading-[140%]">
              100+
            </div>
            <div className="text-[#333] text-center text-lg font-semibold leading-[150%]">
              Verification Checks
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="text-green-70 text-4xl md:text-5xl font-bold leading-[140%]">
              200+
            </div>
            <div className="text-[#333] text-center text-lg font-semibold leading-[150%]">
              Verifiable Leads
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
