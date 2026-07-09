import { Icon, type IconName } from "./Icon";

const STEPS: { n: string; icon: IconName; h: string; p: string }[] = [
  {
    n: "01",
    icon: "sparkle",
    h: "Алиса подбирает",
    p: "Опросник, составленный вместе с врачами: возраст, самочувствие и история — и вы получаете набор анализов под себя, а не общий список.",
  },
  {
    n: "02",
    icon: "drop",
    h: "Сдаёте, как удобно",
    p: "В партнёрской лаборатории рядом с домом или дома — медсестра приедет и возьмёт кровь.",
  },
  {
    n: "03",
    icon: "document",
    h: "Результаты в приложении",
    p: "Расшифровка простым языком и референсы. В следующий раз всё ложится в одну историю — видно динамику.",
  },
  {
    n: "04",
    icon: "stethoscope",
    h: "Разбор с врачом",
    p: "По видео или очно в партнёрской клинике. Врач всё объяснит, подберёт добавки и направит к врачам-специалистам, только если это действительно нужно.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="paper">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Как это работает</div>
          <h2>От «не знаю, что сдать» — до понятного результата и врача</h2>
          <p>
            Четыре шага. Мы закрываем весь путь: вам не нужно самим гадать, какие анализы выбрать и
            что потом делать с результатами.
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
