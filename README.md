# Algorithm
Some implementation of Algorithm concept like
insertion sort
selection sort
merge sort
quick sort
heap sort

into the filter of Angular 4, written as a service.
please check the SortService folder

Word of advice : those are just for learning the algorithm concept only since in real
world practice, those implementation will never be faster than
array.sort(),which is the built-in function provided Javascript.
The reason for that basically due to the fact that built-in function
are written in C++ i.e std:qsort. When implementing our own custom sort, we normally code
at the Javascript layer, which by design is slower than C++. There is a more detail explanation here,
https://stackoverflow.com/questions/234683/javascript-array-sort-implementation