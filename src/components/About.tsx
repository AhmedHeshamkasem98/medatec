import { Award, Heart, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
                About Wady
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 leading-tight">
              Master Craftsman with a Passion for Wood
            </h2>
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                For over 40 years, Wady has been transforming raw timber into
                stunning pieces that bring warmth and character to homes and
                businesses across the region.
              </p>
              <p>
                What started as a love for working with wood has grown into a
                full-service woodworking workshop where traditional techniques
                meet modern precision. Every project, from the smallest repair
                to complete custom furniture sets, receives the same dedication
                to excellence.
              </p>
              <p>
                At Wady Woodworks, we believe that quality craftsmanship never
                goes out of style. Each piece is built to last generations,
                combining durability with timeless beauty.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-100 hover:shadow-lg transition-shadow">
              <Award className="w-10 h-10 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Expert Craftsmanship
              </h3>
              <p className="text-stone-600">
                Years of experience working with all types of wood, ensuring the
                highest quality in every detail.
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-8 border border-orange-100 hover:shadow-lg transition-shadow">
              <Heart className="w-10 h-10 text-orange-700 mb-4" />
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Made with Passion
              </h3>
              <p className="text-stone-600">
                Each project is treated with care and attention, from the first
                measurement to the final polish.
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-8 border border-stone-200 hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 text-stone-700 mb-4" />
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Customer Focused
              </h3>
              <p className="text-stone-600">
                We work closely with you to bring your vision to life, ensuring
                complete satisfaction every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
