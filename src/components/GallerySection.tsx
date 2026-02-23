import { motion } from "framer-motion";
import clinicIv from "@/assets/clinic-iv.jpeg";
import clinicBp from "@/assets/clinic-bp.jpeg";
import clinicPatient from "@/assets/clinic-patient.jpeg";
import clinicMonitor from "@/assets/clinic-monitor.jpeg";

const images = [
  { src: clinicBp, alt: "Blood pressure monitoring at Dunwell" },
  { src: clinicMonitor, alt: "Patient care and monitoring" },
  { src: clinicPatient, alt: "Patient receiving IV treatment" },
  { src: clinicIv, alt: "IV drip preparation" },
];

const GallerySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-widest">Our Clinic</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2">See Us in Action</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden aspect-square group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
