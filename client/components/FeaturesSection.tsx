export default function FeaturesSection() {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-16 lg:p-20">
      <div className="max-w-[1232px] mx-auto space-y-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-5 flex-1">
            <h2 className="text-4xl md:text-5xl font-semibold leading-[140%] tracking-[-0.042em]">
              Features That Make <span className="text-green-70">Fyndae</span>{" "}
              Stand Out
            </h2>
            <p className="text-gray-100 text-lg md:text-xl leading-[150%]">
              People who've lost valuable items with a network of community
              helpers ready to act. Track progress, stay informed and trust our
              secure escrow system to reward verified leads when your item is
              found.
            </p>
          </div>
          <button className="px-6 py-3 rounded-lg bg-green-70 text-white font-medium text-lg leading-[150%] hover:bg-green-70/90 transition-colors">
            View All
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#F5FEE8] rounded-[32px] p-8 md:p-10 flex flex-col gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-dark-80">
                  Fast & Easy Lost Item Reporting
                </h3>
                <p className="text-dark-80 text-lg md:text-xl leading-[150%]">
                  Create a custom card that reflects your unique style and
                  personality. Choose from a range of colors, patterns, and
                  designs to customize the look of your card.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f026f7fba1c1589450d30dcb0c4bfb374e9774cd?width=1208"
                  alt="Person reporting lost item"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            <div
              className="bg-green-70 rounded-[32px] p-8 md:p-10 flex flex-col gap-5 relative overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://api.builder.io/api/v1/image/assets/TEMP/69894cf3f32b01e3de7e376405c615f7946b0139?width=1208')",
                backgroundSize: "100px 100px",
              }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Instant Alerts & Updates
                </h3>
                <p className="text-white text-lg md:text-xl leading-[150%]">
                  Stay updated at every stage. Get alerts when new leads come
                  in, when your report status changes or when someone spots
                  something related.
                </p>
              </div>
              <div className="relative mt-auto">
                <svg
                  width="223"
                  height="223"
                  viewBox="0 0 214 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 right-0 w-32 md:w-56"
                >
                  <path
                    d="M164.831 166.349C152.248 152.603 151.277 125.895 151.517 115.377C151.765 109.902 151.704 104.553 150.785 99.1525C147.78 80.6026 137.631 61.1859 124.892 49.5611V43.8598C124.892 38.1977 120.902 31.2856 115.993 28.4502C113.424 26.965 110.967 26.769 109.073 27.9014L87.2865 40.4713C86.4764 40.9155 85.8187 41.5688 85.3309 42.392C84.8387 43.2152 84.5121 44.2126 84.364 45.3494C84.3335 45.3668 69.9735 53.6596 69.9474 53.6727C64.1154 57.0046 60.1301 63.3767 58.3836 72.1094C57.4472 76.4518 57.3993 82.2054 57.6388 87.5277C57.8348 97.7239 57.1118 121.304 46.393 122.537C46.2493 122.515 46.1099 122.528 45.9749 122.572C45.6656 122.598 45.3607 122.598 45.0646 122.581C42.3032 122.824 40.622 125.429 40.6133 129.205C40.6133 131.705 41.3494 134.48 42.6865 137.01C44.041 139.567 45.8529 141.588 47.7911 142.707L76.6112 159.349C76.8464 169.794 84.1767 182.338 93.162 187.525C97.4391 189.912 101.655 190.848 105.649 188.531L116.407 182.32L138.533 195.099C140.358 196.131 142.235 196.445 143.955 195.408L165.624 182.904C165.82 182.804 166.012 182.686 166.225 182.534C170.594 178.862 168.124 170.56 164.831 166.349Z"
                    fill="#05231E"
                  />
                  <path
                    d="M108.844 177.956C108.73 186.701 102.511 190.952 94.0307 186.018C85.8206 181.274 79.0609 170.05 78.3945 160.377C85.4286 164.441 101.992 174.001 108.844 177.956Z"
                    fill="#E5FDC5"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F8] rounded-[32px] p-8 md:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-dark-80">
                  Community Search Support
                </h3>
                <p className="text-dark-80 text-lg md:text-xl leading-[150%]">
                  Once an item is reported, our growing community starts looking
                  out for it, giving you more eyes, more reach and a higher
                  chance of getting it back.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4e53cddcf73a465e4ad7feb022a2db76972a0469?width=1376"
                  alt="Community network"
                  className="w-full h-auto mix-blend-darken"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#EFFEDC] rounded-[32px] p-8 md:p-10 flex flex-col gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-dark-80">
                  Verified Leads Only
                </h3>
                <p className="text-dark-80 text-lg md:text-xl leading-[150%]">
                  Each lead is screened to focus only seeing genuine information
                  that can help
                </p>
              </div>
              <div className="mt-auto">
                <div className="w-full h-48 bg-white rounded-2xl border-2 border-[#0A463D] shadow-[4px_4px_0_2px_#0A463D] flex items-center justify-center">
                  <svg
                    width="100"
                    height="99"
                    viewBox="0 0 131 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-24 h-24"
                  >
                    <path
                      d="M80.0028 49.3819L61.0395 78.303L48.051 69.4478"
                      stroke="white"
                      strokeWidth="8.65305"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M78.6206 97.3473C96.5016 89.9966 105.038 69.5423 97.6872 51.6613C90.3365 33.7804 69.8822 25.244 52.0013 32.5947C34.1204 39.9454 25.5839 60.3997 32.9347 78.2807C40.2854 96.1616 60.7397 104.698 78.6206 97.3473Z"
                      fill="url(#paint4_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint4_linear"
                        x1="41.541"
                        y1="55.0508"
                        x2="82.1054"
                        y2="71.98"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#117465" stopOpacity="0" />
                        <stop offset="1" stopColor="#117465" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div
              className="bg-green-70 rounded-[32px] p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://api.builder.io/api/v1/image/assets/TEMP/53a2a5c3011f6e164d2235d7ae5faea15fc45e8c?width=822')",
                backgroundSize: "100px 100px",
              }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  Safe Reward System
                </h3>
                <p className="text-white text-lg md:text-xl leading-[150%]">
                  Your money is held securely until your item is found and only
                  released after confirmation
                </p>
              </div>
              <div className="mt-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e3029607b0d8e3317fad3a46853787de4e041c2a?width=662"
                  alt="Happy person with phone"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-[#EFFEDC] rounded-[32px] p-8 md:p-10 flex flex-col gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-dark-80">
                  Privacy & Protection
                </h3>
                <p className="text-dark-80 text-lg md:text-xl leading-[150%]">
                  Your identity, contact details and personal information stay
                  completely private.
                </p>
              </div>
              <div className="mt-auto flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e2ae552802ace22515b4b98d1e323601055362b5?width=540"
                  alt="Security shield"
                  className="w-48 h-48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
