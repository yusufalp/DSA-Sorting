// Merge Sort O(nlogn)
function mergeSort(array) {
  if (array.length <= 1) {
      return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle); 
  let right = array.slice(middle, array.length); 

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array); // [2, 1, 6, 5, 9, 8, 7, 3] - > L[2],R[1],L[6],R[5] -> L[1,2] R[5,6] -> L[1,2,5,6]
};

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          array[outputIndex++] = left[leftIndex++];
      }
      else {
          array[outputIndex++] = right[rightIndex++]; // right[0], rightIndex = 1
      }
  }

  for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
  }
  return array;
};

console.log(mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]))
console.log(mergeSort([2, 1, 6, 5, 9, 8, 7, 3]))


// Quick Sort O(nlogn)
function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
      return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
      if (array[i] <= pivot) {
          swap(array, i, j);
          j++;
      }
  }
  swap(array, end-1, j);
  return j;
};

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};


console.log(quickSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]))
console.log(quickSort([2, 1, 6, 5, 9, 8, 7, 3]))

