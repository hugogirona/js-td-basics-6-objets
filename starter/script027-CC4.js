/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const John = {
    name: "John",
    weight: 92,
    height: 1.94,
    calcBmi() {
        return this.bmi = this.weight / Math.pow(this.height, 2);
    }
}

const Mark = {
    name: "Mark",
    weight: 86,
    height: 1.65,
    calcBmi() {
        return this.bmi = (this.weight / Math.pow(this.height, 2)).toFixed(2);
    }
}

if (John.calcBmi() > Mark.calcBmi()){
    console.log(`${John.name} a un BMI plus élevé avec un score de ${John.calcBmi()}.`);
} else if(John.calcBmi() < Mark.calcBmi()){
    console.log(`${Mark.name} a un BMI plus élevé avec un score de ${Mark.calcBmi()}.`);
}else{
    console.log(`${Mark.name} et ${John.name} on le même BMI avec un score de ${Mark.calcBmi()}.`);
}
