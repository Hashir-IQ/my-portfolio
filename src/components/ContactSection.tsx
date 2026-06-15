import { useState } from "react";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useContactInfo } from "@/hooks/usePortfolioData";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactSection = () => {
  const { data: contact } = useContactInfo();
  const email = contact?.email ?? "sales@technoleanlab.com";
  const phone = contact?.phone ?? "+923131585840";
  const location = contact?.location ?? "Haripur, Pakistan";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/sales@technoleanlab.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Submission from Portfolio"
        })
      });

      const result = await response.json();
      if (result.success === "true" || response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12">
      {/* Uppercase Section Label */}
      <h2 className="text-xs font-extrabold tracking-widest text-gray-600 uppercase block mb-6">
        Contact
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
        {/* Left Column: Tagline & Contact Form */}
        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Have a project in mind or want to collaborate? Feel free to drop a message using the form below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[10px] font-bold text-gray-400 uppercase mb-1">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="bg-white border-gray-200 focus:border-black focus:ring-black transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[10px] font-bold text-gray-400 uppercase mb-1">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="bg-white border-gray-200 focus:border-black focus:ring-black transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[10px] font-bold text-gray-400 uppercase mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="bg-white border-gray-200 focus:border-black focus:ring-black transition-colors resize-none min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white hover:bg-gray-800 font-semibold text-xs tracking-wide transition-colors h-10"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
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
