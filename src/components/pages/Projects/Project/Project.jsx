import "./Project.css";

export const Project = ({ pro }) => {
  return (
    <div className="project">
      <div className="project__name">
        <h2> {pro.header} </h2>
      </div>
      <div className="project__description">
        <p title="220 chracters">{pro.desc}</p>
      </div>

      <div className="project__image">
        <img src={pro.imageUrl} alt={pro.header} />
      </div>
      <div className="project__tags">
        {pro.tags.map((tag, index) => (
          <button key={index}> {tag} </button>
        ))}
      </div>

      <a
        href={pro.liveLink}
        target="_blank"
        rel="noreferrer"
        className="project__visit"
      >
        <div className="project__visit">
          <button>Visit</button>
        </div>
      </a>
    </div>
  );
};

export default Project;
