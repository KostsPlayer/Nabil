import Header from "../../components/header";
import mainImage from "/pexels-valeriia-harbuz-2161259-29343080.jpg";
import works from "../../data/works.json";
import jobdesks from "../../data/jobdesks.json";
import Form from "../../components/form";

function About() {
  return (
    <div className="about">
      <Header content="about" />
      <figure className="about__main__image">
        <img src={mainImage} alt="image's about page" />
      </figure>
      <div className="about__concept">
        <div className="about__concept__preface">Concept</div>
        <div className="about__concept__title">
          We create concepts in an era of creative progress.
        </div>
        <div className="about__concept__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at
          sit doloribus? Consequatur laborum mollitia vitae sed earum
          praesentium. Quos ut blanditiis atque cum excepturi aspernatur,
          recusandae sit modi voluptate.
        </div>
      </div>
      <div className="about__gallery">
        <div className="about__gallery__card">
          <div className="images">
            {works
              .filter((item) => item.id < 3)
              .map((data) => {
                return (
                  <figure key={data.id}>
                    <img src={`/${data.mainImage}`} alt={data.name} />
                  </figure>
                );
              })}
          </div>
          <div className="text">
            <div className="text__title">Typography is key</div>
            <div className="text__desc">We're experts in lettering.</div>
          </div>
        </div>
        <div className="about__gallery__card">
          <div className="images">
            {works
              .filter((item) => item.id > 2)
              .map((data) => {
                return (
                  <figure key={data.id}>
                    <img src={`/${data.mainImage}`} alt={data.name} />
                  </figure>
                );
              })}
          </div>
          <div className="text">
            <div className="text__title">We've designed our office</div>
            <div className="text__desc">And you are very welcome.</div>
          </div>
        </div>
      </div>
      <div className="about__jobdesk">
        {jobdesks.map((data) => {
          return (
            <div className="about__jobdesk__item" key={data.id}>
              <div className="title">{data.name}</div>
              <span></span>
              <div className="desc">{data.desc}</div>
            </div>
          );
        })}
      </div>
      <div className="about__form">
        <div className="about__form__text">I love what i do</div>
        <Form />
      </div>
    </div>
  );
}

export default About;
