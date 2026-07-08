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
            <h2>Что входит в «Общее здоровье»</h2>
            <p className="lead">
              Вы платите за подбор, расшифровку и сопровождение — а не за лишние анализы.
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
              <s>14 900 ₽</s>9 900 ₽
            </div>
            <div className="note">
              Забор биоматериала — в партнёрской лаборатории или на дому
            </div>
            <a href="#" className="btn btn-accent">
              Собрать мой чекап
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
