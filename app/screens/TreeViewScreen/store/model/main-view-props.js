var TreeViewProps = (function () {
    /**********************Variable Declaration**************************/
    var aPostData = [];
    /**********************All Getter and Setter*************************/
    return {
        getPostData: function () {
            return aPostData;
        },

        setPostData: function (_oData) {
            aPostData = _oData;
        }

    }
})();

module.exports = TreeViewProps;