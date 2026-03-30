import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba", title: "Cozy Nap Time" },
    { url: "https://images.unsplash.com/photo-1513245539768-586217995117", title: "Luxury Apartment" },
    { url: "https://images.unsplash.com/photo-1511044568932-338cba0ad803", title: "Garden View" },
    { url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5", title: "Happy Guest" },
    { url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce", title: "Play Time" },
    { url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d", title: "Curious Explorer" },
    { url: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8", title: "Outdoor Space" },
    { url: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e", title: "Relaxing Afternoon" },
    { url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131", title: "Feline Friend" },
  ];

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
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-forest mb-6">Image Gallery</h1>
          <p className="text-forest/70 text-lg max-w-2xl mx-auto">
            Take a look at our facilities and some of our happy guests enjoying their stay at Treetops.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(`${image.url}?auto=format&fit=crop&q=80&w=1200`)}
              >
                <img
                  src={`${image.url}?auto=format&fit=crop&q=80&w=800`}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-cream font-serif font-bold text-xl">{image.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-forest/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-sage transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-24 bg-sage/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-forest mb-8">Want to see more?</h2>
          <p className="text-forest/70 mb-12">Follow us on social media for daily updates and cute cat photos!</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/treetopsboardingcattery" className="bg-forest text-cream px-8 py-4 rounded-full font-bold hover:bg-sage transition-all">Instagram</a>
            <a href="https://www.facebook.com/treetopscattery" className="bg-white text-forest border border-forest/10 px-8 py-4 rounded-full font-bold hover:bg-sage/10 transition-all">Facebook</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
