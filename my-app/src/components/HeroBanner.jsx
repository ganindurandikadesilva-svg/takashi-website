import { useEffect, useRef } from "react";

/*
  ┌─────────────────────────────────────────────────────────────┐
  │  HeroBanner — Full-bleed background layout                  │
  │  Designed for the Takashi wide landscape product photo.     │
  │  hero_img.png sits as a full background; text overlays      │
  │  the left ~45% with a gradient mask so products show fully. │
  └─────────────────────────────────────────────────────────────*/

export default function HeroBanner() {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-anim]");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
      setTimeout(
        () => {
          item.style.transition =
            "opacity 0.7s cubic-bezier(.22,.68,0,1.2), transform 0.7s cubic-bezier(.22,.68,0,1.2)";
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        },
        80 + i * 130,
      );
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Barlow:ital,wght@0,400;0,500;1,400;1,600&display=swap');

        /* ── Section ── */
        .hero-wrap {
          position: relative;
          width: 100%;
          min-height: 680px;
          overflow: hidden;
          background-color: #0e0e0e;
          display: flex;
          align-items: center;
        }

        /* ── Background image fills entire section ── */
        .hero-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          z-index: 0;
          /* Subtle scale-in on load */
          animation: heroImgReveal 1.4s cubic-bezier(.2,.6,.3,1) forwards;
          transform: scale(1.05);
          opacity: 0;
        }
        @keyframes heroImgReveal {
          to { transform: scale(1); opacity: 1; }
        }

        /* ── Gradient overlay — left side dark for text legibility ── */
        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          /*
            Left third: solid dark for text.
            Center: gradient fade so products are fully visible.
            Top edge: slight dark vignette.
            Bottom: fade to site background.
          */
          background:
            linear-gradient(
              to right,
              rgba(10, 10, 10, 0.97) 0%,
              rgba(10, 10, 10, 0.92) 22%,
              rgba(10, 10, 10, 0.78) 35%,
              rgba(10, 10, 10, 0.40) 50%,
              rgba(10, 10, 10, 0.10) 65%,
              rgba(10, 10, 10, 0.0)  78%
            ),
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.35) 0%,
              transparent 18%,
              transparent 75%,
              rgba(10, 10, 10, 0.85) 100%
            );
        }

        /* ── Warm red glow behind the products (right side) ── */
        .hero-glow {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            radial-gradient(ellipse 40% 60% at 75% 40%, rgba(200, 35, 20, 0.18) 0%, transparent 70%);
        }

        /* ── Content wrapper ── */
        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ── Text block — constrained to left 46% ── */
        .hero-text {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 500px;
          padding: 80px 0;
        }

        /* Eyebrow */
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hero-eyebrow-line {
          display: block;
          width: 36px;
          height: 3px;
          background: #cc2323;
          box-shadow: 0 0 10px rgba(204, 35, 35, 0.6);
        }
        .hero-eyebrow-text {
          font-family: 'Oswald', sans-serif;
          font-weight: 500;
          font-size: 0.75rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #cc2323;
        }

        /* Headline */
        .hero-headline {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-style: italic;
          font-size: clamp(3.6rem, 7vw, 6.4rem);
          line-height: 0.9;
          letter-spacing: -0.01em;
          color: #ffffff;
          text-transform: uppercase;
          text-shadow: 2px 2px 0 rgba(0,0,0,0.6), 0 4px 32px rgba(0,0,0,0.5);
          margin: 0;
        }
        .hero-headline .red {
          color: #cc2323;
          display: block;
        }

        /* Divider + subline */
        .hero-divider {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .hero-divider-bar {
          width: 48px;
          height: 2px;
          background: #cc2323;
          flex-shrink: 0;
        }
        .hero-subline {
          font-family: 'Barlow', sans-serif;
          font-style: italic;
          font-weight: 600;
          font-size: 1.05rem;
          color: #e8e8e8;
          letter-spacing: 0.04em;
        }

        /* Body */
        .hero-body {
          font-family: 'Barlow', sans-serif;
          font-weight: 400;
          font-size: 0.92rem;
          line-height: 1.72;
          color: #b8b8b8;
          max-width: 320px;
        }

        /* CTA row */
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 4px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #cc2323;
          color: #fff;
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 0.88rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 14px 36px;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: background 0.18s ease, box-shadow 0.18s ease, transform 0.15s ease;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
          box-shadow: 0 4px 20px rgba(204, 35, 35, 0.3);
        }
        .btn-primary:hover {
          background: #aa1818;
          box-shadow: 0 6px 28px rgba(204, 35, 35, 0.5);
          transform: translateX(2px);
        }
        .btn-primary .arrow {
          transition: transform 0.18s ease;
        }
        .btn-primary:hover .arrow {
          transform: translateX(4px);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #aaaaaa;
          font-family: 'Barlow', sans-serif;
          font-weight: 500;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid #444;
          transition: color 0.18s ease, border-color 0.18s ease;
        }
        .btn-ghost:hover {
          color: #ffffff;
          border-color: #cc2323;
        }

        /* Stats strip */
        .hero-stats {
          display: flex;
          gap: 32px;
          margin-top: 8px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .stat-num {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #ffffff;
          line-height: 1;
        }
        .stat-num span {
          color: #cc2323;
        }
        .stat-label {
          font-family: 'Barlow', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #666666;
        }

        /* Sparks */
        .spark-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: sparkDrift linear infinite;
        }
        @keyframes sparkDrift {
          0%   { opacity: 0;    transform: translateY(0)    scale(1);   }
          15%  { opacity: 0.9;                                           }
          80%  { opacity: 0.2;                                           }
          100% { opacity: 0;    transform: translateY(-70px) scale(0.2); }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hero-wrap { min-height: 580px; }
          .hero-text { max-width: 420px; padding: 60px 0; }
          .hero-content { padding: 0 28px; }
          .hero-overlay {
            background:
              linear-gradient(to right,
                rgba(10,10,10,0.96) 0%,
                rgba(10,10,10,0.88) 30%,
                rgba(10,10,10,0.6)  50%,
                rgba(10,10,10,0.15) 70%,
                rgba(10,10,10,0.0)  85%
              ),
              linear-gradient(to bottom,
                rgba(0,0,0,0.35) 0%, transparent 15%,
                transparent 72%, rgba(10,10,10,0.9) 100%
              );
          }
        }

        @media (max-width: 640px) {
          .hero-wrap { min-height: 520px; }
          .hero-text { padding: 48px 0; gap: 16px; }
          .hero-content { padding: 0 20px; }
          .hero-overlay {
            background:
              linear-gradient(to right,
                rgba(10,10,10,0.95) 0%,
                rgba(10,10,10,0.90) 50%,
                rgba(10,10,10,0.65) 100%
              ),
              linear-gradient(to bottom,
                rgba(0,0,0,0.4) 0%, transparent 12%,
                transparent 68%, rgba(10,10,10,0.95) 100%
              );
          }
          .hero-stats { gap: 20px; }
          .hero-bg-img { object-position: 60% 30%; }
        }
      `}</style>

      <section className="hero-wrap">
        {/* ── Full-bleed product image ── */}
        <img
          src="../assests/hero_img.png"
          alt="Takashi power tool accessories — cutting, grinding and drilling"
          className="hero-bg-img"
        />

        {/* ── Gradient overlay for text legibility ── */}
        <div className="hero-overlay" />

        {/* ── Warm red product glow ── */}
        <div className="hero-glow" />

        {/* ── Animated spark particles (top-right, matching photo sparks) ── */}
        {[
          {
            top: "8%",
            right: "12%",
            size: 3,
            bg: "#ff6030",
            dur: "3.1s",
            delay: "0s",
          },
          {
            top: "5%",
            right: "18%",
            size: 2,
            bg: "#ffaa44",
            dur: "2.6s",
            delay: "0.7s",
          },
          {
            top: "14%",
            right: "9%",
            size: 4,
            bg: "#ff5020",
            dur: "3.8s",
            delay: "1.2s",
          },
          {
            top: "4%",
            right: "22%",
            size: 2,
            bg: "#ff7040",
            dur: "2.4s",
            delay: "1.8s",
          },
          {
            top: "20%",
            right: "8%",
            size: 3,
            bg: "#ff6030",
            dur: "3.4s",
            delay: "0.3s",
          },
          {
            top: "10%",
            right: "28%",
            size: 2,
            bg: "#ffbb55",
            dur: "2.9s",
            delay: "2.1s",
          },
          {
            top: "18%",
            right: "15%",
            size: 5,
            bg: "#ff4418",
            dur: "4.2s",
            delay: "1.5s",
          },
          {
            top: "6%",
            right: "6%",
            size: 3,
            bg: "#ff8040",
            dur: "3.0s",
            delay: "2.5s",
          },
          {
            top: "25%",
            right: "11%",
            size: 2,
            bg: "#ff6030",
            dur: "3.6s",
            delay: "0.9s",
          },
          {
            top: "3%",
            right: "32%",
            size: 2,
            bg: "#ffcc66",
            dur: "2.7s",
            delay: "1.6s",
          },
        ].map((s, i) => (
          <span
            key={i}
            className="spark-particle"
            style={{
              top: s.top,
              right: s.right,
              width: s.size,
              height: s.size,
              background: s.bg,
              animationDuration: s.dur,
              animationDelay: s.delay,
            }}
          />
        ))}

        {/* ── Main content ── */}
        <div className="hero-content">
          <div className="hero-text" ref={contentRef}>
            {/* Eyebrow label */}
            <div className="hero-eyebrow" data-anim>
              <span className="hero-eyebrow-line" />
              {/* <span className="hero-eyebrow-text">Edge of Excellence</span> */}
            </div>

            {/* Main headline */}
            <h1 className="hero-headline" data-anim>
              {/* Power */}EDGE
              <br />
              <span className="red">of</span>
              Excellence.
            </h1>

            {/* Subline */}
            <div className="hero-divider" data-anim>
              <span className="hero-divider-bar" />
              <p className="hero-subline">
                Precision. Performance. Perfection.
              </p>
            </div>

            {/* Body */}
            <p className="hero-body" data-anim>
              Premium cutting, grinding, and drilling accessories engineered for
              professionals who demand the best.
            </p>

            {/* CTA buttons */}
            <div className="hero-cta-row" data-anim>
              <a href="#shop" className="btn-primary">
                Shop Now
                <svg
                  className="arrow"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              {/* <a href="#categories" className="btn-ghost">
                Browse Range
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a> */}
            </div>

            {/* Stats */}
            <div className="hero-stats" data-anim>
              {[
                { num: "500", suffix: "+", label: "Products" },
                { num: "50", suffix: "+", label: "Countries" },
                { num: "20", suffix: "K+", label: "Pro Users" },
              ].map(({ num, suffix, label }) => (
                <div className="stat-item" key={label}>
                  <span className="stat-num">
                    {num}
                    <span>{suffix}</span>
                  </span>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
