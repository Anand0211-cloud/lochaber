export const categories = [
  { id: 'kfw', label: 'KfW-Förderung', description: 'Aktuelle Förderprogramme, QNG-Zertifizierung.' },
  { id: 'potential', label: 'Bebauungspotenzial', description: 'Nachverdichtungspotenzial und verborgene Werte identifizieren.' },
  { id: 'esg', label: 'ESG & Banken', description: 'ESG-Pflichten und MaRisk-konforme Bewertung.' },
  { id: 'trends', label: 'Markttrends', description: 'PropTech-Entwicklungen und Digitalisierung.' },
  { id: 'examples', label: 'Praxisbeispiele', description: 'Anonymisierte Fallstudien und Analysen.' }
];

export const blogPosts = [
  {
    id: 1,
    title: "KfW-Förderung für Wohnbauprojekte verstehen",
    category: "KfW-Förderung",
    date: "2024-03-21",
    author: "Wolf Probst",
    summary: "Ein umfassender Leitfaden zur Nutzung von KfW-Zuschüssen und -Darlehen für energieeffiziente Bauprojekte in Deutschland.",
    content: `
      <p>Die Kreditanstalt für Wiederaufbau (KfW) spielt eine entscheidende Rolle bei der Finanzierung nachhaltiger Immobilienentwicklungen...</p>
      <h2>Wichtige Programme 2024</h2>
      <ul>
        <li><strong>Programm 261:</strong> Wohngebäude – Kredit für energieeffiziente Sanierung.</li>
        <li><strong>Programm 297/298:</strong> Klimafreundlicher Neubau.</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
    slug: "understanding-kfw-funding",
    seoTitle: "KfW-Förderung Grundstück & Wohnungsbau Guide",
    seoDescription: "Umfassender Guide zur KfW-Förderung für energieeffiziente Wohngebäude in Deutschland. Profitieren Sie von Subventionen & zinsgünstigen Krediten."
  },
  {
    id: 6,
    title: "QNG-Zertifizierung: Der Schlüssel zu höheren KfW-Förderungen",
    category: "KfW-Förderung",
    date: "2024-03-18",
    author: "Wolf Probst",
    summary: "Warum das Qualitätssiegel Nachhaltiges Gebäude (QNG) 2024 für die Maximierung Ihres Förderpotenzials unerlässlich ist.",
    content: `
      <p>Die Einführung des QNG-Siegels hat die Landschaft der KfW-Förderung verändert...</p>
    `,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    slug: "qng-certification-kfw",
    seoTitle: "QNG-Siegel & KfW-Förderung 2024 | Lochaber",
    seoDescription: "Warum das QNG-Siegel (Qualitätssiegel Nachhaltiges Gebäude) für maximale KfW-Förderung 2024 unerlässlich ist. Experten-Insights von Lochaber."
  },
  {
    id: 2,
    title: "Immobilienpotenzial durch strategische Analyse maximieren",
    category: "Bebauungspotenzial",
    date: "2024-03-15",
    author: "Wolf Probst",
    summary: "Wie fundierte technische und Marktanalysen verborgene Werte in Brachflächen aufdecken können.",
    content: `
      <p>Jedes Grundstück birgt Potenzial, aber nicht jedes Potenzial liegt auf der Hand...</p>
      <h2>Der Lochaber-Ansatz</h2>
      <p>Wir kombinieren Marktdaten mit technischen Machbarkeitsstudien, um ein „Best-Use"-Szenario für jede Immobilie zu erstellen.</p>
    `,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    slug: "maximizing-property-potential",
    seoTitle: "Bebauungspotenzial Analyse & Optimierung Immobilien",
    seoDescription: "So identifizieren Sie versteckte Potenziale in Ihrem Immobilienportfolio. Strategische Analyse für maximale Wertsteigerung bundesweit."
  },
  {
    id: 3,
    title: "Der Aufstieg von ESG-Banking in der Immobilienfinanzierung",
    category: "ESG & Banken",
    date: "2024-03-10",
    author: "Wolf Probst",
    summary: "Wie Umwelt-, Sozial- und Governance-Kriterien (ESG) die Kreditvergabelandschaft umgestalten.",
    content: `
      <p>ESG ist längst kein Schlagwort mehr – es ist ein fundamentaler Baustein moderner Bankwesen...</p>
    `,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    slug: "rise-of-esg-banking",
    seoTitle: "ESG Immobilien Banken & Finanzierungstrends",
    seoDescription: "Wie ESG-Kriterien die Immobilienfinanzierung revolutionieren. Einblick in die Anforderungen von Banken an nachhaltige Assets."
  },
  {
    id: 4,
    title: "PropTech 2024: Digitalisierung der Immobilienbranche",
    category: "Markttrends",
    date: "2024-03-05",
    author: "Wolf Probst",
    summary: "Eine Analyse der wirkungsvollsten Technologien, die dieses Jahr auf den Markt kommen.",
    content: `
      <p>Die Modernisierung beschleunigt sich. Von KI-Bewertungen bis hin zu Blockchain-Transaktionen...</p>
    `,
    image: "https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&fit=crop&q=80&w=1000",
    slug: "market-trends-2024",
    seoTitle: "Immobilien Trends 2024: Digitalisierung & KI",
    seoDescription: "Die wichtigsten Tech-Trends für die Immobilienbranche 2024. Von KI-Bewertungen bis hin zu digitalen Transaktionsprozessen."
  },
  {
    id: 5,
    title: "Fallstudie: Nachverdichtungsoptimierung in Berlin",
    category: "Praxisbeispiele",
    date: "2024-02-28",
    author: "Wolf Probst",
    summary: "15% Nachverdichtungspotenzial durch KI-gestützte Zoning-Analyse identifiziert.",
    content: `
      <p>In dieser anonymisierten Studie betrachten wir einen Wohnblock in Berlin-Mitte...</p>
    `,
    image: "/src/assets/knowledge-thumb.png",
    slug: "case-study-berlin-optimization",
    seoTitle: "Potenzialanalyse Berlin: Fallstudie Nachverdichtung",
    seoDescription: "Fallstudie: 15% Nachverdichtungspotenzial in Berlin durch KI-gestützte Zoning-Analyse identifiziert. Praktische Insights von Lochaber."
  }
];

export const faqData = [
  {
    category: "Allgemein",
    questions: [
      {
        q: "Welche Leistungen bietet Lochaber an?",
        a: "Lochaber bietet KI-gestützte Immobilienanalysen, Machbarkeitsstudien, ESG-Risikochecks und strategische Beratung für Entwickler, Banken und Makler."
      },
      {
        q: "Wie schnell erhalte ich eine Grundstücksanalyse?",
        a: "Unsere Standard-KI-Analyse dauert 2–3 Werktage. Komplexere Machbarkeitsstudien können je nach Umfang bis zu 10 Tage in Anspruch nehmen."
      }
    ]
  },
  {
    category: "Förderung & ESG",
    questions: [
      {
        q: "Welche KfW-Programme sind derzeit am relevantesten?",
        a: "Programm 261 (Sanierung) und 297/298 (Klimafreundlicher Neubau) sind die Eckpfeiler der aktuellen Wohnbauförderung."
      },
      {
        q: "Bieten Sie Unterstützung bei der QNG-Zertifizierung?",
        a: "Ja, wir beraten zu den technischen Anforderungen für das Qualitätssiegel Nachhaltiges Gebäude (QNG), das oft Voraussetzung für die höchste Förderstufe ist."
      }
    ]
  },
  {
    category: "Technologie",
    questions: [
      {
        q: "Woher stammen Ihre Daten?",
        a: "Wir nutzen unsere proprietäre Datenbank in Kombination mit syte.ms-Daten, die über 62 Millionen Datensätze in ganz Deutschland abdecken."
      }
    ]
  }
];
