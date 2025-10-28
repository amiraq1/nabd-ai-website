import { Button } from "@/components/ui/button";
import { Activity, Github, Linkedin, Twitter, Youtube, CreditCard, Wallet } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a1929] to-[#051222]">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-16">
        <div className="container max-w-2xl mx-auto text-center space-y-8">
          {/* Logo with Heartbeat Icon */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Activity className="w-10 h-10 sm:w-12 sm:h-12 text-primary animate-pulse" strokeWidth={2.5} />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-white">نبض</span>
              <span className="text-primary"> AI</span>
            </h1>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            صناعة المحتوى
            <br />
            <span className="text-primary">الرقمي بأسلوب</span>
            <br />
            عصري
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed px-4">
            مرحباً، أنا عمار محمد. صانع محتوى، تقني متخصص في تبسيط المفاهيم المعقدة وتقديمها للجمهور العربي بأسلوب شيق ومبتكر
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg"
            >
              اعرف المزيد عني
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-primary/50 text-white hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
            >
              اكتشف أعمالي
            </Button>
          </div>

          <Button 
            size="lg" 
            variant="secondary" 
            className="w-full sm:w-auto bg-secondary hover:bg-secondary/80 text-white font-semibold px-8 py-6 text-lg mt-2"
          >
            تواصل معي
          </Button>
        </div>
      </main>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 border-t border-border/50">
        <div className="container max-w-2xl mx-auto text-center space-y-8">
          {/* Section Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            لنبقى على تواصل
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            تابعني على منصات التواصل الاجتماعي للاطلاع على آخر المستجدات والمحتوى التقني الذي أقدمه.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 sm:gap-8 pt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
          </div>

          {/* Payment Methods */}
          <div className="pt-8">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-6">
              وسائل الدفع المعتمدة
            </h4>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              {/* ZainCash Payment */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText('07830960059');
                  alert('تم نسخ رقم زين كاش: 07830960059\n\nيمكنك الآن فتح تطبيق زين كاش وإرسال المبلغ');
                }}
                className="flex items-center gap-3 px-6 py-4 bg-card hover:bg-card/80 rounded-lg border-2 border-primary/50 hover:border-primary transition-all cursor-pointer group"
              >
                <Wallet className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-right">
                  <span className="text-white font-semibold block">زين كاش</span>
                  <span className="text-primary text-sm font-mono">07830960059</span>
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
      </section>

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
        </div>
      </footer>
    </div>
  );
}
