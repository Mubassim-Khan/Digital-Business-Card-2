export default function Interests() {
  const techStack = [
    {
      id: 1,
      tech: "HTML"
    },
    {
      id: 2,
      tech: "Tailwind CSS"
    },
    {
      id: 3,
      tech: "JavaScript"
    },
    {
      id: 4,
      tech: "React.js"
    },
    {
      id: 5,
      tech: "Next.js"
    },
    {
      id: 6,
      tech: "Node.js"
    },
    {
      id: 7,
      tech: "MongoDB"
    },
    {
      id: 8,
      tech: "MySQL"
    },
    {
      id: 9,
      tech: "Typescript"
    }
  ]
  return (
    <div className="container">
      <div className="interests">
        <h4 className="interests-title">Interests</h4>
        <ul className="interests-paragraph">
          {techStack.map((techs, id) => {
            return (
              <li className="interests-content" key={id}>
                {techs.tech}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}