export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Something Missing?",
      description: "Report it easily and quickly with our intuitive form.",
    },
    {
      number: "2",
      title: "Give Accurate Details of Items",
      description: "Send pictures and accurate details of the missing item",
    },
    {
      number: "3",
      title: "Pay The Reward Amount",
      description:
        "Pay the reward amount befitting missing item for our community heroes.",
    },
    {
      number: "4",
      title: "Stay Updated",
      description:
        "We will keep you updated on the progress of your report and any potential matches.",
    },
    {
      number: "5",
      title: "Recovery",
      description:
        "Once a match is found, we will give all information and assist to arrange the recovery of your item.",
    },
    {
      number: "6",
      title: "Money Back Guarantee",
      description:
        "After 30 days, if the item is not found, we will refund the reward amount 100% back to you.",
    },
  ];

  return (
    <section className="w-full bg-green-70 py-8 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="px-6 md:px-20">
          <div className="max-w-[1232px] mx-auto flex flex-col items-center gap-10">
            <div className="text-center space-y-5">
          <h2 className="text-4xl md:text-5xl font-semibold leading-[140%] tracking-[-0.042em]">
            <span className="text-white">How It </span>
            <span className="text-[#E5FDC5]">Works</span>
          </h2>
          <p className="text-white text-lg md:text-xl leading-[150%] max-w-[900px] mx-auto">
            People who've lost valuable items with a network of community
            helpers ready to act. Track progress, stay informed and trust our
            secure escrow system to reward verified leads when your item is
            found.
          </p>
        </div>

        <div className="w-full space-y-2.5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 p-2.5 rounded-[10px] border border-[#B8D5D1] bg-[#419084]">
            {steps.slice(0, 3).map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-[10px] p-6 md:p-8 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="flex-1 text-gray-100 text-lg font-bold leading-[150%] tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#E5FDC5]">
                    <span className="text-gray-100 text-2xl font-bold leading-[150%]">
                      {step.number}
                    </span>
                  </div>
                </div>
                <p className="text-[#383D48] text-base leading-[150%] tracking-[-0.03em]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 p-2.5 rounded-[10px] border border-[#B8D5D1] bg-[#419084]">
            {steps.slice(3, 6).map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-[10px] p-6 md:p-8 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="flex-1 text-gray-100 text-lg font-bold leading-[150%] tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#E5FDC5]">
                    <span className="text-gray-100 text-2xl font-bold leading-[150%]">
                      {step.number}
                    </span>
                  </div>
                </div>
                <p className="text-[#383D48] text-base leading-[150%] tracking-[-0.03em]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button className="px-6 py-3 rounded-lg border border-gray-40 bg-[#F7F7F8] text-gray-100 font-medium text-lg leading-[150%] hover:bg-gray-50 transition-colors">
          Get Started
        </button>
          </div>
        </div>
      </div>
    </section>
  );
}
