import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { url: "/images/1.jpg", title: "Treetops" },
    { url: "/images/2.jpg", title: "Treetops" },
    { url: "/images/3.jpg", title: "Treetops" },
    { url: "/images/4.jpg", title: "Treetops" },
    { url: "/images/5.jpg", title: "Treetops" },
    { url: "/images/6.jpg", title: "Treetops" },
    { url: "/images/7.jpg", title: "Treetops" },
    { url: "/images/8.jpg", title: "Treetops" },
    { url: "/images/9.jpg", title: "Treetops" },
    { url: "/images/10.jpg", title: "Treetops" },
    { url: "/images/11.jpg", title: "Treetops" },
    { url: "/images/12.jpg", title: "Treetops" },
    { url: "/images/13.jpg", title: "Treetops" },
    { url: "/images/14.jpg", title: "Treetops" },
    { url: "/images/15.jpg", title: "Treetops" },
    { url: "/images/16.jpg", title: "Treetops" },
    { url: "/images/17.jpg", title: "Treetops" },
    { url: "/images/IMG_6646.jpeg", title: "Treetops" },
    { url: "/images/IMG_6703.jpeg", title: "Treetops" },
    { url: "/images/IMG_6708.jpeg", title: "Treetops" },
    { url: "/images/IMG_6777.jpeg", title: "Treetops" },
    { url: "/images/IMG_6812.jpeg", title: "Treetops" },
    { url: "/images/IMG_6957.jpeg", title: "Treetops" },
    { url: "/images/IMG_7309.jpeg", title: "Treetops" },
    { url: "/images/IMG_7365.jpeg", title: "Treetops" },
    { url: "/images/IMG_7429.jpeg", title: "Treetops" },
    { url: "/images/IMG_7439.jpeg", title: "Treetops" },
    { url: "/images/Resized_20250327_090417.JPEG", title: "Treetops" },
    { url: "/images/Resized_20250625_094315.jpg", title: "Treetops" },
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
                className="relative cursor-pointer overflow-hidden rounded-3xl shadow-sm"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto object-cover"
                />
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
