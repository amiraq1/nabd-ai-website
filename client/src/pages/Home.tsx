import { Activity, CreditCard, Wallet, ShoppingBag } from "lucide-react";
import homeContent from "../content/home.json";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>نبض AI - صناعة المحتوى الرقمي بأسلوب عصري</title>
        <meta name="description" content="مرحباً، أنا عمار محمد. صانع محتوى، تقني متخصص في تبسيط المفاهيم المعقدة وتقديمها للجمهور العربي بأسلوب شيق ومبتكر" />
        <meta name="keywords" content="نبض AI, صناعة المحتوى, المحتوى الرقمي, عمار محمد, تقنية, عربي" />
        <meta property="og:title" content="نبض AI - صناعة المحتوى الرقمي بأسلوب عصري" />
        <meta property="og:description" content="مرحباً، أنا عمار محمد. صانع محتوى، تقني متخصص في تبسيط المفاهيم المعقدة وتقديمها للجمهور العربي بأسلوب شيق ومبتكر" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="نبض AI - صناعة المحتوى الرقمي بأسلوب عصري" />
        <meta name="twitter:description" content="مرحباً، أنا عمار محمد. صانع محتوى، تقني متخصص في تبسيط المفاهيم المعقدة وتقديمها للجمهور العربي بأسلوب شيق ومبتكر" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a1929] to-[#051222]">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-16">
        <div className="container max-w-2xl mx-auto text-center space-y-8">
          {/* Logo with Heartbeat Icon */}
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Activity className="w-10 h-10 sm:w-12 sm:h-12 text-primary animate-pulse" strokeWidth={2.5} />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-white">{homeContent.main_title.split(' ')[0]}</span>
              <span className="text-primary">{homeContent.main_title.split(' ').slice(1).join(' ')}</span>
            </h1>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {homeContent.sub_title}
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {homeContent.description}
          </motion.p>


        </div>
      </main>

      {/* Payment Section */}
      <motion.section 
        className="py-12 sm:py-16 px-4 border-t border-border/50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="container max-w-2xl mx-auto text-center space-y-8">
          {/* Payment Methods */}
          <div className="pt-8">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-6">
              <div className="flex items-center justify-center gap-3">
                <CreditCard className="w-6 h-6 text-primary" />
                <span>وسائل الدفع المعتمدة</span>
              </div>
            </h4>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              {/* ZainCash Payment */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(homeContent.zaincash_number);
                  alert(`تم نسخ رقم زين كاش: ${homeContent.zaincash_number}\n\nيمكنك الآن فتح تطبيق زين كاش وإرسال المبلغ`);
                }}
                className="flex items-center gap-3 px-6 py-4 bg-card hover:bg-card/80 rounded-lg border-2 border-primary/50 hover:border-primary transition-all cursor-pointer group"
              >
                <Wallet className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-right">
                  <span className="text-white font-semibold block">زين كاش</span>
                  <span className="text-primary text-sm font-mono">{homeContent.zaincash_number}</span>
                </div>
              </button>
              
              {/* Qi Card (Coming Soon) */}
              <div className="flex items-center gap-3 px-6 py-4 bg-card/50 rounded-lg border border-border/50 opacity-60">
                <CreditCard className="w-6 h-6 text-muted-foreground" />
                <div className="text-right">
                  <span className="text-muted-foreground font-medium block">كي كارد</span>
                  <span className="text-muted-foreground text-xs">قريباً</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              اضغط على زين كاش لنسخ رقم المحفظة
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container max-w-2xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 عمار محمد. جميع الحقوق محفوظة. تصميم وتطوير بواسطة{" "}
            <a 
              href="https://amiraq.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              AMIRAQ.ORG
            </a>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            لم يتم نشر أي مقالات بعد. كن أول من يكتبها!
          </p>

          {/* Products Button */}
          <div className="pt-6">
          <Link href="/products" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-lg transition-all hover:scale-105 text-lg shadow-lg shadow-primary/50 hover:shadow-primary/70 transform hover:bg-primary/90">
            <ShoppingBag className="w-6 h-6" />
            <span>تصفح المنتجات والخدمات</span>
          </Link>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
