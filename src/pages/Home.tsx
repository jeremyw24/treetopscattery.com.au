import { motion } from 'motion/react';
import { Cat, Heart, Shield, Star, ArrowRight, PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=2000"
          alt="Cozy Cat"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-forest/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-cream">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 bg-sage/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Est. 1976 • Family Owned & Operated
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            A home away from <span className="italic text-moss">home</span> for your cat.
          </h1>
          <p className="text-lg md:text-xl text-cream/90 mb-10 leading-relaxed">
            Treetops Cattery offers all the luxuries of home with our unique warm, loving home-style care and dedicated service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-cream text-forest px-8 py-4 rounded-full font-bold hover:bg-sage hover:text-cream transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Book a Stay <ArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-cream/50 text-cream px-8 py-4 rounded-full font-bold hover:bg-cream/10 transition-all flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Paw Prints */}
      <div className="absolute bottom-10 right-10 opacity-20 text-cream hidden lg:block">
        <PawPrint size={120} className="rotate-12" />
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Heart className="text-earth" />,
      title: "Warm & Loving Care",
      description: "We treat every cat as if they were our own, with plenty of cuddles and attention."
    },
    {
      icon: <Shield className="text-sage" />,
      title: "Safe & Secure",
      description: "Our facilities are designed for comfort and are fully licenced and approved by council, giving you peace of mind."
    },
    {
      icon: <Star className="text-moss" />,
      title: "Tailored Service",
      description: "From dietary needs to medication, we tailor our care to suit your cat's unique personality."
    }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest mb-6">Why Choose Treetops?</h2>
          <p className="text-forest/70 text-lg">
            We've been providing exceptional boarding services for over 45 years, focusing on the individual needs of every feline guest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-sage/10 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mx-auto mb-8">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-forest mb-4">{feature.title}</h3>
              <p className="text-forest/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-sage/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552954877-e96a0f0728c0?auto=format&fit=crop&q=80&w=1000"
                alt="Cat in Apartment"
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-earth rounded-full -z-0 opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-sage rounded-full -z-0 opacity-20"></div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest">Cozy Accommodation & Tailored Care</h2>
            <p className="text-forest/70 text-lg leading-relaxed">
              Whether your cat loves lounging in front of a fireplace or prefers to adventure outside, we have a range of options to suit their lifestyle.
            </p>
            <ul className="space-y-4">
              {[
                "Indoor & Outdoor Apartments",
                "Fireplace & Individual Heating",
                "Tailored Dietary Requirements",
                "Medication Administration",
                "Daily Grooming & Playtime"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-forest/80 font-medium">
                  <div className="w-5 h-5 bg-sage/20 rounded-full flex items-center justify-center text-sage">
                    <PawPrint size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sage font-bold hover:gap-4 transition-all"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alp E",
      text: "Treetops cattery diligently took care of two of my cats while I was overseas. One of my cats was diabetic and required insulin injections everyday, the cattery delivered care above and beyond."
    },
    {
      name: "Uta P",
      text: "Have been taking my cats here since I became a cat owner many years ago and wouldn't go anywhere else. I can go away secure in the knowledge that my cat is safe and well cared for."
    },
    {
      name: "Karen N",
      text: "I had my 2 cats there for 2 months whilst I relocated interstate the care they received was exceptional, sent me photo updates and very easy process of obligingly with interstate transfer process."
    },
    {
      name: "M W",
      text: "Our cat is very shy and timid, but we know he is well taken care of at Treetops. The owners are lovely, warm people who know cats well and have great boarding facilities. They were accomodating to our specific requests. We would definitely board our cat here again. "
    },
    {
      name: "Jamie K",
      text: "My cats have been there twice now, Cannot talk highly enough about treetops, alway come home healthy and settled, even though im not in the area now, id still take them there if I needed a cattery."
    },
    {
      name: "Nick H",
      text: "Such friendly and amazing hosts. Thank you Christine for looking after our cats for many years now! It feels so nice to know that our beloved furry felines are in such caring and loving hands."
    }
  ];

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest text-center mb-16">Kind words from our customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-12 rounded-3xl border border-sage/10 relative">
              <div className="absolute top-8 left-8 text-sage/20 italic text-8xl font-serif">"</div>
              <p className="text-forest/80 text-lg italic mb-8 relative z-10 leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center text-sage font-bold">
                  {t.name[0]}
                </div>
                <span className="font-bold text-forest">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest rounded-[3rem] p-12 md:p-20 text-center text-cream relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10"><PawPrint size={60} /></div>
             <div className="absolute bottom-10 right-10"><PawPrint size={60} /></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 relative z-10">Ready to book your cat's holiday?</h2>
          <p className="text-cream/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Contact us today to check availability and discuss your cat's specific needs. We look forward to welcoming them!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-sage text-cream px-10 py-5 rounded-full font-bold text-lg hover:bg-cream hover:text-forest transition-all shadow-lg relative z-10"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Features />
      <ServicesPreview />
      <Testimonials />
      <CTA />
    </motion.div>
  );
}
