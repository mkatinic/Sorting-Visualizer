export function getSelectionSortAnimations(array){
    const animations = [];
    selectionSort(array, animations);

    function selectionSort(array, animations) { 
        let n = array.length;
            
        for(let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            let min = i;
            for(let j = i+1; j < n; j++){
                animations.push([j, min, "comp"]);
                animations.push([j, min, "comp"]);
                if(array[j] < array[min]) {
                    min=j; 
                }
             }
             if (min !== i) {
                 // Swapping the elements
                 let tmp = array[i]; 
                 array[i] = array[min];
                 array[min] = tmp;    
                 animations.push([i, array[i], min, array[min]]);  
            }
        }
        return array;
    }

    return animations;
}