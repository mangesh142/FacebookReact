var React = require('react');
var EventBus = require('../../../libraries/eventdispatcher/EventDispatcher');


var oEvents = {
  HANDLE_CHILD_VIEW_NODE_CLICKED: 'handle_child_view_node_clicked',
  HANDLE_CHILD_VIEW_TEXT_VALUE_CHANGED: 'handle_child_view_text_value_changed',
  HANDLE_CHILD_VIEW_NAME_CLICKED: 'handleChildViewNameClicked'
};

var TreeView = React.createClass({

  handleClick: function () {
    console.log('Hello');
    var oData = {id: 23, name: 'xyz'};
    EventBus.dispatch(oEvents.HANDLE_CHILD_VIEW_NODE_CLICKED, this, oData);
  },

  getView: function () {
    var aData = this.props.data;
    var aViews = [];
    for (var iIndex = 0; iIndex < aData.length; iIndex++) {
      var oData = aData[iIndex];
      aViews.push(<div className="data" onClick={this.handleNameOnClick.bind(this, oData)}>{oData.name}</div>);
    }
    return aViews;
  },

  handleNameOnClick: function (oSelectedValue) {
    EventBus.dispatch(oEvents.HANDLE_CHILD_VIEW_NAME_CLICKED, this, oSelectedValue);
  },

  handleOnChange: function (oEvent) {
    var sNewValue = oEvent.target.value;
    EventBus.dispatch(oEvents.HANDLE_CHILD_VIEW_TEXT_VALUE_CHANGED, this, sNewValue);
  },


  render: function () {
    console.log("Child View Called!!");
    console.log(this.props.data);
    var oSelectedValue = this.props.selectedValue;
    return (
        <div className="treeView">
          <input type="text" className="test" onChange={this.handleOnChange}/>
          <div className="clickMe" onClick={this.handleClick}>Click</div>
          {this.getView()}

          <div className="display">{'Hello ' + oSelectedValue.name}</div>
        </div>
    );
  }
});

module.exports = {
  view: TreeView,
  events: oEvents
};