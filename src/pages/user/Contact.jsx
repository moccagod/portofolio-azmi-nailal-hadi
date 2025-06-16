import { useRef, useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import PageWrapper from "../../components/PageWrapper";
import {
  User,
  Phone,
  Mail,
  MessageSquareText,
  UserCircle2,
} from "lucide-react";

const ContactPage = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      formRef.current.submit();
      toast.success("Pesan berhasil dikirim!");
      setLoading(false);
    }, 500);
  };

  return (
    <PageWrapper>
      <Toaster position="top-center" />
      <section className="min-h-screen flex items-center px-6 py-16">
        <motion.div
          className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Kiri - Info */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-black">
              ✨ Mari Bekerja Sama
            </h2>
            <p className="text-black text-lg mb-6">
              Saya adalah Web Developer profesional yang siap bantu kamu bangun
              website keren sesuai kebutuhan. Kontak sekarang yuk!
            </p>

            <div className="text-base text-black space-y-2">
              <p>📍 Jakarta, Indonesia (Remote)</p>
              <p>📧 azminailalhadi@gmail.com</p>
              <div className="flex gap-4 pt-2">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/azminailalhadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <svg
                    className="w-7 h-7 text-blue-600 hover:text-blue-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM7.5 8h3.6v2.16h.05c.5-.9 1.75-1.86 3.6-1.86 3.85 0 4.56 2.53 4.56 5.81V24h-4v-8.36c0-2-.03-4.56-2.78-4.56-2.78 0-3.2 2.17-3.2 4.42V24h-4z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/azminailalhadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <svg
                    className="w-7 h-7 text-black hover:text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12a12.03 12.03 0 008.21 11.39c.6.11.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.79.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.91 0-1.3.47-2.36 1.24-3.2-.12-.3-.54-1.51.12-3.15 0 0 1-.32 3.3 1.23A11.48 11.48 0 0112 6.8c1.01.01 2.03.14 2.98.4 2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.85.12 3.15.77.84 1.24 1.9 1.24 3.2 0 4.6-2.81 5.61-5.49 5.91.43.37.81 1.11.81 2.24v3.32c0 .33.22.7.82.58A12.03 12.03 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Kanan - Form */}
          <form
            ref={formRef}
            action="https://formsubmit.co/azminailalhadi28@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white border-4 border-black shadow-[6px_6px_0px_black] p-6 md:p-8 rounded-xl space-y-6 w-full"
          >
            <h3 className="text-3xl font-bold text-black">💬 Hubungi Saya</h3>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Nama Depan */}
              <div className="space-y-2">
                <label className="text-sm text-black font-semibold">
                  Nama Depan
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="Nama Depan"
                    className="w-full pl-10 p-3 border-2 border-black rounded-md shadow-[2px_2px_0px_black] bg-white"
                  />
                </div>
              </div>

              {/* Nama Belakang */}
              <div className="space-y-2">
                <label className="text-sm text-black font-semibold">
                  Nama Belakang
                </label>
                <div className="relative">
                  <UserCircle2 className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Nama Belakang"
                    className="w-full pl-10 p-3 border-2 border-black rounded-md shadow-[2px_2px_0px_black] bg-white"
                  />
                </div>
              </div>

              {/* Telepon */}
              <div className="space-y-2">
                <label className="text-sm text-black font-semibold">
                  Telepon
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="08xx xxxx xxxx"
                    className="w-full pl-10 p-3 border-2 border-black rounded-md shadow-[2px_2px_0px_black] bg-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm text-black font-semibold">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email@domain.com"
                    className="w-full pl-10 p-3 border-2 border-black rounded-md shadow-[2px_2px_0px_black] bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Pesan */}
            <div className="space-y-2">
              <label className="text-sm text-black font-semibold">Pesan</label>
              <div className="relative">
                <MessageSquareText className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tulis pesanmu..."
                  className="w-full pl-10 p-3 border-2 border-black rounded-md shadow-[2px_2px_0px_black] bg-white"
                ></textarea>
              </div>
            </div>

            {/* Hidden fields */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Tombol */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md text-white font-bold text-lg transition-all duration-200 ${
                loading
                  ? "bg-gray-400 shadow-none cursor-not-allowed"
                  : "bg-black hover:bg-gray-700 shadow-[3px_3px_0px_black]"
              }`}
            >
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </form>
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default ContactPage;
