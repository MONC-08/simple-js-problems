// Prob 1: anaToVori
/* function anaToVori(ana) {

    let vori = ana / 16;
    return vori;
}
console.log(anaToVori(50)); */

//Prob 2: pandaCost
/* function pandaCost(singaraQuantity, shomusaQuantity, jilapiQuantity) {

    const perSingaraCost = 7;
    const perShomusaCost = 10;
    const perJilapiCost = 15;

    let singaraPrice = perSingaraCost * singaraQuantity;
    let shomusaPrice = perShomusaCost * shomusaQuantity;
    let jilapiprice = perJilapiCost * jilapiQuantity;

    let totalCost = singaraPrice + shomusaPrice + jilapiprice;

    return totalCost;
}
console.log(pandaCost(1, 1, 1)); */

// prob 3: picnicBudget

/* function picnicBudget(number) {

    const spendingsFirst100 = 5000;
    const spendingsSecond100 = 4000;
    const spendingsRest = 3000;

    if (number <= 100) {
        let priceCount = number * spendingsFirst100;
        return priceCount;
    }
    else if (number <= 200) {
        let priceCountFirst100 = 100 * spendingsFirst100;
        let second100 = number - 100;
        let priceCountSecond100 = second100 * spendingsSecond100;
        let totalCost = priceCountFirst100 + priceCountSecond100;

        return totalCost;
    }
    else {
        let priceCountFirst100 = 100 * spendingsFirst100;
        let priceCountSecond100 = 100 * spendingsSecond100;
        let restNumber = number - 200;
        let priceCountRest = restNumber * spendingsRest;
        let totalCost = priceCountFirst100 + priceCountSecond100 + priceCountRest;
        console.log(totalCost);

        return totalCost;
    }
}
console.log(picnicBudget(204)); */

// Prob 4: oddFriend

const friends = ['CR7', 'LM10', 'M7', 'RL9', 'MS11', 'SM10', 'EH9', 'NJ10', 'AB1'];

function oddFriend(friends) {

    let oddNames = [];
    for (let i = 0; i < friends.length; i++) {
        const names = friends[i];

        if (names.length % 2 != 0) {
            oddNames.push(names);
        }
    }
    return oddNames;
}

console.log(oddFriend(friends));
