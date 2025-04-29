import PropTypes from "prop-types";

function Header({
  content,
  type = "title",
  detailTitle = null,
  detailDesc = null,
}) {
  return (
    <div className={`${content}__header`}>
      <div className={`${content}__header__title`}>
        {type === "title" ? content : detailTitle}
      </div>
      <div className={`${content}__header__preface`}>
        {type === "title" ? (
          <>
            <span>Believing in smart ideas and branding experiences.</span>
            <span>Good design is as less design as possible.</span>
          </>
        ) : (
          <span>{detailDesc}.</span>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Header;
