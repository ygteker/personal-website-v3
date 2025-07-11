interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
}

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-border p-4 hover:shadow transition-all"
    >
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2">{description}</p>
    </a>
  );
}

