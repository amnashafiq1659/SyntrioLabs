import Image from "next/image";

type Tool = { name: string; icon: string };

const tools: Tool[] = [
  { name: "Vercel", icon: "vercel" },
  { name: "Figma", icon: "figma" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Python", icon: "python" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Docker", icon: "docker" },
  // { name: "OpenAI", icon: "openai" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
];

function Pill({ tool }: { tool: Tool }) {
  return (
    <span className="pill">
      <Image
        className="pill-icon"
        src={`https://cdn.simpleicons.org/${tool.icon}/567C8D`}
        alt={`${tool.name} logo`}
        width={20}
        height={20}
        loading="lazy"
        unoptimized
      />
      {tool.name}
    </span>
  );
}

function Marquee({ list, reverse }: { list: Tool[]; reverse?: boolean }) {
  // Duplicate the list exactly as the original ([...list, ...list]) so the
  // -50% keyframe produces a seamless loop.
  const doubled = [...list, ...list];
  return (
    <div className={`marquee${reverse ? " marquee-reverse" : ""}`}>
      {doubled.map((t, i) => (
        <Pill key={`${t.icon}-${i}`} tool={t} />
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="techstack" id="techstack">
      <div className="marquee-stack">
        <div className="marquee-wrap">
          <Marquee list={tools} />
        </div>
      </div>
    </section>
  );
}
