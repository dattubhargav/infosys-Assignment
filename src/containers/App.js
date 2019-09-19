import React, { Component } from "react";

//redux
import { connect } from "react-redux"

//styles
import "../styles/App.css";

//components
import MyListContainer from "./MyList.container"

//Actions
import { requestAPIResponse } from "../actions/apiActions"
import { removeFromMylist, addToMylist } from "../actions/userActions"

//Assets
import { BRAND_LOGO } from "../images/branding";
import { FormattedMessage, injectIntl } from "react-intl";

class App extends Component {
  componentDidMount() {
    this.props.requestAPIResponse()
  }

  handleRemoveFromMyList(removeItem) {
    let newMyList = []
    let { recommendations, mylist } = this.state
    mylist.forEach((eachItem) => {
      if (removeItem.id !== eachItem.id) {
        newMyList.push(eachItem)
      } else {
        recommendations.push(eachItem)
      }
    })

    this.setState({
      mylist: newMyList
    })
  }

  handleAddItemToMyList(addItem) {
    let newRecommendation = []
    let { recommendations, mylist } = this.state
    recommendations.forEach((eachItem) => {
      if (addItem.id !== eachItem.id) {
        newRecommendation.push(eachItem)
      } else {
        mylist.push(eachItem)
      }

      this.setState({
        recommendations: newRecommendation,
        mylist
      })
    })
  }


  render() {
    const { mylist, recommendations, removeFromMylist, addToMylist, intl: { formatMessage } } = this.props
    return (
      <div className="App">
        <div className="header">
          <img alt="netflix logo" className="netflix-txt" src={BRAND_LOGO} />
        </div>
        <div>
          <span className="header-text">
            <FormattedMessage id="MY_LIST" />
          </span>
        </div>
        <MyListContainer mylist={mylist} hoverMessage={formatMessage({id: "Remove"})} handleModifyMovies={(removeMovie) =>removeFromMylist(removeMovie)} />
        <div className="header-text">
          <span className="header-text">
            <FormattedMessage id="RECOMMENDATIONS" />
          </span>
        </div>
        <MyListContainer mylist={recommendations} hoverMessage={formatMessage({ id: "Add" })} handleModifyMovies={(addMovie) => addToMylist(addMovie)} />
      </div>
    );
  }
}

const mapDispatchToProps =  ({
    requestAPIResponse,
    addToMylist,
    removeFromMylist,
})

const mapStateToProps = ({ moviesReducer: { mylist, recommendations}}) => ({
    mylist,
    recommendations
})

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(App))
