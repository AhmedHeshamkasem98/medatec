import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "+2010627143";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const openWhatsApp = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Get in Touch
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
                Let's Build Something Beautiful Together
              </h2>
              <p className="text-xl text-stone-300 leading-relaxed">
                Ready to start your project? Get in touch for a free
                consultation and quote. We're here to help bring your vision to
                life.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-amber-700/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-stone-300">{whatsappNumber}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-amber-700/20 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-stone-300">
                    Message us directly for quick responses
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-amber-700/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-stone-300">
                    Helwan Cement Housing, in front of the Cement School
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">
              Contact Us on WhatsApp
            </h3>

            <div className="space-y-6">
              <p className="text-stone-600 text-lg">
                The fastest way to reach us is through WhatsApp. Send us a
                message and we'll get back to you right away!
              </p>

              <button
                onClick={openWhatsApp}
                className="w-full group flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </button>

              <div className="pt-6 border-t border-stone-200">
                <h4 className="font-semibold text-stone-900 mb-3">
                  What to Include:
                </h4>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Type of project you're interested in</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Approximate dimensions or space details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Any photos or inspiration you have</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Your timeline and budget range</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-stone-500 text-center pt-4">
                We typically respond within a few hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
