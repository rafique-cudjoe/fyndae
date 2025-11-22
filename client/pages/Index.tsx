import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import VerificationSystem from "@/components/sections/VerificationSystem";
import FeaturedPosts from "@/components/sections/FeaturedPosts";
import Testimonials from "@/components/sections/Testimonials";
import JoinCommunity from "@/components/sections/JoinCommunity";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Top Part - Hero Section */}
      <div className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-6">
          <div className="flex-1 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-[640px]">
              <div className="space-y-8 sm:space-y-12">
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold leading-[140%] tracking-[-0.04em] text-black">
                    Your Trusted Platform To Recover Lost Items and Verify
                    Information
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-[150%]">
                    From locating lost items to confirming the identity or
                    credibility of people and organizations, Fyndae gives you
                    the information you need to move confidently and securely.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-6">
                  <button className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg border border-gray-40 bg-[#F7F7F8] text-dark-90 font-medium text-base sm:text-lg leading-[150%] hover:bg-gray-50 transition-colors">
                    Join The Community
                  </button>
                  <button className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg bg-green-70 text-white font-medium text-base sm:text-lg leading-[150%] hover:bg-green-70/90 transition-colors">
                    Report An Item
                  </button>
                </div>
              </div>

              <div className="mt-12 lg:mt-16 space-y-5">
                <div className="flex items-center">
                  <div className="flex items-center p-2 rounded-full border border-grey-15 bg-[#1A1A1A]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/2c0d09018c3d6d09bfe31c12f390e94d0443cab7?width=100"
                      alt="Community member"
                      className="w-12 h-12 rounded-full border border-gray-60"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/e1507a077e3944e5e57f519bae665fa759b49c57?width=100"
                      alt="Community member"
                      className="w-12 h-12 rounded-full border border-gray-60 -ml-3"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/16352e3dc99f56dafbb5f2107fd237b2457a0b5e?width=100"
                      alt="Community member"
                      className="w-12 h-12 rounded-full border border-gray-60 -ml-3"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/ffed7c98a72d0ecd234e6536d810b9cc06b91ae8?width=100"
                      alt="Community member"
                      className="w-12 h-12 rounded-full border border-gray-60 -ml-3"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-medium text-dark-80 leading-[150%] tracking-[-0.03em]">
                    100+ Active Community Members
                  </h3>
                  <p className="text-base text-gray-100 leading-[150%]">
                    Trusted by 100+ active community members helping recover
                    lost items
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[744px] rounded-2xl sm:rounded-3xl overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2c1210919e26060e9c4a8fb840eee8a67e654090?width=1306"
              alt="Security and trust illustration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        </div>
      </div>

      {/* Top Part - Sections */}
      <StatsSection />
      <HowItWorksSection />
      <FeaturesSection />

      {/* Down Part - Sections */}
      <VerificationSystem />
      <FeaturedPosts />
      <Testimonials />
      <JoinCommunity />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
