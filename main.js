let btn = document.getElementById('btn');
let retourEcran = document.getElementById('retourEcran');
let quote = [

 "Soyez le capitaine de votre destinée, tracez votre propre chemin vers le succès.",
 "Le succès commence là où la zone de confort prend fin. Osez grandir au-delà de vos limites.",
 "Les rêves deviennent réalité lorsque la détermination les guide à travers les obstacles.",
"Chaque échec est une leçon déguisée, une opportunité de rebondir plus fort.",
 "La persévérance transforme les impossibilités en réalisations extraordinaires.",
  "Visualisez votre succès, ressentez-le et travaillez inlassablement pour l'atteindre.",
"Les petites actions cumulées mènent à d'énormes réalisations. Avancez pas à pas.",
"N'abandonnez jamais. Souvenez-vous de la raison pour laquelle vous avez commencé.",
"Votre mentalité détermine votre trajectoire. Pensez positivement et conquérez.",
 "Le temps est votre ressource la plus précieuse. Investissez-le dans votre croissance.",
"L'échec est temporaire, mais l'abandon dure éternellement. Tenez bon.",
"Chaque obstacle surmonté est une médaille de courage gagnée dans la course vers vos rêves.",
"La confiance en soi est la clé qui ouvre toutes les portes de l'accomplissement.",
"Le succès est un voyage, pas une destination. Profitez de chaque étape.",
"Le travail acharné bat le talent lorsque le talent ne travaille pas dur",
"Les excuses ne construisent pas l'avenir que vous désirez. L'action, si.",
"L'optimisme est le carburant qui alimente votre moteur de réussite.",
 "Soyez le changement que vous voulez voir dans vos objectifs réalisés.",
"N'ayez pas peur d'échouer, ayez peur de ne pas essayer du tout.",
"Le succès est réservé à ceux qui persévèrent malgré les vents contraires.",
"Votre détermination dévoile votre véritable potentiel. Ne vous sous-estimez jamais.",
"Chaque journée est une occasion de faire un pas de plus vers votre rêve.",
"Le succès ne suit pas les horloges, il suit les personnes déterminées.",
 "L'engagement envers votre objectif transforme le désir en réalité palpable.",
"Chaque moment est une nouvelle opportunité de recommencer et de briller.",
"La résilience transforme les défis en pierres angulaires du succès.",
 "Croyez en vos capacités, car ceux qui pensent qu'ils peuvent réussir sont ceux qui réussissent.",
"Soyez fier de chaque petit progrès. Les victoires modestes construisent des réalisations majeures.",
"Lorsque vous doutez de vous-même, rappelez-vous de toutes les fois où vous avez triomphé.",
 "Le succès est le résultat des choix que vous faites aujourd'hui. Choisissez avec sagesse.",
];

btn.addEventListener('click',aléatoire )


function aléatoire(){
  
    const randomQuote = quote[Math.floor(Math.random() * quote.length)]

    retourEcran.innerHTML = randomQuote;
}
aléatoire();