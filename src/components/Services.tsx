import { Armchair, DoorOpen, Frame, Wrench, Sparkles, Home } from 'lucide-react';

const services = [
  {
    icon: Armchair,
    title: 'Custom Furniture',
    description: 'Bespoke tables, chairs, cabinets, and storage solutions designed to fit your space perfectly.',
    color: 'amber'
  },
  {
    icon: DoorOpen,
    title: 'Wooden Doors',
    description: 'Handcrafted interior and exterior doors that combine security with stunning craftsmanship.',
    color: 'orange'
  },
  {
    icon: Frame,
    title: 'Wood Decor',
    description: 'Beautiful decorative pieces, wall panels, shelving, and accents to enhance any room.',
    color: 'stone'
  },
  {
    icon: Home,
    title: 'Built-ins & Carpentry',
    description: 'Custom built-in wardrobes, bookcases, and carpentry work tailored to your home.',
    color: 'amber'
  },
  {
    icon: Sparkles,
    title: 'Finishing & Refinishing',
    description: 'Expert staining, varnishing, and refinishing to restore or transform wooden pieces.',
    color: 'orange'
  },
  {
    icon: Wrench,
    title: 'Repairs & Restoration',
    description: 'Professional repair services for furniture, doors, and wooden structures of all kinds.',
    color: 'stone'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mt-4 mb-6">
            Comprehensive Woodworking Solutions
          </h2>
          <p className="text-xl text-stone-600">
            From concept to completion, we handle every aspect of your woodworking project with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              amber: 'bg-amber-100 text-amber-700 border-amber-200',
              orange: 'bg-orange-100 text-orange-700 border-orange-200',
              stone: 'bg-stone-100 text-stone-700 border-stone-300'
            };

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-stone-200 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-lg ${colorClasses[service.color as keyof typeof colorClasses]} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-stone-600 mb-6">
            Don't see what you're looking for? We take on custom projects of all sizes.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <span>Discuss Your Project</span>
          </button>
        </div>
      </div>
    </section>
  );
}
