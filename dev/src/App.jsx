import React from "react";

export default function App() {
  return (
    <>
      {/* Global reset to kill white background / outline */}
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          background: #0b0d10;
        }
        * {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <main style={styles.page}>
        <div style={styles.container}>

          {/* Header */}
          <header style={styles.header}>
            <div>
              <h1 style={styles.title}>rachit is my name</h1>
              <p style={styles.subtitle}>
                on-chain backend & infrastructure engineer
              </p>
            </div>

            <nav style={styles.nav}>
              <a href="#work">proof-of-work</a>
              <a href="#experience">experience</a>
              <a
                href="https://drive.google.com/file/d/1QRlr8ZT3agQIUl6MtvQNm-rdQA67D61S/view"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </nav>
          </header>

          <Divider />

          {/* Intro */}
          <section style={styles.section}>
            <p>gm, i'm rachit.</p>
            <p>
              a web3 backend & infrastructure engineer working close to the chain.
            </p>
            <p>
              i build real-time on-chain data systems — indexers, execution pipelines,
              monitoring infra, and protocol tooling on solana.
            </p>
            <p style={styles.muted}>
              most of my work involves parsing transactions, handling rpc limits,
              and turning noisy on-chain data into reliable systems.
            </p>
          </section>

          {/* Focus */}
          <section style={styles.section}>
            <SectionTitle>currently focused on</SectionTitle>
            <ul style={styles.list}>
              <li>solana on-chain data & indexers</li>
              <li>cluster & wallet behavior detection</li>
              <li>execution & analytics pipelines</li>
              <li>infra reliability & rpc-aware systems</li>
            </ul>
          </section>

          {/* Proof of Work */}
          <section id="work" style={styles.section}>
            <SectionTitle>proof of work</SectionTitle>

            <Project
              title="Solana Cluster Detection System"
              desc="Real-time detection of coordinated wallets, funding flows, spend rates, and rpc health signals. Designed for infra monitoring, indexers, and trading systems."
              links={[
                ["github", "https://github.com/RachitSrivastava12/dec-clust"],
                ["demo", "https://dec-clust.vercel.app"]
              ]}
            />

            <Project
              title="Solana Referral System"
              desc="Referral and attribution system for Solana-based protocols with incentive logic for growth and user acquisition."
              links={[
                ["github", "https://github.com/RachitSrivastava12/SolanaReferral"],
                ["live", "https://solana-referral.vercel.app"]
              ]}
            />

            <Project
              title="Multi-Chain Payment System (SOL ↔ ETH)"
              desc="Cross-chain settlement with live pricing feeds, escrow execution, and transaction tracking."
              links={[
                ["github", "https://github.com/RachitSrivastava12/Multi-Chain-Payment-System"],
                ["live", "https://multi-chain-payment-system.vercel.app"]
              ]}
            />

            <Project
              title="Solana Blockchain Explorer"
              desc="Custom explorer for blocks, transactions, and accounts with optimized RPC usage."
              links={[
                ["github", "https://github.com/RachitSrivastava12/SolanaExplorer"],
                ["live", "https://solana-explorer-ten.vercel.app"]
              ]}
            />

            <Project
              title="Solana Indexer"
              desc="Modular indexing pipeline to process, filter, and serve Solana on-chain data for analytics and protocol integrations."
              links={[
                ["github", "https://github.com/RachitSrivastava12/Solana-Indexer"],
                ["demo", "https://solana-indexer-a7wc.vercel.app"]
              ]}
            />
          </section>

          {/* Experience */}
          <section id="experience" style={styles.section}>
            <SectionTitle>experience</SectionTitle>

            <Experience
              role="Freelance Web3 Backend & Infrastructure Engineer"
              time="Aug 2024 — Present"
              points={[
                "built real-time on-chain ingestion and transformation pipelines on solana",
                "designed backend systems for execution, analytics, and monitoring infra",
                "worked directly with founders on protocol and infra decisions"
              ]}
            />

            <Experience
              role={
                <>
                  Developer @{" "}
                  <a
                    href="https://x.com/opsonchain"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.inlineLink}
                  >
                    opsonchain
                  </a>
                </>
              }
              time="2025 — Present"
              points={[
                "worked on a solana VWAP execution pipeline",
                "ingested, normalized, and served clean on-chain market data",
                "supported institutional-style execution logic"
              ]}
            />

            <Experience
              role="Community & Ecosystem Contributor"
              time="2023 — 2024"
              points={[
                "participated in hackathons, workshops, and early-stage protocol work",
                "collaborated with founders and engineers across web3 projects"
              ]}
            />
          </section>

          {/* Stack */}
          <section style={styles.section}>
            <SectionTitle>stack</SectionTitle>
            <p style={styles.muted}>
              solana · anchor · rust · typescript · javascript · node.js ·
              postgres · redis · rpc infra · indexers · execution systems
            </p>
          </section>

          {/* Footer */}
          <footer style={styles.footer}>
            <div style={styles.footerLinks}>
              <IconLink
                href="https://github.com/RachitSrivastava12"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
              />
              <IconLink
                href="https://x.com/Rachit_twts"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg"
              />
              <IconLink
                href="https://www.linkedin.com/in/rachit-dhh/"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
              />
              <IconLink
                href="https://drive.google.com/file/d/1QRlr8ZT3agQIUl6MtvQNm-rdQA67D61S/view"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googledrive.svg"
              />
            </div>
            <p style={styles.footerNote}>built by rachit · infra first</p>
          </footer>

        </div>
      </main>
    </>
  );
}

/* ---------- Components ---------- */

const Divider = () => <div style={styles.divider} />;

const SectionTitle = ({ children }) => (
  <h2 style={styles.sectionTitle}>{children}</h2>
);

const Project = ({ title, desc, links }) => (
  <div style={styles.block}>
    <h3 style={styles.blockTitle}>{title}</h3>
    <p style={styles.blockDesc}>{desc}</p>
    <div style={styles.links}>
      {links.map(([label, url]) => (
        <a key={url} href={url} target="_blank" rel="noreferrer">
          <IconText label={label} />
        </a>
      ))}
    </div>
  </div>
);

const Experience = ({ role, time, points }) => (
  <div style={styles.block}>
    <h3 style={styles.blockTitle}>{role}</h3>
    <p style={styles.time}>{time}</p>
    <ul style={styles.list}>
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
);

const IconLink = ({ href, src }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <img src={src} alt="" style={styles.icon} />
  </a>
);

const IconText = ({ label }) => <span style={styles.linkText}>{label}</span>;

/* ---------- Styles ---------- */

const styles = {
  page: {
    background: "#0b0d10",
    color: "#e5e7eb",
    minHeight: "100vh",
    fontFamily: "Inter, system-ui, sans-serif"
  },
  container: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "56px 24px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: "22px",
    fontWeight: 500
  },
  subtitle: {
    fontSize: "13px",
    color: "#9ca3af",
    marginTop: "4px"
  },
  nav: {
    display: "flex",
    gap: "16px",
    fontSize: "13px",
    color: "#d1d5db"
  },
  divider: {
    height: "1px",
    background: "#1f2933",
    margin: "32px 0"
  },
  section: {
    marginBottom: "56px",
    lineHeight: 1.7
  },
  sectionTitle: {
    fontSize: "12px",
    letterSpacing: "0.14em",
    color: "#6b7280",
    marginBottom: "18px",
    textTransform: "uppercase"
  },
  muted: {
    color: "#9ca3af"
  },
  list: {
    paddingLeft: "18px"
  },
  block: {
    marginBottom: "32px"
  },
  blockTitle: {
    fontSize: "16px",
    color: "#f9fafb"
  },
  blockDesc: {
    fontSize: "14px",
    color: "#9ca3af",
    marginTop: "6px"
  },
  time: {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "6px"
  },
  links: {
    marginTop: "8px",
    display: "flex",
    gap: "14px",
    fontSize: "13px",
    color: "#d1d5db"
  },
  linkText: {
    color: "#d1d5db"
  },
  inlineLink: {
    color: "#e5e7eb",
    borderBottom: "1px dotted #6b7280"
  },
  footer: {
    marginTop: "64px",
    fontSize: "12px",
    color: "#6b7280"
  },
  footerLinks: {
    display: "flex",
    gap: "14px",
    marginBottom: "12px"
  },
  footerNote: {
    opacity: 0.7
  },
  icon: {
    width: "16px",
    height: "16px",
    filter: "invert(70%)"
  }
};
