# Place Names

## LIVE APP!
[LIVE APP](http://bgrsquared.com/placeNames/)

## Motivation & Thanks

Based on [Moritz Stefaner's](https://twitter.com/moritz_stefaner) 
outstanding ([open sourced!](https://github.com/MoritzStefaner/ach-ingen-zell)) work, see
[here/live](http://truth-and-beauty.net/experiments/ach-ingen-zell/), we set out to create
an interactive example.

Thank you for your ideas & input, Moritz!

So we essentially added some buttons, input fields 
and [redux](https://github.com/rackt/redux) to the mix, and here we are.

## Features

* Switzerland and Germany
* Suffixes, Prefixes, and "Infixes" -- or in other words: 
You can set the beginning(s), ending(s) and part(s) of a name that shall be found
* You can link suffixes, prefixes and infixes by either AND or OR (within filter-groups, we 
use OR, as a word cannot possibly start with two different substrings)
* MouseOver the dots to see the results
* Use examples (at the bottom of the page) to access Moritz' examples
* ADVANCED MODE: write your own RegExp! Examples are provided (details below)

## Advanced Mode

In the advanced mode, you can write your own regular expressions.

Please omit the limiting slashes (/) from the text you enter.

This feature allows for very sophisticated pattern matching - see the examples provided!
(e.g. match all town ending on "-ach", but not on "-bach")

## What's next?

We still have some ideas for new features and performance improvements (currently, 
we did not work on that, we'd like to add ImmutableJS and shouldComponentUpdate checks).

We are also thinking about writing a quick Medium post on this app (features and structure) -
do let us know if you'd like such a thing!

Also, as always, any feedback is much appreciated!

[Find me here](https://twitter.com/ilikepiecharts)


All rights reserved (c) bgrsquared consulting AG 2016.