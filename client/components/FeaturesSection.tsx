export default function FeaturesSection() {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-16 lg:p-20">
      <div className="max-w-[1232px] mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-5 flex-1">
            <h2 className="text-4xl md:text-5xl font-semibold leading-[140%] tracking-[-0.042em] text-[#0A0814]">
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
          <button className="px-6 py-3 rounded-lg bg-green-70 text-white font-medium text-lg leading-[150%] hover:bg-green-70/90 transition-colors whitespace-nowrap">
            View All
          </button>
        </div>

        {/* Features Grid */}
        <div className="space-y-6">
          {/* Top Row - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Fast & Easy Lost Item Reporting */}
            <div className="bg-[#F5FEE8] rounded-[32px] p-8 md:p-10 flex flex-col gap-10 relative">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#100E21]">
                  Fast & Easy Lost Item Reporting
                </h3>
                <p className="text-[#100E21] text-lg md:text-xl leading-[150%]">
                  Create a custom card that reflects your uinque style and
                  personality. Choose from a range of colors, patterns, and
                  designs to customize the look of your card.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f026f7fba1c1589450d30dcb0c4bfb374e9774cd?width=1208"
                  alt="Person reporting lost item"
                  className="w-full h-auto"
                />
                {/* Floating Widget */}
                <div className="absolute -top-8 md:-top-12 lg:-top-16 right-4 md:right-8 w-[220px] md:w-[270px] bg-white rounded-xl border-2 border-[#0A463D] shadow-[4px_4px_0_2px_#0A463D] p-4 z-10">
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-100">
                      Start A Report In Seconds
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between px-4 py-2 rounded-lg border border-gray-40 bg-[#F7F7F8]">
                        <span className="text-xs font-medium text-gray-100">
                          Item Category
                        </span>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.72279 4.05176C9.49589 4.05176 9.29331 4.1409 9.14745 4.28676L6.48141 6.9609L3.81538 4.28676C3.66952 4.1409 3.46693 4.05176 3.24003 4.05176C2.79434 4.05176 2.42969 4.41641 2.42969 4.8621C2.42969 5.089 2.51883 5.29159 2.66469 5.43745L5.90607 8.67883C6.05193 8.82469 6.25451 8.91383 6.48141 8.91383C6.70831 8.91383 6.91089 8.82469 7.05676 8.67883L10.2981 5.43745C10.444 5.29159 10.5331 5.089 10.5331 4.8621C10.5331 4.41641 10.1685 4.05176 9.72279 4.05176Z"
                            fill="#21242C"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center justify-between px-4 py-2 rounded-lg border border-gray-40 bg-[#F7F7F8]">
                        <span className="text-xs font-medium text-gray-100">
                          Location Last Seen
                        </span>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.72279 4.05176C9.49589 4.05176 9.29331 4.1409 9.14745 4.28676L6.48141 6.9609L3.81538 4.28676C3.66952 4.1409 3.46693 4.05176 3.24003 4.05176C2.79434 4.05176 2.42969 4.41641 2.42969 4.8621C2.42969 5.089 2.51883 5.29159 2.66469 5.43745L5.90607 8.67883C6.05193 8.82469 6.25451 8.91383 6.48141 8.91383C6.70831 8.91383 6.91089 8.82469 7.05676 8.67883L10.2981 5.43745C10.444 5.29159 10.5331 5.089 10.5331 4.8621C10.5331 4.41641 10.1685 4.05176 9.72279 4.05176Z"
                            fill="#21242C"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-lg border border-gray-40 bg-[#F7F7F8]">
                        <div className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-40 bg-[#F7F7F8]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                              stroke="#117465"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M9.778 21H14.222C17.343 21 18.904 21 20.025 20.265C20.5088 19.9482 20.9254 19.5391 21.251 19.061C22 17.961 22 16.428 22 13.364C22 10.3 22 8.76705 21.251 7.66705C20.9254 7.18904 20.5088 6.77991 20.025 6.46305C19.305 5.99005 18.403 5.82105 17.022 5.76105C16.363 5.76105 15.796 5.27105 15.667 4.63605C15.5684 4.17092 15.3123 3.75408 14.9418 3.456C14.5714 3.15791 14.1095 2.99686 13.634 3.00005H10.366C9.378 3.00005 8.527 3.68505 8.333 4.63605C8.204 5.27105 7.637 5.76105 6.978 5.76105C5.598 5.82105 4.696 5.99105 3.975 6.46305C3.49154 6.78001 3.07527 7.18914 2.75 7.66705C2 8.76705 2 10.299 2 13.364C2 16.429 2 17.96 2.749 19.061C3.073 19.537 3.489 19.946 3.975 20.265C5.096 21 6.657 21 9.778 21Z"
                              stroke="#117465"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M19 10H18"
                              stroke="#117465"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-gray-100">
                          Upload a picture
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Alerts & Updates */}
            <div
              className="bg-green-70 rounded-[32px] p-8 md:p-10 flex flex-col gap-5 relative"
              style={{
                backgroundImage:
                  "url('https://api.builder.io/api/v1/image/assets/TEMP/69894cf3f32b01e3de7e376405c615f7946b0139?width=1208')",
                backgroundSize: "100px 100px",
              }}
            >
              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Instant Alerts & Updates
                </h3>
                <p className="text-white text-lg md:text-xl leading-[150%]">
                  Stay updated at every stage. Get alerts when new leads come
                  in, when your report status changes or when someone spots
                  something related.
                </p>
              </div>

              {/* Notification Widgets */}
              <div className="relative h-[340px] md:h-[380px] mt-auto">
                {/* Bell Icon - Positioned at the very top */}
                <svg
                  className="absolute -top-32 md:-top-40 lg:-top-48 right-8 md:right-12 lg:right-16 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 z-20"
                  width="223"
                  height="223"
                  viewBox="0 0 214 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M164.831 166.349C152.248 152.603 151.277 125.895 151.517 115.377C151.765 109.902 151.704 104.553 150.785 99.1525C147.78 80.6026 137.631 61.1859 124.892 49.5611V43.8598C124.892 38.1977 120.902 31.2856 115.993 28.4502C113.424 26.965 110.967 26.769 109.073 27.9014L87.2865 40.4713C86.4764 40.9155 85.8187 41.5688 85.3309 42.392C84.8387 43.2152 84.5121 44.2126 84.364 45.3494C84.3335 45.3668 69.9735 53.6596 69.9474 53.6727C64.1154 57.0046 60.1301 63.3767 58.3836 72.1094C57.4472 76.4518 57.3993 82.2054 57.6388 87.5277C57.8348 97.7239 57.1118 121.304 46.393 122.537C46.2493 122.515 46.1099 122.528 45.9749 122.572C45.6656 122.598 45.3607 122.598 45.0646 122.581C42.3032 122.824 40.622 125.429 40.6133 129.205C40.6133 131.705 41.3494 134.48 42.6865 137.01C44.041 139.567 45.8529 141.588 47.7911 142.707L76.6112 159.349C76.8464 169.794 84.1767 182.338 93.162 187.525C97.4391 189.912 101.655 190.848 105.649 188.531L116.407 182.32L138.533 195.099C140.358 196.131 142.235 196.445 143.955 195.408L165.624 182.904C165.82 182.804 166.012 182.686 166.225 182.534C170.594 178.862 168.124 170.56 164.831 166.349ZM109.909 29.4302C111.259 28.5939 113.088 28.7899 115.122 29.9615C119.547 32.5182 123.149 38.7509 123.149 43.8598V49.5786L102.931 61.1162V56.5342C102.805 49.9923 97.9922 41.9391 91.4808 40.0662L109.909 29.4302ZM84.2681 47.4182V51.7519C82.0425 51.2859 79.7646 51.1247 77.4997 51.3251L84.2681 47.4182ZM59.381 87.4973C58.5317 75.3586 60.692 60.9986 70.7488 55.2232C70.7793 55.2058 70.8141 55.184 70.8446 55.1666C74.8603 52.8234 80.0085 52.4053 84.9258 53.6945C85.4528 53.8426 86.0234 53.3983 86.0103 52.8495C86.0234 52.3661 85.9755 46.2466 86.0408 45.9592C86.2063 44.0384 86.925 42.6534 88.1358 41.9913C89.3989 41.2335 91.5592 41.6516 93.1664 42.6359C97.5915 45.1882 101.189 51.4209 101.189 56.5342V62.6145C101.189 62.8627 101.302 63.0936 101.481 63.2634C114.081 74.6138 124.138 93.7822 127.1 112.101C128.006 117.389 128.062 122.642 127.818 128.012C127.379 138.269 129.082 162.311 137.862 175.277L48.6709 123.787C58.4489 120.216 59.6205 99.9278 59.381 87.4973ZM94.0331 186.018C85.823 181.275 79.0634 170.051 78.397 160.377C85.4311 164.441 101.995 174.001 108.846 177.956C108.733 186.702 102.513 190.953 94.0331 186.018ZM109.19 184.476C110.009 182.743 110.41 180.844 110.549 178.94C111.573 179.533 113.637 180.722 114.665 181.318L109.19 184.476ZM143.232 193.801C143.172 193.84 143.119 193.88 143.058 193.914C142.1 194.511 140.806 194.398 139.408 193.588L116.847 180.565C106.398 174.528 88.3405 164.101 77.9135 158.082H77.9092L48.6665 141.2C47.0071 140.242 45.4348 138.465 44.2327 136.196C43.0262 133.913 42.3598 131.427 42.3598 129.205C42.3598 126.466 43.3921 124.606 45.0602 124.327C45.4043 124.345 45.7527 124.34 46.1012 124.31C46.3451 124.401 140.014 178.618 140.271 178.631C140.671 179.145 141.05 179.594 141.521 180.112C144.165 183.379 146.595 190.826 143.237 193.801H143.232ZM165.193 181.127C165.045 181.236 164.918 181.31 164.775 181.379L146.255 192.072C147.309 187.643 145.689 182.791 142.875 179.019C139.613 175.373 137.239 171.288 135.162 166.013C129.508 150.895 129.356 135.847 129.635 125.516C130.575 102.75 119.047 77.5668 103.524 62.7843L123.99 51.103C136.329 62.5099 146.138 81.3778 149.064 99.4269C149.966 104.727 150.018 109.967 149.774 115.342C149.526 126.039 150.545 153.26 163.472 167.442C166.151 170.783 168.533 178.126 165.193 181.127Z"
                    fill="#05231E"
                  />
                  <path
                    d="M114.666 181.319L109.191 184.476C110.01 182.743 110.411 180.844 110.55 178.94C111.574 179.533 113.638 180.722 114.666 181.319Z"
                    fill="white"
                  />
                  <path
                    d="M108.844 177.956C108.73 186.701 102.511 190.952 94.0307 186.018C85.8206 181.274 79.0609 170.05 78.3945 160.377C85.4286 164.441 101.992 174.001 108.844 177.956Z"
                    fill="#E5FDC5"
                  />
                  <path
                    d="M143.232 193.801C143.171 193.84 143.119 193.879 143.058 193.914C142.1 194.511 140.806 194.398 139.408 193.588L116.847 180.565C106.398 174.528 88.3401 164.101 77.9131 158.082H77.9087L48.6661 141.2C47.0067 140.242 45.4343 138.465 44.2322 136.196C43.0258 133.913 42.3594 131.426 42.3594 129.205C42.3594 126.466 43.3916 124.606 45.0598 124.327C45.4038 124.344 45.7523 124.34 46.1007 124.31C46.3446 124.401 140.013 178.618 140.27 178.631C140.671 179.145 141.05 179.594 141.52 180.112C144.164 183.378 146.594 190.826 143.236 193.801H143.232Z"
                    fill="#E5FDC5"
                  />
                  <path
                    d="M84.2645 47.4175V51.7512C82.0389 51.2851 79.7609 51.124 77.4961 51.3243L84.2645 47.4175Z"
                    fill="white"
                  />
                  <path
                    d="M123.149 43.8601V49.5788L102.931 61.1164V56.5345C102.805 49.9926 97.9919 41.9393 91.4805 40.0664L109.908 29.4304C111.259 28.5941 113.088 28.7901 115.122 29.9618C119.547 32.5184 123.149 38.7511 123.149 43.8601Z"
                    fill="white"
                  />
                  <path
                    d="M165.189 181.126C165.041 181.235 164.914 181.309 164.77 181.379L146.251 192.072C147.305 187.642 145.685 182.79 142.871 179.018C139.609 175.373 137.235 171.287 135.158 166.013C129.504 150.895 129.352 135.847 129.631 125.516C130.571 102.75 119.042 77.5664 103.52 62.7839L123.986 51.1025C136.325 62.5095 146.133 81.3774 149.06 99.4265C149.962 104.727 150.014 109.967 149.77 115.341C149.522 126.038 150.541 153.26 163.468 167.441C166.147 170.782 168.529 178.125 165.189 181.126Z"
                    fill="white"
                  />
                  <path
                    d="M137.859 175.277L48.668 123.787C58.446 120.216 59.6176 99.9278 59.3781 87.4973C58.5288 75.3586 60.6891 60.9986 70.7458 55.2233C70.7763 55.2058 70.8112 55.1841 70.8417 55.1666C74.8574 52.8234 80.0056 52.4053 84.9229 53.6945C85.4499 53.8426 86.0205 53.3983 86.0074 52.8495C86.0205 52.3661 85.9726 46.2466 86.0379 45.9592C86.2034 44.0384 86.9221 42.6534 88.1329 41.9913C89.396 41.2335 91.5563 41.6516 93.1634 42.636C97.5886 45.1883 101.186 51.4209 101.186 56.5343V62.6145C101.186 62.8628 101.299 63.0936 101.478 63.2635C114.078 74.6138 124.135 93.7822 127.097 112.101C128.003 117.389 128.059 122.642 127.816 128.012C127.376 138.269 129.079 162.311 137.859 175.277Z"
                    fill="#E5FDC5"
                  />
                </svg>
                
                {/* Spot Alert */}
                <div className="absolute left-4 md:left-8 top-0 w-[280px] sm:w-[320px] md:w-[419px] transform -rotate-[3.45deg] bg-white/5 backdrop-blur-md rounded-lg border-2 border-white/70 shadow-[4px_4px_0_0_#FFF] p-4 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="bg-white/10 p-3 rounded-2xl">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.9263 1.71494C21.7555 1.55751 23.5399 1.63918 25.2796 1.95994C27.0192 2.2807 28.66 2.81908 30.2018 3.57507C31.7437 4.33106 33.1757 5.25334 34.4978 6.34189C35.82 7.43045 36.9799 8.68326 37.9775 10.1003C38.975 11.5174 39.7799 13.0491 40.3921 14.6954C41.0043 16.3417 41.3961 18.0853 41.5676 19.9263C41.725 21.7555 41.6434 23.5399 41.3226 25.2796C41.0018 27.0192 40.4635 28.66 39.7075 30.2018C38.9515 31.7437 38.0292 33.1757 36.9407 34.4978C35.8521 35.82 34.5993 36.9799 33.1822 37.9775C31.7651 38.975 30.2335 39.7799 28.5872 40.3921C26.9409 41.0043 25.1972 41.3961 23.3562 41.5676C21.527 41.725 19.7426 41.6434 18.003 41.3226C16.2633 41.0018 14.6226 40.4635 13.0807 39.7075C11.5389 38.9515 10.1069 38.0292 8.7847 36.9407C7.46253 35.8521 6.30266 34.5993 5.30508 33.1822C4.3075 31.7651 3.50263 30.2335 2.89046 28.5872C2.27829 26.9409 1.88645 25.1972 1.71494 23.3562C1.55751 21.527 1.63918 19.7426 1.95994 18.003C2.2807 16.2633 2.81908 14.6226 3.57507 13.0807C4.33106 11.5389 5.25334 10.1069 6.34189 8.7847C7.43045 7.46253 8.68326 6.30266 10.1003 5.30508C11.5174 4.3075 13.0491 3.50263 14.6954 2.89046C16.3417 2.27829 18.0853 1.88645 19.9263 1.71494ZM24.9895 31.3901L24.5608 26.4085L19.5792 26.8372L20.008 31.8188L24.9895 31.3901ZM24.3464 23.9177L23.2746 11.4637L18.293 11.8925L19.3648 24.3464L24.3464 23.9177Z"
                          fill="#E5FDC5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base">
                        Spot Alert!
                      </h4>
                      <p className="text-white text-sm leading-[130%]">
                        An item similar to yours has been seen nearby.
                      </p>
                    </div>
                  </div>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM16.5 12.1L10.175 15.4C9.075 15.95 8.25 15.4 8.25 14.025V7.425C8.25 6.05 9.075 5.5 10.175 6.05L16.5 9.35C17.6 9.9 17.6 10.55 16.5 12.1Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* New Lead */}
                <div className="absolute left-6 md:left-12 top-24 md:top-28 w-[280px] sm:w-[320px] md:w-[419px] bg-white/5 backdrop-blur-md rounded-lg border-2 border-white/70 shadow-[4px_4px_0_0_#FFF] p-4 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M24.5852 3.19016C23.6514 4.47536 23.0851 5.99054 22.947 7.57317C22.809 9.15579 23.1044 10.7461 23.8016 12.1736C24.4988 13.6011 25.5715 14.8118 26.9046 15.6759C28.2376 16.54 29.7808 17.0249 31.3685 17.0785V17.0968C31.3935 17.4268 31.4185 17.7652 31.4519 18.0918C31.8469 21.8368 32.7469 24.4085 33.6119 26.0968C34.1869 27.2218 34.7519 27.9685 35.1519 28.4202C35.3274 28.6193 35.5168 28.8059 35.7185 28.9785L35.7352 28.9885C35.949 29.1437 36.1082 29.3627 36.1899 29.614C36.2715 29.8653 36.2714 30.136 36.1895 30.3873C36.1077 30.6385 35.9484 30.8574 35.7344 31.0124C35.5204 31.1675 35.2628 31.2507 34.9985 31.2502H4.99852C4.73486 31.2499 4.47805 31.1662 4.26481 31.0111C4.05157 30.856 3.89283 30.6375 3.81128 30.3868C3.72974 30.136 3.72957 29.8659 3.81079 29.6151C3.89202 29.3642 4.05048 29.1455 4.26352 28.9902L4.27686 28.9785L4.38352 28.8885C4.48352 28.7985 4.64519 28.6468 4.84519 28.4202C5.24519 27.9702 5.81019 27.2235 6.38519 26.0985C7.53519 23.8502 8.74852 20.0502 8.74852 14.0002C8.74852 10.8652 9.91519 7.8435 12.0152 5.6035C14.1185 3.36016 16.9885 2.0835 19.9985 2.0835C20.6363 2.0835 21.2657 2.13961 21.8869 2.25183C22.2835 2.3235 23.5835 2.7285 24.5852 3.19016Z"
                          fill="#E5FDC5"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.4141 8.3335C25.4141 6.67589 26.0726 5.08618 27.2447 3.91408C28.4168 2.74198 30.0065 2.0835 31.6641 2.0835C33.3217 2.0835 34.9114 2.74198 36.0835 3.91408C37.2556 5.08618 37.9141 6.67589 37.9141 8.3335C37.9141 9.9911 37.2556 11.5808 36.0835 12.7529C34.9114 13.925 33.3217 14.5835 31.6641 14.5835C30.0065 14.5835 28.4168 13.925 27.2447 12.7529C26.0726 11.5808 25.4141 9.9911 25.4141 8.3335ZM16.4875 33.9185C16.6295 33.8362 16.7864 33.7827 16.9491 33.761C17.1118 33.7393 17.2772 33.7499 17.4359 33.7922C17.5945 33.8344 17.7433 33.9075 17.8736 34.0072C18.004 34.107 18.1135 34.2314 18.1958 34.3735C18.379 34.689 18.6418 34.9509 18.958 35.1329C19.2742 35.3149 19.6326 35.4108 19.9975 35.4108C20.3623 35.4108 20.7207 35.3149 21.0369 35.1329C21.3531 34.9509 21.6159 34.689 21.7991 34.3735C21.8815 34.2314 21.9911 34.107 22.1216 34.0073C22.2521 33.9076 22.4009 33.8346 22.5596 33.7924C22.7184 33.7503 22.8838 33.7398 23.0466 33.7615C23.2094 33.7833 23.3662 33.8369 23.5083 33.9193C23.6503 34.0017 23.7748 34.1113 23.8745 34.2418C23.9742 34.3723 24.0472 34.5211 24.0894 34.6799C24.1315 34.8386 24.142 35.004 24.1203 35.1668C24.0985 35.3296 24.0449 35.4865 23.9625 35.6285C23.5596 36.3232 22.9813 36.8999 22.2854 37.3008C21.5895 37.7017 20.8005 37.9128 19.9975 37.9128C19.1944 37.9128 18.4054 37.7017 17.7095 37.3008C17.0136 36.8999 16.4353 36.3232 16.0325 35.6285C15.9499 35.4864 15.8962 35.3294 15.8743 35.1665C15.8525 35.0036 15.863 34.838 15.9053 34.6791C15.9476 34.5203 16.0207 34.3714 16.1206 34.2408C16.2205 34.1103 16.3452 34.0008 16.4875 33.9185Z"
                          fill="#E5FDC5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base">
                        You Have a New Lead
                      </h4>
                      <p className="text-white text-sm leading-[130%]">
                        A community member shared helpful information
                      </p>
                    </div>
                  </div>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM16.5 12.1L10.175 15.4C9.075 15.95 8.25 15.4 8.25 14.025V7.425C8.25 6.05 9.075 5.5 10.175 6.05L16.5 9.35C17.6 9.9 17.6 10.55 16.5 12.1Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* Location Update */}
                <div className="absolute left-6 md:left-12 bottom-0 w-[280px] sm:w-[320px] md:w-[419px] bg-white/5 backdrop-blur-md rounded-lg border-2 border-white/70 shadow-[4px_4px_0_0_#FFF] p-4 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 2.5C16.3546 2.5043 12.8597 3.95434 10.282 6.53203C7.70435 9.10973 6.25431 12.6046 6.25001 16.25C6.24666 19.2289 7.21964 22.1267 9.02001 24.5C9.02001 24.5 9.39501 24.9937 9.45626 25.065L20 37.5L30.5488 25.0588C30.6038 24.9925 30.98 24.5 30.98 24.5L30.9813 24.4963C32.7804 22.1239 33.7529 19.2274 33.75 16.25C33.7457 12.6046 32.2957 9.10973 29.718 6.53203C27.1403 3.95434 23.6454 2.5043 20 2.5ZM20 21.25C19.0111 21.25 18.0444 20.9568 17.2222 20.4073C16.3999 19.8579 15.759 19.077 15.3806 18.1634C15.0022 17.2498 14.9032 16.2445 15.0961 15.2745C15.289 14.3046 15.7652 13.4137 16.4645 12.7145C17.1637 12.0152 18.0547 11.539 19.0246 11.3461C19.9945 11.1531 20.9998 11.2522 21.9134 11.6306C22.8271 12.009 23.6079 12.6499 24.1574 13.4721C24.7068 14.2944 25 15.2611 25 16.25C24.9984 17.5756 24.471 18.8464 23.5337 19.7837C22.5964 20.721 21.3256 21.2483 20 21.25Z"
                          fill="#E5FDC5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base">
                        New Location Update
                      </h4>
                      <p className="text-white text-sm leading-[130%]">
                        Your item was spotted near Ikeja Under-Bridge.
                      </p>
                    </div>
                  </div>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM16.5 12.1L10.175 15.4C9.075 15.95 8.25 15.4 8.25 14.025V7.425C8.25 6.05 9.075 5.5 10.175 6.05L16.5 9.35C17.6 9.9 17.6 10.55 16.5 12.1Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Community Search Support - Middle Row */}
          <div className="bg-[#F7F7F8] rounded-[32px] p-8 md:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#100E21]">
                  Community Search Support
                </h3>
                <p className="text-[#100E21] text-lg md:text-xl leading-[150%]">
                  Once an item is reported, our growing community starts looking
                  out for it, giving you more eyes, more reach and a higher
                  chance of getting it back.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4e53cddcf73a465e4ad7feb022a2db76972a0469?width=1376"
                  alt="Community network map"
                  className="w-full h-auto mix-blend-darken"
                />
                {/* Profile Images on Network */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0b146abed2ad6067e4c7b08d3c0414bf8c251525?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ right: "0%", top: "30%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/162936f3d30ffb639b79aa58a226630f81deec92?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ right: "20%", top: "30%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cb25ec1e5dcba8066b577569a9be63a6c8f4d8b0?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ left: "18%", top: "35%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c8486eeff7d971319e3abfd02a983b9f4b25353c?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ left: "0%", top: "30%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7e1dd152444253ac613a0d91a5129dee7d1e6630?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ left: "18%", top: "0%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7fc4843ac760850c602a4611fb02b7c0ca6e1b3b?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ right: "22%", top: "0%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/eedeac567ecdaf0202ce3697dde290f7ee3465ae?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ right: "0%", top: "0%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6215363a5de86601488cb8e627f51b1cb8609c52?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ left: "0%", bottom: "0%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bbfab3e4b5cb1fc6cda3cc320bd35c922953f188?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ left: "18%", bottom: "0%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/99566f785cfebe16f2b2414b138282c01c9619c9?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ left: "48%", bottom: "0%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/931b9356df75b52360cb1b8df65f82d7867a39aa?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ left: "48%", top: "0%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/22506835410625bf68fd0bd43cd2ed8f0329a3bf?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ right: "22%", bottom: "0%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3c9ca2a9be21abded2f8b6add529a52fa4f9e266?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ right: "0%", bottom: "0%" }}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/69b1588a7f690ff3296704a3d01dc4175b34cb7b?width=116"
                  alt=""
                  className="absolute w-14 h-14 rounded-full border border-white"
                  style={{ left: "2%", top: "0%" }}
                />
                {/* Search Icon */}
                <div
                  className="absolute w-16 h-16 md:w-[69px] md:h-[69px] rounded-full bg-gradient-to-b from-green-70 to-[#0A463D] flex items-center justify-center"
                  style={{ left: "45%", top: "38%" }}
                >
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 68 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_search)">
                      <path
                        d="M26.3993 12C17.7422 12 10.6484 19.0736 10.6484 27.7059C10.6484 31.0508 11.7167 34.1584 13.5253 36.714L24.4769 55.6473C26.011 57.6512 27.0302 57.2709 28.3055 55.542L32.9077 47.7098C31.0474 46.791 29.4257 45.4532 28.1701 43.8015C26.4535 41.5532 25.4926 38.8192 25.4251 35.9913C21.2324 35.5175 18.0284 32.025 18.0284 27.7059C18.0284 23.0574 21.7378 19.3593 26.3993 19.3593C29.4305 19.3593 32.0504 20.9285 33.5174 23.3C35.9377 22.2496 38.6133 21.934 41.2115 22.3923C39.0133 16.351 33.1889 12 26.3993 12Z"
                        fill="url(#paint0_linear_search)"
                        shapeRendering="crispEdges"
                      />
                    </g>
                    <g filter="url(#filter1_dd_search)">
                      <path
                        d="M40.405 24.3726C37.5151 23.9811 34.4763 24.6885 31.981 26.5889C26.9905 30.3887 26.0199 37.5536 29.8201 42.5441C33.3774 47.2151 39.8731 48.3414 44.7826 45.3507L45.72 46.5819C45.6288 46.7942 45.5858 47.0045 45.594 47.1983C45.6023 47.392 45.6615 47.5647 45.7677 47.7042L52.5717 56.639C52.7662 56.8943 53.1055 57.0229 53.5149 56.9964C53.9244 56.9699 54.3705 56.7905 54.7551 56.4977C54.9456 56.3527 55.1153 56.1841 55.2545 56.0017C55.3936 55.8193 55.4995 55.6266 55.5661 55.4346C55.6327 55.2426 55.6587 55.055 55.6427 54.8826C55.6266 54.7102 55.5687 54.5564 55.4724 54.4299L48.6684 45.4952C48.5621 45.3558 48.4114 45.2528 48.2268 45.1933C48.0422 45.1339 47.828 45.1194 47.5992 45.1509L46.6614 43.9193C50.8509 39.9818 51.493 33.4208 47.9362 28.7498C46.0359 26.2541 43.2949 24.7641 40.405 24.3726Z"
                        fill="url(#paint1_linear_search)"
                        shapeRendering="crispEdges"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd_search"
                        x="0"
                        y="-6.1399"
                        width="60.0598"
                        height="74.0208"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="3.86" dy="-3.63" />
                        <feGaussianBlur stdDeviation="6.805" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow"
                          result="effect2_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_dd_search"
                        x="6.87156"
                        y="6.12865"
                        width="67.1453"
                        height="75.1308"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="-4.08" dy="7.71" />
                        <feGaussianBlur stdDeviation="7.825" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.00270687 0 0 0 0 0.0993589 0 0 0 0 0.0848611 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="3.86" dy="-3.63" />
                        <feGaussianBlur stdDeviation="6.805" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow"
                          result="effect2_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_search"
                        x1="25.93"
                        y1="12"
                        x2="25.93"
                        y2="57.0003"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E5FDC5" />
                        <stop offset="1" stopColor="white" stopOpacity="0.23" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_search"
                        x1="41.5736"
                        y1="24.2686"
                        x2="41.5736"
                        y2="56.9998"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E5FDC5" />
                        <stop offset="1" stopColor="white" stopOpacity="0.23" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Verified Leads Only */}
            <div className="bg-[#EFFEDC] rounded-[32px] p-8 md:p-10 flex flex-col gap-6 relative min-h-[531px]">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#100E21]">
                  Verified Leads Only
                </h3>
                <p className="text-[#100E21] text-lg md:text-xl leading-[150%]">
                  Each lead is screened to focus only seeing genuine information
                  that can help
                </p>
              </div>
              <div className="mt-auto relative">
                {/* Verified Widget */}
                <div className="bg-white rounded-3xl border-[0.5px] border-white/30 backdrop-blur-md p-5 space-y-4 shadow-[4px_4px_0_0_#0A463D]">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-white/30">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-green-70 flex items-center justify-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.5 0C11.6422 0 15 3.35775 15 7.5C15 11.6422 11.6422 15 7.5 15C3.35775 15 0 11.6422 0 7.5C0 3.35775 3.35775 0 7.5 0Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.6781 3.99608C10.6781 5.72433 9.25743 7.12531 7.50506 7.12531C5.7527 7.12531 4.33203 5.72433 4.33203 3.99608C4.33203 2.26768 5.7527 0.866699 7.50506 0.866699C9.25743 0.866699 10.6781 2.26768 10.6781 3.99608Z"
                            fill="#117465"
                            stroke="#117465"
                            strokeWidth="1.73317"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.47617 14.8275H12.537C13.6519 14.8275 14.5106 13.8821 13.99 12.9099C13.2241 11.4796 11.4782 9.77246 7.50656 9.77246C3.53497 9.77246 1.78905 11.4796 1.02314 12.9099C0.502528 13.8821 1.36129 14.8275 2.47617 14.8275Z"
                            fill="#117465"
                            stroke="#117465"
                            strokeWidth="1.73317"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="h-2 w-24 bg-[#E4E4E8] rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.4615 9H1.54145C1.39928 8.99978 1.25879 8.96926 1.12935 8.91045C0.999907 8.85165 0.884493 8.76591 0.790805 8.65898C0.697116 8.55204 0.627307 8.42635 0.586034 8.2903C0.544761 8.15425 0.532972 8.01097 0.551455 7.87C0.721455 6.61 1.24145 5.8 2.02145 5.57C2.10145 4.18 2.63145 0 6.00145 0C9.37145 0 9.90145 4.18 9.98145 5.57C10.7515 5.8 11.2815 6.61 11.4515 7.87C11.4915 8.16 11.4015 8.45 11.2115 8.66C11.0215 8.87 10.7515 9 10.4615 9ZM6.00145 12C7.10145 12 8.00145 11.1 8.00145 10H4.00146C4.00146 11.1 4.90145 12 6.00145 12Z"
                          fill="#117465"
                        />
                      </svg>
                      <div className="h-2 w-9 bg-[#E4E4E8] rounded-full"></div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex gap-4">
                    <div className="space-y-5 flex-1">
                      <div className="flex items-center gap-3">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 0C7.64258 0 8.26237 0.0820312 8.85938 0.246094C9.45638 0.410156 10.0124 0.647135 10.5273 0.957031C11.0423 1.26693 11.514 1.63151 11.9424 2.05078C12.3708 2.47005 12.7376 2.94173 13.043 3.46582C13.3483 3.98991 13.583 4.54818 13.7471 5.14062C13.9111 5.73307 13.9954 6.35286 14 7C14 7.64258 13.918 8.26237 13.7539 8.85938C13.5898 9.45638 13.3529 10.0124 13.043 10.5273C12.7331 11.0423 12.3685 11.514 11.9492 11.9424C11.5299 12.3708 11.0583 12.7376 10.5342 13.043C10.0101 13.3483 9.45182 13.583 8.85938 13.7471C8.26693 13.9111 7.64714 13.9954 7 14C6.35742 14 5.73763 13.918 5.14062 13.7539C4.54362 13.5898 3.98763 13.3529 3.47266 13.043C2.95768 12.7331 2.486 12.3685 2.05762 11.9492C1.62923 11.5299 1.26237 11.0583 0.957031 10.5342C0.651693 10.0101 0.416992 9.45182 0.25293 8.85938C0.0888672 8.26693 0.00455729 7.64714 0 7C0 6.35742 0.0820312 5.73763 0.246094 5.14062C0.410156 4.54362 0.647135 3.98763 0.957031 3.47266C1.26693 2.95768 1.63151 2.486 2.05078 2.05762C2.47005 1.62923 2.94173 1.26237 3.46582 0.957031C3.98991 0.651693 4.54818 0.416992 5.14062 0.25293C5.73307 0.0888672 6.35286 0.00455729 7 0ZM7.875 10.5V8.75H6.125V10.5H7.875ZM7.875 7.875V3.5H6.125V7.875H7.875Z"
                            fill="#117465"
                          />
                        </svg>
                        <div className="h-2 w-16 bg-[#E4E4E8] rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.222597 1.46529C0.0795204 1.75574 0 2.07811 0 2.41738V9.58287C0 10.8632 1.13334 11.9011 2.53131 11.9011H12.1967C13.5948 11.9011 14.7281 10.8632 14.7281 9.58287V2.41738C14.7281 2.07811 14.6485 1.75574 14.5055 1.46529L7.82764 6.7516C7.56463 6.95986 7.16351 6.95986 6.9005 6.7516L0.222597 1.46529ZM13.6471 0.517111C13.2363 0.25367 12.7362 0.0991211 12.1967 0.0991211H2.53131C1.99195 0.0991211 1.49183 0.25367 1.08105 0.517111L7.36399 5.49086L13.6471 0.517111Z"
                            fill="#117465"
                          />
                        </svg>
                        <div className="h-2 w-16 bg-[#E4E4E8] rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          width="13"
                          height="15"
                          viewBox="0 0 13 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.10808 14.3862C6.10823 14.3862 6.10838 14.3862 6.50001 13.8433L6.10808 14.3862ZM6.89236 14.3862L6.89369 14.3848L6.89783 14.382L6.91231 14.3737L6.96505 14.3389C7.0104 14.3082 7.07584 14.2651 7.15842 14.208C7.32343 14.0953 7.55743 13.931 7.83738 13.7236C8.39623 13.3101 9.14388 12.7185 9.89419 12.0113C10.6421 11.3055 11.4084 10.4716 11.9913 9.57092C12.571 8.6758 13 7.66653 13 6.62524C13 3.18676 9.94811 0.5 6.50001 0.5C3.0519 0.5 0 3.18676 0 6.62524C0 7.66653 0.428854 8.6758 1.00854 9.57092C1.59147 10.4716 2.35773 11.3055 3.10568 12.0113C3.85613 12.7185 4.60377 13.3101 5.16262 13.7236C5.44257 13.931 5.67657 14.0953 5.84158 14.208C5.92416 14.2651 5.98945 14.3082 6.03495 14.3389L6.08769 14.3737L6.10217 14.382L6.10631 14.3848L6.10808 14.3862C6.34444 14.5379 6.656 14.5379 6.89236 14.3862ZM6.50001 13.8433L6.89236 14.3862C6.89221 14.3862 6.89163 14.3862 6.50001 13.8433ZM3.94875 6.62524C3.94875 5.29579 5.09201 4.2183 6.50221 4.2183C7.91257 4.2183 9.05583 5.29579 9.05583 6.62524C9.05583 7.95331 7.91257 9.03079 6.50221 9.03079C5.09201 9.03079 3.94875 7.95331 3.94875 6.62524Z"
                            fill="#117465"
                          />
                        </svg>
                        <div className="h-2 w-28 bg-[#E4E4E8] rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-px bg-green-70"></div>
                    <div className="space-y-3">
                      <div className="h-2 w-16 bg-[#E4E4E8] rounded-full"></div>
                      <div className="h-2 w-12 bg-[#E4E4E8] rounded-full"></div>
                      <div className="h-2 w-14 bg-[#E4E4E8] rounded-full"></div>
                      <div className="h-2 w-8 bg-[#E4E4E8] rounded-full"></div>
                    </div>
                  </div>
                </div>
                {/* Verified Icon */}
                <svg
                  className="absolute -top-28 left-1/3 w-24 h-24"
                  width="131"
                  height="130"
                  viewBox="0 0 131 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M106.827 42.1491C104.675 40.4173 103.052 38.1169 102.142 35.5092C100.159 29.8363 96.1688 24.8406 90.5034 21.6898C84.838 18.539 78.4894 17.7844 72.6235 19.0923C69.928 19.6945 67.1177 19.5292 64.5115 18.6151C58.8395 16.6287 52.4458 16.6333 46.45 19.0982C40.4543 21.563 35.906 26.0565 33.271 31.4578C32.0614 33.9408 30.1799 36.0349 27.8401 37.5024C22.7509 40.6986 18.768 45.6999 16.9567 51.9244C15.1454 58.1488 15.8228 64.5062 18.4027 69.9338C19.5895 72.4278 20.0537 75.2044 19.7426 77.9487C19.0682 83.9205 20.4954 90.1527 24.2328 95.4494C27.9698 100.746 33.3626 104.181 39.2151 105.548C41.9049 106.175 44.3651 107.543 46.3167 109.497C50.5654 113.748 56.3275 116.517 62.7989 116.898C69.2701 117.279 75.3177 115.204 80.0352 111.481C82.2025 109.769 84.8063 108.699 87.5512 108.391C93.5231 107.72 99.2817 104.942 103.614 100.12C107.946 95.2976 110.095 89.2756 110.125 83.2659C110.138 80.504 110.924 77.801 112.396 75.4635C115.594 70.3759 117.012 64.1415 115.944 57.7476C114.875 51.354 111.506 45.9199 106.827 42.1491Z"
                    fill="url(#paint0_linear_2211_109)"
                  />
                  <path
                    d="M29.2501 83.716C39.6029 103.63 64.1393 111.382 84.0537 101.029C103.968 90.6761 111.719 66.1397 101.366 46.2253C91.0137 26.3109 66.4773 18.5597 46.5629 28.9125C26.6485 39.2652 18.8973 63.8016 29.2501 83.716Z"
                    fill="url(#paint1_linear_2211_109)"
                  />
                  <path
                    d="M78.6206 97.3473C96.5016 89.9966 105.038 69.5423 97.6872 51.6613C90.3365 33.7804 69.8822 25.244 52.0013 32.5947C34.1204 39.9454 25.5839 60.3997 32.9347 78.2807C40.2854 96.1616 60.7397 104.698 78.6206 97.3473Z"
                    fill="url(#paint4_linear_2211_109)"
                  />
                  <path
                    d="M80.0028 49.3819L61.0395 78.303L48.051 69.4478"
                    stroke="white"
                    strokeWidth="8.65305"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2211_109"
                      x1="27.6845"
                      y1="49.5472"
                      x2="98.6781"
                      y2="79.1757"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#117465" stopOpacity="0.8" />
                      <stop offset="1" stopColor="#0A463D" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2211_109"
                      x1="51.9328"
                      y1="107.312"
                      x2="81.4969"
                      y2="13.7257"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#117465" />
                      <stop offset="1" stopColor="#0A463D" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_2211_109"
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

            {/* Safe Reward System */}
            <div
              className="bg-green-70 rounded-[32px] p-8 md:p-10 flex flex-col gap-6 relative min-h-[531px]"
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
              {/* Money Icon */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d407bc6e1565e807c2cc09716b14f495a1a9ee38?width=281"
                alt="Money icon"
                className="w-32 h-auto -ml-7 mt-8 drop-shadow-[4.421px_4.421px_0_#FFF]"
              />
              {/* Reward Widget */}
              <div className="absolute top-36 md:top-44 right-5 w-56 bg-white rounded-md border border-white shadow-[4px_4px_0_0_#BCD39E] p-2 z-10">
                <div className="flex items-center gap-2">
                  <div className="bg-[#F2F2F2] p-1.5 rounded-lg">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.51702 2.16455C7.72904 2.16455 6.10019 2.75513 5.13634 3.23766C5.04925 3.2812 4.96797 3.32368 4.8925 3.36511C4.74288 3.44666 4.61542 3.52266 4.51409 3.58955L5.61054 5.20376L6.12671 5.4092C8.14388 6.42688 10.849 6.42688 12.8666 5.4092L13.4524 5.1052L14.4891 3.58955C14.2741 3.44986 14.0508 3.32336 13.8205 3.21074C12.8614 2.73336 11.2714 2.16455 9.51742 2.16455M6.96746 3.99172C6.57928 3.91867 6.19582 3.82244 5.81915 3.70355C6.72204 3.30257 8.06748 2.87705 9.51742 2.87705C10.5216 2.87705 11.4713 3.0813 12.2566 3.34018C11.3363 3.46961 10.3542 3.6893 9.41846 3.95965C8.68221 4.17261 7.82167 4.14966 6.96746 3.99172ZM13.285 5.99622L13.1876 6.0453C10.9685 7.16472 8.02513 7.16472 5.80609 6.0453L5.71386 5.99859C2.37975 9.65649 -0.165457 16.4134 9.51702 16.4134C19.1995 16.4134 16.5925 9.53101 13.285 5.99622ZM9.10575 9.28955C8.89579 9.28955 8.69443 9.37296 8.54596 9.52142C8.39749 9.66989 8.31409 9.87125 8.31409 10.0812C8.31409 10.2912 8.39749 10.4925 8.54596 10.641C8.69443 10.7895 8.89579 10.8729 9.10575 10.8729V9.28955ZM9.89742 8.49788V8.10205H9.10575V8.49788C8.68583 8.49788 8.2831 8.6647 7.98617 8.96163C7.68923 9.25856 7.52242 9.66129 7.52242 10.0812C7.52242 10.5011 7.68923 10.9039 7.98617 11.2008C8.2831 11.4977 8.68583 11.6646 9.10575 11.6646V13.2479C8.76138 13.2479 8.46806 13.0282 8.35881 12.7202C8.34261 12.6699 8.31646 12.6232 8.28192 12.5831C8.24737 12.543 8.20514 12.5103 8.15772 12.4868C8.11029 12.4633 8.05863 12.4495 8.0058 12.4463C7.95297 12.4432 7.90004 12.4506 7.85014 12.4682C7.80023 12.4859 7.75437 12.5133 7.71527 12.549C7.67616 12.5847 7.6446 12.6278 7.62246 12.6759C7.60032 12.724 7.58805 12.776 7.58637 12.8289C7.58468 12.8818 7.59363 12.9345 7.61267 12.9839C7.72181 13.2926 7.924 13.56 8.19141 13.749C8.45881 13.9381 8.77826 14.0396 9.10575 14.0396V14.4354H9.89742V14.0396C10.3173 14.0396 10.7201 13.8727 11.017 13.5758C11.3139 13.2789 11.4808 12.8761 11.4808 12.4562C11.4808 12.0363 11.3139 11.6336 11.017 11.3366C10.7201 11.0397 10.3173 10.8729 9.89742 10.8729V9.28955C10.2418 9.28955 10.5351 9.50924 10.6444 9.8172C10.6606 9.86758 10.6867 9.9142 10.7213 9.9543C10.7558 9.9944 10.798 10.0272 10.8455 10.0507C10.8929 10.0742 10.9445 10.0879 10.9974 10.0911C11.0502 10.0943 11.1031 10.0868 11.153 10.0692C11.2029 10.0516 11.2488 10.0241 11.2879 9.98844C11.327 9.95277 11.3586 9.90963 11.3807 9.86155C11.4028 9.81348 11.4151 9.76146 11.4168 9.70856C11.4185 9.65565 11.4095 9.60295 11.3905 9.55357C11.2814 9.2448 11.0792 8.97747 10.8118 8.7884C10.5444 8.59933 10.2249 8.49783 9.89742 8.49788ZM9.89742 11.6646V13.2479C10.1074 13.2479 10.3087 13.1645 10.4572 13.016C10.6057 12.8675 10.6891 12.6662 10.6891 12.4562C10.6891 12.2463 10.6057 12.0449 10.4572 11.8964C10.3087 11.748 10.1074 11.6646 9.89742 11.6646Z"
                        fill="#117465"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-semibold text-gray-100">
                      Reward Recieved
                    </h4>
                    <p className="text-[8px] text-gray-100">
                      You have recieved <span className="font-bold">$100</span>
                    </p>
                  </div>
                  <button className="ml-auto px-3 py-1 text-[8px] font-medium rounded border border-gray-40 bg-[#F7F7F8] text-dark-90">
                    Withdraw
                  </button>
                </div>
              </div>
              <div className="mt-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e3029607b0d8e3317fad3a46853787de4e041c2a?width=662"
                  alt="Happy person with phone"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Privacy & Protection */}
            <div className="bg-[#EFFEDC] rounded-[32px] p-8 md:p-10 flex flex-col gap-6 min-h-[531px]">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#100E21]">
                  Privacy & Protection
                </h3>
                <p className="text-[#100E21] text-lg md:text-xl leading-[150%]">
                  Your identity, contact details and personal information stay
                  completely private.
                </p>
              </div>
              <div className="mt-auto flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e2ae552802ace22515b4b98d1e323601055362b5?width=540"
                  alt="Security shield"
                  className="w-64 h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
