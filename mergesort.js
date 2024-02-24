function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);

    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid, array.length));

    let l = 0;
    let r = 0;

    const result = [];
    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            result.push(left[l]);
            l++;
        }

        else {
            result.push(right[r]);
            r++;
        }
    }

    while (l < left.length) {
        result.push(left[l]);
        l++;
    }

    while (r < right.length) {
        result.push(right[r]);
        r++;
    }

    return result;
}
