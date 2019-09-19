import React from "react";
import MovieThumbnail from "../components/MovieThumbnail"
import { FormattedMessage, injectIntl } from "react-intl";

const MyListContainer = ({ mylist, hoverMessage, handleModifyMovies, intl: { formatMessage } }) => {
  return (
    <>
      {
        !mylist.length ?
          <span className="no-items-text">
            <FormattedMessage id={hoverMessage === "Remove" ? "EMPTY_MY_LIST_MESSAGE" : "EMPTY_RECOMMENDATIONS_MESSAGE"} />
          </span> :
          <div className="main-list-cont">
            {
              mylist.map(eachItem => {
                return (
                  <div className="list-cont" key={eachItem.id}>
                    <MovieThumbnail hoverMessage={formatMessage({ id: hoverMessage })} eachListItem={eachItem} handleModifyMovies={removeItem => handleModifyMovies(removeItem)} />
                  </div>
                )
              })
            }
          </div>
      }
    </>
  )
}

export default injectIntl(MyListContainer)
