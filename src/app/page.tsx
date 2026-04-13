"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── data ─── */
const STATS = [
  { value: "80%", label: "инфарктов и инсультов", sub: "Можно предотвратить при ранней диагностике" },
  { value: "60%", label: "онкозаболеваний", sub: "Можно выявить на ранней стадии" },
  { value: "в 5 раз", label: "дешевле профилактика", sub: "Чем лечение запущенных заболеваний" },
];

const STEPS = [
  {
    num: "01",
    title: "Заполните профиль",
    desc: "Укажите основные данные о здоровье и подключите носимые устройства. Занимает меньше минуты.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Сдайте анализы",
    desc: "Выберите подходящий пакет. Можно сдать в партнёрской лаборатории или заказать забор на дому.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M18 6v16l-6 14a2 2 0 001.84 2.77h20.32A2 2 0 0036 36L30 22V6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 30h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Получите результаты",
    desc: "ИИ сопоставляет ваши данные с клиническими рекомендациями и формирует понятный отчёт за секунды.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M14 24h6m-3-3v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 22l3 4 5-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Следуйте плану",
    desc: "Персональный календарь подскажет, когда повторить анализы. Отслеживайте динамику и получайте направления к врачу.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 18h32" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 8V4m16 4V4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 28l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const BENEFITS = [
  {
    title: "Доступная цена",
    desc: "Полный чекап обходится дешевле, чем чашка кофе в день. Без переплат и скрытых условий.",
    color: "bg-[#F9CA38]/15 text-[#C9A020]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7v10M9 9.5c0-1.1 1.3-2 3-2s3 .9 3 2-1.3 2-3 2-3 .9-3 2 1.3 2 3 2 3-.9 3-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Клиническая точность",
    desc: "Каждый результат сверяется с рекомендациями ВОЗ и российскими клиническими протоколами.",
    color: "bg-[#F8604A]/15 text-[#F8604A]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M9 3v6l-3 9a1.5 1.5 0 001.4 2h9.2a1.5 1.5 0 001.4-2l-3-9V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 3h8M7 15h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Раннее обнаружение",
    desc: "ИИ находит отклонения до появления симптомов — онкология, кардиориски, метаболические нарушения.",
    color: "bg-[#6A5DFF]/15 text-[#6A5DFF]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Проверено врачом",
    desc: "Каждый отчёт проходит проверку лицензированным специалистом. Можно задать вопросы онлайн.",
    color: "bg-emerald-500/15 text-emerald-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M16 4h-2a4 4 0 00-4 4v1H8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2h-2V8a2 2 0 014 0v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 14v4M10 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Данные с гаджетов",
    desc: "Apple Watch, Whoop и другие устройства — показатели автоматически попадают в единый профиль здоровья.",
    color: "bg-blue-500/15 text-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 5h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Защита данных",
    desc: "Данные хранятся на локальной инфраструктуре, зашифрованы и доступны только вам.",
    color: "bg-[#F2F2F2] text-[#1A1A1A]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2l8 4v6c0 5.25-3.44 10.05-8 11.25C7.44 22.05 4 17.25 4 12V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const PLANS = [
  {
    name: "База",
    price: "299 ₽",
    period: "/мес",
    desc: "Ключевые биомаркеры, которые важно проверять каждому",
    features: [
      "20 биомаркеров",
      "Персональный календарь здоровья",
      "Отчёт с ИИ-аналитикой",
      "Отслеживание динамики",
      "Данные с носимых устройств",
      "24/7 поддержка в приложении",
    ],
    featured: false,
  },
  {
    name: "Индивидуальный",
    price: "499 ₽",
    period: "/мес",
    desc: "Всё из Базы + 10 биомаркеров, подобранных под ваш анамнез и наследственность",
    features: [
      "Всё из Базы + 10 биомаркеров под ваш анамнез",
      "Персональный календарь здоровья",
      "Отчёт с ИИ-аналитикой",
      "Отслеживание динамики",
      "Данные с носимых устройств",
      "24/7 поддержка в приложении",
    ],
    featured: true,
  },
  {
    name: "Биохакинг",
    price: "1 990 ₽",
    period: "/мес",
    desc: "Максимальный набор биомаркеров и консультация врача по результатам",
    features: [
      "100+ биомаркеров",
      "Персональный календарь здоровья",
      "Отчёт с ИИ-аналитикой",
      "Отслеживание динамики",
      "Данные с носимых устройств",
      "Консультация врача включена",
      "24/7 поддержка в приложении",
    ],
    featured: false,
  },
];

const PARTNERS = [
  { name: "Инвитро", logo: "/logos/invitro.svg", h: 28 },
  { name: "Хеликс", logo: "/logos/helix.png", h: 32 },
  { name: "Гемотест", logo: "/logos/gemotest.svg", h: 20 },
  { name: "KDL", logo: "/logos/kdl.svg", h: 32 },
  { name: "МЕДСИ", logo: "/logos/medsi.svg", h: 36 },
];

/* ─── components ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-full" />
          <span className="text-lg font-bold tracking-tight">Пульс</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B7280]">
          <a href="#how" className="hover:text-[#1A1A1A] transition-colors">Как это работает</a>
          <a href="#benefits" className="hover:text-[#1A1A1A] transition-colors">Преимущества</a>
          <a href="#pricing" className="hover:text-[#1A1A1A] transition-colors">Тарифы</a>
          <a href="#trust" className="hover:text-[#1A1A1A] transition-colors">Основа качества</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#waitlist" className="px-5 py-2.5 bg-[#F8604A] text-white text-sm font-semibold rounded-full hover:bg-[#E5503B] transition-colors">
            В лист ожидания
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Меню">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-black/5 bg-[#FAF7F2] px-6 py-4 space-y-3"
        >
          <a href="#how" onClick={() => setOpen(false)} className="block text-sm font-medium py-2">Как это работает</a>
          <a href="#benefits" onClick={() => setOpen(false)} className="block text-sm font-medium py-2">Преимущества</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="block text-sm font-medium py-2">Тарифы</a>
          <a href="#trust" onClick={() => setOpen(false)} className="block text-sm font-medium py-2">Основа качества</a>
          <a href="#waitlist" onClick={() => setOpen(false)} className="block text-center px-5 py-2.5 bg-[#F8604A] text-white text-sm font-semibold rounded-full">
            В лист ожидания
          </a>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#F8604A]/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#6A5DFF]/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#F9CA38]/8 blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-5 py-2 mt-6 mb-8 bg-white text-[#F8604A] text-sm font-medium rounded-full shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#F8604A] animate-pulse" />
            Открыт ранний доступ
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
          >
            Проверьте здоровье{" "}
            <span className="text-[#F8604A]">заранее.</span>
            <br />
            Не дожидаясь{" "}
            <span className="text-[#6A5DFF]">симптомов.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl text-[#6B7280] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Анализы крови, ИИ-аналитика и консультация врача — в одной подписке.
            Персональный календарь здоровья подскажет, что проверить и когда.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="px-8 py-4 bg-[#F8604A] text-white text-base font-bold rounded-full hover:bg-[#E5503B] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#F8604A]/25"
            >
              Оставить заявку
            </a>
            <a
              href="#how"
              className="px-8 py-4 text-base font-medium text-[#1A1A1A] rounded-full border border-black/15 hover:border-black/30 transition-all"
            >
              Как это работает
            </a>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-black/10"
        >
          {STATS.map((s, i) => (
            <motion.div key={s.label} variants={fadeUp} custom={i + 4} className="text-center px-6">
              <div className="text-4xl sm:text-5xl font-black text-[#1A1A1A]">{s.value}</div>
              <div className="text-sm font-semibold text-[#1A1A1A] mt-1">{s.label}</div>
              <div className="text-xs text-[#6B7280] mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Как устроен сервис
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              custom={i}
              className="group relative bg-white rounded-2xl p-8 border border-black/5 hover:border-[#F8604A]/20 transition-all hover:shadow-xl hover:shadow-[#F8604A]/5 hover:-translate-y-1"
            >
              <div className="text-[#F8604A]/20 text-6xl font-black absolute top-4 right-6 select-none">
                {step.num}
              </div>
              <div className="text-[#F8604A] mb-5">{step.icon}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Alice AI agent pipeline ─── */
const AGENT_PIPELINE = [
  {
    step: "Вопрос",
    title: "Вы спрашиваете",
    desc: "«Что мне проверить?» — голосом или текстом",
    color: "from-[#A88CFF] to-[#7A55FF]",
  },
  {
    step: "Анализ",
    title: "Алиса находит риски",
    desc: "Сопоставляет анамнез, наследственность и данные с устройств",
    color: "from-[#7A55FF] to-[#6335E0]",
  },
  {
    step: "Действие",
    title: "Записывает и направляет",
    desc: "Бронирует лабораторию, подбирает врача, заказывает добавки",
    color: "from-[#6335E0] to-[#4A1FB8]",
  },
  {
    step: "Контроль",
    title: "Следит за результатами",
    desc: "Отслеживает динамику, напоминает о повторных анализах",
    color: "from-[#4A1FB8] to-[#6335E0]",
  },
];

const AGENT_CAPABILITIES = [
  { label: "Запись в лабораторию", detail: "Инвитро, Хеликс, Гемотест, KDL" },
  { label: "Маршрутизация к врачу", detail: "По результатам анализов — к нужному специалисту" },
  { label: "Подбор добавок", detail: "На основе дефицитов из вашего профиля" },
  { label: "Календарь здоровья", detail: "Персональный план обследований на год" },
  { label: "Данные с устройств", detail: "Apple Watch, Whoop и другие — в единый профиль" },
  { label: "Прогноз рисков", detail: "ИИ учится на каждом взаимодействии и становится точнее" },
];

function AliceAI() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Alice purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A88CFF]/8 via-[#7A55FF]/10 to-[#6335E0]/12" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#A88CFF]/20 via-[#7A55FF]/15 to-[#6335E0]/20 blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#6335E0]/15 blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A55FF]/10 text-[#7A55FF] font-medium text-sm mb-6">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2L2 19h20L12 2z" />
            </svg>
            На базе Алисы
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight">
            Не просто ИИ-чат.
            <br />
            <span className="bg-gradient-to-r from-[#A88CFF] to-[#6335E0] bg-clip-text text-transparent">Агент, который действует.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-black/50 max-w-2xl mx-auto">
            Каждый вопрос о здоровье заканчивается конкретным действием — записью, направлением, рекомендацией.
          </motion.p>
        </motion.div>

        {/* Agent pipeline — horizontal flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {AGENT_PIPELINE.map((item, i) => (
            <motion.div key={item.step} variants={fadeUp} custom={i} className="relative">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 h-full">
                <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold mb-4`}>
                  {item.step}
                </div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-black/50 leading-relaxed">{item.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-[#7A55FF]/40">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
                    <path d="M6 3l5 5-5 5V3z" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Two-column: chat demo + capabilities */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Chat demo — showing agentic behavior */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50"
          >
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-black/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A88CFF] via-[#7A55FF] to-[#6335E0] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2L2 19h20L12 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm">Алиса AI</p>
                <p className="text-xs text-black/40">агент активен</p>
              </div>
            </div>
            <div className="space-y-3">
              {/* User message */}
              <motion.div variants={fadeUp} className="flex justify-end">
                <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-br-md bg-[#7A55FF] text-white text-sm leading-relaxed">
                  У отца был диабет. Что мне проверить?
                </div>
              </motion.div>
              {/* Alice identifies risks */}
              <motion.div variants={fadeUp} custom={1} className="flex justify-start">
                <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md bg-gradient-to-r from-[#A88CFF]/15 to-[#7A55FF]/10 text-black/80 text-sm leading-relaxed border border-[#7A55FF]/10">
                  Наследственный риск диабета 2-го типа. Рекомендую проверить гликированный гемоглобин, глюкозу натощак и инсулин.
                </div>
              </motion.div>
              {/* Alice offers timeslots */}
              <motion.div variants={fadeUp} custom={2} className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-[#7A55FF]/20 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#A88CFF]/10 to-[#7A55FF]/10 px-4 py-2 flex items-center gap-2">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-[#7A55FF]">
                      <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M2 6h12M5 1.5v3M11 1.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-xs font-bold text-[#7A55FF]">Инвитро · ул. Тверская, 12</span>
                  </div>
                  <div className="bg-white px-4 py-3">
                    <p className="text-sm font-medium mb-2">Выберите удобное время:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-black/5 text-black/60 text-xs font-medium">Вт, 14 апр · 9:00</span>
                      <span className="px-3 py-1.5 rounded-lg bg-[#7A55FF] text-white text-xs font-medium ring-2 ring-[#7A55FF]/30">Ср, 15 апр · 10:00</span>
                      <span className="px-3 py-1.5 rounded-lg bg-black/5 text-black/60 text-xs font-medium">Чт, 16 апр · 8:30</span>
                      <span className="px-3 py-1.5 rounded-lg bg-black/5 text-black/60 text-xs font-medium">Пт, 17 апр · 11:00</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* User picks a slot */}
              <motion.div variants={fadeUp} custom={3} className="flex justify-end">
                <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-br-md bg-[#7A55FF] text-white text-sm leading-relaxed">
                  Среда в 10:00 подходит
                </div>
              </motion.div>
              {/* Alice confirms booking */}
              <motion.div variants={fadeUp} custom={4} className="flex justify-start">
                <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md bg-gradient-to-r from-[#A88CFF]/15 to-[#7A55FF]/10 text-black/80 text-sm leading-relaxed border border-[#7A55FF]/10">
                  Готово! Записала вас в Инвитро на среду, 15 апреля в 10:00. Напомню за день. Пересдачу добавила через 3 месяца в календарь.
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Capabilities list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-4"
          >
            <motion.p variants={fadeUp} className="text-sm font-bold text-[#7A55FF] uppercase tracking-wider mb-2">Что умеет агент</motion.p>
            {AGENT_CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.label}
                variants={fadeUp}
                custom={i}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/50 hover:bg-white/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A88CFF]/20 to-[#7A55FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-[#7A55FF]">
                    <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm">{cap.label}</p>
                  <p className="text-sm text-black/40 mt-0.5">{cap.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="benefits" className="py-28 px-6 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Что вы получаете
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Анализы, ИИ-аналитика и проверка врачом — в одном сервисе.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              custom={i}
              className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${b.color}`}>
                {b.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Выберите подходящий тариф
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-lg text-[#6B7280] max-w-xl mx-auto">
            Без скрытых платежей. Можно сменить тариф в любой момент.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              custom={i}
              className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-1 ${
                plan.featured
                  ? "bg-[#F8604A] text-white border-[#F8604A] shadow-2xl shadow-[#F8604A]/20 scale-[1.02]"
                  : "bg-white border-black/10 hover:shadow-xl"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1A1A1A] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Популярный
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.featured ? "text-white/70" : "text-[#6B7280]"}`}>{plan.desc}</p>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={`text-sm ${plan.featured ? "text-white/60" : "text-[#6B7280]"}`}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 shrink-0 mt-0.5 ${plan.featured ? "text-white" : "text-[#F8604A]"}`}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.featured ? "text-white/90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`block text-center py-3 rounded-full text-sm font-bold transition-all ${
                  plan.featured
                    ? "bg-white text-[#F8604A] hover:bg-white/90"
                    : "bg-[#1A1A1A] text-white hover:opacity-90"
                }`}
              >
                В лист ожидания
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section id="trust" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Надёжная основа
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            Ведущие лаборатории, лицензированные врачи и технологии Яндекса.
          </motion.p>
        </motion.div>

        {/* Lab Partners */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
        >
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              custom={i}
              className="flex items-center justify-center h-16 px-8 bg-[#FAF7F2] rounded-xl border border-black/5"
            >
              <Image src={p.logo} alt={p.name} width={120} height={p.h} className="opacity-70 hover:opacity-100 transition-opacity" style={{ height: p.h, width: 'auto' }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Основа качества points */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Клинические протоколы",
              desc: "Все рекомендации основаны на протоколах ВОЗ, ESC и российских клинических руководствах.",
              icon: (
                <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#F8604A]">
                  <path d="M24 4L6 14v16l18 10 18-10V14L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              title: "Экспертный совет",
              desc: "Врачи из ведущих медицинских учреждений проверяют работу ИИ и логику рекомендаций.",
              icon: (
                <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#6A5DFF]">
                  <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M24 10v8m-4-4h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              ),
            },
            {
              title: "Технологии Яндекса",
              desc: "Тот же ИИ и инфраструктура, которые ежедневно работают для 100 млн пользователей.",
              icon: (
                <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#F9CA38]">
                  <path d="M24 4v8m0 24v8M4 24h8m24 0h8M10 10l6 6m12 12l6 6M38 10l-6 6M16 28l-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              className="text-center p-8 rounded-2xl bg-[#FAF7F2] border border-black/5"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="waitlist" className="py-28 px-6 bg-[#111111] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Узнайте первыми
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
            Оставьте email — мы напишем, когда сервис будет доступен.
          </motion.p>

          <motion.div variants={fadeUp} custom={2} className="mt-10">
            {submitted ? (
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500/20 text-emerald-400 rounded-full text-lg font-semibold">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Вы в списке!
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmitted(true);
                }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Введите ваш email"
                  required
                  className="w-full sm:flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#F8604A] focus:ring-1 focus:ring-[#F8604A] text-sm"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#F8604A] text-white text-sm font-bold rounded-full hover:bg-[#E5503B] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#F8604A]/25 whitespace-nowrap"
                >
                  В лист ожидания
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Logo" width={24} height={24} className="rounded-full" />
          <span className="text-sm font-bold">Пульс</span>
        </div>
        <p className="text-xs text-[#6B7280]">
          &copy; {new Date().getFullYear()} Пульс. Все права защищены. Не является медицинским изделием. Только в информационных целях.
        </p>
      </div>
    </footer>
  );
}

/* ─── page ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <AliceAI />
        <Benefits />
        <Pricing />
        <Trust />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
