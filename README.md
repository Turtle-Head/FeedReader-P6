# feedreader.js

## P6 FEND

author: James Fehr

email: fehr.james@gmail.com

## Getting started

Load index.html into your favorite web browser, tests
will load as they complete

## Tests for the RSS Feeds

### Checks to see that allFeeds is defined

#### URL tests

-   Loops through allFeeds to check for a url for each item
-   Also checks to make sure the url is not empty

#### Name tests

-   Loops through allFeeds to check for a name for each item
-   Also checks to make sure the name is not empty

## Tests for The Menu

-   Check to see if the menu is hidden by default

### Check to see if the menu button shows and hides the menu

-   Checks if the menu is visible after toggle
-   Check to see if menu is hidden after toggle

### Menu Items

-   Compares number of menu items to the number of items in the allFeeds array,
the number of items should be the same

## Tests for Initial Entries

### Tests for elements in the feed container

-   Test is for an async function
-   Feed container must contain more than one entry

## Tests for New Feed Selection

### Check for content change when loading the new feeds

-   Checks for content changes changes between first and second feed
-   Checks for blank entries

### June 5,2025
-    Refactored Feedreader to work functionally using React.js as the foundational element

