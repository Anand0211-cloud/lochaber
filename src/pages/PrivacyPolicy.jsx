import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO title="Datenschutzerklärung" description="Datenschutzerklärung von Lochaber Consulting - Informationen zur Datenerfassung und zum Datenschutz." />
      <main className="pt-32 pb-24 px-8 max-w-4xl mx-auto font-body antialiased">
        <h1 className="text-5xl font-bold text-primary tracking-tight mb-12 font-headline">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-on-surface-variant leading-relaxed space-y-12">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-bold text-primary">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
            
            <h3 className="text-xl font-bold text-primary">Datenerfassung auf dieser Website</h3>
            <div className="space-y-4">
              <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
              <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
              
              <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
              <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
              
              <p><strong>Wofür nutzen wir Ihre Daten?</strong></p>
              <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
              
              <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
              <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">2. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            <div className="bg-surface-container-low p-8 border-l-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-2">IONOS</h3>
              <p>
                Anbieter ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (nachfolgend IONOS). Wenn Sie unsere Website besuchen, erfasst IONOS verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von IONOS: <a href="https://www.ionos.de/terms-gtc/terms-privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://www.ionos.de/terms-gtc/terms-privacy</a>.
              </p>
              <p className="mt-4 text-sm italic">
                Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">Auftragsverarbeitung</h3>
              <p>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
            </div>
            
            <div className="bg-surface-container-low p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Hinweis zur verantwortlichen Stelle</h3>
              <p>
                van Valkenburg GmbH<br />
                vertreten durch<br /><br />
                Wolf Probst<br />
                Wagnerstraße 25<br />
                89077 Ulm<br />
                E-Mail: <a href="mailto:wolf@van-valkenburg.de" className="text-secondary hover:underline">wolf@van-valkenburg.de</a><br />
                Telefon: 0170 8913692
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Recht auf Datenübertragbarkeit</h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">SSL- bzw. TLS-Verschlüsselung</h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">4. Datenerfassung auf dieser Website</h2>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Cookies</h3>
              <p>
                Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
              </p>
            </div>

            <div className="bg-surface-container-low p-8 border-l-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-2">ConsentManager</h3>
              <p>
                Anbieter dieser Technologie ist die Jaohawi AB, Håltegelvägen 1b, 72348 Västerås, Schweden, Website: <a href="https://www.consentmanager.de" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://www.consentmanager.de</a>. Wenn Sie unsere Website betreten, wird eine Verbindung zu den Servern von ConsentManager hergestellt, um Ihre Einwilligungen und sonstigen Erklärungen zur Cookie-Nutzung einzuholen.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">5. Plugins und Tools</h2>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Google Fonts (lokales Hosting)</h3>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
              </p>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
};

export default PrivacyPolicy;
