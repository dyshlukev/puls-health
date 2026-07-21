import Link from "next/link";
import { Wordmark } from "./Wordmark";

export function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(254,252,248,.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 66,
        }}
      >
        <Link href="#top" aria-label="Пульс — на главную">
          <Wordmark />
        </Link>
        <nav className="nav-links">
          <a href="#programs">Обследования</a>
          <a href="#how">Как это работает</a>
          <a href="#login" className="login">
            Войти
          </a>
        </nav>
      </div>
    </header>
  );
}
