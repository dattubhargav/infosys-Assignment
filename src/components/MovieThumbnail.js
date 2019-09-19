import React from "react";
import { FormattedMessage } from "react-intl";

const MovieThumbnail = ({ handleModifyMovies, eachListItem, hoverMessage }) => {
  const { img, title } = eachListItem
  return (
    <div className="thumbnail-cont">
      <img alt={`${title} poster`} src={img} className="thumbnail" />
      <button className="btn" onClick={() => handleModifyMovies(eachListItem)}>
        <FormattedMessage id={hoverMessage} />
      </button>
    </div>
  );
}
export default MovieThumbnail;
