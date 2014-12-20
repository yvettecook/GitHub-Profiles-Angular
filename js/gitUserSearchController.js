githubUserSearch.controller('GitUserSearchController', function($scope) {


  $scope.doSearch = function() {
    $scope.searchResult = {
      items: [{
        "login": "yvettecook",
        "avatarURL": "https://avatars2.githubusercontent.com/u/6195662?v=3&s=460",
        "html_url": "https://github.com/yvettecook"
      }, {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"

      }]
    }
    console.log("Hello, world");
  };

});
