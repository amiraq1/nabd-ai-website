import { ShoppingCart, Package, Code, Video, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import strapiApi from "../api/strapi";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "service" | "digital";
  icon_name: string; // تم تغيير نوع الأيقونة ليتم جلبها كاسم من API
}

// دالة مساعدة لتحويل اسم الأيقونة إلى مكون React
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Code":
      return <Code className="w-8 h-8" />;
    case "Video":
      return <Video className="w-8 h-8" />;
    case "BookOpen":
      return <BookOpen className="w-8 h-8" />;
    case "Package":
      return <Package className="w-8 h-8" />;
    default:
      return <Package className="w-8 h-8" />;
  }
};



export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // افتراض أن Strapi سيقوم بإنشاء نقطة نهاية (endpoint) باسم 'products'
        const response = await strapiApi.get('/products');
        // افتراض أن البيانات تأتي ضمن حقل 'data' وأن المحتوى الفعلي ضمن حقل 'attributes'
        const fetchedProducts: Product[] = response.data.data.map((item: any) => ({
          id: item.id,
          ...item.attributes,
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        // في حالة الفشل، يمكن استخدام قائمة منتجات فارغة أو رسالة خطأ
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyNow = (product: Product) => {
    const message = `مرحباً، أريد شراء: ${product.name}\nالسعر: ${product.price.toLocaleString('ar-IQ')} د.ع\n\nيرجى تأكيد الطلب وإرسال تفاصيل الدفع.`;
    
    // Copy ZainCash number
    navigator.clipboard.writeText('07830960059');
    
    alert(`تم نسخ رقم زين كاش: 07830960059\n\nالمنتج: ${product.name}\nالسعر: ${product.price.toLocaleString('ar-IQ')} د.ع\n\nيرجى إرسال المبلغ عبر زين كاش والتواصل معنا لتأكيد الطلب.`);
  };

  return (
    <>
      <Helmet>
        <title>المنتجات والخدمات - نبض AI</title>
        <meta name="description" content="اكتشف مجموعة من الخدمات والمنتجات الرقمية المصممة خصيصاً لمساعدتك في رحلتك التقنية" />
        <meta name="keywords" content="منتجات رقمية, خدمات تقنية, دورات, استشارات, نبض AI" />
        <meta property="og:title" content="المنتجات والخدمات - نبض AI" />
        <meta property="og:description" content="اكتشف مجموعة من الخدمات والمنتجات الرقمية المصممة خصيصاً لمساعدتك في رحلتك التقنية" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a1929] to-[#051222]">
      {/* Header */}
      <header className="py-6 px-4 border-b border-border/50">
        <div className="container max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-white hover:text-primary transition-colors">
              نبض <span className="text-primary">AI</span>
            </a>
          </Link>
          <Link href="/">
            <a className="text-muted-foreground hover:text-white transition-colors">
              العودة للرئيسية
            </a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ShoppingCart className="w-12 h-12 text-primary" />
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            المنتجات والخدمات
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            اكتشف مجموعة من الخدمات والمنتجات الرقمية المصممة خصيصاً لمساعدتك في رحلتك التقنية
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4 flex-1">
	        <div className="container max-w-6xl mx-auto">
	          {isLoading ? (
	            <div className="text-center text-white text-xl">جاري تحميل المنتجات...</div>
	          ) : products.length === 0 ? (
	            <div className="text-center text-muted-foreground text-xl">لا توجد منتجات متاحة حالياً.</div>
	          ) : (
	            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
	              {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <div className="flex items-center gap-3 mb-4">
	                  <div className="text-primary group-hover:scale-110 transition-transform">
	                    {getIconComponent(product.icon_name)}
	                  </div>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {product.category === "service" ? "خدمة" : "منتج رقمي"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Price & Button */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      {product.price.toLocaleString('ar-IQ')}
                    </span>
                    <span className="text-sm text-muted-foreground mr-2">د.ع</span>
                  </div>
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all hover:scale-105"
                  >
                    اشتري الآن
                  </button>
                </div>
	              </motion.div>
	            ))}
	            </div>
	          )}
	        </div>
      </section>

      {/* Payment Info */}
      <section className="py-8 px-4 border-t border-border/50">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CreditCard className="w-6 h-6 text-primary" />
            <p className="text-muted-foreground">
              الدفع متاح عبر زين كاش فقط
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-lg border border-primary/50">
            <span className="text-white font-semibold">رقم زين كاش:</span>
            <span className="text-primary font-mono text-lg">07830960059</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border/50">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 عمار محمد. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
      </div>
    </>
  );
}
