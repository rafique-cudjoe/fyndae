import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white rounded-3xl">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-8">
          <div className="lg:w-[330px] flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f8f9fbdfa907c4f71c7b4696f0efe937b95cf67b?width=180" 
                alt="Fyndae Logo" 
                className="w-[90px] h-auto"
              />
              <p className="text-base text-[#3F3E4D] leading-relaxed">
                Helping you recover what matters most. We connect people, technology and community to securely track, verify and recover missing items.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Facebook className="w-3 h-5 text-[#0A463D] fill-[#0A463D]" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Twitter className="w-5 h-4 text-[#0A463D] fill-[#0A463D]" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Instagram className="w-5 h-5 text-[#0A463D] fill-[#0A463D]" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Linkedin className="w-5 h-5 text-[#0A463D] fill-[#0A463D]" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Youtube className="w-5 h-4 text-[#0A463D] fill-[#0A463D]" />
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div className="flex flex-col gap-10">
              <h3 className="text-xl font-semibold text-[#0A0814]">Navigation</h3>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Home</a>
                <a href="#" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Features</a>
                <a href="#" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">About Us</a>
                <a href="#" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Contact</a>
              </nav>
            </div>

            <div className="flex flex-col gap-10">
              <h3 className="text-xl font-semibold text-[#0A0814]">Company</h3>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">How It Works</a>
                <a href="#" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Report An Item</a>
                <a href="#" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Join The Community</a>
                <a href="#" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">FAQ</a>
              </nav>
            </div>

            <div className="flex flex-col gap-10">
              <h3 className="text-xl font-semibold text-[#0A0814]">Legal</h3>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Privacy Policy</a>
                <a href="#" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Terms & Condition</a>
                <a href="#" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Reward Policy</a>
              </nav>
            </div>

            <div className="flex flex-col gap-7">
              <h3 className="text-xl font-bold text-[#170F49]">Contacts us</h3>
              <div className="flex flex-col gap-0">
                <a href="mailto:Info@fyndae.com" className="flex items-center gap-1.5 text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">
                  <Mail className="w-5 h-5 text-[#117465]" strokeWidth={1.4} />
                  <span>Info@fyndae.com</span>
                </a>
              </div>
              <div className="flex flex-col gap-0">
                <a href="tel:+27782027076" className="flex items-center gap-1.5 text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">
                  <Phone className="w-5 h-5 text-[#117465]" strokeWidth={1.4} />
                  <span>+27 78 202 7076</span>
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#117465] shrink-0 mt-1" strokeWidth={1.4} />
                <span className="text-base text-[#3F3E4D]">Cape Town, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#EAEEF5] my-16"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg text-[#3F3E4D]">Copyright © 2025 Fyndae</p>
          <p className="text-lg text-[#3F3E4D] text-center md:text-right">
            All Rights Reserved | 
            <a href="#" className="text-[#117465] hover:underline"> Terms and Conditions</a> | 
            <a href="#" className="text-[#117465] hover:underline"> Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
