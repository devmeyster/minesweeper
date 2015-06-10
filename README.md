/*# Challenge: Explode the Mines

There are bunch of mines in this field, and you are tasked with
exploding as many of them as you can.  The caveat is that you can
only explode one manually.  The mine you manually explode will set
off a chain reaction.  For any mine that explodes, all mines within
the blast radius of that mine will also explode.

### Your Mission

Write a program which will read in a mines file and
output the maximum number of mines you can explode.  Also output 
which mine you need to manually set off to explode this maximum 
number.  Since there may be multiple mines that blow up a maximal 
number of mines, you should output all the mines that do that.

### Requirements

Your program must...

* Read in the mine data from a text file (provided as challenge.txt)
* Output the maximum number of mines that can be exploded
* Output all mines that can be exploded to acheive this maximum number

Your program should...

* Have clean, easy to read code (pretend it's production ready)
* Be OO in nature (not just one long script)
* Be in a language you're comfortable with (we may ask you to extend it)

### Example

##### Input

Text file with space separated values.
Each line represents a single mine.
`x y blast_radius`

##### Output

The maximum number of mines that can be exploded.
All mines that can cause this maximum number of exploded mines, in x, y format.

For example, after running test.txt, your output should look as follows...

```
8
1 2
-32 40
10 15
-15 -15
-24 38
```

### Help Resources

You can, and should, use the following code...

```
# Measures whether or not (x2, y2) is within the blast_radius
# of (x1, y1) using the euclidean distance.

def within_blast_radius(x1, y1, blast_radius, x2, y2)
  ((x1 - x2) ** 2  +  (y1 - y2) ** 2) <= (blast_radius ** 2)
end */

