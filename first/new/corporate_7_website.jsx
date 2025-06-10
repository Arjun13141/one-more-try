import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.document) {
      setHasMounted(true);
      window.document.title = "Arya Flow - Corporate Wellness Solutions";
    }
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
          Arya Flow
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-700">
          Empowering Corporate Transformation through Wellness, Professionalism & Productivity
        </p>
      </header>

      <motion.section
        className="grid md:grid-cols-2 gap-8 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Card className="shadow-xl border-blue-100 border">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Corporate 7
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              A 7-day structured yoga & wellness workshop designed for working professionals facing stress, back pain, burnout, and sleep issues.
            </p>
            <Link href="/corporate-7" passHref>
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-xl">
                Explore Corporate 7
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-blue-100 border">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Corporate Catalyst
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              A powerful 1-day seminar hosted at your office to inspire leadership, reduce stress, and promote well-being among executives and HR teams.
            </p>
            <Link href="/corporate-catalyst" passHref>
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-xl">
                Explore Catalyst
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        className="text-center mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Why Arya Flow?
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          We combine the ancient wisdom of yoga with modern science to deliver measurable impact on employee well-being, corporate performance, and workplace harmony.
        </p>
      </motion.section>

      <motion.section
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
          Ready to Transform Your Workplace?
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-6 text-gray-700">
          Schedule a free consultation with our wellness strategist and discover how Arya Flow can enhance your team's well-being.
        </p>
        <a
          href="https://forms.gle/your-google-form-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 text-lg rounded-xl">
            Book Free Consultation
          </Button>
        </a>
      </motion.section>

      <footer className="text-center text-sm text-gray-500 mt-16">
        © 2025 Arya Flow. All Rights Reserved.
      </footer>
    </div>
  );
}
