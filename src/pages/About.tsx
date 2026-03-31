import { motion } from 'motion/react';
import { PawPrint, Heart, Users, History, Target } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream min-h-screen"
    >
      {/* Header */}
      <section className="bg-sage/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-forest mb-6">About Us</h1>
          <p className="text-forest/70 text-lg max-w-2xl mx-auto italic">
            "Have your cat looked after by genuine cat lovers." — Bunny Williams
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-sage font-bold uppercase tracking-widest text-sm">
                <History size={18} /> Our History
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest">A family tradition since 1976</h2>
              <p className="text-forest/70 text-lg leading-relaxed">
                Treetops Boarding Cattery was established in 1976 as a family owned and run business, and still continues this tradition today along with professional, friendly and unique service.
              </p>
              <p className="text-forest/70 text-lg leading-relaxed">
                Our Cattery is situated on 10 acres of beautiful, untouched farm-land in the heart of the Mornington Peninsula.
              </p>
              <p className="text-forest/70 text-lg leading-relaxed">
                Over the decades, we've grown from a small facility into one of the most respected catteries in Victoria, all while maintaining the personal touch that only a family business can provide.
              </p>

              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-serif font-bold text-sage mb-2">45+</div>
                  <div className="text-forest/60 text-sm font-medium uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-sage mb-2">10k+</div>
                  <div className="text-forest/60 text-sm font-medium uppercase tracking-wider">Happy Guests</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&q=80&w=1000"
                alt="Cattery Surroundings"
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center text-sage">
                    <Heart size={20} />
                  </div>
                  <span className="font-bold text-forest">Our Promise</span>
                </div>
                <p className="text-forest/60 text-sm">
                  We provide the finest care for your cat, tailoring our service to suit the individual needs of every guest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aim Section */}
      <section className="py-24 bg-forest text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 text-sage font-bold uppercase tracking-widest text-sm">
              <Target size={18} /> Our Aim
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold">Your cat's comfort is our priority</h2>
            <p className="text-cream/80 text-xl leading-relaxed">
              Our aim at Treetops Cattery is to provide unique, personal care for your cat while you are away from home on holidays, business or even moving interstate.
            </p>
            <div className="pt-10 flex justify-center">
              <div className="w-24 h-1 bg-sage/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest mb-6">Meet Our Team</h2>
            <p className="text-forest/70 text-lg max-w-2xl mx-auto">
              Our staff are trained professionals and, most importantly, genuine cat lovers who dedicated their lives to feline welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "The Williams Family", role: "Owners & Founders", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600" },
              { name: "Sarah Jenkins", role: "Senior Caretaker", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" },
              { name: "Michael Chen", role: "Veterinary Assistant", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-forest">{member.name}</h3>
                <p className="text-sage font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </motion.div>
  );
}
