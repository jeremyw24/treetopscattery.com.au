import { motion } from 'motion/react';
import { Cat, Home, Sun, Utensils, Pill, Scissors, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Home size={32} />,
      title: "Cozy Accommodation",
      description: "Does your cat love lounging in front of the fireplace, or prefer to adventure outside? We have a range of accommodation options to suit your cat's preferred lifestyle.",
      features: ["Indoor & Outdoor options", "Fireplace in indoor areas", "Spacious individual apartments", "Family apartments available"]
    },
    {
      icon: <Utensils size={32} />,
      title: "Tailored Diets",
      description: "Does your cat require specific food or a regimented feeding schedule? Our trained and experienced staff will ensure your pets get all meals and dietary requirements.",
      features: ["Custom feeding schedules", "Premium food provided", "Special diet handling", "Fresh water always available"]
    },
    {
      icon: <Heart size={32} />,
      title: "Memories of Home",
      description: "We aim to make your cat's stay as homely as possible. Bring along their favourite bedding, blankets or toys to decorate their apartment.",
      features: ["Personal items welcome", "Reduced anxiety approach", "Homely atmosphere", "Familiar scents"]
    },
    {
      icon: <Pill size={32} />,
      title: "Unique Requirements",
      description: "Whether it be daily grooming, or a regimented medication schedule for your cats, Treetops has you covered.",
      features: ["Medication administration", "Daily grooming", "Post-surgery care", "Diabetic care & injections"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream min-h-screen"
    >
      {/* Header */}
      <section className="bg-forest py-20 text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Professional, friendly and unique service tailored to the individual needs of every cat staying in our care.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-12 rounded-[3rem] border border-sage/10 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center text-sage mb-8 group-hover:bg-sage group-hover:text-cream transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest mb-4">{service.title}</h3>
                <p className="text-forest/60 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-forest/80 font-medium">
                      <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Details */}
      <section className="py-24 bg-sage/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest mb-6">Accommodation Options</h2>
            <p className="text-forest/70 text-lg">We offer both indoor and outdoor facilities to suit every preference.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-sage/10">
                <h3 className="text-2xl font-serif font-bold text-forest mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-forest/10 rounded-xl flex items-center justify-center text-forest">
                    <Home size={20} />
                  </div>
                  Indoor Accommodation
                </h3>
                <p className="text-forest/60 mb-6 leading-relaxed">
                  Our indoor accommodation features television, radio and a fireplace with individual heating available in apartments by prior arrangement.
                </p>
                <ul className="space-y-3 text-forest/80">
                  <li className="flex items-center gap-2">✓ Two separate facilities housing up to 30 cats each</li>
                  <li className="flex items-center gap-2">✓ Spacious individual apartments</li>
                  <li className="flex items-center gap-2">✓ Family apartments available</li>
                  <li className="flex items-center gap-2">✓ Climate controlled environment</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-sage/10">
                <h3 className="text-2xl font-serif font-bold text-forest mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-sage/10 rounded-xl flex items-center justify-center text-sage">
                    <Sun size={20} />
                  </div>
                  Outdoor Accommodation
                </h3>
                <p className="text-forest/60 mb-6 leading-relaxed">
                  Our outdoor accommodation features spacious apartment sizes with natural gardens and plenty of space for your cat to play.
                </p>
                <ul className="space-y-3 text-forest/80">
                  <li className="flex items-center gap-2">✓ Fresh water pond with natural gardens</li>
                  <li className="flex items-center gap-2">✓ Plenty of space for exercise</li>
                  <li className="flex items-center gap-2">✓ Family apartments available</li>
                  <li className="flex items-center gap-2">✓ Secure, airy and stimulating environment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Pets */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-earth/10 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest">Not just for cats!</h2>
              <p className="text-forest/70 text-lg leading-relaxed">
                While cats are our specialty, we also offer boarding for rabbits and guinea pigs. They receive the same high level of care and attention in a safe, comfortable environment.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-earth text-cream px-8 py-4 rounded-full font-bold hover:bg-forest transition-all"
              >
                Inquire About Small Pets <ArrowRight size={20} />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=800"
                alt="Rabbit"
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section> */}
    </motion.div>
  );
}
