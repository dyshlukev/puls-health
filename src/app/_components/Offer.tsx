import { PRODUCT_URL } from "../../brand";

const INCLUDED = [
  "Готовое комплексное обследование с фиксированным составом",
  "Выбор лаборатории и конкретной точки сдачи",
  "Итоговая цена до перехода к оплате",
  "Оплата, код заказа и инструкции для посещения",
  "Статус заказа и минимальная история после авторизации",
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8.5l3.2 3.2L13 5"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Offer() {
  return (
    <section id="offer">
      <div className="wrap">
        <div className="offer">
          <div>
            <h2>Что входит в заказ через Пульс</h2>
            <p className="lead">
              Пульс продаёт готовые комплексные обследования, которые проводят
              лаборатории-партнёры. Состав и пользовательская цена известны заранее.
            </p>
            <ul>
              {INCLUDED.map((i) => (
                <li key={i}>
                  <Check />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer-price">
            <div className="big">
              <span className="from">от</span>ХХХХ ₽
            </div>
            <div className="note">
              Цена указана в карточке продукта и подтверждается до оплаты. Исследования проводит
              выбранная лаборатория-партнёр.
            </div>
            <a href={PRODUCT_URL} className="btn btn-accent">
              Выбрать обследование
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
