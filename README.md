# Segmented Display

Goal is to find a solution in the lowest number of bytes possible. Current state: 132 bytes.

`source.js` contains the code as hand-written by me. `minified.js` is the uglified version. To run it, simply copy/paste the contents of `minified.js` into your browser's console.

The original challenge, as posed by @johannesnagl:

> Think of a digital clock using the 24-hour format. The clock consists of 4 [Seven-segment displays](https://en.wikipedia.org/wiki/Seven-segment_display). Two for the hour. Two for the minute. All displays are visible all the time (1:00 would show up as 01:00).
>
> Every display consists of multiple hidden/visible segments. The digit “1” has two visible segments. The digit “2" has 5 visible segments. > The digit “7” has 3 visible segments.
>
> Write a program (VbSript, … just kidding, pick whatever you want) to solve the following task:
>
> Print out the time of the day that has the most visible segments. Only valid times are allowed. (40:89 is not a valid time)
