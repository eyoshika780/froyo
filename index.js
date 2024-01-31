let note = prompt("Enter a list of comma seperated froyo flavors");

let order = note.split(",");
// console.log(order)
function summary(order){
    let final = {
        vanilla: 0,
        strawberry: 0,
        coffee: 0
    }
    for (i = 0; i < order.length; i++){
        // console.table(final)
        if (order[i] ==  "vanilla"){
            final.vanilla += 1
        }
        if (order[i] ==  "strawberry"){
            final.strawberry += 1
        }
        if (order[i] ==  "coffee"){
            final.coffee += 1
        }
    }return final

}

let total = summary(order);

alert(`Your total is ${total.vanilla} vanilla, ${total.strawberry} strawberry, and ${total.coffee} coffee`)
