# Big O

Big O time is the language and metric we use to describe the efficiency of algorithms.
Every developer should master this concept.

### Time complexity

This is what the concept of asymptotic runtime, or Big O time, means.

There are many runtimes, for instance:

O(1)

O(N)

O(N<sup>2</sup>)

O(log N)

O(N log N)

O(2<sup>n</sup>)


You can have multiple variables in your runtime. For example, the time to paint a fence that's W meters wide and H meters high could be described by O(WH). If you need P layers of paint, then you could say that time is O(WHP).

### Space complexity

Time is not the only things that matters in an algorithm. We might also care about the amount of memory ––or space––required by an algorithm.

Space complexity is a parallel concept to time complexity.
For instance, if we need to create an array of size N, this will require O(N) space. If we need a two-dimensional NxN, this will require O(N<sup>2</sup>) space.

**Drop the Constants**

Big O just describes the rate of increase. For this reason, we drop the constants in realtime. An algorithm that one might have described as O(2N) is actually O(N).

**Drop the Non-Dominant Terms**

You should drop the non-dominant terms.

O(N<sup>2</sup> + N) ––> O(N<sup>2</sup>)

O(N + log N) ––> O(N)

O(5*2<sup>n</sup> + 1000N<sup>100</sup>) ––> O(2<sup>n</sup>)

Following graph depicts the rate of increase for some of the common Big O times.

![](images/bigOtime_graph.png)

As we can see, O(x<sup>2</sup>) is much worse than O(x), but it's not nearly as bad as O(2<sup>x</sup>) or O(x!),
There are lots of runtimes worse than O(x!) too, such as O(x<sup>x</sup>) or O(2<sup>x</sup> * x!)

**Multi-Part algorithms: Add vs. Multiply**

Suppose you have an algorithm that has 2 steps. When do you multiply the runtimes and when do you add them?

Add the runtimes: O(A + B)

    for (int a: arrayA) {
      print(a);
    }

    for (int b: arrayB) {
      print(b);
    }

Multiply the runtimes: O(A*B)

    for (int a: arrayA) {
      for (int b: arrayB) {
        print(a + "," + b);
      }
    }

In other words:

If your algorithm is in the form *"do this, then, when you're all done, do that"*, then you add the runtimes.

If your algorithm is in the form: *"do this for each time you do that"*, then you multiply the runtimes.