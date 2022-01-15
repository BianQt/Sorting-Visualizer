export function mergeSortAnimation(array) {
  const animation = [];
  if (array.length <= 1) return array;
  const auxArr = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxArr, animation);
  return animation;
}

function mergeSortHelper(mainArr, startIdx, endIdx, auxArr, animation) {
  if (startIdx === endIdx) return;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxArr, startIdx, midIdx, mainArr, animation);
  mergeSortHelper(auxArr, midIdx + 1, endIdx, mainArr, animation);
  doMerge(mainArr, startIdx, midIdx, endIdx, auxArr, animation);
}

function doMerge(mainArr, startIdx, midIdx, endIdx, auxArr, animation) {
  let k = startIdx;
  let i = startIdx;
  let j = midIdx + 1;

  while (i <= midIdx && j <= endIdx) {
    animation.push([i, j]);
    animation.push([i, j]);
    if (auxArr[i] <= auxArr[j]) {
      animation.push([k, auxArr[i]]);
      mainArr[k++] = auxArr[i++];
    } else {
      animation.push([k, auxArr[j]]);
      mainArr[k++] = auxArr[j++];
    }
  }

  while (i <= midIdx) {
    animation.push([i, i]);
    animation.push([i, i]);
    animation.push([k, auxArr[i]]);
    mainArr[k++] = auxArr[i++];
  }

  while (j <= endIdx) {
    animation.push([j, j]);
    animation.push([j, j]);
    animation.push([k, auxArr[j]]);
    mainArr[k++] = auxArr[j++];
  }
}
