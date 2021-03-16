
let num = 20;
let pattern = patternMaker(num);
for(let i = 0; i < pattern.length; i++) {
    console.log(pattern[i]);
}

function patternMaker(num) {
    if(num == 0 || num == undefined) {
        return [];
    }

    let pattern = [];
    for(let i = 1, j = num; i <= num, j > 0; i++, j--) {
        let spaces = "";
        let stars = "";
        for(let s = 0; s < (j - 2) + 1; s++) {
            spaces += " ";
        }
        for(let r = 0; r < (i * 2) - 1; r++) {
            stars += "*";
        }
        pattern.push(spaces + stars)
    }

    for(let i = num - 1, j = 1; i > 0, j < num; i--, j++) {
        let spaces = "";
        let stars = "";
        for(let s = 0; s <= (j - 2) + 1; s++) {
            spaces += " ";
        }
        for(let r = 0; r < (i * 2) - 1; r++) {
            stars += "*";
        }
        pattern.push(spaces + stars)
    }
    return pattern;
}