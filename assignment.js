// Prob 1: anaToVori
function anaToVori(ana) {

    if (ana < 0) {
        return 'Please give a real number!';
    }
    let vori = ana / 16;
    return vori;
}
console.log(anaToVori(32));

// Prob 2: pandaCost
function pandaCost(singaraQuantity, shomusaQuantity, jilapiQuantity) {

    if (singaraQuantity < 0 || shomusaQuantity < 0 || jilapiQuantity < 0) {
        return 'Please enter a valid number!';
    }

    const perSingaraCost = 7;
    const perShomusaCost = 10;
    const perJilapiCost = 15;

    let singaraPrice = perSingaraCost * singaraQuantity;
    let shomusaPrice = perShomusaCost * shomusaQuantity;
    let jilapiprice = perJilapiCost * jilapiQuantity;

    let totalCost = singaraPrice + shomusaPrice + jilapiprice;

    return totalCost;
}
console.log(pandaCost(1, 1, 1));

// prob 3: picnicBudget

function picnicBudget(number) {

    const spendingsFirst100 = 5000;
    const spendingsSecond100 = 4000;
    const spendingsRest = 3000;

    if (number < 0) {
        return 'Please enter the correct number of people';
    }

    else if (number <= 100) {
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

        return totalCost;
    }
}
console.log(picnicBudget(201));

// Prob 4: oddFriend

const friends = ['CR7', 'LM10', 'M7', 'RL9', 'MS11', 'SM10', 'EH9', 'NJ10', 'AB1'];
function oddFriend(friends) {

    console.log(typeof friends);

    if (typeof friends != "object") {
        return 'Please find your mistakes!';
    }

    let oddNames = [];
    for (let i = 0; i < friends.length; i++) {
        const names = friends[i];

        if (names.length % 2 != 0) {
            oddNames.push(names);
            break;
        }
    }
    return oddNames;
}

console.log(oddFriend(friends));
