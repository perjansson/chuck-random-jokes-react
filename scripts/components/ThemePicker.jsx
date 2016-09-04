import React, { Component } from 'react';

export default class ThemePicker extends Component {

  componentDidMount() {
    setTimeout(() => this.props.onShowThemePicker(), this.props.showAfterSeconds * 1000);
  }

  render() {
    return (
      <div>
        { this.props.show
          ? <div className="themePicker animated bounceInUp">
              { this.props.currentlySelectedTheme === 'WHITE'
                ? <div onClick={() => this.props.onSelectTheme('BLACK')}>Change to BLACK theme?</div>
                : <div onClick={() => this.props.onSelectTheme('WHITE')}>Change to WHITE theme?</div>
              }
          </div>
          : null
        }
      </div>
    )
  }

}
