var MockDataForView = require('../../tack/mock-data-for-main-view');
var MockDataFarPosts = require('../../tack/posttexts');

var TreeViewAppData = (function () {

  return {
    getViewData: function () {
      return MockDataForView;
    },
    getMockDataForPosts: function(){
      return MockDataFarPosts;
    },
    toJSON: function () {
      return {
        treeViewData: MockDataForView
      };
    }

  }

})();

module.exports = TreeViewAppData;