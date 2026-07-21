import { Icon } from "./Icon";

const EXCLUDED = [
  {
    h: "Состав виден заранее",
    p: "До оплаты вы видите все исследования, которые входят в выбранный продукт.",
  },
  {
    h: "Ничего не добавляем автоматически",
    p: "В корзине остаётся только выбранное обследование — без скрытых дополнительных позиций.",
  },
  {
    h: "Цена известна до оплаты",
    p: "Итоговая сумма показывается до оформления и не зависит от длины анкеты или ответов.",
  },
];

export function AntiUpsell() {
  return (
    <section id="trust" className="paper">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Честный выбор</div>
          <h2>Без навязывания лишнего</h2>
          <p>
            Вместо бесконечного каталога — небольшая витрина готовых обследований. У каждого
            заранее определены состав, назначение и цена.
          </p>
        </div>
        <div className="excl-grid">
          {EXCLUDED.map((e) => (
            <div className="excl-card" key={e.h}>
              <span className="excl-ic">
                <Icon name="close" size={18} />
              </span>
              <h3>{e.h}</h3>
              <p>{e.p}</p>
            </div>
          ))}
        </div>
        <p className="regclean">Пульс не ставит диагноз и не формирует медицинские назначения.</p>
      </div>
    </section>
  );
}
