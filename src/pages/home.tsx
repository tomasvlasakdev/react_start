export default function Home() {
  return (
    <>
      <div id="hero">
        <p>Ahoj, jmenuji se Tomáš, je mi 18 let, a jsem studentem SPŠ na Proseku.</p>
      </div>

      <section id="skills">
        <h2>Mé dovednosti:</h2>
        <p> - Programovací jazyky: PHP, JavaScriptem, TypeScriptem, Pythonem</p>
        <p> - DB: Oracle, PhpMyAdmin, Supabase </p>
        <p> - Zkušenost s hostováním aplikací na VEDOS</p>
        <p>
          {" "}
          - Dlouhodobá zkušenost s verzovacími systémem Git a prací v GitHubu a
          GitLabu
        </p>
        <p>
          {" "}
          - Aktuálně programuji téměr výlučně ve stacku NextJS, Vercel,
          Supabase, co se týče vývoje webových aplikací
        </p>
      </section>

      <section id="hobbies">
        <h2>Zájmy:</h2>
        <p> - Téměř 10 let hry na lesní roh</p>
        <p> - Posilovna</p>
        <p>
          {" "}
          - Čtení knih, klasická literatura, novodobé fantasy, i non-fikce jako
          self-improvement knihy a biografie známých osobností.
        </p>
      </section>

      <section id="experience">
        <h2>Zkušenosti</h2>
        <p> - 6 týdnů praxe v technickém oddělení nadnárodní firmy TopTrans a.s. Náplň práce spočívala ve vývoji aplikace pro správů a archivaci smluv.</p>
        <p> - vedoucí práce pro skupinový projekt orientovaný na vývoj aplikace na týmové poznámky a úkoly. </p>
      </section>

      <section id="main">
        <h2 id="my-projects">Mé projekty:</h2>
        <a href="https://github.com/tomasvlasakdev/cointrack">
          <div>Webová aplikace na správu kryptoměn</div>
        </a>
        <a href="https://github.com/tomasvlasakdev/calorie_tracker">
          <div>Webová aplikace na počítání kalorií</div>
        </a>
        <a href="https://github.com/tomasvlasakdev/battleship">
          <div>Hra lodě</div>
        </a>
        <a href="https://forge.mql5.io/TomasVlasak/mql5">
          <div>Trading algoritmus postavený pro platformu MetaTrader 5</div>
        </a>
      </section>
    </>
  );
}
