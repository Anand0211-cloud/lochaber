export const categories = [
  { id: 'kfw', label: 'KfW funding', description: 'Current funding programs, QNG certification.' },
  { id: 'potential', label: 'Development potential', description: 'Identifying densification potential and hidden value.' },
  { id: 'esg', label: 'ESG & Banks', description: 'ESG obligations and MaRisk-compliant valuation.' },
  { id: 'trends', label: 'Market trends', description: 'PropTech developments and digitization.' },
  { id: 'examples', label: 'Practical examples', description: 'Anonymized case studies and analyses.' }
];

export const blogPosts = [
  {
    id: 1,
    title: "Understanding KfW Funding for Residential Projects",
    category: "KfW funding",
    date: "2024-03-21",
    author: "Wolf Probst",
    summary: "A comprehensive guide to leveraging KfW subsidies and loans for energy-efficient building projects in Germany.",
    content: `
      <p>The Kreditanstalt für Wiederaufbau (KfW) plays a crucial role in financing sustainable real estate developments...</p>
      <h2>Key Programs for 2024</h2>
      <ul>
        <li><strong>Program 261:</strong> Residential building - credit for energy-efficient renovation.</li>
        <li><strong>Program 297/298:</strong> Climate-friendly new construction.</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
    slug: "understanding-kfw-funding"
  },
  {
    id: 6,
    title: "QNG Certification: The Key to Enhanced KfW Subsidies",
    category: "KfW funding",
    date: "2024-03-18",
    author: "Wolf Probst",
    summary: "Why the Quality Seal for Sustainable Buildings (QNG) is essential for maximizing your funding potential in 2024.",
    content: `
      <p>The introduction of the QNG seal has changed the landscape of KfW funding...</p>
    `,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    slug: "qng-certification-kfw"
  },
  {
    id: 2,
    title: "Maximizing Property Potential through Strategic Analysis",
    category: "Development potential",
    date: "2024-03-15",
    author: "Wolf Probst",
    summary: "How deep-dive technical and market analysis can uncover hidden value in brownfield sites.",
    content: `
      <p>Every piece of land holds potential, but not all potential is obvious...</p>
      <h2>The Lochaber Approach</h2>
      <p>We combine market data with technical feasibility studies to create a "best-use" scenario for every property.</p>
    `,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    slug: "maximizing-property-potential"
  },
  {
    id: 3,
    title: "The Rise of ESG Banking in Real Estate Finance",
    category: "ESG & Banks",
    date: "2024-03-10",
    author: "Wolf Probst",
    summary: "Exploring how Environmental, Social, and Governance (ESG) criteria are reshaping the lending landscape.",
    content: `
      <p>ESG is no longer just a buzzword; it's a fundamental pillar of modern banking...</p>
    `,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    slug: "rise-of-esg-banking"
  },
  {
    id: 4,
    title: "PropTech 2024: Digitization of the Real Estate Industry",
    category: "Market trends",
    date: "2024-03-05",
    author: "Wolf Probst",
    summary: "An analysis of the most impactful technologies reaching the market this year.",
    content: `
      <p>Modernization is accelerating. From AI valuations to blockchain transactions...</p>
    `,
    image: "https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&fit=crop&q=80&w=1000",
    slug: "market-trends-2024"
  },
  {
    id: 5,
    title: "Case Study: Multi-Unit Optimization in Berlin",
    category: "Practical examples",
    date: "2024-02-28",
    author: "Wolf Probst",
    summary: "Identifying 15% densification potential through AI-assisted zoning analysis.",
    content: `
      <p>In this anonymized study, we look at a residential block in Berlin-Mitte...</p>
    `,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000",
    slug: "case-study-berlin-optimization"
  }
];

export const faqData = [
  {
    category: "General",
    questions: [
      {
        q: "What services does Lochaber provide?",
        a: "Lochaber provides AI-assisted real estate analysis, feasibility studies, ESG risk checks, and strategic consulting for developers, banks, and brokers."
      },
      {
        q: "How fast can I get a property analysis?",
        a: "Our standard AI analysis takes 2-3 business days. More complex feasibility studies can take up to 10 days depending on the scope."
      }
    ]
  },
  {
    category: "Funding & ESG",
    questions: [
      {
        q: "Which KfW programs are currently most relevant?",
        a: "Program 261 (Renovation) and 297/298 (Climate-friendly New Construction) are the cornerstones of current residential funding."
      },
      {
        q: "Do you provide QNG certification support?",
        a: "Yes, we consult on the technical requirements for the Quality Seal for Sustainable Buildings (QNG), which is often a prerequisite for top-tier funding."
      }
    ]
  },
  {
    category: "Technology",
    questions: [
      {
        q: "Where does your data come from?",
        a: "We utilize our proprietary database combined with syte.ms data, covering over 62 million data sets across Germany."
      }
    ]
  }
];
