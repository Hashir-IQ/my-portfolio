import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useContactInfo } from "@/hooks/usePortfolioData";

const ContactSection = () => {
  const { data: contact } = useContactInfo();
  const email = contact?.email ?? "rhashir54321@gmail.com";
  const phone = contact?.phone ?? "+923131585840";
  const location = contact?.location ?? "Haripur, Pakistan";

  return (
    <section id="contact" className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
            Contact
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Have a project in mind or want to collaborate? Get in touch directly or request a custom quote.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={`mailto:${email}`}
              className="flex-1 text-center bg-black text-white hover:bg-gray-800 transition-colors py-3.5 px-6 rounded-md font-semibold text-sm tracking-wide shadow-sm"
            >
              Contact Me
            </a>
            <a
              href={`mailto:${email}?subject=Project Quote Request`}
              className="flex-1 text-center border border-gray-300 text-black hover:bg-gray-50 transition-colors py-3.5 px-6 rounded-md font-semibold text-sm tracking-wide"
            >
              Get a Quote
            </a>
          </div>

          {/* Direct Details */}
          <div className="space-y-4 text-sm text-gray-600 mb-16">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gray-400" />
              <a href={`mailto:${email}`} className="hover:text-black transition-colors font-medium">
                {email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gray-400" />
              <a href={`tel:${phone}`} className="hover:text-black transition-colors font-medium">
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-gray-400" />
              <span className="font-medium">{location}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 pt-8 text-center text-xs text-gray-400 font-medium">
            <p>© {new Date().getFullYear()} Hashir Iqbal. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
