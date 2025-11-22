import { Search, Shield, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VerificationSystem() {
  return (
    <section className="w-full px-6 md:px-20 py-16 md:py-20 bg-white rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-12">
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-[#0A0814]">
                Our Verification System
              </h2>
              <p className="text-lg md:text-xl text-[#21242C] leading-relaxed">
                Fyndae offers a paid verification lookup system allowing users to securely search our database for key information about individuals, businesses and institutions to ensure users always have clarity before taking the next step.
              </p>
            </div>

            <div className="w-full h-[407px] rounded-3xl border border-[#419084] bg-gradient-to-br from-[#0A463D] to-[#0A463D] p-10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/5a7a3a8bf403098f323675f23414a002fe961f81?width=1024')", backgroundSize: "100px 100px", backgroundRepeat: "repeat" }}></div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/454613b7caaf4eae4f18cf37c04e107cebb027ab?width=900" 
                alt="Verification illustration" 
                className="w-full max-w-[450px] h-auto object-contain relative z-10"
              />
            </div>
          </div>

          <div className="flex-1 bg-[#F7F7F8] rounded-xl p-2.5">
            <div className="flex flex-col gap-2.5">
              <VerificationCard
                icon={<Search className="w-7 h-7 text-[#0A463D]" />}
                title="Submit a Search Request"
                description="Choose what you want to verify — a person, business, institution or an agency and enter the details. Our system instantly begins scanning our database."
              />
              <VerificationCard
                icon={<Shield className="w-7 h-7 text-[#0A463D]" />}
                title="Secure Database Lookup"
                description="Fyndae cross checks your request against verified records, historical entries, documents and identity information stored safely in our system."
              />
              <VerificationCard
                icon={<FileCheck className="w-7 h-7 text-[#0A463D]" />}
                title="Get a Verified Report"
                description="Receive a clear, detailed verification result you can rely on  helping you make safe, informed decisions with complete confidence."
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Button 
            className="bg-[#117465] hover:bg-[#0A463D] text-white px-6 py-3 text-lg font-medium rounded-lg"
          >
            Search Database
          </Button>
        </div>
      </div>
    </section>
  );
}

function VerificationCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-[10px] border border-[#B7BECD] p-10 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-md border border-[#B7BECD] bg-[#F7F7F8]">
          {icon}
        </div>
        <h3 className="flex-1 text-2xl font-semibold text-[#21242C]">
          {title}
        </h3>
      </div>
      <p className="text-base text-[#383D48] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
