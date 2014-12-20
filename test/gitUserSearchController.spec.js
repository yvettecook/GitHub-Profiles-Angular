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

    var items = [{
        "login": "yvettecook",
        "avatarURL": "https://avatars2.githubusercontent.com/u/6195662?v=3&s=460",
        "html_url": "https://github.com/yvettecook"
      }, {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
    }];

    it('should display search results', function() {
      scope.searchTerm = "hello";
      scope.doSearch();
      expect(scope.searchResult.items).toEqual(items)
    });
  });

});
