githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  var searchResource = $resource('https://api.github.com/search/users');

  $scope.doSearch = function() {
    if($scope.searchTerm != ""){
      $scope.searchResult = searchResource.get({
        q: $scope.searchTerm
      });
    };
  };
});
