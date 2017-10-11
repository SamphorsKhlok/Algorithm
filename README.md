# Algorithm
Some implementation of Algorithm concepts like
* insertion sort
* selection sort
* merge sort
* quick sort
* heap sort

into the filter of Angular 4 App, written as a service.
please check the SortService folder.

For real application, UI layer should not process large data.It is the job of the backend.

**Word of Advice** : those are just for learning the algorithm concept only since in real
world practice, those implementation will never be faster than
_array.sort()_,which is the built-in function provided by Javascript.
The reason for that is basically due to the fact that built-in functions
are written in C++ i.e std::qsort. When implementing our own custom sort, we normally code
at the Javascript layer, which by design is slower than C++. There is a more detail explanation here,
https://stackoverflow.com/questions/234683/javascript-array-sort-implementation

