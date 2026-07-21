import { PRODUCT_URL } from "../../brand";
import { Icon, type IconName } from "./Icon";

const PRODUCTS: { icon: IconName; h: string; p: string }[] = [
  {
    icon: "flask",
    h: "Базовое обследование",
    p: "Готовый комплекс для проверки основных показателей.",
  },
  {
    icon: "sun",
    h: "Энергия и самочувствие",
    p: "Фиксированный комплекс исследований для тех, кого беспокоит усталость.",
  },
  {
    icon: "heart",
    h: "Вес и уровень сахара",
    p: "Готовый комплекс с фокусом на показателях, связанных с обменом глюкозы.",
  },
];

export function Programs() {
  return (
    <section id="programs">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Примеры продуктов</div>
          <h2>Комплексные обследования с фиксированным составом</h2>
          <p>
            Так может выглядеть витрина на старте: каждый продукт собран заранее, а полный состав
            и цена видны до выбора лаборатории и точки сдачи.
          </p>
        </div>
        <div className="programs">
          {PRODUCTS.map((product) => (
            <div className="prog" key={product.h}>
              <span className="prog-ic">
                <Icon name={product.icon} size={22} />
              </span>
              <span className="badge fixed">Фиксированный состав</span>
              <h3>{product.h}</h3>
              <p>{product.p}</p>
              <div className="pr">ХХХХ ₽</div>
              <a href={PRODUCT_URL} className="cta-soon">
                Посмотреть состав
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
