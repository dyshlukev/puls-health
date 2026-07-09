export function Features() {
  return (
    <>
      {/* Upload old analyses */}
      <section className="paper">
        <div className="wrap split">
          <div>
            <h2>Уже сдавали анализы? Они не пропадут</h2>
            <p>
              Загрузите прошлые результаты — Пульс покажет, что было не в норме, и учтёт это, когда
              будет собирать ваш чекап. Ничего сдавать заново без причины не придётся.
            </p>
            <a href="#offer" className="btn-outline">
              Загрузить прошлые анализы
            </a>
          </div>
          <div className="visual">
            <div className="visual-card">
              <div className="row">
                <span className="nm">Ферритин</span>
                <span className="val">
                  <span className="flag low">Низкий</span>18
                </span>
              </div>
              <div className="row">
                <span className="nm">Витамин D</span>
                <span className="val">
                  <span className="flag low">Низкий</span>21
                </span>
              </div>
              <div className="row">
                <span className="nm">ТТГ</span>
                <span className="val">
                  <span className="flag ok">В норме</span>2.1
                </span>
              </div>
              <div className="row">
                <span className="nm">Гемоглобин</span>
                <span className="val">
                  <span className="flag ok">В норме</span>134
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal cabinet */}
      <section>
        <div className="wrap split rev">
          <div>
            <h2>Здоровье — в одном месте</h2>
            <p>
              Все анализы, расшифровки и динамика показателей хранятся в приложении. Сдали через
              полгода — сразу видно, что изменилось и в какую сторону.
            </p>
            <a href="#offer" className="btn-outline">
              Посмотреть в приложении
            </a>
          </div>
          <div className="visual">
            <div className="visual-card trend-card">
              <div className="trend-head">
                <span className="trend-name">Витамин D</span>
                <span className="trend-flag up">↑ вышел в норму</span>
              </div>
              <div className="trend-value">
                42 <span>нг/мл</span>
              </div>
              <svg className="trend" viewBox="0 0 260 96" fill="none" preserveAspectRatio="none">
                <path
                  d="M10 68 L70 56 L130 40 L190 27 L250 16 L250 96 L10 96 Z"
                  fill="var(--green-soft)"
                />
                <path
                  d="M10 68 L70 56 L130 40 L190 27 L250 16"
                  stroke="var(--green)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {[
                  [10, 68],
                  [70, 56],
                  [130, 40],
                  [190, 27],
                  [250, 16],
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="3.4" fill="#fff" stroke="var(--green)" strokeWidth="2" />
                ))}
              </svg>
              <div className="trend-axis">
                <span>Янв</span>
                <span>Апр</span>
                <span>Июл</span>
                <span>Окт</span>
              </div>
              <div className="row trend-foot">
                <span className="nm">Следующий ретест</span>
                <span className="val" style={{ color: "var(--brand)" }}>
                  через 3 мес.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance / routing */}
      <section className="paper">
        <div className="wrap split">
          <div>
            <h2>Нужен специалист? Алиса разберётся со страховкой</h2>
            <p>
              Если врач направляет дальше, Алиса проверит вашу страховку, подскажет, что покрыто по
              ДМС, а что нет, и запишет в лучшую клинику рядом — без звонков в регистратуру.
            </p>
            <a href="#offer" className="btn-outline">
              Подключить страховку
            </a>
          </div>
          <div className="visual">
            <div className="visual-card ins-card">
              <div className="ins-head">
                <span className="ins-badge">А</span>
                <div>
                  <div className="ins-t">Направление: кардиолог</div>
                  <div className="ins-s">Алиса проверила вашу ДМС</div>
                </div>
              </div>
              <div className="ins-row">
                <span className="ins-mark ok">✓</span>
                <span className="nm">Приём кардиолога</span>
                <span className="flag ok">Покрыто ДМС</span>
              </div>
              <div className="ins-row">
                <span className="ins-mark no">₽</span>
                <span className="nm">УЗИ сердца</span>
                <span className="flag low">Из кармана · 2 400 ₽</span>
              </div>
              <div className="ins-cta">
                <span className="ins-clinic">
                  Клиника рядом <b>★ 4.9</b>
                </span>
                <span className="ins-book">Записать →</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
