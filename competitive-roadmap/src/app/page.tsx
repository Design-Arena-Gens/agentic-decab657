import styles from "./page.module.css";

const phases = [
  {
    title: "Build Core Fundamentals",
    duration: "Weeks 1 – 4",
    focus: [
      "Precision with C++/Python syntax",
      "Time & space complexity intuition",
      "Ad-hoc & simulation patterns",
    ],
    actions: [
      "Solve 25 beginner problems on Codeforces / LeetCode Easy",
      "Implement custom input parsers and fast I/O templates",
      "Re-implement classic algorithms: binary search, prefix sums, stacks",
    ],
  },
  {
    title: "Master Data Structures",
    duration: "Weeks 5 – 8",
    focus: [
      "Sorting, greedy proof techniques",
      "Dynamic arrays, stacks, queues, linked lists",
      "Trees, binary lifting, disjoint set",
    ],
    actions: [
      "Tackle 30 problems tagged data-structures on Codeforces (900–1300)",
      "Review failed attempts and document gaps",
      "Write reusable templates for DSU, Fenwick trees, segment trees",
    ],
  },
  {
    title: "Dive Into Dynamic Programming",
    duration: "Weeks 9 – 12",
    focus: [
      "1-D and 2-D DP states",
      "Knapsack, LIS, digit DP patterns",
      "Bitmasking and DP optimisations",
    ],
    actions: [
      "Solve 20 DP problems split across beginner/intermediate",
      "Use editorial to craft state-transition diagrams",
      "Teach a friend or write a blog recap each week",
    ],
  },
  {
    title: "Specialise & Optimise",
    duration: "Weeks 13 – 16",
    focus: [
      "Graph theory: shortest paths, flows, tree DP",
      "Math: number theory, combinatorics",
      "Contest strategy and time management",
    ],
    actions: [
      "Participate in 8 virtual contests (Codeforces, AtCoder)",
      "Analyse rating changes, identify weak topics",
      "Build personal notebook with optimised snippets",
    ],
  },
  {
    title: "Compete & Iterate",
    duration: "Weeks 17 – 20+",
    focus: [
      "Consistent contest participation",
      "Problem selection heuristics",
      "Upsolve culture & reflection",
    ],
    actions: [
      "Compete weekly, upsolve every unsolved problem within 24 hours",
      "Maintain progress tracker and weekly retrospective",
      "Contribute explanations or hints to the community",
    ],
  },
];

const pillars = [
  {
    title: "Algorithmic Thinking",
    description:
      "Develop the habit of decomposing problems, outlining invariants and validating edge cases before coding.",
    points: [
      "Use pen-and-paper dry runs",
      "Practice deriving constraints-based bounds",
      "Catalogue patterns and recognise variants quickly",
    ],
  },
  {
    title: "Implementation Speed",
    description:
      "Write clean, bug-resistant code under pressure by leveraging templates, debugging checklists and practice drills.",
    points: [
      "Segment practice into speed rounds (20–30 mins)",
      "Refine personal snippets for STL/algorithms",
      "Conduct post-contest bug autopsies",
    ],
  },
  {
    title: "Knowledge Depth",
    description:
      "Systematically expand toolset across graphs, DP, maths, geometry, strings, bitmasks and advanced data structures.",
    points: [
      "Rotate topics weekly to prevent plateau",
      "Summarise each new concept immediately",
      "Revisit tough problems after 2 weeks",
    ],
  },
  {
    title: "Mindset & Habits",
    description:
      "Build resilience and discipline with deliberate practice, wellness routines and consistent reflection.",
    points: [
      "Track mood, sleep and focus pre/post contests",
      "Use spaced repetition for theory flashcards",
      "Set monthly stretch goals; celebrate progress",
    ],
  },
];

const weeklyPlan = [
  {
    label: "Mon · Concept Sprint",
    focus: "Study new topic for 90 mins, summarise in your notebook.",
    tasks: "Video/course learning + 2 guided problems.",
  },
  {
    label: "Tue · Problem Drill",
    focus: "Solve 3 problems at target difficulty.",
    tasks: "Timebox to 45 mins each; upsolve immediately after.",
  },
  {
    label: "Wed · Review & Gaps",
    focus: "Retro on failed attempts and re-implement key solutions.",
    tasks: "Document mistakes, add flashcards, re-solve from scratch.",
  },
  {
    label: "Thu · Contest Simulation",
    focus: "Virtual contest in 90-120 min window.",
    tasks: "Follow strict contest rules and record pacing stats.",
  },
  {
    label: "Fri · Upsolve Marathon",
    focus: "Spend 2 hrs on unsolved problems + editorial deep-dives.",
    tasks: "Write post-mortem for each, share insights with peers.",
  },
  {
    label: "Weekend · Flex",
    focus: "Live contest + optional team practice or theory deep-dive.",
    tasks: "Reflect on weekly KPIs; plan next week's adjustments.",
  },
];

const resourceBlocks = [
  {
    title: "Problem Archives",
    description:
      "Daily practise from curated ladders and official rounds accelerates rating growth.",
    links: [
      { label: "Codeforces Ladders", url: "https://codeforces.com/problemset" },
      { label: "AtCoder Past Contests", url: "https://atcoder.jp/contests/archive" },
      { label: "USACO Guide", url: "https://usaco.guide" },
    ],
  },
  {
    title: "Learning References",
    description:
      "Combine short theory refreshers with deep dives into editorial solutions.",
    links: [
      { label: "CP Algorithms", url: "https://cp-algorithms.com" },
      { label: "Neetcode Roadmap", url: "https://neetcode.io/roadmap" },
      { label: "Errichto Playlists", url: "https://www.youtube.com/c/Errichto" },
    ],
  },
  {
    title: "Tracking & Communities",
    description:
      "Stay accountable with analytics dashboards and active peer discussions.",
    links: [
      { label: "CLIST Contest Calendar", url: "https://clist.by" },
      { label: "CF Insight", url: "https://cftracker.netlify.app" },
      { label: "r/CompetitiveProgramming", url: "https://www.reddit.com/r/CompetitiveProgramming/" },
    ],
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.heroBadge}>Competitive Programming Roadmap</span>
          <h1 className={styles.heroTitle}>
            Launch a focused 5‑month journey to rating breakthroughs.
          </h1>
          <p className={styles.heroDescription}>
            Master algorithms, sharpen implementation, and build routines that stick. This roadmap
            blends structured phases, weekly rhythms, and proven resources so you can progress from
            fundamentals to confident contest performance.
          </p>
          <div className={styles.ctaGroup}>
            <a className={styles.ctaPrimary} href="#phases">
              View the Phase Plan
            </a>
            <a
              className={styles.ctaSecondary}
              href="https://docs.google.com/spreadsheets/d/1IkaRoadmapTemplate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Duplicate Progress Tracker
            </a>
          </div>
        </header>

        <section id="phases" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Milestone Timeline</h2>
            <p className={styles.sectionSubtitle}>
              Follow sequential phases or condense timelines based on prior experience. Each stage
              ends with a recap, concept checklist, and contest performance review.
            </p>
          </div>
          <div className={styles.timeline}>
            {phases.map((phase, index) => (
              <article key={phase.title} className={styles.timelineItem}>
                <div className={styles.timelineBadge}>{index + 1}</div>
                <div className={styles.timelineBody}>
                  <div className={styles.timelineDuration}>{phase.duration}</div>
                  <h3 className={styles.timelineTitle}>{phase.title}</h3>
                  <div className={styles.tagList}>
                    {phase.focus.map((item) => (
                      <span key={item} className={styles.tag}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <ul>
                    {phase.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Four Pillars of Progress</h2>
            <p className={styles.sectionSubtitle}>
              Balance conceptual depth with execution speed. Treat every contest as a feedback loop
              across these pillars and adapt weekly focus accordingly.
            </p>
          </div>
          <div className={styles.skillsGrid}>
            {pillars.map((pillar) => (
              <article key={pillar.title} className={styles.skillCard}>
                <h3 className={styles.skillTitle}>{pillar.title}</h3>
                <p className={styles.skillDescription}>{pillar.description}</p>
                <div className={styles.skillList}>
                  {pillar.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Weekly Operating System</h2>
            <p className={styles.sectionSubtitle}>
              Repeatable cadence keeps you consistent. Reserve 12–15 focused hours each week and
              protect at least one full rest block to avoid burnout.
            </p>
          </div>
          <div className={styles.planGrid}>
            {weeklyPlan.map((slot) => (
              <article key={slot.label} className={styles.planCard}>
                <h3 className={styles.planTitle}>{slot.label}</h3>
                <span className={styles.planFocus}>{slot.focus}</span>
                <p>{slot.tasks}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Resource Stack</h2>
            <p className={styles.sectionSubtitle}>
              Mix curated archives, theory explainers, and accountability tools. Whenever you feel
              stuck, revisit fundamentals and re-learn through teaching.
            </p>
          </div>
          <div className={styles.resourceGrid}>
            {resourceBlocks.map((resource) => (
              <article key={resource.title} className={styles.resourceCard}>
                <h3 className={styles.resourceTitle}>{resource.title}</h3>
                <p className={styles.resourceDescription}>{resource.description}</p>
                <div className={styles.resourceLinks}>
                  {resource.links.map((link) => (
                    <a
                      key={link.url}
                      className={styles.resourceLink}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Contest Mindset Checklist</h2>
            <p className={styles.sectionSubtitle}>
              Integrate these practices into every preparation cycle to convert knowledge into
              rating momentum.
            </p>
          </div>
          <ul className={styles.tipsList}>
            <li>
              Start contests with a 3-minute scan: classify problems by perceived difficulty and
              lock in an initial solve order.
            </li>
            <li>
              Track both absolute solve time and implementation time. Large gaps typically signal
              missing templates or sloppy debugging.
            </li>
            <li>
              Upsolve is non-negotiable: aim to understand editorial solutions well enough to code
              them blind within 24 hours.
            </li>
            <li>
              After each round, log reflections: mind-state, error patterns, pace, and next focus.
              Share takeaways with study partners.
            </li>
            <li>
              Protect recovery. Sleep, hydration, and light physical activity sharpen focus far more
              than extra late-night problem attempts.
            </li>
          </ul>
        </section>

        <footer className={styles.footer}>
          Iteration beats intensity. Show up weekly, extract lessons, and your rating will follow.
        </footer>
      </div>
    </div>
  );
}
