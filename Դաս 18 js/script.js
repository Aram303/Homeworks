const library = [
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254,
        count: 25
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264,
        count: 34
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245,
        count : 10
    }];
function Librari(library) {
    let result = 0;
    let k = 1;
    for (let i = 0; i < library.length; i++) {
        // if(library[i].libraryID  == 3245) {
        //     result = library[i].libraryID;
        // }
        if (library[i].count - k !== 0) {
            // i = k;
            result = library[i].count;
        }
    }
    return result
}

console.log(Librari(library));