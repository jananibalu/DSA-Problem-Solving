import React from 'react'

export default function RemoveDublicateArray() {

    let arr = [1, 2, 3, 2, 4, 1];

    let current = []

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let isDublicate = false;

        for (let j = 0; j < current.length; j++) {
            if (current[j] === element) {
                isDublicate = true;
                break
            }
        }
        if (!isDublicate) {
            current.push(element)
            console.log(element);
        }
    }

    return (
        <div>RemoveDublicateArray : {JSON.stringify(current)}</div>
    )
}
