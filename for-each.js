// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let arrayNames = [];
    arr.forEach(newArray => {
       // console.log(newArray.name)
        arrayNames.push(newArray.name);
    });
    return arrayNames;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let reversedArrayTypes = [];
    arr.forEach(reversedArray => {
       // console.log(reversedArray.type);
        reversedArrayTypes.push(reversedArray.type);
    })
    return reversedArrayTypes.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanish = [
        {
            nombre: 'coco',
            tipo: 'cat',
        },
        {
            nombre: 'jumper',
            tipo: 'frog',
        }
    ];
    spanish.forEach(spanishArray => {
    // console.log(spanish);
    })
    return spanish;
};

