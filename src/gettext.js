import React, { Component } from "react";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment:
        "He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence.She oppose at thrown desire of no..",
    };
    this.onClickMakeBold = this.onClickMakeBold.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickMakeBold}>Bold</button>
        <div>
          <textarea ref="textarea" onMouseDown={this.onClickMakeBold}>
            {this.state.comment}
          </textarea>
        </div>
      </div>
    );
  }

  onClickMakeBold() {
    console.log(getSelectionText());
  }
}
function getSelectionText() {
  var text = "";

  if (window.getSelection) {
    text = window.getSelection().toString();
  }
  if (text !== "") {
    return text;
  } else {
    return null;
  }
}

export default TextArea;
