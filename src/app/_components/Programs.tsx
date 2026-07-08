"use client";

const SOON = [
  {
    h: "Похудение и вес",
    p: "Метаболическая панель, программа питания и сопровождение для контроля веса.",
  },
  {
    h: "Контроль диабета",
    p: "Регулярный мониторинг показателей и персональные рекомендации по образу жизни.",
  },
  {
    h: "Ведение беременности",
    p: "Плановые анализы по срокам, напоминания и понятная расшифровка на каждом этапе.",
  },
];

function scrollToWaitlist() {
  const wl = document.getElementById("waitlist");
  wl?.scrollIntoView({ behavior: "smooth", block: "center" });
  const email = document.getElementById("wlEmail") as HTMLInputElement | null;
  email?.focus({ preventScroll: true });
}

export function Programs() {
  return (
    <section id="programs">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Программы</div>
          <h2>Начните с общего здоровья. Остальное — уже скоро</h2>
          <p>
            Сейчас открыт персональный чекап «Общее здоровье». На другие программы можно записаться
            в лист ожидания.
          </p>
        </div>
        <div className="programs">
          <div className="prog live">
            <span className="badge live">Доступно</span>
            <h3>Общее здоровье</h3>
            <p>
              Персональный ИИ-чекап: Алиса подбирает анализы под вас. Расшифровка и врач включены.
            </p>
            <div className="pr">
              <s>14 900 ₽</s>9 900 ₽
            </div>
            <a href="#offer" className="btn btn-accent cta-live">
              Собрать чекап
            </a>
          </div>
          {SOON.map((s) => (
            <div className="prog" key={s.h}>
              <span className="badge soon">Скоро</span>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
              <button className="cta-soon" onClick={scrollToWaitlist}>
                В лист ожидания
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
