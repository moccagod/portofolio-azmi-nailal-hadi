import { Link } from "react-router-dom";
import { Download, User } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center px-6 py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Kanan: Gambar / Ilustrasi */}
        <div className="flex justify-center">
          <img
            src="https://mhzgrohlrvvqnsvswylk.supabase.co/storage/v1/object/sign/images/reading.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWU3NzUyZS1iMjFjLTQ1MzQtYjFjYS04ODExMTQ3MTdjNjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvcmVhZGluZy5wbmciLCJpYXQiOjE3NTAwMzg0NjQsImV4cCI6MTc4MTU3NDQ2NH0.n6ZPluWP9S_6YiSM4jBt3KO4uAJjof_gso4VU1CVmfY"
            alt="Web Developer Illustration"
            className="w-[80%] max-w-sm md:max-w-full"
          />
        </div>

        {/* Kiri: Teks & CTA */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hai, Saya <span className="text-blue-600">Azmi Nailal Hadi</span>
          </h1>
          <p className="text-lg mb-6 text-gray-800">
            Seorang Web Developer yang siap membantu kamu membangun website
            modern, cepat, dan menarik!
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded shadow-[3px_3px_0px_black] hover:bg-gray-800 transition-all"
            >
              <Download size={18} />
              Download CV
            </a>
            <Link
              to="/about"
              className="flex items-center gap-2 border-2 border-black text-black px-5 py-3 rounded shadow-[3px_3px_0px_black] hover:bg-black hover:text-white transition-all"
            >
              <User size={18} />
              Tentang Saya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
