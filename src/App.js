import "./App.css";
import EmailInput from "./EmailInput";

function App() {
  return (
    <main>
      <article>
        <div>
          <header>
            <img
              src="/coming-soon/assets/images/logo.svg"
              alt="Base Apparel Logo"
            ></img>
          </header>
          <h1>We're coming soon</h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <EmailInput />
        </div>
        <div>
          <img
            src="/coming-soon/assets/images/hero-desktop.jpg"
            alt="Woman modeling merchandise"
          ></img>
        </div>
      </article>
    </main>
  );
}

export default App;
