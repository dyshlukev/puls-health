import { PRODUCT_URL } from "../../brand";

const INCLUDED = [
  "Персональный ИИ-набор анализов, собранный Алисой под вас",
  "Расшифровка результатов простым языком",
  "Консультация врача — с направлением к специалистам, если нужно",
  "Персональные добавки по подписке со скидкой 30% — подберём и привезём",
  "Алиса проверит страховку и запишет в лучшую клинику",
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
            <h2>Что входит в персональный ИИ-чекап</h2>
            <p className="lead">
              Панель собирается под вас, поэтому и цена — под вас: от 1 990 ₽. Вы платите за подбор,
              расшифровку и сопровождение, а не за лишние анализы.
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
              <span className="from">от</span>1 990 ₽
            </div>
            <div className="note">
              Цена зависит от того, что вошло в ваш чекап. Забор биоматериала — в партнёрской
              лаборатории или на дому.
            </div>
            <a href={PRODUCT_URL} className="btn btn-accent">
              Собрать мой чекап
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
