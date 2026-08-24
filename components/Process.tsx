type Step = { num: string; title: string; desc: string };

const steps: Step[] = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive deep into your business goals, user needs, and technical requirements to establish a clear picture.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We define the roadmap, technology stack, milestones, and success metrics for your project.",
  },
  {
    num: "03",
    title: "Design",
    desc: "We craft beautiful, user-centered interfaces with iterative prototyping and client feedback loops.",
  },
  {
    num: "04",
    title: "Development",
    desc: "Clean, well-documented code built with modern technologies and engineering best practices.",
  },
  {
    num: "05",
    title: "Testing",
    desc: "Rigorous QA, performance audits, security reviews, and user acceptance testing.",
  },
  {
    num: "06",
    title: "Launch",
    desc: "Seamless deployment with CI/CD pipelines, monitoring, and zero-downtime rollouts.",
  },
  {
    num: "07",
    title: "Support",
    desc: "Ongoing maintenance, feature updates, and dedicated technical support long after launch.",
  },
];

function Card({ step }: { step: Step }) {
  return (
    <div className="card">
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </div>
  );
}

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">HOW WE WORK</div>
          <h2>Our Development Process</h2>
          <p>
            Seven steps from idea to live product, built for transparency and
            results.
          </p>
        </div>
        <div className="timeline" id="timeline">
          <div className="grid-bg"></div>

          {steps.map((step, i) => {
            // Odd-indexed (0-based even) steps render the card on the left side;
            // the alternating pattern matches the original markup exactly.
            const cardOnLeft = i % 2 === 0;
            return (
              <div className="step reveal" key={step.num}>
                <div className="side">{cardOnLeft ? <Card step={step} /> : null}</div>
                <div className="connector">
                  <div className="line top"></div>
                  <div className="num">
                    <span>{step.num}</span>
                  </div>
                  <div className="line bottom"></div>
                </div>
                <div className="side left">
                  {!cardOnLeft ? <Card step={step} /> : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
