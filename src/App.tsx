import { Button } from "./components/ui/button";
import { BottomSection } from "./components/BottomSection";
import logoImage from './assets/2239a82f-c78e-4b32-a797-ebdc52d4dea7.png';
import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const t = {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        faq: "FAQ"
      },
      hero: {
        servicesButton: "3-day websites • 2-hour AI clarity",
        heading1: "You're Invisible to",
        heading2: "DeepSeek & Google",
        subheading: "Your Customers Search. Find Competitors.\nNever You.",
        whatsapp: "WhatsApp Me Now: 5546 1658",
        pricing: "See Pricing",
        social: "Get Found in 30 Days"
      },
      services: {
        title: "Three Ways I Fix Your Tech Problems",
        problem1: {
          title: "I Don't Have an Elegant Website that can be found on Google and Deepseek.",
          description: "Your customers Google you. Find nothing. Buy from competitors instead.",
          solution: "Professional Website in 3 Days",
          basic: { price: "HK$5,000", label: "BASIC", desc: "Landing page, mobile-ready", example: "(trainers, freelancers)" },
          pro: { price: "HK$8,000", label: "PROFESSIONAL", desc: "Multi-page, forms, Google Maps", example: "(restaurants, salons)" },
          premium: { price: "HK$15,000", label: "PREMIUM", desc: "Full SEO-optimized site", example: "(law firms, clinics)" },
          button: "Get Started",
          includes: ["✓ 1 month WhatsApp support", "✓ 3 free updates"]
        },
        problem2: {
          title: "I Don't Understand This AI Thing",
          description: "Your nephew says 'use ChatGPT. Use Midjourney to make pictures. Use Runway to create videos.' Your competitor posts about 'AI transformation.' You nod but feel frustrated inside.",
          price: "HK$5,000",
          solution: "2-Hour Clarity Session",
          includes: [
            "✓ I explain what AI means for your business specifically",
            "✓ You learn what's real vs what's fake",
            "✓ You leave knowing exactly what to do (or not do)",
            "✓ Available in Cantonese, Mandarin, or English"
          ],
          button: "Book Session"
        },
        problem3: {
          title: "I Need Someone to Call at 9pm",
          description: "Technology questions don't follow office hours. Neither do I.",
          price: "HK$10,000/month",
          solution: "Monthly Tech Insurance",
          includes: [
            "✓ Unlimited WhatsApp questions",
            "✓ I translate any tech confusion into simple answers",
            "✓ Like having a tech-savvy nephew who actually responds and explains like you are my grandmother",
            "✓ Cancel anytime"
          ],
          button: "Start Monthly Support"
        }
      },
      faq: {
        title: "Questions I Answer Every Day",
        q1: {
          q: "My competitor's website is #1 on Google. Why?",
          a: "They probably paid someone who knows SEO. Or they've been online longer. Good news: I can fix this in 3 days with the Premium package (HK$15,000). You'll show up when customers search."
        },
        q2: {
          q: "Is ChatGPT going to replace my business?",
          a: "No. But businesses that use AI will replace businesses that don't. Book the 2-hour session (HK$5,000). I'll show you exactly what's real vs hype for YOUR business."
        },
        q3: {
          q: "What's the minimum I need to not fall behind?",
          a: "A website people can find. Basic package (HK$5,000) stops you from being invisible. That's the minimum. Everything else depends on your specific situation - which we figure out in the 2-hour session."
        },
        q4: {
          q: "Can you just do it for me?",
          a: "Yes. That's the point. You run your business. I handle the tech. WhatsApp me what you need. I tell you the price. You pay. I build. Done."
        },
        cta: {
          title: "Stop Losing Money to Technology You Don't Understand",
          description: "WhatsApp me. Tell me your problem. I'll tell you the price and timeline.\nNo tech jargon. No long proposals. Just solutions that work.",
          button: "WhatsApp Me Now: 5546 1658"
        }
      }
    },
    zh: {
      nav: {
        home: "首頁",
        services: "服務",
        faq: "常見問題"
      },
      hero: {
        servicesButton: "三日搞掂個 website • 兩小時講清 AI 點用",
        heading1: "你嘅對手，網上一搵就揾到；",
        heading2: "你呢？完全影都無。",
        subheading: "可能你唔知咩事，但已經少左個大客。",
        whatsapp: "WhatsApp我：5546 1658",
        pricing: "查看定價",
        social: "三十日內搵到你"
      },
      services: {
        title: "下面三個最常見問題，你中咗邊樣？",
        problem1: {
          title: "問題一：「我連個似樣嘅網站都無，Google或者Deepseek 搜尋都搵唔到我」",
          description: "客人想搵你，Google 一打你個名 —— 無結果。即刻轉去買對手服務。你唔係唔夠好，只係根本睇唔到你。",
          solution: "解決方法：三日出專業網站",
          basic: { price: "$5,000", label: "基本版", desc: "簡單登陸頁，手機睇都靚", example: "（教練、自由工作者適用）" },
          pro: { price: "$8,000", label: "專業版", desc: "多頁 + 查詢表格 + Google 地圖", example: "（餐廳、美容院啱用）" },
          premium: { price: "$15,000", label: "高階版", desc: "全站 SEO 優化，Google 自動爬到你", example: "（律師樓、診所必備）" },
          button: "開始",
          includes: ["✓ 一個月 WhatsApp 後續支援", "✓ 三次免費修改"]
        },
        problem2: {
          title: "問題二：「AI 到底係乜？成日聽人講但完全唔明」",
          description: "細路講：「用 ChatGPT 啦！Midjourney 生成圖片，Runway 做片呀！」對手仲出post話「我哋AI轉型成功」…… 你表面點頭，心入面喊緊：「究竟做乜呀？！」",
          price: "$5,000",
          solution: "解決方法：兩小時坐低傾清楚",
          includes: [
            "✓ 跟你個行業，實地解釋 AI 可以點幫你賺錢",
            "✓ 分得出邊啲係真有用，邊啲淨係吹水",
            "✓ 傾完你就知下一步要做乜（定係唔好做乜）",
            "✓ 幫你用粵語、普通話或英文都可以，你話事。"
          ],
          button: "預約諮詢"
        },
        problem3: {
          title: "問題三：「有 tech problem 既時候，點算？總唔能夠等朝早九點先問啦」",
          description: "問題幾時嚟？夜晚九點、週末、放假突發崩潰先至最常見。所以我唔理時間。WhatsApp call 我，我隨時係到。",
          price: "$10,000/月",
          solution: "解決方法：每月科技保險",
          includes: [
            "✓ 無限次 WhatsApp 問我任何 tech 或者ai相關嘅野",
            "✓ 無論幾confusing，我都會變成「人話」解釋比你聽",
            "✓ 好似屋企有個識科技嘅細佬，真係肯覆、肯教、唔笑你",
            "✓ 隨時取消，無綁約"
          ],
          button: "開始每月支援"
        }
      },
      faq: {
        title: "每日都有人問我啲咩？",
        q1: {
          q: "對手SEO做得好好，佢哋請左人做定自己識？",
          a: "唔關你事。我用高階版（$15,000）三日搞掂，客戶一搜你就出。"
        },
        q2: {
          q: "AI真係有用定跟風？",
          a: "有用，但唔係每樣都啱你。預約兩個鐘（$5,000），我話晒邊啲值得做、邊啲純粹吹水。"
        },
        q3: {
          q: "最起碼我要有咩先算起步？",
          a: "最基本，你要有個「搵得到」嘅網站。基本版 $5,000 起步，唔再隱形。其他點配，我哋傾完先決定。"
        },
        q4: {
          q: "我可以完全唔理tech，交俾你搞定嗎？",
          a: "可以，而且應該咁。你專心做生意，tech交俾我。WhatsApp 我：「我想有個網站 / 我想試AI / 我個系統壞咗」……我答你：幾錢、幾耐、點開始。你付錢，我做，done。"
        },
        cta: {
          title: "再唔好因為「唔明」而少左個客",
          description: "WhatsApp 我啦。講吓你遇到咩問題，我即刻話你知：幾錢解決、幾耐有貨、點開始\n唔講術語、唔寫十頁proposal，淨係提供 —— 真係work嘅solution。",
          button: "WhatsApp我：5546 1658"
        }
      }
    }
  };

  const content = t[language];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900"></div>
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImage} alt="Revamp Site" className="w-32 object-cover" style={{ height: '50px' }} />
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-white transition-colors font-light cursor-pointer">{content.nav.home}</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-white transition-colors font-light cursor-pointer">{content.nav.services}</a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-white transition-colors font-light cursor-pointer">{content.nav.faq}</a>
        </nav>

        {/* Language buttons */}
        <div className="flex gap-2">
          <Button
            onClick={() => setLanguage('zh')}
            className={`backdrop-blur-md border text-white transition-all duration-300 rounded-full px-4 py-2 ${language === 'zh' ? 'bg-white/30 border-white/40' : 'bg-white/10 border-white/20 hover:bg-white/20'}`}
          >
            繁
          </Button>
          <Button
            onClick={() => setLanguage('en')}
            className={`backdrop-blur-md border text-white transition-all duration-300 rounded-full px-4 py-2 ${language === 'en' ? 'bg-white/30 border-white/40' : 'bg-white/10 border-white/20 hover:bg-white/20'}`}
          >
            English
          </Button>
        </div>
      </header>
      
      {/* Main content */}
      <main id="hero" className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              {/* Services button */}
              <Button className="bg-purple-500/20 backdrop-blur-md border border-purple-400/30 text-white hover:bg-purple-500/30 transition-all duration-300 rounded-full px-4 py-2 text-xs sm:text-sm md:text-base sm:px-6 whitespace-normal text-center leading-relaxed">
                {content.hero.servicesButton}
              </Button>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl leading-tight">
                  <span className="text-white font-light">{content.hero.heading1}</span><br />
                  <span className="bg-gradient-to-r from-white via-gray-300 to-transparent bg-clip-text text-transparent font-light">
                    {content.hero.heading2}
                  </span>
                </h1>
                <p className="text-sm text-gray-400 font-light whitespace-pre-line">
                  {content.hero.subheading}
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.open('https://wa.me/85255461658', '_blank')}
                  className="bg-gray-800/40 backdrop-blur-md border border-gray-600/30 text-white hover:bg-gray-700/50 transition-all duration-300 rounded-full px-8 py-3 font-light"
                >
                  {content.hero.whatsapp}
                </Button>
                <Button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gray-800/40 backdrop-blur-md border border-gray-600/30 text-white hover:bg-gray-700/50 transition-all duration-300 rounded-full px-8 py-3 font-light"
                >
                  {content.hero.pricing}
                </Button>
              </div>
            </div>
            
            {/* Right content */}
            <div className="flex justify-end">
              <div className="flex items-center gap-6">
                {/* Three overlapping circles */}
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-16 rounded-full bg-purple-500"></div>
                  <div className="w-16 h-16 rounded-full bg-teal-500 -ml-4"></div>
                  <div className="w-16 h-16 rounded-full bg-orange-500 -ml-4"></div>
                </div>
                {/* Text after circles */}
                <div className="text-white">
                  <p className="text-lg font-light">{content.hero.social}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Flowing graphic section - replaceable */}
      <section className="relative z-10">
        <BottomSection />
      </section>
      
      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white font-light mb-4">
              {content.services.title}
            </h2>
          </div>

          {/* Service 1: Website */}
          <div className="mb-20">
            <div className="bg-gray-800/20 backdrop-blur-md border border-gray-600/30 rounded-3xl p-8 mb-8">
              <h3 className="text-2xl lg:text-3xl text-white font-light mb-4">
                {content.services.problem1.title}
              </h3>
              <p className="text-gray-400 font-light mb-8">
                {content.services.problem1.description}
              </p>

              <h4 className="text-xl text-white font-light mb-8">{content.services.problem1.solution}</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Basic Plan */}
                <div className="bg-gray-900/40 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl text-white font-light mb-2">{content.services.problem1.basic.price}</div>
                    <div className="text-purple-400 font-light">{content.services.problem1.basic.label}</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-white font-light">{content.services.problem1.basic.desc}</p>
                    <p className="text-gray-400 text-sm font-light">{content.services.problem1.basic.example}</p>
                  </div>
                  <Button
                    onClick={() => window.open('https://wa.me/85255461658?text=I%20want%20the%20Basic%20website%20package%20(HK$5,000)', '_blank')}
                    className="w-full mt-6 bg-purple-500/20 backdrop-blur-md border border-purple-400/30 text-white hover:bg-purple-500/30 transition-all duration-300 rounded-full py-3 font-light"
                  >
                    {content.services.problem1.button}
                  </Button>
                </div>
                
                {/* Professional Plan */}
                <div className="bg-gray-900/40 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl text-white font-light mb-2">{content.services.problem1.pro.price}</div>
                    <div className="text-teal-400 font-light">{content.services.problem1.pro.label}</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-white font-light">{content.services.problem1.pro.desc}</p>
                    <p className="text-gray-400 text-sm font-light">{content.services.problem1.pro.example}</p>
                  </div>
                  <Button
                    onClick={() => window.open('https://wa.me/85255461658?text=I%20want%20the%20Professional%20website%20package%20(HK$8,000)', '_blank')}
                    className="w-full mt-6 bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-white hover:bg-teal-500/30 transition-all duration-300 rounded-full py-3 font-light"
                  >
                    {content.services.problem1.button}
                  </Button>
                </div>

                {/* Premium Plan */}
                <div className="bg-gray-900/40 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl text-white font-light mb-2">{content.services.problem1.premium.price}</div>
                    <div className="text-orange-400 font-light">{content.services.problem1.premium.label}</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-white font-light">{content.services.problem1.premium.desc}</p>
                    <p className="text-gray-400 text-sm font-light">{content.services.problem1.premium.example}</p>
                  </div>
                  <Button
                    onClick={() => window.open('https://wa.me/85255461658?text=I%20want%20the%20Premium%20website%20package%20(HK$15,000)', '_blank')}
                    className="w-full mt-6 bg-orange-500/20 backdrop-blur-md border border-orange-400/30 text-white hover:bg-orange-500/30 transition-all duration-300 rounded-full py-3 font-light"
                  >
                    {content.services.problem1.button}
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center space-y-2">
                {content.services.problem1.includes.map((item, i) => (
                  <p key={i} className="text-gray-400 font-light">{item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Service 2: AI Clarity */}
          <div className="mb-20">
            <div className="bg-gray-800/20 backdrop-blur-md border border-gray-600/30 rounded-3xl p-8">
              <h3 className="text-2xl lg:text-3xl text-white font-light mb-4">
                {content.services.problem2.title}
              </h3>
              <p className="text-gray-400 font-light mb-8">
                {content.services.problem2.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-3xl text-white font-light mb-4">{content.services.problem2.price}</div>
                  <h4 className="text-xl text-white font-light mb-6">{content.services.problem2.solution}</h4>

                  <div className="space-y-3 mb-6">
                    {content.services.problem2.includes.map((item, i) => (
                      <p key={i} className="text-gray-400 font-light">{item}</p>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={() => window.open('https://wa.me/85255461658?text=I%20want%20to%20book%20a%202-hour%20AI%20Clarity%20Session%20(HK$5,000)', '_blank')}
                    className="bg-gray-800/40 backdrop-blur-md border border-gray-600/30 text-white hover:bg-gray-700/50 transition-all duration-300 rounded-full px-8 py-3 font-light"
                  >
                    {content.services.problem2.button}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Monthly Support */}
          <div className="mb-20">
            <div className="bg-gray-800/20 backdrop-blur-md border border-gray-600/30 rounded-3xl p-8">
              <h3 className="text-2xl lg:text-3xl text-white font-light mb-4">
                {content.services.problem3.title}
              </h3>
              <p className="text-gray-400 font-light mb-8">
                {content.services.problem3.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-3xl text-white font-light mb-4">{content.services.problem3.price}</div>
                  <h4 className="text-xl text-white font-light mb-6">{content.services.problem3.solution}</h4>

                  <div className="space-y-3 mb-6">
                    {content.services.problem3.includes.map((item, i) => (
                      <p key={i} className="text-gray-400 font-light">{item}</p>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={() => window.open('https://wa.me/85255461658?text=I%20want%20to%20start%20Monthly%20Tech%20Support%20(HK$10,000/month)', '_blank')}
                    className="bg-gray-800/40 backdrop-blur-md border border-gray-600/30 text-white hover:bg-gray-700/50 transition-all duration-300 rounded-full px-8 py-3 font-light"
                  >
                    {content.services.problem3.button}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white font-light mb-8">
              {content.faq.title}
            </h2>
          </div>

          <div className="space-y-6 mb-16">
            <div className="bg-gray-800/20 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6">
              <h3 className="text-lg text-white font-light mb-4">{content.faq.q1.q}</h3>
              <p className="text-gray-400 font-light">{content.faq.q1.a}</p>
            </div>
            <div className="bg-gray-800/20 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6">
              <h3 className="text-lg text-white font-light mb-4">{content.faq.q2.q}</h3>
              <p className="text-gray-400 font-light">{content.faq.q2.a}</p>
            </div>
            <div className="bg-gray-800/20 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6">
              <h3 className="text-lg text-white font-light mb-4">{content.faq.q3.q}</h3>
              <p className="text-gray-400 font-light">{content.faq.q3.a}</p>
            </div>
            <div className="bg-gray-800/20 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6">
              <h3 className="text-lg text-white font-light mb-4">{content.faq.q4.q}</h3>
              <p className="text-gray-400 font-light">{content.faq.q4.a}</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gray-800/20 backdrop-blur-md border border-gray-600/30 rounded-3xl p-12">
            <h3 className="text-3xl lg:text-4xl text-white font-light mb-6">
              {content.faq.cta.title}
            </h3>
            <p className="text-gray-400 font-light mb-8 max-w-2xl mx-auto whitespace-pre-line">
              {content.faq.cta.description}
            </p>
            <Button
              onClick={() => window.open('https://wa.me/85255461658', '_blank')}
              className="bg-gray-800/40 backdrop-blur-md border border-gray-600/30 text-white hover:bg-gray-700/50 transition-all duration-300 rounded-full px-6 py-4 font-light text-sm sm:text-base lg:text-lg sm:px-12"
            >
              {content.faq.cta.button}
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom flowing graphic */}
      <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden">
        <svg
          viewBox="0 0 1200 400"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="bottomFlowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="25%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="75%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="bottomFlowGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="30%" stopColor="#8B5CF6" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
          
          {/* Flowing shapes */}
          <path
            d="M0,300 Q200,200 400,250 T800,220 Q1000,180 1200,200 L1200,400 L0,400 Z"
            fill="url(#bottomFlowGradient1)"
            opacity="0.8"
          />
          <path
            d="M0,350 Q300,250 600,280 T1200,250 L1200,400 L0,400 Z"
            fill="url(#bottomFlowGradient2)"
            opacity="0.6"
          />
          <path
            d="M200,320 Q500,220 800,240 Q1000,260 1200,230 L1200,400 L200,400 Z"
            fill="url(#bottomFlowGradient1)"
            opacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}