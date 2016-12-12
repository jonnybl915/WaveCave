import React, {Component, PropTypes} from 'react'
import FilterListComponent from 'filter-list.component.js'

export default class FilterCarouselComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return <div className="filterCarousel">
              <div>{FilterListComponent}</div>
           </div>
  }

}
