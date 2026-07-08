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
            <div className="visual-card">
              <div className="row">
                <span className="nm">Витамин D · динамика</span>
                <span className="spark">
                  {[35, 50, 62, 80, 100].map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ))}
                </span>
              </div>
              <div className="row">
                <span className="nm">Ферритин · динамика</span>
                <span className="spark">
                  {[30, 45, 55, 70, 88].map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ))}
                </span>
              </div>
              <div className="row">
                <span className="nm">Следующий ретест</span>
                <span className="val" style={{ color: "var(--accent)" }}>
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
            <div className="visual-card">
              <div className="row">
                <span className="nm">Приём кардиолога</span>
                <span className="val">
                  <span className="flag ok">Покрыто ДМС</span>
                </span>
              </div>
              <div className="row">
                <span className="nm">УЗИ сердца</span>
                <span className="val">
                  <span className="flag low">Из кармана</span>
                </span>
              </div>
              <div className="row">
                <span className="nm">Клиника рядом · ★ 4.9</span>
                <span className="val" style={{ color: "var(--accent)" }}>
                  Записать
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
