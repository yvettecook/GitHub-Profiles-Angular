describe("GitUserSearchController", function() {
  beforeEach(module('GitUserSearch'));

  var scope, ctrl;


  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('GitUserSearchController', {
      $scope: scope
    });
  }));

  it('should initialise with an empty search term and result', function(){
    expect(scope.searchResult).toBeUndefined();
    expect(scope.searchTerm).toBeUndefined()
  })

  describe("When searching for a user", function() {

    var $httpBackend;
    beforeEach(inject(function($httpBackend){
        httpBackend = $httpBackend
        httpBackend
          .when("GET", "https://api.github.com/search/users?q=yvettecook")
          .respond({
            items: items
          });
    }));

    var items = [{
        "login": "yvettecook",
        "avatarURL": "https://avatars2.githubusercontent.com/u/6195662?v=3&s=460",
        "html_url": "https://github.com/yvettecook"
      }];

    it('should display search results', function() {
      scope.searchTerm = "yvettecook";
      scope.doSearch();
      scope.$apply();
      httpBackend.flush();
      expect(scope.searchResult.items).toEqual(items)
    });

  });

});
