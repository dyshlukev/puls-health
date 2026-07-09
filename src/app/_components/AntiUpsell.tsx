import { Icon } from "./Icon";

/*
 * Anti-upsell — the prototype's trust centerpiece ported to the landing.
 * We don't just add the right tests; we visibly *remove* the wrong ones and say
 * why. Reg-clean by design: informational service, never a diagnosis.
 */
const EXCLUDED = [
  {
    h: "Онкомаркеры «на всякий случай»",
    p: "Без показаний они не подходят для скрининга и дают ложные тревоги. Не включаем.",
  },
  {
    h: "«Полный» витаминный профиль",
    p: "Проверяем только то, что связано с вашими жалобами. За остальное вы бы платили зря.",
  },
  {
    h: "Модные генетические панели",
    p: "Интересно, но сейчас не меняет план действий. В базовый чекап не идёт.",
  },
];

export function AntiUpsell() {
  return (
    <section id="trust" className="paper">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Без апселла</div>
          <h2>Убираем лишнее — не только добавляем нужное</h2>
          <p>
            Пульс честно показывает, что сдавать не стоит. Вы платите за точный подбор, а не за
            длинный счёт.
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
        <p className="regclean">
          Это информационный сервис, а не диагноз. Решение о лечении принимает врач.
        </p>
      </div>
    </section>
  );
}
