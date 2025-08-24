import { motion } from "framer-motion";
import { FaTasks, FaBell, FaChartLine, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function TaskFlow() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">TaskFlow</h1>
        <p className="text-lg md:text-xl mb-6">Organize your tasks. Boost your productivity.</p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <motion.section
        className="py-16 px-6 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="p-6 rounded-xl shadow bg-white">
          <FaTasks className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Task Management</h3>
          <p>Create, organize, and track tasks with ease.</p>
        </div>
        <div className="p-6 rounded-xl shadow bg-white">
          <FaBell className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Reminders</h3>
          <p>Never miss a deadline with smart notifications.</p>
        </div>
        <div className="p-6 rounded-xl shadow bg-white">
          <FaChartLine className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Progress Insights</h3>
          <p>Track your productivity with powerful insights.</p>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        className="bg-gray-100 py-16 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow">
            <p>"TaskFlow completely changed how I manage my day!"</p>
            <span className="block mt-4 font-semibold">– Sarah K.</span>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <p>"The reminders keep me on track, and I get more done."</p>
            <span className="block mt-4 font-semibold">– James L.</span>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <p>"Simple, clean, and effective. Highly recommended!"</p>
            <span className="block mt-4 font-semibold">– Ayesha M.</span>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        className="py-16 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded-xl shadow bg-white">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p className="mb-4">Basic features for personal use.</p>
            <p className="text-2xl font-semibold mb-4">$0</p>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Choose Free
            </button>
          </div>
          <div className="p-6 border-2 border-blue-600 rounded-xl shadow bg-white">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="mb-4">Advanced features for professionals.</p>
            <p className="text-2xl font-semibold mb-4">$9/mo</p>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Choose Pro
            </button>
          </div>
          <div className="p-6 border rounded-xl shadow bg-white">
            <h3 className="text-xl font-bold mb-2">Team</h3>
            <p className="mb-4">Collaboration tools for teams.</p>
            <p className="text-2xl font-semibold mb-4">$19/mo</p>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Choose Team
            </button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 px-4">
        <p>© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-3 text-xl">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </footer>
    </div>
  );
}
