import Layout from '../components/Layout';

const Imprint = () => {
  return (
    <Layout>
      <main className="pt-32 pb-24 px-8 max-w-4xl mx-auto font-body antialiased">
        <h1 className="text-5xl font-bold text-primary tracking-tight mb-12 font-headline">Impressum</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-on-surface-variant leading-relaxed space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Angaben gemäß § 5 TMG:</h2>
            <div className="bg-surface-container-low p-8 border-l-4 border-secondary">
              <p className="font-bold text-primary leading-relaxed">
                van Valkenburg GmbH<br />
                vertreten durch<br /><br />
                van Valkenburg GmbH<br />
                c/o Ulmer Schanze<br />
                Wagnerstraße 25<br />
                89077 Ulm
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Kontakt</h2>
            <p>
              Tel. 0170 8913692<br />
              E-Mail: <a href="mailto:wolf@van-valkenburg.de" className="text-secondary hover:underline font-bold">wolf@van-valkenburg.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Bilder</h2>
            <p>www.canva.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Verantwortlich für das Design</h2>
            <p>
              Webdesign Sonntag<br />
              Sabrina Sonntag
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Wolf Probst</p>
          </section>

          <section className="pt-8 border-t border-outline-variant/30">
            <p className="text-sm italic">Quelle: <a href="http://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">http://www.e-recht24.de</a></p>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Haftungsausschluss (Disclaimer)</h2>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Imprint;
