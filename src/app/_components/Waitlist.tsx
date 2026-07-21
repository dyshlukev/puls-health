"use client";

import { useState } from "react";

export function Waitlist() {
  const [done, setDone] = useState(false);

  return (
    <section className="paper" id="waitlist">
      <div className="wrap waitlist">
        <h2>Узнайте о запуске Пульса</h2>
        <p>
          Оставьте почту — напишем, когда комплексные обследования станут доступны для заказа.
        </p>
        {done ? (
          <div style={{ fontWeight: 700, color: "var(--green)", fontSize: 17 }}>
            Готово — вы в списке. Напишем, как только откроем.
          </div>
        ) : (
          <form
            className="wl-form"
            onSubmit={(e) => {
              e.preventDefault();
              const input = document.getElementById("wlEmail") as HTMLInputElement;
              if (input.value.trim()) setDone(true);
            }}
          >
            <input
              type="email"
              id="wlEmail"
              placeholder="Ваша почта"
              required
              aria-label="Электронная почта"
            />
            <button type="submit" className="btn btn-accent">
              Записаться
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
