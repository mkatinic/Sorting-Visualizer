export function getQuickSortAnimations(array) {
  const animations = [];
  quickSort(array, 0, array.length - 1, animations);

  function partition(array, low, high, animations) {
    let pivot = array[Math.floor((low + high) / 2)];
    array[Math.floor((low + high) / 2)] = array[low];

    while (low < high) {
      while (low < high && array[high] >= pivot) {
        // These are the values that we're comparing; we push them twice
        // to change their color.
        animations.push([low, high, "comp"]);
        animations.push([low, high, "comp"]);
        high--;
      }
      array[low] = array[high];
      // Overwrite the values and add to the animations array.
      animations.push([low, array[low]]);

      while (low < high && array[low] <= pivot) {
        // These are the values that we're comparing; we push them twice
        // to change their color.
        animations.push([low, high, "comp"]);
        animations.push([low, high, "comp"]);
        low++;
      }
      array[high] = array[low];
      // Overwrite the values and add to the animations array.
      animations.push([high, array[high]]);
    }
    array[high] = pivot;
    // Overwrite the values and add to the animations array.
    animations.push([high, array[high]]);
    return low;
  }


  function quickSort(array, low, high, animations) {
    if (low >= high) {
      return;
    }
    let piv = partition(array, low, high, animations);
    quickSort(array, low, piv, animations);
    quickSort(array, piv + 1, high, animations);

  }
  return animations;
}


