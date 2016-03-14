

var combSort = function(array) {
  // Your code here

  // 1.3 is the gap shrink factor
  var interval = Math.floor(array.length/1.3); ///  initializes the interval to roughly 3/4 of array length
  while (interval > 0) {
    for(var i=0; i+interval<array.length; i+=1) {  // this loop runs quasi-bubblesort
      if (array[i] > array[i+interval]) {
        var small = array[i+interval];  ////
        array[i+interval] = array[i];   ////  swap two elements based on that are spaced by the current value of interval
        array[i] = small;               ////
      }
    }
    interval = Math.floor(interval/1.3);  // decreases the width of the interval, or the spacing between array elements being compared
  }
  return array;

};

