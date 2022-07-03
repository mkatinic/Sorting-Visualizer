import React from 'react';
import { getBubbleSortAnimations } from './Algorithms/bubbleSort';
import { getSelectionSortAnimations } from './Algorithms/selectionSort';
import { getQuickSortAnimations } from './Algorithms/quickSort';
import { getMergeSortAnimations } from './Algorithms/mergeSort';
import '../index.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 125;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(Math.floor(Math.random() * (500 - 5 + 1) + 5));
    }
    this.setState({ array });
    if(document.querySelector('#algorithm').innerText !== ""){
      document.querySelector('#algorithm').innerText = "";
      document.querySelector('#complexity').innerText = "";
      document.querySelector('#bio').innerText = "";
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    let colorChangeCounter = 0;
    const arrayBars = document.getElementsByClassName('array--bar');
    for (let i = 0; i < animations.length; i++) {
      if (animations[i][2] === "comp") {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = colorChangeCounter % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        colorChangeCounter++;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${barOneHeight}px`;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barTwoStyle.height = `${barTwoHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    document.querySelector('#algorithm').innerText = "Bubble Sort";
    document.querySelector('#complexity').innerText = 'Best Time Complexity: O(n) \n Average Time Complexity: O(n^2) \n Worst Time Complexity: O(n^2) \n Space Complexity: O(1)';
    document.querySelector('#bio').innerText = "Bubble Sort is a very simple sorting algorithm that works by swapping the adjascent elements if they are in wrong order. " +
    "This is not a practical sorting algorithm for large data sets due to its high time complexity";
  }

  selectionSort() {
    const animations = getSelectionSortAnimations(this.state.array);
    let colorChangeCounter = 0;
    const arrayBars = document.getElementsByClassName('array--bar');
    for (let i = 0; i < animations.length; i++) {
      if (animations[i][2] === "comp") {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = colorChangeCounter % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        colorChangeCounter++;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${barOneHeight}px`;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barTwoStyle.height = `${barTwoHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    document.querySelector('#algorithm').innerText = "Selection Sort";
    document.querySelector('#complexity').innerText = 'Best Time Complexity: O(n^2) \n Average Time Complexity: O(n^2) \n Worst Time Complexity: O(n^2) \n Space Complexity: O(1)';
    document.querySelector('#bio').innerText = "The selection sort algorithm works by repeatedly finding the minimum element from the unsorted part of the array and placing " +
    "it at the front of the array. This is not a practical sorting algorithm for large data sets due to its high time complexity";
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    let colorChangeCounter = 0;
    const arrayBars = document.getElementsByClassName('array--bar');
    for (let i = 0; i < animations.length; i++) {
      if (animations[i][2] === "comp") {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = colorChangeCounter % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        colorChangeCounter++;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barOneHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${barOneHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    document.querySelector('#algorithm').innerText = "Quick Sort";
    document.querySelector('#complexity').innerText = 'Best Time Complexity: O(nlogn) \n Average Time Complexity: O(nlogn) \n Worst Time Complexity: O(n^2) \n Space Complexity: O(n)';
    document.querySelector('#bio').innerText = "The quick sort algorithm uses the divide and conquer technique. It will pick an element as a pivot and will partition the given " +
    "arrays around the pivot. There are different versions of the quick sort algorithm which pick the pivot in different locations, for this algorithm I used " +
    "the middle index of the arrays as my pivot.";
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    let colorChangeCounter = 0;
    const arrayBars = document.getElementsByClassName('array--bar');
    for (let i = 0; i < animations.length; i++) {
      if (animations[i][2] === "comp") {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = colorChangeCounter % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        colorChangeCounter++;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
   document.querySelector('#algorithm').innerText = "Merge Sort";
   document.querySelector('#complexity').innerText = 'Best Time Complexity: O(nlogn) \n Average Time Complexity: O(nlogn) \n Worst Time Complexity: O(nlogn) \n Space Complexity: O(n)';
   document.querySelector('#bio').innerText = "Merge Sort is a sorting algorithm which uses a divide and conquer strategy. This algorithm will recursivly" +
   " divide the array into two equal halves, and keep dividing until it cannot be further divided, then they are combined as a sorted array.";
  }

  render() {
    const { array } = this.state;
    return (
      <div className='array--container'>
        <div className='array--column'>
          <div className="array--bars">
            {array.map((value, idx) => (
              <div
                className="array--bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                }}></div>
            ))}
            <div className="array--buttons">
              <button onClick={() => this.resetArray()}>Generate New Array</button>
              <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
              <button onClick={() => this.selectionSort()}>Selection Sort</button>
              <button onClick={() => this.quickSort()}>Quick Sort</button>
              <button onClick={() => this.mergeSort()}>Merge Sort</button>
            </div>
          </div>
        </div>
        <div className='array--column'>
          <h1>About the Algorithm</h1>
          <div className='array--bio'>
            <p id='algorithm'></p>
            <p id='complexity'></p>
            <p id='bio'></p>
          </div>
        </div>
      </div>
    );
  }
}