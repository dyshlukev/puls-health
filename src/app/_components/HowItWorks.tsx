import { Icon, type IconName } from "./Icon";

const STEPS: { n: string; icon: IconName; h: string; p: string }[] = [
  {
    n: "01",
    icon: "flask",
    h: "Выбираете продукт",
    p: "Смотрите назначение, фиксированный состав и цену готового обследования.",
  },
  {
    n: "02",
    icon: "drop",
    h: "Находите точку",
    p: "Выбираете доступную лабораторию и удобную точку сдачи на карте или в списке.",
  },
  {
    n: "03",
    icon: "card",
    h: "Оплачиваете",
    p: "Проверяете продукт, точку и итоговую сумму перед оплатой заказа.",
  },
  {
    n: "04",
    icon: "document",
    h: "Получаете код",
    p: "Пульс показывает код заказа, адрес и инструкции для посещения лаборатории.",
  },
  {
    n: "05",
    icon: "check",
    h: "Следите за статусом",
    p: "Текущий статус и минимальная история заказов доступны после авторизации.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="paper">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Как это работает</div>
          <h2>От выбора до посещения лаборатории</h2>
          <p>
            Пульс соединяет витрину комплексных обследований, точки лабораторий-партнёров и
            оформление заказа в одном понятном сценарии.
          </p>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <span className="ic">
                <Icon name={s.icon} size={22} />
              </span>
              <div className="num">
                {s.n}
                <span className="ln" />
              </div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
