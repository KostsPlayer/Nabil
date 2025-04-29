import Header from "../../components/header";
import { Link } from "react-router-dom";
import works from "../../data/works.json";
// import horror from "../../assets/pexels-dadgrass-10018513.jpg";

function Work() {
  return (
    <div className="work">
      <Header content="work" />
      <div className="work__grid">
        {works.map((data) => {
          return (
            <Link
              className="work__grid__item"
              key={data.id}
              to={`/work/${data.name.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div className="content">
                <span className="material-symbols-outlined">
                  keyboard_backspace
                </span>
                <div className="content__name">{data.name}</div>
                <div className="content__type">{data.type}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
