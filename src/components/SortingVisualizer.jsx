import React from 'react';
import './SortingVisualizer.scss';
import * as sortingAlgorithms from '../sotring-algorithms/mergeSort';


export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array:[],
        };
    }

resetArray(){
    const array = [];
    for(let i=0; i<180 ; i++){
        array.push(randomIntFromInterval(5,700));
    }
    this.setState({array})
}

mergeSort(){
    // let sortTest = this.state.array.slice().sort((a,b)=> a-b);
    // let mergeSortArray = sortingAlgorithms.mergeSort(this.state.array);
    // console.log(isTheSame(sortTest, mergeSortArray));

    const animation = sortingAlgorithms.mergeSortAnimation(this.state.array);
    console.log(animation);
    for (let i = 0; i < animation.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i%3 !== 2;
        if(isColorChange){
            const [barOneIdx, barTwoIdx] = animation[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i%3 ===0 ? 'red': 'turquoise';
            setTimeout(()=>{
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;

            }, i * 3)
        } else {
            setTimeout(()=>{
                const [barOneIdx, newHeight] =animation[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height =`${newHeight}px`;
            }, i*3)
        }

        
    }
}


quickSort(){}
heapSort(){}
bubbleSort(){}



    componentDidMount(){
        this.resetArray();
    }

    render(){
        const {array} = this.state;

        return (
            <div className="bars-container" >
            {array.map((value,idx)=>
                <div className="array-bar" style={{height:`${value}px`}} key={idx}>
                </div>
            )}
            <button onClick={()=> this.resetArray()}>Generate New Array!</button>
            <button onClick={()=> this.mergeSort()}>Merge Sort</button>
            <button onClick={()=> this.quickSort()}>Quick Sort</button>
            <button onClick={()=> this.heapSort()}>Heap Sort</button>
            <button onClick={()=> this.bubbleSort()}>Bubble Sort</button>
            </div>
        )
    }
}

function  randomIntFromInterval(min,max){
    return Math.floor(Math.random()* (max-min+1) + min);
}

function isTheSame(arr1,arr2){
    if(arr1.length !== arr2.length) return false;
    for(let i= 0; i<arr1.length; i++){
        if(arr1[i]!==arr2[i]) return false;
    }
    return true
}