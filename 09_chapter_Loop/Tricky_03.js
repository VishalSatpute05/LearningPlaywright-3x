let i = 3, count = 0;
do {
  count++;
} while (i-- > 0);
console.log(count + " " + i);

/*Initial state: i = 3, count = 0

A do...while loop always runs the body at least once, and the condition is checked after each iteration — so let's trace it carefully, especially the tricky i-- (post-decrement).

Key rule for i--: it returns the current value of i first, then decreases i by 1 after.

Iteration 1
Body: count++ → count = 1
Condition check: i-- > 0 → uses current i = 3 → 3 > 0 → true → then i becomes 2
Loop continues (condition was true)
Iteration 2
Body: count++ → count = 2
Condition check: i-- > 0 → uses current i = 2 → 2 > 0 → true → then i becomes 1
Loop continues
Iteration 3
Body: count++ → count = 3
Condition check: i-- > 0 → uses current i = 1 → 1 > 0 → true → then i becomes 0
Loop continues
Iteration 4
Body: count++ → count = 4
Condition check: i-- > 0 → uses current i = 0 → 0 > 0 → false → loop stops
Final state: count = 4, i = -1
*/
