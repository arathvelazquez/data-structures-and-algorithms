# Big O

<sub>Extracted from Cracking the Coding Interview.</sub>

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

**Log N Runtimes**

We start off with an N-element array to search. Then, after a single step, we're down to n/2 elements. One more step, and we're down to n/4 elements. We stop when we either find the value or we're down to just one element.

Example:

<pre>
  search 9 within {1, 5, 8, 9, 11, 13, 15, 19, 21}
    compare 9 to 11 -> smaller
    search 9 within {1, 5, 8, 9}
      compare 9 to 8 -> bigger
      search 9 within {9, 11}
        compare 9 to 9
        return
</pre>

*The total runtime is then a matter of how many steps (dividing N by 2 each time) we can take until N becomes 1.*


|N| N divide by 2|
|:-:|:-:|:-:|:-:|
| 16 |  8 |
| 8 |  4 |
| 4 |  2 |
| 2 |  1 |

We could look at this in reverse (going from 1 to 16 instead of 16 to 1). How many times we can multiply 1 by 2 until we get N?

|N| N multiply by 2|
|:-:|:-:|:-:|:-:|
| 1 |  2 |
| 2 |  4 |
| 4 |  8 |
| 8 |  16 |

What is k in the expression 2<sup>k</sup> = N? This is exactly what *log* expresses.

2<sup>4</sup> = 16 ––> log<sub>2</sub> 16 = 4

log<sub>2</sub> N = k ––> 2<sup>k</sup> = N

When you see a problem where the number of elements in the problem space gets halved each time, that will likely be a O(log N) runtime.

This is the same reason why finding an element in a balanced binary search tree is O(lon N). With each comparison, we go either left or right. Half the nodes are on each side, so we cut the problem space in half each time.


**Recursive Runtimes**

    inf f(int ) {
      if (n <= 1) {
        return 1;
      }
      return f(n - 1) + f(n - 1)
    }

Let's derive the runtime by walking through the code. Suppose we call f(4). This calls f(3) twice. Each of those calls to f(3) calls f(2), until we get down to f(1).

![](images/recursiveRuntime.png)

Try to remember this pattern. When you have a **recursive function** that makes multiple calls, the runtime will often (but not always) look like O(branches<sup>depth</sup>), where branches is the number of of times each recursive call branches. In this case, this gives us O(2<sup>n</sup>).

The *space* complexity of this algorithm will be O(N). Although we have O(2<sup>n</sup>) nodes in the tree total, only O(N) exist at any given time. Therefore, we would only need to have O(N) memory available.

***Problems***

1- The following code computes the product of a and b. What is its runtime?

    int product(int a, int b) {
      int sum=0;
      for(int i=0; i < b; i++) {
        sum += a;
      }
      return sum;
    }

*Solution: O(b). The for loop just iterates through b.*

My notes:

Even if we are working with two values, the only time complexity is occurring for b.

---

2- The following code computes a<sup>b</sup>. What is its runtime?

    int power(int a, int b){
      if (b < 0) {
        return 0; // error
      } else if (b==0) {
        return 1
      } else {
        return a * power(a, b - 1)
      }
    }

*Solution: O(b). The recursive code iterates through b calls, since it substracts one at each level.*

My notes:

This one looks a little tricky for the recursive call, however, in this case is only decrementing thru b.

*Example:*

<pre>
    5<sup>5</sup> =
      5 * power(5, 4) *
        5 * power(5, 3) *
          5 * power(5, 2) *
            5 * power(5, 1) *
                5 * power(5, 0) =
                5 * 1 = 1 *
            5 * 5 = 25 *
          5 * 25 = 125 *
        5 * 125 = 625 *\
      5 * 625 = 3125
</pre>

---

3- The following code computes a % b. What is its runtime?

    int mod(int a, int b) {
      if (b <= 0) {
        return -1;
      }
      int div = a / b;
      return a - div * b;
    }

*Solution: O(1). It does a constant amount of work*

My notes:

The effort here is constant and the time complexity is not altered by the input. It's a single operation.

Example:

|Example|a|b|div|result (a - (div * 8 ))|
|:-:|:-:|:-:|:-:|:-:|
| 1 | 11 |  5 | int 2 | 1 |
| 2 | 14 |  5 | int 2 | 4 |
| 3 | 14 |  3 | int 4 | 2 |

---

4- The following code performs integer division. What is the runtime (assume a and b are both positives)?

    int div(int a, int b){
      int count = 0;
      int sum = b;
      while(sum <= a) {
        sum += b;
        count++;
      }
      return count;
    }

*Solution: O(a/b). The variable "count" will eventually equal a/b. The while loop iterates "count" times. Therefore, it iterates a/b times.*

My notes:

For this code, my first approach was O(a) since we have the *while* based on A but it's not constant. In this case, the runtime will be based on how many times we run the operation inside the *while* so, it will run a divided by b: O(a/b).

---

5- The following code computes the [integer] square root of a number. If the number is not a perfect square (there is no integer square root), then it returns -1. It does this by succesive guessing. If n is 100, it first guesses 50. Too high? Try something lower – halfway between 1 and 50. What is its runtime?

    int sqrt(int n) {
      return sqrt_helper(1, n, 1);
    }

    int sqrt_helper(int n, int min, int max) {
      if (max < min) {
        return -1;
      }

      int guess = (min + max) / 2;
      if (guess * guess === n) {
        return guess;
      } else if (guess * guess < n) { // too low
        return sqrt_helper(n, guess + 1, max); // try higher
      } else { // too high
        return sqrt_helper(n, min, guess -1); // try lower
      }
    }

*Solution: O(log N). This algorithm is essentially doing a binary search to find the sqaure root. Therefore, the runtime is O(log N)*

---

6- The following code computes the [integer] square root of a number. If the number is not a perfect square (there is no integer square root), then it returns -1. It does this by trying to increasingly large numbers until it finds the right value (or is too high). What is its runtime?

    int sqrt(int n) {
      for (int guess = 1; guess * guess <= n; guess++) {
        if (guess * guess === n ) {
          return guess;
        }
      }
      return -1;
    }

*Solution: O(sqrt(n)). This is just a straightforward loop that stops when "guess * guess > n" (or, in other words, when "guess > sqrt(n)" ).*

---

7- If a binary search tree is not balanced, how long might it take (worst case) to find an element in it?

*Solution: O(n), where n is the number of nodes in the tree. The max time to find an element is the depth tree. The tree could be a straight list downwards and have depth n.*

---

8- You are looking for a specific value in a binary tree, but the tree is not a binary search tree. What is the time complexity of this?

*Solution: O(n). Without any ordering property on the nodes, we might have to search through all the nodes.*

---

9- The *appendToNew* method appends a value to an array by creating a new, longer array and returning this longer array. You've used the *appendToNew* method to create a *copyArray* function that repeatedly calls *appendToNew*. How long does copying an array take?

    int[] copyArray(int[] array) {
      int[] copy = new int[0]
      for (int value: array) {
        copy = appendToNew(copy, value);
      } 
      return copy;
    }

    int[] appendToNew(int[] array, int value) {
      // copy all elements over the new array
      int[] bigger = new int[array.length + 1];
      for (int i = 0; i < array.length; i++) {
        bigger[i] = array[i];
      }

      // add new element
      bigger[bigger.length -1] = value;
      return bigger;
    }

*Solution: O(n<sup>2</sup>), where n is th number of elements in the array. The first call to appendToNew takes 1 copy. The second call takes 2 copies. The third call takes 3 copies. And so on. The total time will be the sum of 1 through n, which is O(n<sup>2</sup>).*

---

10- Code sums the digits in a number. What is its big O time?

    int sumDigits(int n) {
      int sum = 0;
      int n = 100;
      while (n > 0) {
        sum += n % 10;
        n /= 10;
      }

      return sum;
    }

*Solution: O(log n). The runtime will be the number of digits in the number. A number with d digits can have a value up to 10<sup>d</sup>. If n = 10<sup>d</sup>, then d = = log n. Therefore, the runtime is O(log n).*

---

11- The following code prints all strings of length K where the characters are in sorted order. It does this by generating all strings of length K and then checking if each is sorted. What is its runtime?

    int numChars = 26;

    void printSortedStrings(int remaining) {
      printSortedStrings(remaining, "");
    }

    void printSortedStrings(int remaining, String prefix) {
      if (remaining === 0) {
        if (isInOrder(prefix)) {
          System.out.println(prefix);
        }
      } else {
        for (int i = 0; i < numChars; i++) {
          char c = ithLetter(i);
          printSortedStrings(remaining -1, prefix + c);
        }
      }
    }

    boolean isInOrder(String s) {
      for(int = 1; i < s.length(); i++) {
        int prev = ithLetter(s.charAt(i - 1));
        int curr = ithLetter(s.charAt(i));
        if (prev >  curr) {
          return false;
        }
      }
      return true;
    }

    char ithLetter(int i){
      return (char) ( ( (int) 'a') + i);
    }

*Solution: O(kc<sup>k</sup>), where k is the length of the string and c is the number of characters in the alphabet. It takes O(c<sup>k</sup>) time to generate each string. Then, we need to check that each of these is sorted, which takes O(k) time.*

---

12- The following code computes the intersection (the number of elements in common) of two arrays. It assumes that neither array has duplicates. It computes the intersection by sorting one array (array b) and then iterating through array *a* checking (via binary search) if each value is in *b*. What is its runtime?

    int intersection(int[] a, int[] b) {
      mergeSort(b);

      int intersect = 0;

      for (int x: a) {
        if (binarySearch(b, x) >= 0) {
          intersect++;
        }
      }

      return intersect;
    }

*Solution: O( b log b + a log b). First, we have to sort array b, which takes O(b log b) time. Then, for each element in a, we do binary search in O(log b) time. The second part takes O(a log b) time.*

Fundamentally, Big O is an equation that expresses how the runtime changes, hot it scales.

References:

Big O Notation: https://www.youtube.com/watch?v=v4cd1O4zkGw
