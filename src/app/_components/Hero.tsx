import { PRODUCT_URL } from "../../brand";
import { AliceAvatar } from "./Marks";
import { Icon } from "./Icon";

const TESTS = [
  "Витамин D",
  "Ферритин",
  "ТТГ (щитовидная железа)",
  "Общий анализ крови",
  "Глюкоза",
  "Витамин B12",
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
            Персональный ИИ-чекап · от Яндекса
          </span>
          <h1>
            Не знаете, какие анализы сдать? <span className="hl">Алиса подберёт.</span>
          </h1>
          <p className="sub">
            Пройдите опросник, составленный вместе с врачами — и Алиса соберёт чекап под ваш
            возраст, пол и историю. Только то, что действительно нужно сдать, без лишнего.
          </p>
          <div className="hero-cta">
            <a href={PRODUCT_URL} className="btn btn-accent">
              Собрать мой чекап <span className="price-chip">9 900 ₽</span>
            </a>
            <a href="#how" className="btn btn-ghost">
              Как это работает <Icon name="arrowRight" size={18} />
            </a>
          </div>
          <div className="trust">
            <b>Партнёрские лаборатории</b>
            <span className="sep">·</span>
            <b>Медсестра на дом</b>
            <span className="sep">·</span>
            <b>Расшифровка и врач</b>
          </div>
        </div>

        <div className="phone" aria-hidden="true">
          <div className="phone-top">
            <AliceAvatar size={26} />
            <span className="a-name">Алиса · Пульс</span>
          </div>
          <div className="chat">
            <div className="bubble a" style={{ animationDelay: ".05s" }}>
              Привет! Помогу собрать чекап. Сколько вам лет?
            </div>
            <div className="bubble u" style={{ animationDelay: ".5s" }}>
              34
            </div>
            <div className="bubble a" style={{ animationDelay: ".95s" }}>
              Были частая усталость или проблемы со сном?
            </div>
            <div className="bubble u" style={{ animationDelay: "1.4s" }}>
              Да, устаю
            </div>
            <div className="bubble a" style={{ animationDelay: "1.85s" }}>
              Собрала панель под вас — 6 показателей, ничего лишнего.
            </div>
          </div>
          <div className="panel" style={{ animationDelay: "2.3s" }}>
            <div className="panel-h">
              <span>Ваш чекап · Персональный</span>
              <span className="count">6 анализов</span>
            </div>
            {TESTS.map((t) => (
              <div className="test" key={t}>
                <Tick />
                {t}
              </div>
            ))}
            <div className="panel-foot">
              <span className="lab">Сдать: партнёрская лаба или дом</span>
              <span className="pr">
                <s>14 900 ₽</s>9 900 ₽
              </span>
            </div>
            <div className="panel-cta" style={{ animationDelay: "2.6s" }}>
              Собрать чекап
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
