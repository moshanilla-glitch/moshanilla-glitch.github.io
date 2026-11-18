/* =====================================================================
   ملف المحتوى — موقع موشانيلا
   ---------------------------------------------------------------------
   ده الملف الوحيد اللي محتاجة تعدّلي فيه.
   قواعد بسيطة عشان الموقع ميبوظش:
   1) غيّري الكلام اللي جوه علامات التنصيص "..." بس.
   2) متمسحيش علامات التنصيص ولا الفواصل , ولا الأقواس { } [ ].
   3) السطور اللي بتبدأ بـ // دي ملاحظات ليكي، الموقع مش بيعرضها.
   4) بعد التعديل دوسي Commit changes، واستني دقيقة أو اتنين.
   ===================================================================== */

window.CONTENT = {

  // ===================== التواصل =====================
  // رقم الواتساب: بالكود الدولي، من غير + ومن غير مسافات
  whatsapp: "201012053954",
  // الرقم زي ما هيظهر مكتوب في الموقع
  whatsappDisplay: "+20 101 205 3954",
  email: "emanshabana555@gmail.com",

  // ===================== السوشيال ميديا =====================
  // لو عايزة تشيلي حساب: خلي اللينك فاضي ""
  instagram: "https://www.instagram.com/emmaa_designerr/",
  tiktok:    "https://www.tiktok.com/@emy.motion",
  youtube:   "https://www.youtube.com/@Moshanillaa",
  behance:   "https://www.behance.net/emanhamada6",

  // ===================== أول صفحة =====================
  heroAr: "أنا إيمان شبانه، مصممة موشن جرافيك. أصنع فيديوهات موشن وإعلانات بالذكاء الاصطناعي وريلز جاهزة للنشر لعلامتك التجارية في مصر والخليج.",
  heroEn: "I'm Eman Shabana, a motion designer. I make motion graphics, AI product ads and ready-to-post reels for brands in Egypt and the Gulf.",

  // ===================== معرض الأعمال =====================
  // كل شغلانة بين { } — عشان تضيفي شغلانة جديدة:
  //   1) ارفعي الصورة في فولدر work (Add file ← Upload files)
  //   2) انسخي سطر من اللي تحت والصقيه، وغيّري الاسم واللينك واسم الصورة
  // النوع (cat): "motion" = موشن جرافيك   |   "edit" = مونتاج   |   "ai" = فيديو AI
  // الترتيب هنا = الترتيب في الموقع (اللي فوق بيظهر الأول)
  works: [
    { cat: "motion", img: "work/w1.png",  ar: "موشن جرافيك جيدان",            en: "Jaydan – motion graphics",        url: "https://www.behance.net/gallery/251600285/_" },
    { cat: "motion", img: "work/w2.png",  ar: "إتقان لتعليم القرآن الكريم",    en: "Itqan Quran Academy",             url: "https://www.behance.net/gallery/248687897/_" },
    { cat: "motion", img: "work/w3.png",  ar: "موشن جرافيك احترافي",          en: "Professional motion graphics",    url: "https://www.behance.net/gallery/244553719/Professional-motion-graphics" },
    { cat: "motion", img: "work/w4.png",  ar: "موشن جرافيك راحة بال",         en: "Rahet Bal – motion graphics",     url: "https://www.behance.net/gallery/242554287/_" },
    { cat: "motion", img: "work/w5.png",  ar: "موشن جرافيك دواء أموكسيسيلين", en: "Amoxicillin – medical explainer", url: "https://www.behance.net/gallery/240853797/_" },
    { cat: "edit",   img: "work/w9.png",  ar: "مونتاج ريلز",                  en: "Reels editing",                   url: "https://www.behance.net/gallery/226891441/_" },
    { cat: "motion", img: "work/w6.png",  ar: "موشن جرافيك صفحة أحمد ديزاين", en: "Ahmed Design page – motion",      url: "https://www.behance.net/gallery/235603251/_" },
    { cat: "edit",   img: "work/w7.png",  ar: "فيديو كولاج",                  en: "Collage video",                   url: "https://www.behance.net/gallery/232064705/_" },
    { cat: "motion", img: "work/w8.png",  ar: "موشن جرافيك إي كارد",          en: "E-card motion graphics",          url: "https://www.behance.net/gallery/229842305/_" },
    { cat: "motion", img: "work/w10.png", ar: "مصدر لخدمات الشحن",            en: "Masdar shipping services",        url: "https://www.behance.net/gallery/226890633/_" },
    { cat: "motion", img: "work/w11.png", ar: "البورصة العقارية",             en: "Real estate exchange",            url: "https://www.behance.net/gallery/226890513/_" },
    { cat: "motion", img: "work/w12.png", ar: "فيديو موشن مصدر",              en: "Masdar motion video",             url: "https://www.behance.net/gallery/224987979/_" }
  ],

  // ===================== الباقات =====================
  // price: لو عايزة يظهر سعر اكتبيه، مثلاً "من 1500 جنيه" — ولو فاضي "" هيظهر زرار "اطلب السعر" بس
  packages: [
    {
      nameAr: "فيديو واحد", nameEn: "Single video",
      forAr: "لو محتاج إعلان أو لوجو أنيميشن لمرة واحدة.", forEn: "For a one-time ad or logo animation.",
      priceAr: "", priceEn: "",
      itemsAr: ["فيديو موشن أو AI حتى 30 ثانية", "فكرة وسكريبت", "مقاس واحد حسب المنصة", "تعديلين"],
      itemsEn: ["Motion or AI video up to 30 sec", "Concept & script", "One size for your platform", "Two revisions"]
    },
    {
      // popular: true = الباقة اللي عليها "الأكثر طلباً"
      popular: true,
      nameAr: "باقة شهرية", nameEn: "Monthly package",
      forAr: "للمتاجر والبراندات اللي محتاجة محتوى ثابت كل شهر.", forEn: "For stores and brands that need steady content every month.",
      priceAr: "", priceEn: "",
      itemsAr: ["8 ريلز مونتاج أو AI", "8 تصاميم بوست", "تسليم على دفعات خلال الشهر"],
      itemsEn: ["8 edited or AI reels", "8 post designs", "Delivered in batches through the month"]
    },
    {
      nameAr: "إطلاق براند", nameEn: "Brand launch",
      forAr: "لو بتطلق منتج أو براند جديد ومحتاج حملة كاملة.", forEn: "Launching a product or brand and need a full campaign.",
      priceAr: "", priceEn: "",
      itemsAr: ["لوجو أنيميشن", "فيديو تعريفي موشن", "4 إعلانات AI للمنتجات", "بوستات للحملة"],
      itemsEn: ["Logo animation", "Motion intro video", "4 AI product ads", "Campaign posts"]
    }
  ]
};
