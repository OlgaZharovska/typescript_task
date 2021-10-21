const testArray = [{mother: "Vica", father: "Mykyta", sister: "Olena", brother: "Oleg"}, 
{father: "Roman", sister: "Olena"}, {mother: "Angela"}
];


function updateObjectInArray<ObjectShape>(initialArray: Array<ObjectShape>, keyToFind:string, keyValueToFind: any, patch: any){
    const indexesToUpdate = indexesOf(initialArray, keyToFind, keyValueToFind);

    const numbersCopy = JSON.parse(JSON.stringify(initialArray));
    indexesToUpdate.forEach((index: string | number) => {
        numbersCopy[index] = {...numbersCopy[index], ...patch}
    });
    return numbersCopy;

}



const indexesOf = (arr: any[], keyToFind: string, keyValueToFind:string) => {
    return arr.reduce(
        (acc, v, i) => (v[keyToFind] === keyValueToFind && acc.push(i), acc),
      []);
}
  

let t = updateObjectInArray(testArray, "sister", "Olena", {brother: "Oleg"});
