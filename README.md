## GitHub Profiles (Angular)

Single page web app to search for GitHub profiles as you type, and return info about that user.

Built following Makers Academy Week 6 Tutorial, built using Angular and tested with Karma.

### Tools

* Javascript
* Angular
* Bower
* GitHub API
* Node

### Learning

* Starting to get used to the MEAN stack
* Two-way data-binding
* Dependency injection

### Code Example

````js
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
    ````
