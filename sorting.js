const sorts = document.querySelectorAll(".sorts li");
const menuOpen = document.getElementById("menu-open");
const section = document.querySelector(".section1");
const section2 = document.getElementsByClassName("section2");
const visulizar = document.querySelector(".visulisar");

const menuClose = document.getElementById("menu-close");
let min = 10;
let max = 100;
menuOpen.onclick = () => {
  sorts.forEach((sort) => {
    sort.parentElement.classList.add("active");
    sort.classList.add("active");
  });
  menuClose.style.display = "block";
  menuOpen.style.display = "none";
};
menuClose.onclick = () => {
  sorts.forEach((sort) => {
    sort.parentElement.classList.remove("active");
    sort.classList.remove("active");
  });
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
};

let arr = [];
function generateNewArray() {
  arr.splice(0, arr.length);
  visulizar.innerHTML = "";
  for (let i = 10; i <= 50; i++) {
    arr.push(Math.floor(Math.random() * (min - max) + max));
  }
  console.log(arr);

  arr.map((e, i) => {
    let arrele = document.createElement("p");
    arrele.style.height = `${arr[i] * 5}px`;
    arrele.innerText = e;
    arrele.classList.add("bar");
    visulizar.appendChild(arrele);
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//bubble sort

async function bubbleSort(arr) {
  let bars = document.querySelectorAll(".bar");
  var i, j;
  var len = arr.length;
  var isSwapped = false;
  for (i = 0; i < len; i++) {
    isSwapped = false;
    for (j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        for (let k = 0; k < bars.length; k++) {
          if (k != j && k != j + 1) {
            bars[k].style.backgroundColor = "white";
          }
        }
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        bars[j].style.height = `${arr[j] * 5}px`;
        bars[j].style.backgroundColor = "rgb(255, 109, 40)";
        bars[j].innerText = arr[j];
        bars[j + 1].style.height = `${arr[j + 1] * 5}px`;
        bars[j + 1].style.backgroundColor = "rgb(255, 109, 40)";
        bars[j + 1].innerText = arr[j + 1];
        await sleep(30);
        isSwapped = true;
      }
    } // IF no two elements were swapped by inner loop, then break
    if (!isSwapped) {
      break;
    }
    await sleep(30);
  } // Print the array
  console.log(arr);
  visulizar.innerHTML = "";

  arr.map((e, i) => {
    let arrele = document.createElement("p");
    arrele.style.height = `${arr[i] * 5}px`;
    arrele.innerText = e;
    arrele.style.backgroundColor = "lightgreen";
    arrele.classList.add("bar");
    visulizar.appendChild(arrele);
  });
}

// selection sort
async function selectionSort(arr) {
  let bars = document.querySelectorAll(".bar");
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
      bars[i].style.height = `${arr[i] * 5}px`;
      bars[i].style.backgroundColor = "rgb(255, 109, 40)";
      bars[i].innerText = arr[i];
      bars[min].style.height = `${arr[min] * 5}px`;
      bars[min].style.backgroundColor = "rgb(255, 109, 40)";
      bars[min].innerText = arr[min];
    }
    await sleep(100);
  }
  visulizar.innerHTML = "";
  arr.map((e, i) => {
    let arrele = document.createElement("p");
    arrele.style.height = `${arr[i] * 5}px`;
    arrele.innerText = e;
    arrele.style.backgroundColor = "lightgreen";
    arrele.classList.add("bar");
    visulizar.appendChild(arrele);
  });
}

// insertion sorting

async function insertionSort(arr) {
  let bars = document.querySelectorAll(".bar");
  let n = arr.length;
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
      bars[j + 1].style.height = `${arr[j + 1] * 5}px`;
      bars[j + 1].style.backgroundColor = "rgb(255, 109, 40)";
      bars[j + 1].innerText = arr[j + 1];
      await sleep(30);
    }
    arr[j + 1] = key;
  }
  visulizar.innerHTML = "";
  arr.map((e, i) => {
    let arrele = document.createElement("p");
    arrele.style.height = `${arr[i] * 5}px`;
    arrele.innerText = e;
    arrele.style.backgroundColor = "lightgreen";
    arrele.classList.add("bar");
    visulizar.appendChild(arrele);
  });
}

// quick sort

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
async function partition(arr, low, high) {
  let bars = document.querySelectorAll(".bar");
  let pivot = arr[high];
  bars[high].style.backgroundColor = "red";
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    bars[j].style.backgroundColor = "yellow";
    await sleep(100);
    if (arr[j] < pivot) {
      // Increment index of
      // smaller element
      i++;
      swap(arr, i, j);
      bars[i].style.backgroundColor = "orange";
      if (i != j) bars[j].style.backgroundColor = "orange";
    } else {
      // color if not less than pivot
      bars[j].style.background = "pink";
    }
  }
  await sleep(30);

  swap(arr, i + 1, high);
  visulizar.innerHTML = "";
  arr.map((e, i) => {
    let arrele = document.createElement("p");
    arrele.style.height = `${arr[i] * 5}px`;
    arrele.innerText = e;
    arrele.style.backgroundColor = "lightgreen";
    arrele.classList.add("bar");
    visulizar.appendChild(arrele);
  });
  return i + 1;
}

async function quickSort(arr, low, high) {
  console.log("In quickSort()", `l=${low} r=${high}`, typeof low, typeof high);
  if (low < high) {
    let pi = await partition(arr, low, high);
    await quickSort(arr, low, pi - 1);
    await quickSort(arr, pi + 1, high);
  } else {
    if (low >= 0 && high >= 0 && low < arr.length && high < arr.length) {
      let ele = document.querySelectorAll(".bar");
      ele[high].style.background = "lightgreen";
      ele[low].style.background = "lightgreen";
    }
  }
}

//merge sort

async function merge(arr, l, m, r) {
  let bars = document.querySelectorAll(".bar");
  const n1 = m - l + 1;
  const n2 = r - m;
  // Create temp arrays
  let L = new Array(n1);
  let R = new Array(n2);
  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) {
    await sleep(30);
    bars[l + i].style.backgroundColor = "green";
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    await sleep(30);
    bars[m + 1 + j].style.backgroundColor = "cyan";
    R[j] = arr[m + 1 + j];
  }
  await sleep(30);
  // Merge the temp arrays back into arr[l..r]
  // Initial index of first subarray
  let i = 0;
  // Initial index of second subarray
  let j = 0;
  // Initial index of merged subarray
  let k = l;
  while (i < n1 && j < n2) {
    await sleep(30);
    if (L[i] <= R[j]) {
      if (n1 + n2 === arr.length) {
        bars[k].style.backgroundColor = "orange";
      } else {
        bars[k].style.backgroundColor = "red";
      }
      arr[k] = L[i];
      i++;
    } else {
      if (n1 + n2 === arr.length) {
        bars[k].style.backgroundColor = "orange";
      } else {
        bars[k].style.backgroundColor = "red";
      }
      arr[k] = R[j];
      j++;
    }
    k++;
  } // Copy the remaining elements of // L[], if there are any
  while (i < n1) {
    await sleep(30);
    if (n1 + n2 === arr.length) {
      bars[k].style.backgroundColor = "orange";
    } else {
      bars[k].style.backgroundColor = "red";
    }
    arr[k] = L[i];
    i++;
    k++;
  } // Copy the remaining elements of // R[], if there are any
  while (j < n2) {
    await sleep(30);
    if (n1 + n2 === arr.length) {
      bars[k].style.backgroundColor = "orange";
    } else {
      bars[k].style.backgroundColor = "red";
    }
    arr[k] = R[j];
    j++;
    k++;
  }
  visulizar.innerHTML = "";
  arr.map((e, i) => {
    let arrele = document.createElement("p");
    arrele.style.height = `${arr[i] * 5}px`;
    arrele.innerText = e;
    arrele.style.backgroundColor = "lightgreen";
    arrele.classList.add("bar");
    visulizar.appendChild(arrele);
  });
}
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
async function mergeSort(arr, l, r) {
  console.log("in merge sort");
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);
  await mergeSort(arr, l, m);
  await mergeSort(arr, m + 1, r);
  await merge(arr, l, m, r);
}

//shell sort

async function sort(arr) {
  let bars = document.querySelectorAll(".bar");
  let n = arr.length; 
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {

    for (let i = gap; i < n; i += 1) {
      await sleep(30);
      let temp = arr[i]; 
      bars[i].style.backgroundColor="orange";
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
      {
        arr[j] = arr[j - gap];
        bars[gap].style.backgroundColor="green";
        bars[j-gap].style.backgroundColor="cyan";
        bars[j].style.backgroundColor="red";
        await sleep(30);
        }
        arr[j] = temp;
      }
      await sleep(30);
  }
  await sleep(30);
  visulizar.innerHTML = "";
  arr.map((e, i) => {
    let arrele = document.createElement("p");
    arrele.style.height = `${arr[i] * 5}px`;
    arrele.innerText = e;
    arrele.style.backgroundColor = "lightgreen";
    arrele.classList.add("bar");
    visulizar.appendChild(arrele);
  });
}