import { AliceAvatar } from "./Marks";
import { Icon } from "./Icon";

export function Features() {
  return (
    <>
      <section className="paper" id="after-order">
        <div className="wrap split">
          <div>
            <div className="sec-eyebrow">После оплаты</div>
            <h2>Всё нужное для сдачи — в одном заказе</h2>
            <p>
              Пульс сохраняет код заказа, сумму, выбранную точку и текущий статус. После
              авторизации можно вернуться к заказу и проверить информацию для посещения.
            </p>
          </div>
          <div className="visual">
            <div className="visual-card order-card">
              <div className="order-head">
                <div>
                  <span className="order-label">Заказ</span>
                  <strong>№ P-0241</strong>
                </div>
                <span className="status-pill">
                  <Icon name="check" size={13} /> Оплачен
                </span>
              </div>
              <div className="order-code">
                <span>Код для лаборатории</span>
                <strong>482 731</strong>
              </div>
              <div className="order-row">
                <span>Точка сдачи</span>
                <b>ул. Примерная, 12</b>
              </div>
              <div className="order-row">
                <span>Сумма</span>
                <b>ХХХХ ₽</b>
              </div>
              <div className="order-note">Возьмите с собой документ, указанный в инструкции.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="scope-section">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-eyebrow">Желательно при согласовании</div>
            <h2>Две возможности, которые могут дополнить MVP</h2>
            <p>
              Их включение зависит от решений Legal и СИБ. Базовый сценарий заказа работает и без
              них.
            </p>
          </div>
          <div className="conditional-grid">
            <article className="conditional-card">
              <span className="conditional-icon">
                <Icon name="sparkle" size={22} />
              </span>
              <div>
                <h3>Короткий опросник</h3>
                <p>
                  Несколько вопросов о целях помогут отсортировать и подсветить готовые продукты.
                  Их состав останется фиксированным.
                </p>
              </div>
            </article>
            <article className="conditional-card">
              <span className="conditional-icon">
                <Icon name="document" size={22} />
              </span>
              <div>
                <h3>Результаты внутри Пульса</h3>
                <p>
                  Значения, единицы, референсы и отметки будут показаны ровно в том виде, в котором
                  их передала лаборатория, без персональной интерпретации.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="paper vision-section" id="vision">
        <div className="wrap">
          <div className="vision-panel">
            <div className="vision-copy">
              <span className="scope-label">После MVP · видение</span>
              <h2>Алиса поможет лучше разобраться в анализах</h2>
              <p>
                Мы хотим интегрировать Пульс с Алисой и использовать агентские возможности для
                помощи в подборе и интерпретации анализов. Это направление развития, а не функция
                текущего MVP.
              </p>
              <small>
                Конкретные сценарии появятся только после продуктовой, медицинской, юридической и
                проверки безопасности.
              </small>
            </div>
            <div className="vision-flow" aria-hidden="true">
              <div className="vision-avatar">
                <AliceAvatar size={44} ring />
                <span>Алиса · Пульс</span>
              </div>
              <div className="vision-step">
                <Icon name="sparkle" size={19} />
                <span>Помощь с выбором</span>
              </div>
              <div className="vision-step">
                <Icon name="document" size={19} />
                <span>Помощь с интерпретацией</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
