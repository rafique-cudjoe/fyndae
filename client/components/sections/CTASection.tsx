import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full px-6 md:px-20 py-20 bg-gradient-to-br from-[#0A463D] to-[#0A463D] border border-[#262626] rounded-[20px] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/5ca02233f3972a18e56ebaceb64105e5e3c2f283?width=2784')", 
          backgroundSize: "100px 100px", 
          backgroundRepeat: "repeat" 
        }}
      />
      
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-20 relative z-10">
        <div className="flex flex-col items-center gap-3.5 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            <span className="text-white">Ready To Find What's </span>
            <span className="text-[#E5FDC5]">Missing?</span>
          </h2>
          <p className="text-lg md:text-xl text-white max-w-[1100px]">
            Every recovery starts with one action. Report your missing item with confidence or join our community and play a meaningful role in reconnecting people with what they've lost. Fyndae ensures safety, transparency and support at every stage of the journey.
          </p>
        </div>

        <Button className="bg-[#F7F7F8] hover:bg-white text-[#0D0B1A] border border-[#B7BECD] px-6 py-3 text-lg font-medium rounded-lg">
          Get Started
        </Button>
      </div>
    </section>
  );
}
