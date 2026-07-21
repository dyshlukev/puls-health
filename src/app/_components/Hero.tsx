import { PRODUCT_URL } from "../../brand";
import { PulseMark } from "./Marks";
import { Icon } from "./Icon";

const TESTS = [
  "Общий анализ крови",
  "Глюкоза",
  "Общий белок",
  "Ферритин",
  "Витамин D",
  "ТТГ",
];

function Tick() {
  return (
    <svg className="tick" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="var(--brand-soft)" />
      <path
        d="M4.5 8.2l2.2 2.2 4.8-4.8"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            <span className="dot" />
            Комплексные обследования · от Яндекса
          </span>
          <h1>
            Сдать нужные исследования — <span className="hl">без сложного выбора</span>
          </h1>
          <p className="sub">
            Выберите готовое комплексное обследование с понятным составом и ценой. Пульс поможет
            найти удобную точку лаборатории-партнёра, оформить и оплатить заказ.
          </p>
          <div className="hero-cta">
            <a href={PRODUCT_URL} className="btn btn-accent">
              Посмотреть обследования <span className="price-chip">от ХХХХ ₽</span>
            </a>
            <a href="#how" className="btn btn-ghost">
              Как это работает <Icon name="arrowRight" size={18} />
            </a>
          </div>
          <div className="trust">
            <b>Фиксированный состав</b>
            <span className="sep">·</span>
            <b>Цена до оплаты</b>
            <span className="sep">·</span>
            <b>Код и статус заказа</b>
          </div>
        </div>

        <div className="phone" aria-hidden="true">
          <div className="phone-top">
            <PulseMark size={26} />
            <span className="a-name">Пульс · готовое обследование</span>
          </div>
          <div className="product-kicker">Пример продукта · Базовое обследование</div>
          <div className="product-summary">
            Готовый комплекс для проверки основных показателей
          </div>
          <div className="panel product-panel">
            <div className="panel-h">
              <span>Фиксированный состав</span>
              <span className="count">6 исследований</span>
            </div>
            {TESTS.map((t) => (
              <div className="test" key={t}>
                <Tick />
                {t}
              </div>
            ))}
            <div className="panel-foot">
              <span className="lab">Точку сдачи выберете дальше</span>
              <span className="pr">ХХХХ ₽</span>
            </div>
            <div className="panel-cta product-panel-cta">
              Выбрать точку
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 10h11M11 6l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
