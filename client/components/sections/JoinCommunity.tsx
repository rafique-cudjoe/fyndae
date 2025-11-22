import { Lock, Users, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JoinCommunity() {
  return (
    <section className="w-full px-6 md:px-20 py-16 md:py-20 bg-[#117465] rounded-3xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-15">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            <span className="text-white">Become Part of Our </span>
            <span className="text-[#E5FDC5]">Trusted </span>
            <span className="text-white">Community</span>
          </h2>
          <p className="text-lg md:text-xl text-white max-w-4xl">
            Join thousands of community members who provide timely information, support their neighborhoods and help reunite people with lost possessions and loved ones while earning verified rewards
          </p>
        </div>

        <div className="mt-12 bg-[#419084] border border-[#B8D5D1] rounded-2xl p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <CommunityCard
              icon={<Lock className="w-8 h-8 text-[#383D48]" />}
              title="Join our private network"
              description="Join our exclusive community heroes dedicated to finding what's lost safely, anonymously while getting paid for it."
            />
            <CommunityCard
              icon={<Users className="w-8 h-8 text-[#383D48]" />}
              title="Get added to a community"
              description="Our platform places you in the right community circle based on your location safely and privately."
            />
            <CommunityCard
              icon={<Bell className="w-7 h-7 text-[#383D48]" />}
              title="Get missing item alerts"
              description="We'll notify you when something is missing around your location. If you spot it, report it and we pay you"
            />
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-[#F7F7F8] hover:bg-white text-[#0D0B1A] border border-[#B7BECD] px-6 py-3 text-lg font-medium rounded-lg">
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
}

interface CommunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function CommunityCard({ icon, title, description }: CommunityCardProps) {
  return (
    <div className="bg-white border border-[#F1F1F3] rounded-2xl p-7 flex flex-col gap-6 min-h-[251px]">
      <div className="flex flex-col items-center justify-center gap-2.5 text-center">
        <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full bg-[#E5FDC5]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#0A0814]">{title}</h3>
      </div>
      <p className="text-base text-[#3F3E4D] text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}
