import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/header";
import works from "../../data/works.json";

function Detail() {
  const [work, setWork] = useState(null);
  const { workItem } = useParams();

  useEffect(() => {
    setWork(
      works.find((data) => {
        const workName = data.name.replace(/\s+/g, "-").toLowerCase();
        if (workName === workItem) {
          return data;
        }
      })
    );
  }, [workItem]);

  //   useEffect(() => {
  //     console.log(work);
  //   }, [work]);

  return (
    <div className="detail">
      <Header
        content="detail"
        type="detail"
        detailTitle={work?.name}
        detailDesc={work?.desc}
      />
      <figure className="detail__main__image">
        <img src={`/${work?.mainImage}`} alt={work?.name} />
      </figure>
      <div className="detail__gallery">
        {work?.gallery.map((image, index) => {
          return (
            <figure className="detail__gallery__item" key={index}>
              <img src={`/${image}`} alt={image} />
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default Detail;
