import { Mail, Phone, MapPin } from "lucide-react";
import { useContactInfo } from "@/hooks/usePortfolioData";

const ContactSection = () => {
  const { data: contact } = useContactInfo();
  const email = contact?.email ?? "rhashir54321@gmail.com";
  const phone = contact?.phone ?? "+923131585840";
  const location = contact?.location ?? "Haripur, Pakistan";

  return (
    <section id="contact" className="py-12">
      {/* Uppercase Section Label */}
      <h2 className="text-xs font-extrabold tracking-widest text-gray-600 uppercase block mb-6">
        Contact
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
        {/* Left Column: Tagline & Actions */}
        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Have a project in mind or want to collaborate? Get in touch directly or request a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${email}`}
              className="bg-black text-white hover:bg-gray-800 text-center py-2.5 px-5 rounded-md font-semibold text-xs tracking-wide transition-colors"
            >
              Contact Me
            </a>
            <a
              href={`mailto:${email}?subject=Project Quote Request`}
              className="bg-white border border-gray-300 text-black hover:bg-gray-50 text-center py-2.5 px-5 rounded-md font-semibold text-xs tracking-wide transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Right Column: Contact info with icons */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-500">
              <Mail size={14} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Email</p>
              <a href={`mailto:${email}`} className="text-xs text-gray-700 hover:text-black font-semibold mt-0.5 block">
                {email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-500">
              <Phone size={14} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Phone</p>
              <a href={`tel:${phone}`} className="text-xs text-gray-700 hover:text-black font-semibold mt-0.5 block">
                {phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-500">
              <MapPin size={14} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Location</p>
              <span className="text-xs text-gray-700 font-semibold mt-0.5 block">
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Thin line separating footer */}
      <div className="w-full h-px bg-gray-200 mb-6" />

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] text-gray-400 font-medium">
        <p>© {new Date().getFullYear()} Hashir Iqbal. All rights reserved.</p>
        <p>Built with care.</p>
      </div>
    </section>
  );
};

export default ContactSection;
