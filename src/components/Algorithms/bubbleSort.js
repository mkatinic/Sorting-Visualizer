export function getBubbleSortAnimations(array) {
    const animations = [];
    bubbleSort(array, animations);

    function bubbleSort(array, animations) {
        let len = array.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < (len - i - 1); j++) {
                // These are the values that we're comparing; we push them twice
                // to change their color.
                animations.push([j, j + 1, "comp"]);
                animations.push([j, j + 1, "comp"]);

                if (array[j] > array[j + 1]) {
                    let tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;
                    // Overwrite the values and add to the animations array.
                    animations.push([j, array[j], j + 1, array[j + 1]]);
                } else {
                    animations.push([j, array[j], j + 1, array[j + 1]]);
                }
            }
        }
    }

    return animations;
};


