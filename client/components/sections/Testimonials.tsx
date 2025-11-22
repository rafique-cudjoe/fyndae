import { Star, Play, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="px-6 md:px-20 py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-15">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            <span className="text-[#0A0814]">Real Stories From The </span>
            <span className="text-[#117465]">Fyndae</span>
            <span className="text-[#0A0814]"> Community</span>
          </h2>
          <p className="text-lg md:text-xl text-[#21242C] max-w-4xl">
            Don't take our word for it. Hear it from the people who trusted us and got their missing items back
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-12">
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <div className="w-full lg:w-[353px] h-[393px] rounded-[20px] bg-gradient-to-br from-[#117465] to-[#117465] flex items-center justify-center relative overflow-hidden">
              <img 
                src="/images/lerato-testimonial.png" 
                alt="Lerato D testimonial video"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white hover:bg-gray-100 transition-colors relative z-10">
                <Play className="w-7 h-7 text-[#117465] fill-[#117465] ml-1" />
              </button>
            </div>

            <div className="flex-1 bg-[#F7F7F8] rounded-[20px] p-10 flex flex-col justify-center gap-6 min-h-[393px] relative">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#0A463D] text-[#0A463D]" />
                  ))}
                </div>
                <p className="text-xl text-[#100E21] leading-relaxed">
                  My work laptop was stolen and I was devastated. A friend told me about Fyndae and I gave it a shot. Within two days, I got an anonymous tip that led to it's recovery. I am still amazed. This is the real game changer.
                </p>
              </div>

              <div className="w-full h-px bg-[#FCFCFE]"></div>

              <div className="flex flex-col gap-0.5">
                <h4 className="text-xl font-semibold text-[#1D1D1D]">Lerato D. CapeTown</h4>
                <p className="text-base text-[#3F3E4D]">Fyndae User</p>
              </div>

              <svg className="w-[78px] h-14 absolute right-8 top-8 opacity-30" viewBox="0 0 78 56" fill="none" xmlns="http://www.w3.org/2000/svg" display="none">
                <path d="M16.5464 36.2329C15.0727 44.2747 12.6262 50.0509 10.6757 53.6288C9.91479 55.0273 11.4704 56.5839 12.8525 55.7793C29.174 46.3198 36.3306 32.521 37.2215 21.457C37.9873 11.9113 31.4423 2.08307 21.5214 0.291764C11.5956 -1.49476 2.0936 5.05263 0.29241 14.924C-1.59546 25.2695 5.73931 35.208 16.5464 36.2329Z" fill="#117465"/>
                <path d="M57.2682 36.2332C55.7945 44.2749 53.3479 50.0512 51.3975 53.629C50.6365 55.0276 52.1921 56.5842 53.5743 55.7796C69.8957 46.3201 77.0523 32.5213 77.9433 21.4573C78.709 11.9116 72.1641 2.08336 62.2431 0.292055C52.3221 -1.49926 42.8153 5.05292 41.019 14.9195C39.1311 25.265 46.4659 35.2034 57.273 36.2284L57.2682 36.2332Z" fill="#117465"/>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <TestimonialCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/60de687206acfc081d22acfdcd80f8056a8b3499?width=120"
              name="Thabo k. Pretoria"
              role="Community Member"
              text="I saw a post about a missing dog that matched one I had spotted in my neighbourhood.
I reported it on Fyndae and connected the dots. The owner was overjoyed and I even got paid"
            />
            <TestimonialCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/e270d92b790f342ea0ddd29b8de3fb03e043d351?width=120"
              name="Ayomide. Lagos"
              role="Grateful User"
              text="My little sister was disciplined and disappeared for 2 weeks. I reported on Fyndae because I was scared for her safety, someone reported seeing her at an estate with her boyfriend. I went over there with my mom and found her. I'm so grateful to the Fyndae community for helping us find her."
            />
            <TestimonialCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/904edee25d3961e941fab31afdf7c8fc28db7cef?width=120"
              name="Aisha. Abuja"
              role="Tip Reporter"
              text="I came across a bike recovered by the police. After checking Fyndae, I realized it matched a missing report. I submitted a tip and the owner confirmed it and I got paid, no hassle. It's amazing to be part of something that helps people."
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button className="flex items-center justify-center w-11 h-11 rounded-full border-[1.5px] border-[#CFE3E0] hover:bg-[#CFE3E0]/20 transition-colors">
            <ChevronLeft className="w-8 h-8 text-[#CFE3E0]" />
          </button>
          <button className="flex items-center justify-center w-11 h-11 rounded-full bg-[#0A463D] hover:bg-[#117465] transition-colors">
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  text: string;
}

function TestimonialCard({ image, name, role, text }: TestimonialCardProps) {
  return (
    <div className="flex flex-col border border-[#F7F7F8] bg-[#F7F7F8] rounded-[14px] shadow-[0_0_0_6px_#FFF]">
      <div className="p-5 flex items-center gap-2.5">
        <img 
          src={image} 
          alt={name}
          className="w-15 h-15 rounded-full object-cover"
        />
        <div className="flex flex-col gap-0.5">
          <h4 className="text-xl font-semibold text-[#1D1D1D]">{name}</h4>
          <p className="text-base text-[#3F3E4D]">{role}</p>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-5 bg-[#F7F7F8]">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-[#0A463D] text-[#0A463D]" />
          ))}
        </div>
        <p className="text-base text-[#100E21] leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
