
type ProjectLinksProps = {
  githubUrl?: string
  demoUrl?: string
}

export default function ProjectLinks({
  githubUrl,
  demoUrl,
}: ProjectLinksProps) {
  return (
    <div>
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      )}

      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      )}
    </div>
  )
}
