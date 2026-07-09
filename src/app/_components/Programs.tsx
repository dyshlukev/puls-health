"use client";

import { PRODUCT_URL } from "../../brand";
import { Icon, type IconName } from "./Icon";

const SOON: { icon: IconName; h: string; p: string }[] = [
  {
    icon: "heart",
    h: "Снижение веса",
    p: "Метаболическая панель, программа питания и сопровождение — чтобы вес уходил под контролем.",
  },
  {
    icon: "sun",
    h: "Энергия и дефициты",
    p: "Целевая панель дефицитов — D, железо, B12, щитовидка — и добавки по подписке, чтобы вернуть силы.",
  },
  {
    icon: "leaf",
    h: "Красота изнутри",
    p: "Анализы для кожи, волос и ногтей и beauty-добавки по подписке — с фото-динамикой результата.",
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
          <h2>Начните с персонального чекапа. Остальное — уже скоро</h2>
          <p>
            Сейчас открыт персональный ИИ-чекап. На другие программы можно записаться в лист
            ожидания.
          </p>
        </div>
        <div className="programs">
          <div className="prog live">
            <span className="prog-ic"><Icon name="sparkle" size={22} /></span>
            <span className="badge live">Доступно</span>
            <h3>Персональный ИИ-чекап</h3>
            <p>
              Персональный ИИ-чекап: Алиса подбирает анализы под вас. Расшифровка и врач включены.
            </p>
            <div className="pr">от 1 990 ₽</div>
            <a href={PRODUCT_URL} className="btn btn-accent cta-live">
              Собрать чекап
            </a>
          </div>
          {SOON.map((s) => (
            <div className="prog" key={s.h}>
              <span className="prog-ic"><Icon name={s.icon} size={22} /></span>
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
