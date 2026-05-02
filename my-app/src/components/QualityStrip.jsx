/* ─────────────────────────────────────────────────────────────────────────────
   QualityStrip.jsx
   Dark strip with 4 feature columns: red icon + bold title + gray description.
   Exact colors from design: bg #1a1a1a, text white/#b0b0b0, accent #cc2323
───────────────────────────────────────────────────────────────────────────── */

const features = [
  {
    id: "quality",
    title: "Premium Quality",
    desc: "High-grade materials for maximum durability.",
    Icon: () => (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield */}
        <path
          d="M18 3L4 9v9c0 7.18 5.96 13.9 14 15 8.04-1.1 14-7.82 14-15V9L18 3z"
          stroke="#cc2323"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        {/* Checkmark */}
        <path
          d="M12 18.5l4.5 4.5 8-9"
          stroke="#cc2323"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "precision",
    title: "Precision Engineered",
    desc: "Designed for accuracy and consistent performance.",
    Icon: () => (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle cx="18" cy="18" r="13" stroke="#cc2323" strokeWidth="1.7" />
        {/* Middle circle */}
        <circle cx="18" cy="18" r="7" stroke="#cc2323" strokeWidth="1.7" />
        {/* Crosshair lines */}
        <line
          x1="18"
          y1="4"
          x2="18"
          y2="9"
          stroke="#cc2323"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="27"
          x2="18"
          y2="32"
          stroke="#cc2323"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="18"
          x2="9"
          y2="18"
          stroke="#cc2323"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <line
          x1="27"
          y1="18"
          x2="32"
          y2="18"
          stroke="#cc2323"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        {/* Center dot */}
        <circle cx="18" cy="18" r="2.2" fill="#cc2323" />
      </svg>
    ),
  },
  {
    id: "efficiency",
    title: "Maximum Efficiency",
    desc: "Faster cutting, smoother drilling, greater results.",
    Icon: () => (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lightning bolt */}
        <path
          d="M21 4L10 20h9l-4 12 17-18h-10l4-10z"
          stroke="#cc2323"
          strokeWidth="1.7"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "trusted",
    title: "Trusted by Pros",
    desc: "Reliable choice of professionals across industries.",
    Icon: () => (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer badge ring */}
        <circle cx="18" cy="18" r="13" stroke="#cc2323" strokeWidth="1.7" />
        {/* Star points (simplified badge) */}
        <path
          d="M18 8l1.8 4.5 4.8.4-3.5 3.2 1 4.8L18 18.5l-4.1 2.4 1-4.8-3.5-3.2 4.8-.4L18 8z"
          stroke="#cc2323"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Checkmark inside */}
        <path
          d="M14.5 18.5l2.5 2.5 5-5"
          stroke="#cc2323"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function QualityStrip() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Barlow:wght@400;500&display=swap');

        .qs-strip {
          background-color: #191919;
          border-top: 1px solid #2a2a2a;
          border-bottom: 1px solid #2a2a2a;
        }

        .qs-col {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 24px 28px;
          border-right: 1px solid #272727;
          transition: background-color 0.2s ease;
        }
        .qs-col:last-child {
          border-right: none;
        }
        .qs-col:hover {
          background-color: #202020;
        }

        .qs-icon-wrap {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #111111;
          border: 1px solid #2e2e2e;
          border-radius: 2px;
          transition: border-color 0.2s ease;
        }
        .qs-col:hover .qs-icon-wrap {
          border-color: #cc2323;
        }

        .qs-title {
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 0.88rem;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          line-height: 1.2;
          margin-bottom: 5px;
        }

        .qs-desc {
          font-family: 'Barlow', sans-serif;
          font-weight: 400;
          font-size: 0.82rem;
          color: #909090;
          line-height: 1.55;
        }

        @media (max-width: 768px) {
          .qs-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .qs-col {
            border-right: none;
            border-bottom: 1px solid #272727;
          }
          .qs-col:nth-child(odd) {
            border-right: 1px solid #272727;
          }
        }

        @media (max-width: 480px) {
          .qs-grid {
            grid-template-columns: 1fr !important;
          }
          .qs-col:nth-child(odd) {
            border-right: none;
          }
        }
      `}</style>

      <div className="qs-strip w-full">
        <div
          className="qs-grid max-w-7xl mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {features.map(({ id, title, desc, Icon }) => (
            <div key={id} className="qs-col">
              {/* Icon box */}
              <div className="qs-icon-wrap">
                <Icon />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <p className="qs-title">{title}</p>
                <p className="qs-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
