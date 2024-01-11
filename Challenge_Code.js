let quantityWins = prompt("Tell me your number of victories.")
let quantityLosses = prompt("Tell me your number of losses.")

function balanceRank(quantityLosses, quantityWins){
    let balanceCalc = quantityWins - quantityLosses
    return balanceCalc
}

function rankingHero(quantityWins){
    if (quantityWins < 10) {level = "Iron";}
    else if (quantityWins >= 11 && quantityWins <= 20) {level = "Bronze";}
    else if (quantityWins >= 21 && quantityWins <= 50) {level = "Silver";}
    else if (quantityWins >= 51 && quantityWins <= 80) {level = "Gold";}
    else if (quantityWins >= 81 && quantityWins <= 90) {level = "Diamond";}
    else if (quantityWins >= 91 && quantityWins <= 100) {level = "Legendary";}
    else if (quantityWins >= 101) {level = "Immortal";}

    return level
}

let winBalance = balanceRank(quantityLosses, quantityWins)
let ranking = rankingHero(quantityWins)

console.log("The hero has a balance of " + winBalance + " and is at the level " + ranking + ".")