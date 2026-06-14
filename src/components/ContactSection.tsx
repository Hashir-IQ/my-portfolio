import { Mail, Phone, MapPin } from "lucide-react";
import { useContactInfo } from "@/hooks/usePortfolioData";

const ContactSection = () => {
  const { data: contact } = useContactInfo();
  const email = contact?.email ?? "rhashir54321@gmail.com";
  const phone = contact?.phone ?? "+923131585840";
  const location = contact?.location ?? "Haripur, Pakistan";

  return (
    <section id="contact" className="py-8 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold tracking-widest text-black uppercase">
              Contact
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              Have a project in mind or want to collaborate? Get in touch directly or request a custom quote.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`mailto:${email}`}
                className="flex-1 text-center bg-black text-white hover:bg-gray-800 transition-colors py-3 px-4 rounded-md font-semibold text-xs tracking-wide shadow-sm"
              >
                Contact Me
              </a>
              <a
                href={`mailto:${email}?subject=Project Quote Request`}
                className="flex-1 text-center border border-gray-300 text-black hover:bg-gray-50 transition-colors py-3 px-4 rounded-md font-semibold text-xs tracking-wide"
              >
                Get a Quote
              </a>
            </div>

            {/* Direct Details */}
            <div className="space-y-3 text-xs sm:text-sm text-gray-600 mb-12">
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gray-400" />
                <a href={`mailto:${email}`} className="hover:text-black transition-colors font-medium">
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gray-400" />
                <a href={`tel:${phone}`} className="hover:text-black transition-colors font-medium">
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-gray-400" />
                <span className="font-medium">{location}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 pt-6 text-center text-[10px] text-gray-400 font-medium">
              <p>© {new Date().getFullYear()} Hashir Iqbal. All rights reserved.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
