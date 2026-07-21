import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <svg
          className="pulse-divider"
          viewBox="0 0 1200 26"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 13h430l14-9 10 20 12-24 9 13h60l10-6 8 12 7-9h613"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="foot-top" style={{ marginTop: 24 }}>
          <Wordmark />
          <div className="foot-links">
            <a href="#how">Как это работает</a>
            <a href="#programs">Обследования</a>
            <a href="#">Поддержка</a>
          </div>
        </div>
        <div className="disclaimer">
          <p>
            Пульс помогает выбрать и заказать готовое комплексное обследование. Он не ставит
            диагноз и не формирует индивидуальные медицинские назначения. Лабораторные
            исследования проводят лицензированные лаборатории-партнёры.
          </p>
          <p>© 2026 Яндекс Пульс</p>
        </div>
      </div>
    </footer>
  );
}
