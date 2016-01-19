// feedreader.js
// tests for P6 FEND
// All tests contained herein are authored by James Fehr

$(function() {
  // Tests for the RSS Feeds
  describe('RSS Feeds', function() {
	// Checks to see that allFeeds is defined and that it contains something
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    // Loops through allFeeds to check for a url for each item
    // Also checks to make sure the url is not empty
    it('should have a url for each feed', function(){
      for (var x = 0;x < allFeeds.length; x++){
        expect(allFeeds[x].url).toBeDefined();
        expect(allFeeds[x].url).not.toBe('');
      }
    });
		// Loops through allFeeds to check for a name for each item
    // Also checks to make sure the name is not empty
    it('should have a name for each feed', function(){
      for (var y = 0;y < allFeeds.length; y++){
        expect(allFeeds[y].name).toBeDefined();
        expect(allFeeds[y].name).not.toBe('');
      }
    });
  });
	// Tests for The Menu
  describe('The Menu', function(){

    // Check to see if the menu is hidden by default
    it('should be hidden by default', function(){
		// When the menu is hidden the body has a class of menu-hidden, when it is visible the class is toggled off
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    // Check to see if the menu button shows and hides the menu
    it('should show when menu button is clicked and hide when clicked again', function(){
		  // Trigger Menu button
      $('.menu-icon-link').trigger('click');
			// Checks if the menu is visible
      expect($('body').hasClass('menu-hidden')).toBe(false);
			// Trigger Menu Button a second time
      $('.menu-icon-link').trigger('click');
			// Check to see if menu is hidden
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

		// Compares number of menu items to the number of items in the allFeeds array, the number of items shold be the same
    it('should have a menu item for each item in the allFeeds array', function(){
      expect($('.feed-list li').length).toBe(allFeeds.length);
    });

  });
		// Test for Initial Entries
  describe('Initial Entries', function(){
    // Tests for elements in the feed container after loadFeed finishes
    // Test is for an async function
    beforeEach(function(done){
      loadFeed(0, done);
    });
    // Feed container must contain more than one entry
    it('should have at least a single entry element within the .feed container', function(){
      var feedContainer = $('.feed .entry');
      expect(feedContainer.length).toBeGreaterThan(0);
    });

  });
	// Tests for New Feed Selection
  describe('New Feed Selection', function(){
    // Check for content change when loading the new feeds
    // loadFeed is an async function so needs beforeEach to get values

    var firstFeed,
        secondFeed;
    var test = '';

    // Run the async function 3 times, once to get val 1, once to get val 2 and once to reset content loaded to initial values
    beforeEach(function(done) {
      // Load secondary feed
      loadFeed(1, function() {
        // Capture secondary feed
        secondFeed = $('.feed .entry').text();
        // Load first feed
        loadFeed(0, function(){
          // Capture first feed
          firstFeed = $('.feed .entry').text();
          done();
        });
      });
    });

    // Checks content in the entries containers ensuring content changes
    it('should change the content for the subsequent feeds', function() {
      expect(secondFeed).not.toEqual(firstFeed);
    });
    // Checks for empty feeds
    it('should have something in the feed', function() {
      expect(firstFeed).not.toEqual('');
      expect(secondFeed).not.toEqual('');
    });
  });

}());
