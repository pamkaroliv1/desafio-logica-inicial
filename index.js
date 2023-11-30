
let heroi = "Jelion"
let xp = "9400"
var nivelDoHeroi


switch (true) {
    case xp < 1000:
        nivelDoHeroi = "Ferro";
        break;
    case xp >= 1001 && xp <= 2000:
        nivelDoHeroi = "Bronze";
        break;
    case xp >= 2001 && xp <= 5000:
        nivelDoHeroi = "Prata";
        break;
    case xp >= 6001 && xp <= 7000:
        nivelDoHeroi = "Ouro";
        break;
    case xp >= 7001 && xp <= 8000:
        nivelDoHeroi = "Platina";
        break;
    case xp >= 8001 && xp <= 9000:
        nivelDoHeroi = "Ascendente";
        break;
    case xp >= 9001 && xp <= 10000:
        nivelDoHeroi = "Imortal";
        break;
    default:
        nivelDoHeroi = "Radiante";}
       

console.log("o seu heroi de nome " + heroi + " está no nivel " + nivelDoHeroi + ".");