const Discord = require("discord.js");

var PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setActivity("Pokémon GO");
    console.log("Bot opérationnel!");
});

const chenResponses = ["<:emojichen:481150612675887105> Oui <:emojichen:481150612675887105>", "<:emojichen:481150612675887105> Qwilfish: élu Pokémon Osef depuis... Bah depuis ça création en fait. <:emojichen:481150612675887105>", "<:emojichen:481150612675887105> Le saviez-vous? Simularbre est en fait de type Roche <:emojichen:481150612675887105>", "<:emojichen:481150612675887105> Le saviez vous? Suicune est un pokémon de type Eau, et non de type Glace <:emojichen:481150612675887105>", "<:emojichen:481150612675887105> La capacité spéciale Talent Vaccin de Mangriff vient de l'animal qui l'a inspiré: La mangouste. A savoir que la mangouste indienne se nourrit d'oeufs de serpent et qu'elle est immunisée à certains venins, on comprend la rivalité entre ce Pokémon et Séviper <:emojichen:481150612675887105>", "<:emojichen:481150612675887105> Le monde change tout autour de nous~ <:emojichen:481150612675887105>", "<:emojichen:481150612675887105> CHAMPIONS DU MOOOOOONDE !!!! <:emojichen:481150612675887105>", "<:emojichen:481150612675887105> Team Sagesse>all <:emojichen:481150612675887105>", "<:emojichen:481150612675887105> Le saviez-vous? Ce bot a été conçu avec beaucoup de PNL en fond <:emojichen:481150612675887105>", "<:emojichen:481150612675887105> J'ai construit ma carrière sur des enfants morts dans des forêts <:emojichen:481150612675887105>"];

const bonjourResponses = ["<:dexter:481153458192252937>  *bip*  Bonjour!~  *bip*  <:dexter:481153458192252937>", "<:dexter:481153458192252937>  *bip*  Salutations!~  *bip*  <:dexter:481153458192252937>", "<:dexter:481153458192252937>  *bip*  Oui?~  *bip*  <:dexter:481153458192252937>", "<:dexter:481153458192252937>  *bip*  En quoi puis-je aider?~  *bip*  <:dexter:481153458192252937>", "<:dexter:481153458192252937>  *bip*  Hello!~  *bip*  <:dexter:481153458192252937>", "<:dexter:481153458192252937>  *bip*  Allô?~  *bip*  <:dexter:481153458192252937>", "<:dexter:481153458192252937>  *bip*  À votre service!~  *bip*  <:dexter:481153458192252937>", "<:dexter:481153458192252937>  *bip*  Dexter oppérationnel!~  *bip*  <:dexter:481153458192252937>"];

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "invite":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "<:dexter:481153458192252937> Voici une invitation au serveur <:dexter:481153458192252937>",
                    value: "https://discord.gg/aC5sPv9",
                    inline: false
                }],
                footer: {
                    footer: "Partager ce lien à tous vos amis !",
                },
            }
        });
        break;
    }
    switch (args[0].toLowerCase()) {
        case "chen":
            var response = chenResponses [Math.floor(Math.random()*chenResponses .length)];

            message.channel.send(response).then().catch(console.error);
            break;
        default:
            break;
    }
    switch (args[0].toLowerCase()) {
        case "bonjour":
            var response = bonjourResponses [Math.floor(Math.random()*bonjourResponses .length)];

            message.channel.send(response).then().catch(console.error);
            break;
        default:
            break;
    }
    switch(args[0].toLocaleLowerCase()) {
        case "dexter":
        message.channel.send("<:dexter:481153458192252937> **Voici la liste de mes commandes:** <:dexter:481153458192252937> \n \n   **![nomdepokémon]** -> Vous donne accès à la fiche technique d'un Pokémon précis comme son type et ses meilleurs attaques. \n   **!raid[nomdepokémon]** -> Idéal avant de se mesurer à raid, tout les Pokémons de rang 3 à 5 sont répertiorés. \n   **!études[catégorie]** -> Liste des études de terrains et leurs récompenses pour une catégorie donnée (**arènes** (comprend aussi les Raids), **capture**, **lancers**, **pokémon** et **amis** \nExemple: **!étudeslancers** donne la liste des études autour des lancers de Balls \n    **!invite** -> Vous donne une beau lien d'invitation à partager à foison! \n   **!chen** -> <:emojichen:481150612675887105> Oui? <:emojichen:481150612675887105>")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "étudesarènes":
        message.channel.send("<:dexter:481153458192252937> **Liste des récompenses d'Études de Terrains** <:dexter:481153458192252937> \nCatégorie **Arènes et Raids** \n \n- Combattre dans une Arène: **Férosinge** \n- Combattre 5 fois dans une Arène: **Machoc** \n- Gagner un combat d'Arène: **Baie Nanab** (jusqu'à 10) ou **Potion** (jusqu'à 5) ou **Rappel** (jusqu'à 4) ou **Bulbizarre** \n- Gagner 3 combats d'Arène: **Hyper Potion** (jusqu'à 3) ou **Rappel Max** ou **Super Bonbon** ou **Lippoutou** \n- Gagner un Raid de niveau 3 ou plus: **Poussière Étoile** (jusqu'à 1000) ou **Hyper Potion** (jusqu'à 3) ou **Rappel Max** ou **Super Bonbon** ou **Minidraco** \n- Utiliser une Attaque Chargée super efficace dans 1 combat d'Arène: **Poussière Étoile** (jusqu'à 500) ou **Super Potion** (jusqu'à 3) ou **Rappel** (jusqu'à 4) ou **Baie Nanab** (jusqu'à 10) \nUtiliser une Attaque Chargée super efficace dans 7 combats d'Arène: **Poussières Étoile** (jusqu'à 1000) ou **Super Potion** (jusqu'à 3) ou **Rappel** (jusqu'à 6) ou **Rappel Max** ou **Super Bonbon** ou **Élektek**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "étudescapture":
        message.channel.send("<:dexter:481153458192252937> **Liste des récompenses d'Études de Terrains** <:dexter:481153458192252937> \nCatégorie **Capture de Pokémon** \n \n- Capturer 10 Pokémon: **Poussières Étoiles** (jusqu'à 200) ou **Pokéball** (jusqu'à 5) ou **Braie Framby** (jusqu'à 3) ou **Baie Nanana** ou **Magicarpe** \n- Capturer 5 Pokémon de type Feu: **Baie Nanana Argentée** \n-Capturer 1 Pokémon de type Dragon: **Poussière Étoile** (jusqu'à 1500) ou **Hyperball** (jusqu'à 10) ou **Super Bonbon** (jusqu'à 2) ou **Baie Framby Dorée** (jusqu'à 2) ou **Minidraco** \n- Capturer 10 Pokémon de type Normal: **Poussière Étoile** (jusqu'à 1000) ou **Super Bonbon** ou **Hyper Potion** (jusqu'à 3) ou **Rappel Max** ou **Baie Framby** (jusqu'à 6) \n- Capturer 5 Pokémon boostés par la météo: **Poussière Étoile** (jusqu'à 200) ou **Pokéball** (jusqu'à 5) ou **Baie Framby** (jusqu'à 3) ou **Baie Nanana** ou **Goupix** ou **Ptitard** \n- Capturer 1 Rattata ou Pikachu: **Phanpy** \n- Capturer 1 Métamorph: **Poussières Étoile** (jusqu'à 1500) ou **Hyperball** (jusqu'à 10) ou **Super Bonbon** (jusqu'à 3) ou **Baie Framby** (jusqu'à 2)")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "étudeslancers":
        message.channel.send("<:dexter:481153458192252937> **Liste des récompenses d'Études de Terrains** <:dexter:481153458192252937> \nCatégorie **Lancers de Balls** \n \n- Faire 5 Jolis lancers: **Poussières Étoile* (jusqu'à 200) ou **Pokéballs** (jusqu'à 5) ou **Baie Framby** ou **Baie Nanana** ou **Voltorbe** \n- Faire 3 Super lancers: **Poussières Étoile** (jusqu'à 200) ou **Pokéball** (jusqu'à 5) ou **Baie Framby** (jusqu'à 3) ou **Baie Nanana** (jusqu'à 3) ou **Fantominus** \n- Faire 1 Super lancer avec effet: **Spinda** \n- Faire 3 Excellents lancers à la suite: **Embrylex**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "étudespokémon":
        message.channel.send("<:dexter:481153458192252937> **Liste des récompenses d'Études de Terrains** <:dexter:481153458192252937> \nCatégorie **Interactions avec ses Pokémon** \n \n- Gagner 1 bonbon en marchant avec son Copain: **Chamallot** \n- Faire évoluer 1 Pokémon: **Évoli** \n- Faire évoluer 5 Pokémon de type Feu: **Feunard** \n-Faire éclore 1 Oeuf: **Poussière Étoile** (jusqu'à 200) ou **Pokéball** (jusqu'à 5) ou **Baie Framby** (jusqu'à 3) ou **Baie Nanana** ou **Noeunoeuf** \n- Faire éclore 3 Oeufs: **Poussière Étoile** (jusqu'à 1000) ou **Pokéball** (jusqu'à 10) ou **Hyperball** (jusqu'à 5) ou **Baie Framby** (jusqu'à 9) ou **Baie Nanana** (jusqu'à 3) ou **Super Bonbon** ou **Points d'XP** (jusqu'à 1000) ou **Magmar** \n- Faire éclore 5 Oeufs: **Leveinard** \n- Recharger un Pokémon 3 fois: **Smogo** \n- Recharger un Pokémon 5 fois: **Bulbizarre** ou **Salamèche** ou **Carapuce** \n- Utiliser 10 Baies sur un Pokémon: **Caninos**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "étudesamis":
        message.channel.send("<:dexter:481153458192252937> **Liste des récompenses d'Études de Terrains** <:dexter:481153458192252937> \nCatégorie **Interactions avec ses Amis** \n \n- Envoyer 5 Cadeaux: **Rosélia**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "monaflèmit":
        message.channel.send("<:dexter:481153458192252937> **Monaflèmit**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Bâillement - Ultralaser** \nMeilleur set en Défense: **Bâillement - Câlinerie**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "groudon":
        message.channel.send("<:dexter:481153458192252937> **Groudon**: Pokémon Légendaire de type **Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante, Glace, Eau** \nRésistant à: **Roche, Poison, Electrik** \nMeilleur set en Attaque: **Draco-Queue - Lance-Soleil** \nMeilleur set en Défense: **Draco-Queue - Lance-Soleil**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "Kyogre":
        message.channel.send("<:dexter:481153458192252937> **Kyogre**: Pokémon Légendaire de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Cascade - Hydrocanon** \nMeilleur set en Défense: **Cascade - Hydrocanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "mewtwo":
        message.channel.send("<:dexter:481153458192252937> **Mewtwo**: Pokémon Légendaire de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Choc Mental - Ball'Ombre** \nMeilleur set en Défense: **Choc Mental - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "ho-oh":
        message.channel.send("<:dexter:481153458192252937> **Ho-Oh**: Pokémon Légendaire de type **Feu/Vol** <:dexter:481153458192252937> \nVulnérable à: **Roche, Electrik, Eau** \nRésistant à: **Feu, Combat, Acier, Sol, Fée, Plante, Insecte** \nMeilleur set en Attaque: **Aile d'Acier - Lance-Soleil** \nMeilleur set en Défense: **Extrasenseur - Lance-Soleil**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "tyranocif":
        message.channel.send("<:dexter:481153458192252937> **Tyranocif**: Pokémon de type **Roche/Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Combat, Fée, Sol, Insecte, Acier, Eau, Plante** \nRésistant à: **Ténèbres, Normal, Poison, Spectre, Vol, Feu, Psy** \nMeilleur set en Attaque: **Anti-Air - Lame de Roc** \nMeilleur set en Défense: **Anti-Air - Mâchouille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "rayquaza":
        message.channel.send("<:dexter:481153458192252937> **Rayquaza**: Pokémon Légendaire de type **Dragon/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Fée, Dragon, Roche** \nRésistant à: **Combat, Eau, Insecte, Feu, Plante, Sol** \nMeilleur set en Attaque: **Draco-Queue - Colère** \nMeilleur set en Défense: **Draco-Queue - Colère**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "Latios":
        message.channel.send("<:dexter:481153458192252937> **Latios**: Pokémon Légendaire de type **Dragon/Psy** <:dexter:481153458192252937> \nVulnérable à: **Fée, Spectre, Ténèbres, Dragon, Glace, Insecte** \nRésistant à: **Combat, Eau, Plante, Electrik, Psy, Feu** \nMeilleur set en Attaque: **Psykoud'Boul - Lance-Soleil** \nMeilleur set en Défense: **Psykoud'Boul - Dracogriffe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "métalosse":
        message.channel.send("<:dexter:481153458192252937> **Métalosse**: Pokémon de type **Acier/Psy** <:dexter:481153458192252937> \nVulnérable à: **Feu, Ténèbres, Sol, Spectre** \nRésistant à: **Dragon, Glace, Normal, Plante, Acier, Roche, Vol, Fée, Psy, Poison** \nMeilleur set en Attaque: **Psykoud'Boul - Lumicanon** \nMeilleur set en Défense: **Pisto-Poing - Lumicanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "lugia":
        message.channel.send("<:dexter:481153458192252937> **Lugia**: Pokémon Légendaire de type **Psy/Vol** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Glace, Roche, Electrik, Spectre** \nRésistant à: **Plante, Psy, Combat, Sol** \nMeilleur set en Attaque: **Extrasenseur - Piqué** \nMeilleur set en Défense: **Extrasenseur - Piqué**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "dracolosse":
        message.channel.send("<:dexter:481153458192252937> **Dracolosse**: Pokémon de type **Dragon/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Fée, Dragon, Roche** \nRésistant à: **Combat, Eau, Insecte, Feu, Plante, Sol** \nMeilleur set en Attaque: **Draco-Queue - Colère** \nMeilleur set en Défense: **Draco-Queue - Colère**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "drattak":
        message.channel.send("<:dexter:481153458192252937> **Drattak**: Pokémon de type **Dragon/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Fée, Dragon, Roche** \nRésistant à: **Combat, Eau, Insecte, Feu, Plante, Sol** \nMeilleur set en Attaque: **Draco-Queue - Colère** \nMeilleur set en Défense: **Draco-Queue - Colère**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "entei":
        message.channel.send("<:dexter:481153458192252937> **Entei**: Pokémon Légendaire de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Danse Flamme - Surchauffe** \nMeilleur set en Défense: **Danse Flamme - Surchauffe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "latias":
        message.channel.send("<:dexter:481153458192252937> **Latias**: Pokémon Légendaire de type **Dragon/Psy** <:dexter:481153458192252937> \nVulnérable à: **Fée, Spectre, Ténèbres, Dragon, Glace, Insecte** \nRésistant à: **Combat, Eau, Plante, Electrik, Psy, Feu** \nMeilleur set en Attaque: **Dracosouffle - Colère** \nMeilleur set en Défense: **Psykoud'Boul - Colère**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "ronflex":
        message.channel.send("<:dexter:481153458192252937> **Ronflex**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Léchouille - Ultralaser** \nMeilleur set en Défense: **Psykoud'Boul - Ultralaser**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raikou":
        message.channel.send("<:dexter:481153458192252937> **Raikou**: Pokémon Légendaire de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrik** \nMeilleur set en Attaque: **Eclair - Eclair Fou** \nMeilleur set en Défense: **Change Eclair - Eclair Fou**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "électhor":
        message.channel.send("<:dexter:481153458192252937> **Electhor**: Pokémon Légendaire de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche** \nRésistant à: **Combat, Acier, Plante, Insecte, Sol, Vol** \nMeilleur set en Attaque: **Eclair - Elecanon** \nMeilleur set en Défense: **Rayon Chargé - Elecanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "Rhinoféros":
        message.channel.send("<:dexter:481153458192252937> **Rhinoféros**: Pokémon de type **Sol/Roche** <:dexter:481153458192252937> \nVulnérable à: **Eau, Plante, Sol, Glace, Acier, Combat** \nRésistant à: **Normal, Roche, Vol, Feu, Electrik, Poison** \nMeilleur set en Attaque: **Coud'Boue - Séisme** \nMeilleur set en Défense: **Coud'Boue - Séisme**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "léviator":
        message.channel.send("<:dexter:481153458192252937> **Léviator**: Pokémon de type **Eau/Vol** <:dexter:481153458192252937> \nVulnérable à: **Electrik, Roche** \nRésistant à: **Combat, Eau, Acier, Insecte, Feu, Sol** \nMeilleur set en Attaque: **Cascade - Hydrocanon** \nMeilleur set en Défense: **Cascade - Colère**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "sulfura":
        message.channel.send("<:dexter:481153458192252937> **Sulfura**: Pokémon Légendaire de type **Feu/Vol** <:dexter:481153458192252937> \nVulnérable à: **Roche, Electrik** \nRésistant à: **Feu, Combat, Acier, Sol, Fée, Plante, Insecte** \nMeilleur set en Attaque: **Danse Flamme - Surchauffe** \nMeilleur set en Défense: **Danse Flamme - Surchauffe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "leuphorie":
        message.channel.send("<:dexter:481153458192252937> **Leuphorie**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Ecras'Face - Ultralaser** \nMeilleur set en Défense: **Psykoud'Boul - Elcat Magique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "aquali":
        message.channel.send("<:dexter:481153458192252937> **Aquali**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Hydrocanon** \nMeilleur set en Défense: **Pistolet à O - Hydroqueue**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "mew":
        message.channel.send("<:dexter:481153458192252937> **Mew**: Pokémon Légendaire de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Griffe Ombre - lance-Soleil** \nMeilleur set en Défense: **Change Eclair - Lance-Soleil**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "donphan":
        message.channel.send("<:dexter:481153458192252937> **Donphan**: Pokémon de type **Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante, Glace, Eau** \nRésistant à: **Roche, Poison, Electrik** \nMeilleur set en Attaque: **Riposte - Séisme** \nMeilleur set en Défense: **Riposte - Câlinerie**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "galeking":
        message.channel.send("<:dexter:481153458192252937> **Galeking**: Pokémon de type **Acier/Roche** <:dexter:481153458192252937> \nVulnérable à: **Sol, Combat, Eau** \nRésistant à: **Dragon, Glace, Psy, Fée, Insecte, Roche, Vol, Normal, Poison** \nMeilleur set en Attaque: **Queue de Fer - Tacle-Lourd** \nMeilleur set en Défense: **Queue de Fer - Lame de Roc**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "mentali":
        message.channel.send("<:dexter:481153458192252937> **Mentali**: Pokémon de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Choc Mental - Prescience** \nMeilleur set en Défense: **Choc Mental - Dernier Recours**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "milobellus":
        message.channel.send("<:dexter:481153458192252937> **Milobellus**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Cascade - Surf** \nMeilleur set en Défense: **Cascade - Ultralaser**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "gardevoir":
        message.channel.send("<:dexter:481153458192252937> **Gardevoir**: Pokémon de type **Psy/Fée** <:dexter:481153458192252937> \nVulnérable à: **Poison, Spectre, Acier** \nRésistant à: **Psy, Combat, Dragon** \nMeilleur set en Attaque: **Choc Mental - Eclat Magique** \nMeilleur set en Défense: **Choc Mental - Eclat Magique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "scarhino":
        message.channel.send("<:dexter:481153458192252937> **Scarhino**: Pokémon de type **Insecte/Combat** <:dexter:481153458192252937> \nVulnérable à: **Vol, Fée, Psy, Feu** \nRésistant à: **Sol, Insecte, Combat, Plante, Ténèbres** \nMeilleur set en Attaque: **Riposte - Close Combat** \nMeilleur set en Défense: **Survinsecte - Close Combat**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "artikodin":
        message.channel.send("<:dexter:481153458192252937> **Artikodin**: Pokémon de type **Glace/Vol** <:dexter:481153458192252937> \nVulnérable à: **Roche, Feu, Electrik, Acier** \nRésistant à: **Plante** \nMeilleur set en Attaque: **Souffle Glacé - Blizzard** \nMeilleur set en Défense: **Souffle Glacé - Laser Glace**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "noadkoko":
        message.channel.send("<:dexter:481153458192252937> **Noadkoko**: Pokémon de type **Plante/Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Feu, Glace, Vol, Poison, Ténèbres, Spectre** \nRésistant à: **Combat, Eau, Plante, Electrik, Psy, Sol** \nMeilleur set en Attaque: **Extrasenseur - Lance Soleil** \nMeilleur set en Défense: **Extrasenseur - Lance-Soleil** \n \n<:dexter:481153458192252937> **Noadkoko d'Alola**: Pokémon de type **Plante/Dragon** <:dexter:481153458192252937> \nVulnérable à: **Glace, Fée, Vol, Poison, Dragon, Insecte** \nRésistant à: **Sol, Eau, Plante, Electrik** \nMeilleur set en Attaque: **Draco-Queue - Lance-Soleil** \nMeilleur set en Défense: **Draco-Queue - Lance-Soleil**")
    }    switch(args[0].toLocaleLowerCase()) {
        case "grolem":
        message.channel.send("<:dexter:481153458192252937> **Grolem**: Pokémon de type **Roche/Sol** <:dexter:481153458192252937> \nVulnérable à: **Eau, Plante, Sol, Glace, Acier, Combat** \nRésistant à: **Normal, Roche, Vol, Feu, Electrik, Poison** \nMeilleur set en Attaque: **Jet-Pierres - Lame de Roc** \nMeilleur set en Défense: **Coud'Boue - Séisme** \n \n<:dexter:481153458192252937> **Grolem d'Alola**: Pokémon de type **Roche/Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol, Combat, Eau, Plante** \nRésistant à: **Normal, Electrik, Poison, Feu, Vol** \nMeilleur set en Attaque: **Jet-Pierres - Eclair Fou** \nMeilleur set en Défense: **Change Eclair - Eclair Fou**") 
    }
    switch(args[0].toLocaleLowerCase()) {
        case "pyroli":
        message.channel.send("<:dexter:481153458192252937> **Pyroli**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Danse Flamme - Surchauffe** \nMeilleur set en Défense: **Danse Flamme - Surchauffe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "mackogneur":
        message.channel.send("<:dexter:481153458192252937> **Mackogneur**: Pokémon de type **Combat** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Psy** \nRésistant à: **Insecte, Roche, Ténèbres** \nMeilleur set en Attaque: **Ripsote - Dynamopoing** \nMeilleur set en Défense: **Riposte - Dynamopoing**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "alakazam":
        message.channel.send("<:dexter:481153458192252937> **Alakazam**: Pokémon de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Choc Mental - Prescience** \nMeilleur set en Défense: **Choc Mental - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "arcanin":
        message.channel.send("<:dexter:481153458192252937> **Arcanin**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Crocs Feu - Déflagration** \nMeilleur set en Défense: **Aboiement - Déflagration**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "suicune":
        message.channel.send("<:dexter:481153458192252937> **Suicune**: Pokémon Légendaire de type **Eau** (et non, il est pas de type Glace) <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Extrasenseur - Hydrocanon** \nMeilleur set en Défense: **Extrasenseur - Hydrocanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "laggron":
        message.channel.send("<:dexter:481153458192252937> **Laggron**: Pokémon de type **Eau/Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante** \nRésistant à: **Acier, Electrik, Roche, Poison, Feu** \nMeilleur set en Attaque: **Pistolet à O - Surf** \nMeilleur set en Défense: **Tir de Boue - Surf**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "cizayox":
        message.channel.send("<:dexter:481153458192252937> **Cizayox**: Pokémon de type **Insecte/Acier** <:dexter:481153458192252937> \nVulnérable à: **Feu** \nRésistant à: **Dragon, Glace, Psy, Normal, Insecte, Acier, Fée, Plante, Poison** \nMeilleur set en Attaque: **Pisto-Poing - Tête de Fer** \nMeilleur set en Défense: **Pisto-Poing - Tête de Fer**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "scarabrute":
        message.channel.send("<:dexter:481153458192252937> **Scarabrute**: Pokémon de type **Insecte** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche** \nRésistant à: **Combat, Plante, Sol** \nMeilleur set en Attaque: **Piqûre - Close Combat** \nMeilleur set en Défense: **Eclate-Roc - Plaie-Croie**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "hariyama":
        message.channel.send("<:dexter:481153458192252937> **Hariyama**: Pokémon de type **Combat** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Psy** \nRésistant à: **Insecte, Roche, Ténèbres** \nMeilleur set en Attaque: **Riposte - Dynamopoing** \nMeilleur set en Défense: **Riposte - Dynamopoing**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "ursaring":
        message.channel.send("<:dexter:481153458192252937> **Ursaring**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Riposte - Ultralaser** \nMeilleur set en Défense: **Riposte - Ultralaser**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "voltali":
        message.channel.send("<:dexter:481153458192252937> **Voltali**: Pokémon de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier,Electrik, Vol** \nMeilleur set en Attaque: **Eclair - Tonnerre** \nMeilleur set en Défense: **Change Eclair - Tonnerre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "aligatueur":
        message.channel.send("<:dexter:481153458192252937> **Aligatueur**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Cascade - Hydrocanon** \nMeilleur set en Défense: **Cascade - Hydrocanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "grotadmorv":
        message.channel.send("<:dexter:481153458192252937> **Grotadmorv**: Pokémon de type **Poison** <:dexter:481153458192252937> \nVulnérable à: **Psy, Sol** \nRésistant à: **Combat, Plante, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Direct Toxik - Détricanon** \nMeilleur set en Défense: **Harcèlement - Détricanon** \n \n<:dexter:481153458192252937> **Grotadmorv d'Alola**: Pokémon de type **Poison/Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Spectre, Plante, Psy, Poison, Ténèbres** \nMeilleur set en Attaque: **Direct Toxik - Détricanon** \nMeilleur set en Défense: **Direct Toxik - Vibrobscur**")
    }   
    switch(args[0].toLocaleLowerCase()) {
        case "pharamp":
        message.channel.send("<:dexter:481153458192252937> **Sol**: Pokémon de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrik** \nMeilleur set en Attaque: **Rayon Chargé - Elecanon** \nMeilleur set en Défense: **Change Eclair - Elecanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "krabboss":
        message.channel.send("<:dexter:481153458192252937> **krabboss**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante - Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Ecume - Vibraqua** \nMeilleur set en Défense: **Ecume - Vibraqua**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "dracaufeu":
        message.channel.send("<:dexter:481153458192252937> **Dracaufeu**: Pokémon de type **Feu/Vol** <:dexter:481153458192252937> \nVulnérable à: **Roche, Electrik, Eau** \nRésistant à: **Feu, Combat, Acier, Sol, Fée, Plante, Insecte** \nMeilleur set en Attaque: **Danse Flamme - Rafale Feu** \nMeilleur set en Défense: **Danse Flamme - Rafale Feu**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "typhlosion":
        message.channel.send("<:dexter:481153458192252937> **Typhlosion**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Flammèche - Surchauffe** \nMeilleur set en Défense: **Flammèche - Surchauffe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "amonistar":
        message.channel.send("<:dexter:481153458192252937> **Amonistar**: Pokémon de type **Roche/Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Sol, Combat, Electrik** \nRésistant à: **Normal, Glace, Poison, Vol, Feu** \nMeilleur set en Attaque: **Pistolet à O - Hydrocanon** \nMeilleur set en Défense: **Tir de Boue - Pouvoir Antique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "armaldo":
        message.channel.send("<:dexter:481153458192252937> **Armaldo**: Pokémon de type **Roche/Insecte** <:dexter:481153458192252937> \nVulnérable à: **Eau, Roche, Acier** \nRésistant à: **Poison, Normal** \nMeilleur set en Attaque: **Survinsecte - Boule Roc** \nMeilleur set en Défense: **Survinsecte - Boule Roc**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "braségali":
        message.channel.send("<:dexter:481153458192252937> **Braségali**: Pokémon de type **Feu/Combat** <:dexter:481153458192252937> \nVulnérable à: **Vol, Sol, Psy, Eau** \nRésistant à: **Acier, Plante, Glace, Ténèbres, Feu, Insecte** \nMeilleur set en Attaque: **Riposte - Surchauffe** \nMeilleur set en Défense: **Danse Flamme - Surchauffe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "Ectoplasma":
        message.channel.send("<:dexter:481153458192252937> **Ectoplasma**: Pokémon de type **Spectre/Poison** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Sol, Spectre, Psy** \nRésistant à: **Fée, Plante, Insecte, Poison, Normal, Combat** \nMeilleur set en Attaque: **Châtiment -  Ball'Ombre** \nMeilleur set en Défense: **Châtiment - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "Ptéra":
        message.channel.send("<:dexter:481153458192252937> **Ptéra**: Pokémon de type **Roche/Vol** <:dexter:481153458192252937> \nVulnérable à: **Electrik, Glace, Roche, Acier, Eau** \nRésistant à: **Normal, Insecte, Sol, Poison, Vol, Feu** \nMeilleur set en Attaque: **Aile d'Acier - Ultralaser** \nMeilleur set en Défense: **Aile d'Acier - Pouvoir Antique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "kaimorse":
        message.channel.send("<:dexter:481153458192252937> **Kaimorse**: Pokémon de type **Glace, Eau** <:dexter:481153458192252937> \nVulnérable à: **Combat, Roche, Electrik, Plante** \nRésistant à: **Eau, Plante** \nMeilleur set en Attaque: **Cascade - Blizzard** \nMeilleur set en Défense: **Cascade - Blizzard**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "lokhlass":
        message.channel.send("<:dexter:481153458192252937> **Lokhlass**: Pokémon de type **Eau/Glace** <:dexter:481153458192252937> \nVulnérable à: **Combat, Roche, Electrik, Plante** \nRésistant à: **Eau, Glace** \nMeilleur set en Attaque: **Pistolet à O - Blizzard** \nMeilleur set en Défense: **Souffle Glacé - Blizzard**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "jungko":
        message.channel.send("<:dexter:481153458192252937> **Jungko**: Pokémon de type **Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison, Insecte, Glace** \nRésistant à: **Eau, Plante, Electrik, Sol** \nMeilleur set en Attaque: **Taillade - Lame-Feuille** \nMeilleur set en Défense: **Balle Graine - Lame-Feuille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "florizarre":
        message.channel.send("<:dexter:481153458192252937> **Florizarre**: Pokémon de type **Plante/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Glace, Psy** \nRésistant à: **Combat, Eau, Electrik, Fée, Plante** \nMeilleur set en Attaque: **Fouet Lianes - Végé-Attak** \nMeilleur set en Défense: **Tranch'Herbe - Végé-Attak**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "relicanth":
        message.channel.send("<:dexter:481153458192252937> **Relicanth**: Pokémon de type **Eau/Roche** <:dexter:481153458192252937> \nVulnérable à: **Plante, Sol, Combat, Electrik** \nRésistant à: **Normal, Glace, poison, Vol, Feu** \nMeilleur set en Attaque: **Pistolet à O - Hydrocanon** \nMeilleur set en Défense: **Psykoud'Boul - Pouvoir Antique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "porygon2":
        message.channel.send("<:dexter:481153458192252937> **Porygon2**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Puissance Cachée - Ultralaser** \nMeilleur set en Défense: **Puissance Cachée - Ultralaser**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "démolosse":
        message.channel.send("<:dexter:481153458192252937> **Démolosse**: Pokémon de type **Ténèbres/Feu** <:dexter:481153458192252937> \nVulnérable à: **Combat, Sol, Roche, Eau** \nRésistant à: **Acier, Spectre, Plante, Glace, Ténèbres, Feu, Psy** \nMeilleur set en Attaque: **Crocs Feu - Déflagration** \nMeilleur set en Défense: **Aboiement - Déflagration**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "kabutops":
        message.channel.send("<:dexter:481153458192252937> **Kabutops**: Pokémon de type **Roche/Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Sol, Combat, Electrik** \nRésistant à: **Normal, Glace, Poison, Vol, Feu** \nMeilleur set en Attaque: **Eclate-Roc - Lame de Roc** \nMeilleur set en Défense: **Eclate-Roc - Pouvoir Antique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "lippoutou":
        message.channel.send("<:dexter:481153458192252937> **Lippoutou**: Pokémon de type **Glace/Psy** <:dexter:481153458192252937> \nVulnérable à: **Feu, Ténèbres, Roche, Insecte, Spectre, Acier** \nRésistant à: **Psy, Glace** \nMeilleur set en Attaque: **Choc Mental - Avalanche** \nMeilleur set en Défense: **Choc Mental - Avalanche**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "Tauros":
        message.channel.send("<:dexter:481153458192252937> **Tauros**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Charge - Séisme** \nMeilleur set en Défense: **Psykoud'Boul - Koud'Korne**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "Flagadoss":
        message.channel.send("<:dexter:481153458192252937> **Flagadoss**: Pokémon de type **Eau/Psy** <:dexter:481153458192252937> \nVulnérable à: **Spectre, Ténèbres, Electrik, Plante, Insecte** \nRésistant à: **Acier, Combat, Eau, Psy, Glace, Feu** \nMeilleur set en Attaque: **Choc Mental - Psyko** \nMeilleur set en Défense: **Choc Mental - Laser Glace**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "Roigada":
        message.channel.send("<:dexter:481153458192252937> **Roigada**: Pokémon de type **Eau/Psy** <:dexter:481153458192252937> \nVulnérable à: **Spectre, Ténèbres, Electrik, Plante, Insecte** \nRésistant à: **Acier, Combat, Eau, Psy, Glace, Feu** \nMeilleur set en Attaque: **Choc Mental - Psyko** \nMeilleur set en Défense: **Choc Mental - Déflagration**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "crustabri":
        message.channel.send("<:dexter:481153458192252937> **Crustabri**: Pokémon de type **Eau/Glace** <:dexter:481153458192252937> \nVulnérable à: **Combat, Roche, Electrik, Plante** \nRésistant à: **Eau, Glace** \nMeilleur set en Attaque: **Souffle Glacé - Avalanche** \nMeilleur set en Défense: **Eclats Glace - Avalanche**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "nostenfer":
        message.channel.send("<:dexter:481153458192252937> **Nostenfer**: Pokémon de type **Poison/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Psy, Electrik** \nRésistant à: **Sol, Poison, Fée, Combat, Plante, Insecte** \nMeilleur set en Attaque: **Lame d'Air - Bomb-Beurk** \nMeilleur set en Défense: **Lame d'Air - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "insécateur":
        message.channel.send("<:dexter:481153458192252937> **Insécateur**: Pokémon de type **Insecte/Vol** <:dexter:481153458192252937> \nVulnérable à: **Roche, Feu, Vol, Glace, Electrik** \nRésistant à: **Insecte, Combat, Plante, Sol** \nMeilleur set en Attaque: **Lame d'Air - Plaie-Croix** \nMeilleur set en Défense: **Lame d'Air - Aéropique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "kangourex":
        message.channel.send("<:dexter:481153458192252937> **Kangourex**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Coud'Boue - Colère** \nMeilleur set en Défense: **Coud'Boue - Colère**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "libégon":
        message.channel.send("<:dexter:481153458192252937> **Libégon**: Pokémon de type **Sol/Dragon** <:dexter:481153458192252937> \nVulnérable à: **Glace, Fée, Dragon** \nRésistant à: **Roche, Poison, Feu, Electrik** \nMeilleur set en Attaque: **Draco-Queue - Séisme** \nMeilleur set en Défense: **Draco-Queue - Dracogriffe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "tartard":
        message.channel.send("<:dexter:481153458192252937> **Tartard**: Pokémon de type **Eau/Combat** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Psy, Electrik, Plante** \nRésistant à: **Acier, Eau, Insecte, Roche, Glace, Ténèbres, Feu** \nMeilleur set en Attaque: **Ecume - Dynamopoing** \nMeilleur set en Défense: **Ecume - Dynamopoing**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "grabull":
        message.channel.send("<:dexter:481153458192252937> **Granbull**: Pokémon de type **Fée** <:dexter:481153458192252937> \nVulnérable à: **Acier, Poison** \nRésistant à: **Combat, Insecte, Ténèbres, Dragon** \nMeilleur set en Attaque: **Aboiement - Câlinerie** \nMeilleur set en Défense: **Aboiement - Câlinerie**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "steelix":
        message.channel.send("<:dexter:481153458192252937> **Steelix**: Pokémon de type **Acier/Sol** <:dexter:481153458192252937> \nVulnérable à: **Feu, Eau, Sol, Combat** \nRésistant à: **Dragon, Psy, Normal, Acier, Insecte, Vol, Fée, Electrik, Roche, Poison** \nMeilleur set en Attaque: **Queue de Fer - Tacle Lourd** \nMeilleur set en Défense: **Queue de Fer - Séisme**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "hyporoi":
        message.channel.send("<:dexter:481153458192252937> **Hyporoi**: Pokémon de type **Eau/Dragon** <:dexter:481153458192252937> \nVulnérable à: **Fée, Dragon** \nRésistant à: **Acier, Eau, Feu** \nMeilleur set en Attaque: **Cascade - Colère** \nMeilleur set en Défense: **Cascade - Colère**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "chapignon":
        message.channel.send("<:dexter:481153458192252937> **Chapignon**: Pokémon de type **Plante/Combat** <:dexter:481153458192252937> \nVulnérable à: **Vol, Fée, Psy, Glace, Feu, Poison** \nRésistant à: **Roche, Eau, Plante, Electrik, Sol, Ténèbres** \nMeilleur set en Attaque: **Riposte - Dynamopoing** \nMeilleur set en Défense: **Balle Graine - Dynamopoing**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "kicklee":
        message.channel.send("<:dexter:481153458192252937> **Kicklee**: Pokémon de type **Combat** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Psy** \nRésistant à: **Insecte, Roche, Ténèbres** \nMeilleur set en Attaque: **Eclate-Roc - Close Combat** \nMeilleur set en Défense: **Eclate-Roc - Close Combat**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "nidoking":
        message.channel.send("<:dexter:481153458192252937> **Nidoking**: Pokémon de type **Poison/Sol** <:dexter:481153458192252937> \nVulnérable à: **Eau, Sol, Glace, Psy** \nRésistant à: **Combat, Insecte, Roche, Fée, Electrik, Poison** \nMeilleur set en Attaque: **Direct Toxik - Séisme** \nMeilleur set en Défense: **Queue de Fer - Séisme**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "tentacruel":
        message.channel.send("<:dexter:481153458192252937> **Tentacruel**: Pokémon de type **Eau/Poison** <:dexter:481153458192252937> \nVulnérable à: **Sol, Psy, Electrik** \nRésistant à: **Glace, Feu, Eau, Combat, Acier, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Direct Toxik - Hydrocanon** \nMeilleur set en Défense: **Direct Toxik - Hydrocanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "tarpaud":
        message.channel.send("<:dexter:481153458192252937> **Tarpaud**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Elektrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Ecume - Surf** \nMeilleur set en Défense: **Ecume - Hydrocanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "Rafflesia":
        message.channel.send("<:dexter:481153458192252937> **Rafflesia**: Pokémon de type **Plante/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Glace, Psy** \nRésistant à: **Combat, Eau, Electrik, Fée, Plante** \nMeilleur set en Attaque: **Acide - Lance-Soleil** \nMeilleur set en Défense: **Tranch'Herbe - Lance-Soleil**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "mélodelfe":
        message.channel.send("<:dexter:481153458192252937> **Mélodelfe**: Pokémon de type **Fée** <:dexter:481153458192252937> \nVulnérable à: **Acier, Poison** \nRésistant à: **Combat, Insecte, Ténèbres, Dragon** \nMeilleur set en Attaque: **Rayon Chargé - Eclat Magique** \nMeilleur set en Défense: **Rayon Chargé - Eclat Magique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "nidoqueen":
        message.channel.send("<:dexter:481153458192252937> **Nidoqueen**: Pokémon de type **Poison/Sol** <:dexter:481153458192252937> \nVulnérable à: **Eau, Sol, Glace, Psy** \nRésistant à: **Combat, Insecte, Roche, Fée, Electrik, Poison** \nMeilleur set en Attaque: **Direct Toxik - Séisme** \nMeilleur set en Défense: **Direct Toxic - Séisme**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "sablaireau":
        message.channel.send("<:dexter:481153458192252937> **Sablaireau**: Pokémon de type **Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante, Glace, Eau** \nRésistant à: **Roche, Poison, Electrik** \nMeilleur set en Attaque: **Griffe Acier, Séisme** \nMeilleur set en Défense: **Griffe Acier - Piétisol** \n \n<:dexter:481153458192252937> **Sablaireau d'Alola**: Pokémon de type **Glace/Acier** <:dexter:481153458192252937> \nVulnérable à: **Feu, Combat, Sol** \nRésistant à: **Dragon, Psy, Normal, Plante, Insecte, Vol, Fée, Glace, Poison** \nMeilleur set en Attaque: **Griffe Acier - Blizzard** \nMeilleur set en Défense: **Poudreuse - Blizzard**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "colhomard":
        message.channel.send("<:dexter:481153458192252937> **Colhomard**: Pokémon de type **Eau/Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Fée, Insecte, Electrik, Plante, Combat** \nRésistant à: **Spectre, Acier, Eau, Glace, Ténèbres, Feu, Psy** \nMeilleur set en Attaque: **Cascade - Tranche-Nuit** \nMeilleur set en Défense: **Cascade - Tranche-Nuit**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "écrémeuh":
        message.channel.send("<:dexter:481153458192252937> *Écrémeuh***: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Charge - Écrasement** \nMeilleur set en Défense: **Psykoud'Boul - Plaquage**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "groret":
        message.channel.send("<:dexter:481153458192252937> **Groret**: Pokémon de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Extrasenseur - Ball'Ombre** \nMeilleur set en Défense: **Extrasenseur - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "staross":
        message.channel.send("<:dexter:481153458192252937> **Staross**: Pokémon de type **Eau/Psy** <:dexter:481153458192252937> \nVulnérable à: **Spectre, Ténèbres, Electrik, Plante, Insecte** \nRésistant à: **Acier, Combat, Eau, Psy, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Hydrocanon** \nMeilleur set en Défense: **Puissance Cachée - Hydrocanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "Tortank":
        message.channel.send("<:dexter:481153458192252937> **Tortank**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Hydroblast** \nMeilleur set en Défense: **Pistolet à O - Hydroblast**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "cochignon":
        message.channel.send("<:dexter:481153458192252937> **Cochignon**: Pokémon de type **Glace/Sol** <:dexter:481153458192252937> \nVulnérable à: **Feu, Combat, Plante, Eau, Acier** \nRésistant à: **Poison, Electrik** \nMeilleur set en Attaque: **Eclat Glace - Avalanche** \nMeilleur set en Défense: **Poudreuse - Avalanche**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "absol":
        message.channel.send("<:dexter:481153458192252937> **Absol**: Pokémon de type **Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Fée, Combat, Insecte** \nRésistant à: **Spectre, Ténèbres, Psy** \nMeilleur set en Attaque: **Aboiement - Vibrobscur** \nMeilleur set en Défense: **Aboiement - Vibrobscur**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "akwakwak":
        message.channel.send("<:dexter:481153458192252937> **Akwakwak**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Hydrocanon** \nMeilleur set en Défense: **Choc Mental - Hydrocanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "empiflor":
        message.channel.send("<:dexter:481153458192252937> **Empiflor**: Pokémon de type **Plante/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Glace, Psy** \nRésistant à: **Combat, Eau, Electrik, Fée, Plante** \nMeilleur set en Attaque: **Acide - Lance-Soleil** \nMeilleur set en Défense: **Tranch'Herbe - Lance-Soleil**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "brouhabam":
        message.channel.send("<:dexter:481153458192252937> **Brouhabam**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Morsure - Déflagration** \nMeilleur set en Défense: **Etonnement - Mâchouille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "foretress":
        message.channel.send("<:dexter:481153458192252937> **Foretress**: Pokémon de type **Insecte/Acier** <:dexter:481153458192252937> \nVulnérable à: **Feu** \nRésistant à: **Dragon, Glace, Psy, Normal, Insecte, Acier, Fée, Plante, Poison** \nMeilleur set en Attaque: **Piqûre - Tacle Lourd** \nMeilleur set en Défense: **Survinsecte - Tacle Lourd**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "wailord":
        message.channel.send("<:dexter:481153458192252937> **Wailord**: Pokémon de type **Plante/Electrik** <:dexter:481153458192252937> \nVulnérable à: **Eau** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Surf** \nMeilleur set en Défense: **Psykoud'Boul - Surf**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "magmar":
        message.channel.send("<:dexter:481153458192252937> **Magmar**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Flammèche - Déflagration** \nMeilleur set en Défense: **Flammèche - Lance-Flammes**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "galopa":
        message.channel.send("<:dexter:481153458192252937> **Galopa**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Danse Flamme - Déflagration** \nMeilleur set en Défense: **Danse Flamme - Déflagration**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "séléroc":
        message.channel.send("<:dexter:481153458192252937> **Séléroc**: Pokémon de type **Roche/Psy** <:dexter:481153458192252937> \nVulnérable à: **Ténébres, Sol, Insecte, Spectre, Acier, Eau, Plante** \nRésistant à: **Normal, Psy, Poison, Vol, Feu** \nMeilleur set en Attaque: **Jet-Pierres - Eboulement** \nMeilleur set en Défense: **Choc Mental - Eboulement**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "solaroc":
        message.channel.send("<:dexter:481153458192252937> **Solaroc**: Pokémon de type **Roche/Psy** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Sol, Insecte, Spectre, Acier, Eau, Plante** \nRésistant à: **Normal, Psy, Poison, Vol, Feu** \nMeilleur set en Attaque: **Choc Mental - Lance Soleil** \nMeilleur set en Défense: **Choc Mental - Lance-Soleil**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "magnéton":
        message.channel.send("<:dexter:481153458192252937> **Magnéton**: Pokémon de type **Electrik/Acier** <:dexter:481153458192252937> \nVulnérable à: **Sol, Feu, Combat** \nRésistant à: **Dragon, Glace, Psy, Electrik, Normal, Plante, Insecte, Roche, Fée, Acier, Poison, Vol** \nMeilleur set en Attaque: **Etiencelle - Elecanon** \nMeilleur set en Défense: **Rayon Chargée - Bombaimant**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "ludicolo":
        message.channel.send("<:dexter:481153458192252937> **Ludicolo**: Pokémon de type **Eau/Plante** <:dexter:481153458192252937> \nVulnérable à: **Vol, Poison, Insecte** \nRésistant à: **Acier, Sol, Eau** \nMeilleur set en Attaque: **Tranch'Herbe - Lance-Soleil** \nMeilleur set en Défense: **Ecume - Lance-Soleil**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "méganium":
        message.channel.send("<:dexter:481153458192252937> **Méganium**: Pokémon de type **Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison, Insecte, Glace** \nRésistant à: **Eau, Plante, Electrik, Sol** \nMeilleur set en Attaque: **Fouet Lianes - Lance-Soleil** \nMeilleur set en Défense: **Tranch'Herbe - Lance-Soleil**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "mangriff":
        message.channel.send("<:dexter:481153458192252937> **Mangriff**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Griffe Ombre - Close Combat** \nMeilleur set en Défense: **Griffe Ombre - Tunnel**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "saquedeneu":
        message.channel.send("<:dexter:481153458192252937> **Saquedeneu**: Pokémon de type **Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison, Insecte, Glace** \nRésistant à: **Eau, Plante, Electrik, Sol** \nMeilleur set en Attaque: **Fouet Lianes - Lance-Soleil** \nMeilleur set en Défense: **Harcèlement - Lance-Soleil**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "élektek":
        message.channel.send("<:dexter:481153458192252937> **Élektek**: Pokémon de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrik, Vol** \nMeilleur set en Attaque: **Éclair - Tonnerre** \nMeilleur set en Défense: **Éclair - Tonnerre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "tengalice":
        message.channel.send("<:dexter:481153458192252937> **Tengalice**: Pokémon de type **Plante/Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Fée, Glace, Combat, Feu, Poison, Vol** \nRésistant à: **Sol, Spectre, Eau, Plante, Electrik, Ténèbres, Psy** \nMeilleur set en Attaque: **Tranch'Herbe - Lame-Feuille** \nMeilleur set en Défense: **Feinte - Lame-Feuille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "smogogo":
        message.channel.send("<:dexter:481153458192252937> **Smogogo**: Pokémon de type **Poison** <:dexter:481153458192252937> \nVulnérable à: **Psy, Sol** \nRésistant à: **Combat, Plante, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Harcèlement - Bomb-Beurk** \nMeilleur set en Défense: **Harcèlement - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "feunard":
        message.channel.send("<:dexter:481153458192252937> **Feunard**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Danse Flamme - Surchauffe** \nMeilleur set en Défense: **Danse Flamme - Surchauffe** \n \n<:dexter:481153458192252937> **Feunard d'Alola**: Pokémon de type **Glace/Fée** <:dexter:481153458192252937> \nVulnérable à: **Acier, Feu, Poison, Roche** \nRésistant à: **Insecte, Glace, Ténèbres, Dragon** \nMeilleur set en Attaque: **Feinte - Eclat Magique** \nMeilleur set en Défense: **Poudreuse - Eclat Magique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "dodrio":
        message.channel.send("<:dexter:481153458192252937> **Dodrio**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Electrik** \nRésistant à: **Plante, Insecte, Spectre, Sol** \nMeilleur set en Attaque: **Aile d'Acier - Bec Vrille** \nMeilleur set en Défense: **Feinte - Bec Vrille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "maskadra":
        message.channel.send("<:dexter:481153458192252937> **Maskadra**: Pokémon de type **Insecte/Vol** <:dexter:481153458192252937> \nVulnérable à: **Roche, Feu, Vol, Glace, Electrik** \nRésistant à: **Insecte, Combat, Plante, Sol** \nMeilleur set en Attaque: **Lame d'Air - Vent Argenté** \nMeilleur set en Défense: **Harcèlement - Vent Argenté**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "élecsprint":
        message.channel.send("<:dexter:481153458192252937> **Élecsprint**: Pokémon de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrik, Vol** \nMeilleur set en Attaque: **Rayon Chargé - Éclair Fou** \nMeilleur set en Défense: **Rayon Chargé - Éclair Fou**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "octillery":
        message.channel.send("<:dexter:481153458192252937> **Octillery**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Détricanon** \nMeilleur set en Défense: **Tir de Boue - Vibraqua**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "joliflor":
        message.channel.send("<:dexter:481153458192252937> **Joliflor**: Pokémon de type **Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison, Insecte, Glace** \nRésistant à: **Eau, Plante, Electrik, Sol** \nMeilleur set en Attaque: **Tranch'Herbe - Lame-Feuille** \nMeilleur set en Défense: **Tranch'Herbe - Lame-Feuille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "colossinge":
        message.channel.send("<:dexter:481153458192252937> **Colossinge**: Pokémon de type **Combat** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Psy** \nRésistant à: **Insecte, Roche, Ténèbres** \nMeilleur set en Attaque: **Riposte - Close Combat** \nMeilleur set en Défense: **Riposte - Close Combat**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "tygnon":
        message.channel.send("<:dexter:481153458192252937> **Tygnon**: Pokémon de type **Combat** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Psy** \nRésistant à: **Insecte, Roche, Ténèbres** \nMeilleur set en Attaque: **Ripsote - Close Combat** \nMeilleur set en Défense: **Riposte - Risposte - Poing de Feu**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "éoko":
        message.channel.send("<:dexter:481153458192252937> **Éoko**: Pokémon de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Extrasenseur - Ball'Ombre** \nMeilleur set en Défense: **Extrasenseur - Choc Psy**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "cacturne":
        message.channel.send("<:dexter:481153458192252937> **Cacturne**: Pokémon de type **Plante/Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Fée, Glace, Combat, Feu, Poison, Vol** \nRésistant à: **Sol, Spectre, Eau, Plante, Electrik, Ténèbres, Psy** \nMeilleur set en Attaque: **Coup Bas - Noeud Herbe** \nMeilleur set en Défense: **Direct Toxic - Noeud Herbe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "vacilys":
        message.channel.send("<:dexter:481153458192252937> **Vacilys**: Pokémon de type **Roche, Plante** <:dexter:481153458192252937> \nVulnérable à: **Combat, Glace, Insecte, Acier** \nRésistant à: **Electrik, Normal** \nMeilleur set en Attaque: **Harcèlement - Noeud Herbe** \nMeilleur set en Défense: **Harcèlement - Noeud Herbe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "lanturn":
        message.channel.send("<:dexter:481153458192252937> **Lanturn**: Pokémon de type **Eau/Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol, Plante** \nRésistant à: **Eau, Glace, Vol, Feu, Acier** \nMeilleur set en Attaque: **Pistolet à O - Hydrocanon** \nMeilleur set en Défense: **Rayon Chargé - Tonnerre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "branette":
        message.channel.send("<:dexter:481153458192252937> **Branette**: Pokémon de type **Spectre** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Spectre** \nRésistant à: **Insecte, Poison, Combat, Normal** \nMeilleur set en Attaque: **Griffe Ombre - Ball'Ombre** \nMeilleur set en Défense: **Châtiment - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "simularbre":
        message.channel.send("<:dexter:481153458192252937> **Simularbre**: Pokémon de type **Roche** <:dexter:481153458192252937> \nVulnérable à: **Acier, Sol, Combat, Eau, Plante** \nRésistant à: **Normal, Poison, Vol, Feu** \nMeilleur set en Attaque: **Jet-Pierres - Lmae de Roc** \nMeilleur set en Défense: **Jet-Pierres - Eboulement**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "noctali":
        message.channel.send("<:dexter:481153458192252937> **Noctali**: Pokémon de type **Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Fée, Combat, Insecte** \nRésistant à: **Spectre, Ténèbres, Psy** \nMeilleur set en Attaque: **Aboiement - Tricherie** \nMeilleur set en Défense: **Aboiement - Dernier Recours**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "hypnomade":
        message.channel.send("<:dexter:481153458192252937> **Hypnomade**: Pokémon de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Specte** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Choc Mental - Prescience** \nMeilleur set en Défense: **Choc Mental - Prescience**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "héliatronc":
        message.channel.send("<:dexter:481153458192252937> **Héliatronc**: Pokémon de type **Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison, Insecte, Glace** \nRésistant à: **Eau, Plante, Electrik, Sol** \nMeilleur set en Attaque: **Tranch'Herbe - Lance-Soleil** \nMeilleur set en Défense: **Balle Graine - Lance-Soleil**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "poissoroy":
    message.channel.send("<:dexter:481153458192252937> **Poissoroy**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Cascade - Laser Glace** \nMeilleur set en Défense: **Cascade - Laser Glace**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "noarfang":
        message.channel.send("<:dexter:481153458192252937> **Noarfang**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Electrik** \nRésistant à: **Plante, Insecte, Spectre, Sol** \nMeilleur set en Attaque: **Cru-Aile - Piqué** \nMeilleur set en Défense: **Extrasenseur - Piqué**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "chartor":
        message.channel.send("<:dexter:481153458192252937> **Chartor**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Danse Flamme - Surchauffe** \nMeilleur set en Défense: **Danse Flamme - Surchauffe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "airmure":
        message.channel.send("<:dexter:481153458192252937> **airmure**: Pokémon de type **Acier/Vol** <:dexter:481153458192252937> \nVulnérable à: **Electrik, Feu** \nRésistant à: **Dragon, Psy, Normal, Acier, Sol, Vol, Fée, Plante, Insecte, Poison** \nMeilleur set en Attaque: **Aile d'Acier - Piqué** \nMeilleur set en Défense: **Lame d'Air - Piqué**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "démanta":
        message.channel.send("<:dexter:481153458192252937> **Démanta**: Pokémon de type **Eau/Vol** <:dexter:481153458192252937> \nVulnérable à: **Electrik, Roche** \nRésistant à: **Combat, Eau, Acier, Insecte, Feu, Sol** \nMeilleur set en Attaque: **Cru-Aile - Laser Glace** \nMeilleur set en Défense: **Ecume - Laser Glace**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raichu":
        message.channel.send("<:dexter:481153458192252937> **Raichu**: Pokémon de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrik, Vol** \nMeilleur set en Attaque: **Etincelle - Eclair Fou** \nMeilleur set en Défense: **Change Eclair - Eclair Fou** \n \n<:dexter:481153458192252937> **Raichu d'Alola**: Pokémon de type **Electrik/Psy** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Sol, Insecte, Spectre** \nRésistant à: **Combat, Acier, Electrik, Psy, Vol** \nMeilleur set en Attaque: **Etincelle - Eclair Fou** \nMeilleur set en Défense: **Change Eclair - Eclair Fou**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "camerupt":
        message.channel.send("<:dexter:481153458192252937> **Camerupt**: Pokémon de type **Feu/Sol** <:dexter:481153458192252937> \nVulnérable à: **Eau, Sol** \nRésistant à: **Feu, Insecte, Acier, Poison, Fée, Electrik** \nMeilleur set en Attaque: **Flammèche - Surchauffe** \nMeilleur set en Défense: **Eclate-Roc - Surchauffe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "galegon":
        message.channel.send("<:dexter:481153458192252937> **Galegon**: Pokémon de type **Acier/Roche** <:dexter:481153458192252937> \nVulnérable à: **Sol, Combat, Eau** \nRésistant à: **Dragon, Glace, Psy, Fée, Insecte, Roche, Vol, Normal, Poison** \nMeilleur set en Attaque: **Queue de Fer - Eboulement** \nMeilleur set en Défense: **Queue de Fer - Eboulement**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "roucarnage":
        message.channel.send("<:dexter:481153458192252937> **Roucarnage**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Electrik** \nRésistant à: **Plante, Insecte, Spectre, Sol** \nMeilleur set en Attaque: **Lame d'Air - Vent Violent** \nMeilleur set en Défense: **Lame d'Air - Vol**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "barbicha":
        message.channel.send("<:dexter:481153458192252937> **Barbicha**: Pokémon de type **Eau/Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante** \nRésistant à: **Acier, Electrik, Roche, Poison, Feu** \nMeilleur set en Attaque: **Pistolet à O - Blizzard** \nMeilleur set en Défense: **Tir de Boue - Boue-Bombe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "cerfrousse":
        message.channel.send("<:dexter:481153458192252937> **Cerfrousse**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Charge - Eclair Fou** \nMeilleur set en Défense: **Psykoud'Boul - Eclair Fou**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "sharpedo":
        message.channel.send("<:dexter:481153458192252937> **Sharpedo**: Pokémon de type **Eau/Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Fée, Insecte, Electrik, Plante, Combat** \nRésistant à: **Spectre, Acier, Eau, Glace, Ténèbres, Feu, Psy** \nMeilleur set en Attaque: **Cascade - Hydrocanon** \nMeilleur set en Défense: **Cascade - Mâchouille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "m.mime":
        message.channel.send("<:dexter:481153458192252937> **M. Mime**: Pokémon de type **Psy/Fée** <:dexter:481153458192252937> \nVulnérable à: **Poison, Spectre, Acier** \nRésistant à: **Psy, Combat, Dragon** \nMeilleur set en Attaque: **Choc Mental - Ball'Ombre** \nMeilleur set en Défense: **Choc Mental - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "hypocéan":
        message.channel.send("<:dexter:481153458192252937> **Hypocéan**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Hydrocanon** \nMeilleur set en Défense: **Pistolet à O - Dracochoc**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "xatu":
        message.channel.send("<:dexter:481153458192252937> **Xatu**: Pokémon de type **Psy/Vol** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Glace, Roche, Electrik, Spectre** \nRésistant à: **Plante, Psy, Combat, Sol** \nMeilleur set en Attaque: **Lame d'Air - Prescience** \nMeilleur set en Défense: **Lame d'Air - Aéropique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "bekipan":
        message.channel.send("<:dexter:481153458192252937> **Bekipan**: Pokémon de type **Eau/Vol** <:dexter:481153458192252937> \nVulnérable à: **Electrik, Roche** \nRésistant à: **Combat, Eau, Acier, Insecte, Feu, Sol** \nMeilleur set en Attaque: **Pistolet à O - Hydrocanon** \nMeilleur set en Défense: **Cru-Aile - Hydrocanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "drackhaus":
        message.channel.send("<:dexter:481153458192252937> **Drackhaus**: Pokémon de type **Dragon** <:dexter:481153458192252937> \nVulnérable à: **Fée, Dragon, Glace** \nRésistant à: **Eau, Plante, Electrik, Feu** \nMeilleur set en Attaque: **Dracosouffle - Dracochoc** \nMeilleur set en Défense: **Flammèche - Dracochoc**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "oniglali":
        message.channel.send("<:dexter:481153458192252937> **Oniglali**: Pokémon de type **Glace** <:dexter:481153458192252937> \nVulnérable à: **Feu, Combat, Roche, Acier** \nRésistant à: **Glace** \nMeilleur set en Attaque: **Souffle Glacé - Avalanche** \nMeilleur set en Défense: **Eclats Glace - Avalanche**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "aéromite":
        message.channel.send("<:dexter:481153458192252937> **Aéromite**: Pokémon de type **Insecte/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche, Psy** \nRésistant à: **Insecte, Poison, Fée, Combat, Plante** \nMeilleur set en Attaque: **Harcèlement - Bourdon** \nMeilleur set en Défense: **Choc Mental - Bourdon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "maraiste":
        message.channel.send("<:dexter:481153458192252937> **Maraiste**: Pokémon de type **Eau/Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante** \nRésistant à: **Acier, Electrik, Roche, Poison, Feu** \nMeilleur set en Attaque: **Pistolet à O - Séisme** \nMeilleur set en Défense: **Tir de Boue - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "séviper":
        message.channel.send("<:dexter:481153458192252937> **Séviper**: Pokémon de type **Poison** <:dexter:481153458192252937> \nVulnérable à: **Psy, Sol** \nRésistant à: **Combat, Plante, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Direct Toxik - Mâchouille** \nMeilleur set en Défense: **Queue de Fer - Mâchouille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "qwilfish":
        message.channel.send("<:dexter:481153458192252937> **Qwilfish**: Pokémon de type **Eau/Poison** <:dexter:481153458192252937> \nVulnérable à: **Sol, Psy, Electrik** \nRésistant à: **Glace, Feu, Eau, Combat, Acier, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Pistolet à O - Cradovague** \nMeilleur set en Défense: **Dard-Venin - Laser Glace**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "machopeur":
        message.channel.send("<:dexter:481153458192252937> **Machopeur**: Pokémon de type **Combat** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Psy** \nRésistant à: **Insecte, Roche, Ténèbres** \nMeilleur set en Attaque: **Poing-Karaté - Dynamopoing** \nMeilleur set en Défense: **Poing-Karaté - Dynamopoing**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "grodoudou":
        message.channel.send("<:dexter:481153458192252937> **Grodoudou**: Pokémon de type **Normal/Fée** <:dexter:481153458192252937> \nVulnérable à: **Acier, Poison** \nRésistant à: **Insecte, Ténèbres, Spectre, Dragon** \nMeilleur set en Attaque: **Ecras'Face - Ultralaser** \nMeilleur set en Défense: **Feinte - Câlinerie**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "kapoera":
        message.channel.send("<:dexter:481153458192252937> **Kapoera**: Pokémon de type **Combat** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Psy,** \nRésistant à: **Insecte, Roche, Ténèbres** \nMeilleur set en Attaque: **Riposte - Close Combat** \nMeilleur set en Défense: **Eclate-Roc - Gyroballe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "électrode":
        message.channel.send("<:dexter:481153458192252937> **Électrode**: Pokémon de type **Électrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Électrik, Vol** \nMeilleur set en Attaque: **Change Eclair - Change Eclair** \nMeilleur set en Défense: **Change Eclair - Ultralaser**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "vigoroth":
        message.channel.send("<:dexter:481153458192252937> **Vigoroth**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Griffe - Plaquage** \nMeilleur set en Défense: **Riposte - Plaquage**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "lamantine":
        message.channel.send("<:dexter:481153458192252937> **Lamantine**: Pokémon de type **Eau/Glace** <:dexter:481153458192252937> \nVulnérable à: **Combat, Roche, Electrik, Plante** \nRésistant à: **Eau, Glace** \nMeilleur set en Attaque: **Souffle Glacé - Blizzard** \nMeilleur set en Défense: **Queue de Fer - Blizzard**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "avaltout":
        message.channel.send("<:dexter:481153458192252937> **Avaltout** ( ͡° ͜ʖ ͡°): Pokémon de type **Poison** <:dexter:481153458192252937> \nVulnérable à: **Psy/Sol** \nRésistant à: **Combat, Plante, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Harcèlement - Bomb-Beurk** \nMeilleur set en Défense: **Eclate-Roc - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "altaria":
        message.channel.send("<:dexter:481153458192252937> **Altaria**: Pokémon de type **Dragon/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Fée, Dragon, Roche** \nRésistant à: **Combat, Eau, Insecte, Feu, Plante, Sol** \nMeilleur set en Attaque: **Dracosouffle - Piqué** \nMeilleur set en Défense: **Picpic - Dracochoc**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "farfuret":
        message.channel.send("<:dexter:481153458192252937> **Farfuret**: Pokémon de type **Ténèbres/Glace** <:dexter:481153458192252937> \nVulnérable à: **Combat, Fée, Insecte, Acier, Feu, Roche** \nRésistant à: **Spectre, Glace, Ténèbres, Psy** \nMeilleur set en Attaque: **Feinte - Avalanche** \nMeilleur set en Défense: **Eclat Glace - Avalanche**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "girafarig":
        message.channel.send("<:dexter:481153458192252937> **Girafarig**: Pokémon de type **Normal/Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres** \nRésistant à: **Spectre, Psy** \nMeilleur set en Attaque: **Choc Mental - Psyko** \nMeilleur set en Défense: **Choc Mental - Tonnerre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "kadabra":
        message.channel.send("<:dexter:481153458192252937> **Kadabra**: Pokémon de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Choc Mental - Ball'Ombre** \nMeilleur set en Défense: **Choc Mental - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "tropius":
        message.channel.send("<:dexter:481153458192252937> **Tropius**: Pokémon de type **Plante/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Feu, Vol, Poison, Roche** \nRésistant à: **Eau, Combat, Plante, Sol** \nMeilleur set en Attaque: **Tranch'Herbe - Lame-Feuille** \nMeilleur set en Défense: **Lame d'Air - Lame-Feuille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "nosferalto":
        message.channel.send("<:dexter:481153458192252937> **Nosferalto**: Pokémon de type **Poison/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Psy, Electrik** \nRésistant à: **Sol, Poison, Fée, Combat, Plante, Insecte** \nMeilleur set en Attaque: **Cru-Aile - Ball'Ombre** \nMeilleur set en Défense: **Cru-Aile - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "gravalanch":
        message.channel.send("<:dexter:481153458192252937> **Gravalanch**: Pokémon de type **Roche/Sol** <:dexter:481153458192252937> \nVulnérable à: **Eau, Plante, Sol, Glace, Acier, Combat** \nRésistant à: **Normal, Roche, Vol, Feu, Electrik, Poison** \nMeilleur set en Attaque: **Jet-Pierres - Lame de Roc** \nMeilleur set en Défense: **Coud'Boue - Tunnel** \n \n<:dexter:481153458192252937> **Gravalanch d'Alola**: Pokémon de type **Roche/Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol, Combat, Eau, Plante** \nRésistant à: **Normal, Electrik, Poison, Feu, Vol** \nMeilleur set en Attaque: **Jet-Pierres - Tonnerre** \nMeilleur set en Défense: **Change Eclair - Tonnerre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "rapasdepic":
        message.channel.send("<:dexter:481153458192252937> **Rapasdepic**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Electrik** \nRésistant à: **Plante, Insecte, Spectre, Sol** \nMeilleur set en Attaque: **Picpic - Piqué** \nMeilleur set en Défense: **Picpic - Piqué**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "grahyèna":
        message.channel.send("<:dexter:481153458192252937> **Grahyèna**: Pokémon de type **Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Fée, Combat, Insecte** \nRésistant à: **Spectre, Ténèbres, Psy** \nMeilleur set en Attaque: **Morsure - Câlinerie** \nMeilleur set en Défense: **Crocs Feu - Mâchouille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "kaorine":
        message.channel.send("<:dexter:481153458192252937> **Kaorine**: Pokémon de type **Sol/Psy** <:dexter:481153458192252937> \nVulnérable à: **Eau, Ténèbres, Glace, Plante, Insecte, Spectre** \nRésistant à: **Combat, Roche, Psy, Poison, Electrik** \nMeilleur set en Attaque: **Choc Mental - Séisme** \nMeilleur set en Défense: **Choc Mental - Séisme**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "feuforêve":
        message.channel.send("<:dexter:481153458192252937> **Feuforêve**: Pokémon de type **Spectre** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Spectre** \nRésistant à: **Insecte, Poison, Combat, Normal** \nMeilleur set en Attaque: **Châtiment - Vibroscur** \nMeilleur set en Défense: **Châtiment - Vent Mauvais**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "fardargnan":
        message.channel.send("<:dexter:481153458192252937> **Dardargnan**: Pokémon de type **Insecte/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche, Psy** \nRésistant à: **Insecte, Poison, Fée, Combat, Plante** \nMeilleur set en Attaque: **Direct Toxic - Bomb-Beurk** \nMeilleur set en Défense: **Harcèlement - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "scorplane":
        message.channel.send("<:dexter:481153458192252937> **Scorplane**: Pokémon de type **Sol/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Eau** \nRésistant à: **Combat, Insecte, Electrik, Poison, Sol** \nMeilleur set en Attaque: **Cru-Aile - Tunnel** \nMeilleur set en Défense: **Cru-Aile - Tunnel**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "hélédelle":
        message.channel.send("<:dexter:481153458192252937> **Hélédelle**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Electrik** \nRésistant à: **Plante, Insecte, Spectre, Sol** \nMeilleur set en Attaque: **Cru-Aile - Piqué** \nMeilleur set en Défense: **Cru-Aile - Piqué**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "arbok":
        message.channel.send("<:dexter:481153458192252937> **Arbok**: Pokémon de type **Poison** <:dexter:481153458192252937> \nVulnérable à: **Psy, Sol** \nRésistant à: **Combat, Plante, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Acide - Détricanon** \nMeilleur set en Défense: **Acide - Détricanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "rosélia":
        message.channel.send("<:dexter:481153458192252937> **Rosélia**: Pokémon de type **Plante/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Glace, Psy** \nRésistant à: **Combat, Eau, Electrik, Fée, Plante** \nMeilleur set en Attaque: **Direct Toxic - Bomb-Beurk** \nMeilleur set en Défense: **Tranch'Herbe - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "spectrum":
        message.channel.send("<:dexter:481153458192252937> **Spectrum**: Pokémon de type **Spectre/Poison** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Sol, Spectre, Psy** \nRésistant à: **Fée, Plante, Insecte, Poison, Normal, Combat** \nMeilleur set en Attaque: **Griffe Ombre - Bomb-Beurk** \nMeilleur set en Défense: **Etonnement - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "papilusion":
        message.channel.send("<:dexter:481153458192252937> **Papilusion**: Pokémon de type **Insecte/Vol** <:dexter:481153458192252937> \nVulnérable à: **Roche, Feu, Vol, Glace, Electrik** \nRésistant à: **Insecte, Combat, Plante, Sol** \nMeilleur set en Attaque: **Survinsecte - Bourdon** \nMeilleur set en Défense: **Choc Mental - Bourdon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "ossatueur":
        message.channel.send("<:dexter:481153458192252937> **Ossatueur**: Pokémon de type **Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante, Glace, Eau** \nRésistant à: **Roche, Poison, Electrik** \nMeilleur set en Attaque: **Coud'Boue - Séisme** \nMeilleur set en Défense: **Coud'Boue - Tunnel** \n \n<:dexter:481153458192252937> **Ossatueur d'Alola**: Pokémon de type **Feu - Spectre** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Sol, Roche, Spectre, Eau** \nRésistant à: **Fée, Glace, Feu, Plante, Acier, Poison, Combat, Insecte** \nMeilleur set en Attaque: **Châtiment - Ball'Ombre** \nMeilleur set en Défense: **Châtiment - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "posipi":
        message.channel.send("<:dexter:481153458192252937> **Posipi**: Pokémon de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrik, Vol** \nMeilleur set en Attaque: **Etincelle - Tonnerre** \nMeilleur set en Défense: **Vive-Attaque - Coup d'Jus**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "rhinocorne":
        message.channel.send("<:dexter:481153458192252937> **Rhinocorne**: Pokémon de type **Sol/Roche** <:dexter:481153458192252937> \nVulnérable à: **Eau, Plante, Sol, Glace, Acier, Combat** \nRésistant à: **Normal, Roche, Vol, Feu, Electrik, Poison** \nMeilleur set en Attaque: **Coud'Boue - Piétisol** \nMeilleur set en Défense: **Coud'Boue - Piétisol**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "fouinar":
        message.channel.send("<:dexter:481153458192252937> **Fouinar**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Vive-Attaque - Ultralaser** \nMeilleur set en Défense: **Vive-Attaque - Ultralaser**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "parasect":
        message.channel.send("<:dexter:481153458192252937> **Parasect**: Pokémon de type **Insecte/Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison, Roche, Insecte, Glace** \nRésistant à: **Eau, Electrik, Combat, Plante, Sol** \nMeilleur set en Attaque: **Taillade - Lance-Soleil** \nMeilleur set en Défense: **Survinsecte - Lance-Soleil**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "migalos":
        message.channel.send("<:dexter:481153458192252937> **Migalos**: Pokémon de type **Insecte/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feun Vol, Roche, Psy** \nRésistant à: **Insecte, Poison, Fée, Combat, Plante** \nMeilleur set en Attaque: **Harcèlement - Mégacorne** \nMeilleur set en Défense: **Harcèlement - Poison-Croix**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "lumivole":
        message.channel.send("<:dexter:481153458192252937> **Lumivole**: Pokémon de type **Insecte** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche** \nRésistant à: **Combat, Plante, Sol** \nMeilleur set en Attaque: **Survinsecte - Bourdon** \nMeilleur set en Défense: **Survinsecte - Bourdon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "flobio":
        message.channel.send("<:dexter:481153458192252937> **Flobio**: Pokémon de type **Eau/Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante** \nRésistant à: **Acier, Electrik, Roche, Poison, Feu** \nMeilleur set en Attaque: **Pistolet à O - Surf** \nMeilleur set en Défense: **Tir de Boue - Boue-Bombe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "insolourdo":
        message.channel.send("<:dexter:481153458192252937> **Insolourdo**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Morsure - Eboulement** \nMeilleur set en Défense: **Etonnement - Tunnel**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "draco":
        message.channel.send("<:dexter:481153458192252937> **Draco**: Pokémon de type **Dragon** <:dexter:481153458192252937> \nVulnérable à: **Fée, Dragon, Glace** \nRésistant à: **Eau, Plante, Electrik, Feu** \nMeilleur set en Attaque: **Dracosouffle - Dracochoc** \nMeilleur set en Défense: **Queue de Fer - Dracochoc**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "ymphect":
        message.channel.send("<:dexter:481153458192252937> **Ymphect**: Pokémon de type **Roche/Sol** <:dexter:481153458192252937> \nVulnérable à: **Eau, Plante, Sol, Glace, Acier, Combat** \nRésistant à: **Normal, Roche, Vol, Feu, Electrik, Poison** \nMeilleur set en Attaque: **Morsure - Tunnel** \nMeilleur set en Défense: **Eclate-Roc - Tunnel**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "phogleur":
        message.channel.send("<:dexter:481153458192252937> **Phogleur**: Pokémon de type **Glace/Eau** <:dexter:481153458192252937> \nVulnérable à: **Combat, Roche, Electrik, Plante** \nRésistant à: **Eau, Glace** \nMeilleur set en Attaque: **Pistolet à O - Onde Boréale** \nMeilleur set en Défense: **Poudreuse - Onde Boréale**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "crocrodil":
        message.channel.send("<:dexter:481153458192252937> **Crocrodil**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Vibraqua** \nMeilleur set en Défense: **Pistolet à O - Mâchouille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "négapi":
        message.channel.send("<:dexter:481153458192252937> **Négapi**: Pokémon de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrik, Vol** \nMeilleur set en Attaque: **Etincelle - Tonnerre** \nMeilleur set en Défense: **Vive-Attaque - Coup d'Jus**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "charmillon":
        message.channel.send("<:dexter:481153458192252937> **Charmillon**: Pokémon de type **Insecte/Vol** <:dexter:481153458192252937> \nVulnérable à: **Roche, Feu, Vol, Glace, Electrik** \nRésistant à: **Insecte, Combat, Plante, Sol** \nMeilleur set en Attaque: **Harcèlement - Bourdon** \nMeilleur set en Défense: **Survinsecte - Bourdon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "métang":
        message.channel.send("<:dexter:481153458192252937> **Métang**: Pokémon de type **Acier/Psy** <:dexter:481153458192252937> \nVulnérable à: **Feu, Ténèbres, Sol, Spectre** \nRésistant à: **Dragon, Glace, Normal, Plante, Acier, Roche, Vol, Fée, Psy, Poison** \nMeilleur set en Attaque: **Griffe Acier - Psyko** \nMeilleur set en Défense: **Psykoud'Boul - Gyroballe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "porygon":
        message.channel.send("<:dexter:481153458192252937> **Porygon**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Puissance Cachée - Ultralaser** \nMeilleur set en Défense: **Puissance Cachée - Ultralaser**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "cotovol":
        message.channel.send("<:dexter:481153458192252937> **Cotovol**: Pokémon de type **Plante/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Feu, Vol, Poison, Roche** \nRésistant à: **Eau, Combat, Plante, Sol** \nMeilleur set en Attaque: **Harcèlement - Lance-Soleil** \nMeilleur set en Défense: **Harcèlement - Lance-Soleil**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "herbizarre":
        message.channel.send("<:dexter:481153458192252937> **Herbizarre**: Pokémon de type **Plante/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Glace, Psy** \nRésistant à: **Comnbat, Eau, Electrik, Fée, Plante** \nMeilleur set en Attaque: **Fouet Lianes - Végé-Attak** \nMeilleur set en Défense: **Tranch'Herbe - Végé-Attak**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "rattatac":
        message.channel.send("<:dexter:481153458192252937> **Rattatac**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Vive-Attaque - Ultralaser** \nMeilleur set en Défense: **Vive Attaque - Ultralaser** \n \n<:dexter:481153458192252937> **Rattatac d'Alola**: Pokémon de type **Ténèbres/Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat, Fée, Insecte** \nRésistant à: **Ténèbres, Psy, Spectre** \nMeilleur set en Attaque: **Vive-Attaque - Ultralaser** \nMeilleur set en Défense: **Vive-Attaque - Ultralaser**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "togetic":
        message.channel.send("<:dexter:481153458192252937> **Togetic**: Pokémon de type **Fée/Vol** <:dexter:481153458192252937> \nVulnérable à: **Acier, Glace, Poison, Roche, Electrik** \nRésistant à: **Plante, Ténèbres, Combat, Insecte, Sol, Dragon** \nMeilleur set en Attaque: **Extrasenseur - Eclat Magique** \nMeilleur set en Défense: **Puissance Cachée - Eclat Magique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "volcaropod":
        message.channel.send("<:dexter:481153458192252937> **Volcaropod**: Pokémon de type **Feu/Roche** <:dexter:481153458192252937> \nVulnérable à: **Eau, Sol, Roche, Combat** \nRésistant à: **Normal, Glace, Fée, Insecte, Poison, Vol, Feu** \nMeilleur set en Attaque: **Jet-Pierres - Surchauffe** \nMeilleur set en Défense: **Jet-Pierres - Surchauffe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "persian":
        message.channel.send("<:dexter:481153458192252937> **Persian**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Griffe - Câlinerie** \nMeilleur set en Défense: **Feinte - Câlinerie** \n \n<:dexter:481153458192252937> **Persian d'Alola**: Pokémon de type **Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Fée, Combat, Insecte** \nRésistant à: **Spectre, Ténèbres, Psy** \nMeilleur set en Attaque: **Feinte - Tricherie** \nMeilleur set en Défense: **Feinte - Vibrobscur**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "linéon":
        message.channel.send("<:dexter:481153458192252937> **Linéon**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Griffe Ombre - Noeud Herbe** \nMeilleur set en Défense: **Griffe Ombre - Tunnel**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "ortide":
        message.channel.send("<:dexter:481153458192252937> **Ortide**: Pokémon de type **Plante/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Glace, Psy** \nRésistant à: **Combat, Eau, Electrik, Fée, Plante** \nMeilleur set en Attaque: **Tranch'Herbe - Bomb-Beurk** \nMeilleur set en Défense: **Tranch'Herbe - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "massko":
        message.channel.send("<:dexter:481153458192252937> **Massko**: Pokémon de type **Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison, Insecte, Glace** \nRésistant à: **Eau, Plante, Electrik, Sol** \nMeilleur set en Attaque: **Vive-Attaque - Noeud Herbe** \nMeilleur set en Défense: **Balle Graine - Lame-Feuille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "azumarill":
        message.channel.send("<:dexter:481153458192252937> **Azumarill**: Pokémon de type **Eau/Fée** <:dexter:481153458192252937> \nVulnérable à: **Poison, Electrik, Plante** \nRésistant à: **Insecte, Combat, Eau, Glace, Ténèbres, Feu, Dragon** \nMeilleur set en Attaque: **Ecume - Câlinerie** \nMeilleur set en Défense: **Ecume - Câlinerie**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "ponyta":
        message.channel.send("<:dexter:481153458192252937> **Ponyta**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Flammèche - Nitrocharge** \nMeilleur set en Défense: **Flammèche - Nitrocharge**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "morphéo":
        message.channel.send("<:dexter:481153458192252937> **Morphéo**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Charge - Vent Violent** \nMeilleur set en Défense: **Châtiment - Eco-Sphère** \n \n<:dexter:481153458192252937> **Morphéo Soleil**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Flammèche - Déflagration** \nMeilleur set en Défense: **Flammèche - Lance-Soleil** \n \n<:dexter:481153458192252937> **Morphéo Pluie**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Hydrocanon** \nMeilleur set en Défense: **Pistolet à O - Hydrocanon**  \n \n<:dexter:481153458192252937> **Morphéo Blizzard**: Pokémon de type **Glace** <:dexter:481153458192252937> \nVulnérable à: **Feu, Combat, Roche, Acier** \nRésistant à: **Glace** \nMeilleur set en Attaque: **Poudreuse - Blizzard** \nMeilleur set en Défense: **Poudreuse - Blizzard**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "mysdibule":
        message.channel.send("<:dexter:481153458192252937> **Mysdibule**: Pokémon de type **Acier/Fée** <:dexter:481153458192252937> \nVulnérable à: **Feu, Sol** \nRésistant à: **Ténèbres, Glace, Psy, Normal, Plante, Roche, Poison, Vol, Fée, Insecte, Dragon** \nMeilleur set en Attaque: **Morsure - Câlinerie** \nMeilleur set en Défense: **Etonnement - Câlinerie**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "feurisson":
        message.channel.send("<:dexter:481153458192252937> **Feurisson**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Flammèche - Lance-Flammes** \nMeilleur set en Défense: **Flammèche - Nitrocharge**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "reptincel":
        message.channel.send("<:dexter:481153458192252937> **Reptincel**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Crocs Feu - Lance-Flammes** \nMeilleur set en Défense: **Flammèche - Lance-Flammes**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "boustiflor":
        message.channel.send("<:dexter:481153458192252937> **Boustiflor**: Pokémon de type **Plante/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Glace, Psy** \nRésistant à: **Combat, Eau, Electrik, Fée, Plante** \nMeilleur set en Attaque: **Acide - Mégafouet** \nMeilleur set en Défense: **Balle Graine - Mégafouet**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "galifeu":
        message.channel.send("<:dexter:481153458192252937> **Galifeu**: Pokémon de type **Feu/Combat** <:dexter:481153458192252937> \nVulnérable à: **Vol, Sol, Psy, Eau** \nRésistant à: **Acier, Plante, Glace, Ténèbres, Feu, Insecte** \nMeilleur set en Attaque: **Flammèche - Lance-Flammes** \nMeilleur set en Défense: **Flammèche - Nitrocharge**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "leuphorie":
        message.channel.send("<:dexter:481153458192252937> **Leuphorie**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Ecras'Face - Ultralaser** \nMeilleur set en Défense: **Psykoud'Boul - Eclat Magique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "wailmer":
        message.channel.send("<:dexter:481153458192252937> **Wailer**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Tacle Lourd** \nMeilleur set en Défense: **Trempette - Vibraqua**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "lainergie":
        message.channel.send("<:dexter:481153458192252937> **Lainergie**: Pokémon de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrik, Vol** \nMeilleur set en Attaque: **Rayon Chargé - Tonnerre** \nMeilleur set en Défense: **Rayon Chargé - Coup d'Jus**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "cornèbre":
        message.channel.send("<:dexter:481153458192252937> **Cornèbre**: Pokémon de type **Ténèbres/Vol** <:dexter:481153458192252937> \nVulnérable à: **Fée, Glace, Electrik, Roche** \nRésistant à: **Spectre, Plante, Ténèbres, Sol, Psy** \nMeilleur set en Attaque: **Feinte - Tricherie** \nMeilleur set en Défense: **Picpic - Bec Vrille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "krabby":
        message.channel.send("<:dexter:481153458192252937> **Krabby**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Ecume - Bulle d'O** \nMeilleur set en Défense: **Ecume - Vibraqua**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "delcatty":
        message.channel.send("<:dexter:481153458192252937> **Delcatty**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Feinte - Eclair Fou** \nMeilleur set en Défense: **Psykoud'Boul - Eclair Fou**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "amonita":
        message.channel.send("<:dexter:481153458192252937> **Amonita**: Pokémon de type **Roche/Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Sol, Combat, Electrik** \nRésistant à: **Normal, Glace, Poison, Vol, Feu** \nMeilleur set en Attaque: **Pistolet à O - Pouvoir Antique** \nMeilleur set en Défense: **Tir de Boue - Pouvoir Antique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "téraclope":
        message.channel.send("<:dexter:481153458192252937> **Téraclope**: Pokémon de type **Spectre** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Spectre** \nRésistant à: **Insecte, Poison, Combat, Normal** \nMeilleur set en Attaque: **Feinte - Poing Ombre** \nMeilleur set en Défense: **Châtiment - Poing de Feu**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "triopikeur":
        message.channel.send("<:dexter:481153458192252937> **Triopikeur**: Pokémon de type **Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante, Glace, Eau** \nRésistant à: **Roche, Poison, Electrik** \nMeilleur set en Attaque: **Coud'Boue - Séisme** \nMeilleur set en Défense: **Coud'Boue - Séisme** \n \n<:dexter:481153458192252937> **Triopikeur d'Alola**: Pokémon de type **Sol/Acier** <:dexter:481153458192252937> \nVulnérable à: **Feu, Eau, Sol, Combat** \nRésistant à: **Dragon, Psy, Normal, Acier, Insecte, Vol, Fée, Electrik, Roche, Poison** \nMeilleur set en Attaque: **Griffe Acier - Séisme** \nMeilleur set en Défense: **Coud'Boue - Séisme**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "yanma":
        message.channel.send("<:dexter:481153458192252937> **Yanma**: Pokémon de type **Insecte/Vol** <:dexter:481153458192252937> \nVulnérable à: **Roche, Feu, Vol, Glace, Electrik** \nRésistant à: **Insecte, Combat, Plante, Sol** \nMeilleur set en Attaque: **Cru-Aile - Aéropique** \nMeilleur set en Défense: **Vive-Attaque - Vent Argenté**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "carabaffe":
        message.channel.send("<:dexter:481153458192252937> **Carabaffe**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Hydrocanon** \nMeilleur set en Défense: **Pistolet à O - Laser Glace**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "excelangue":
        message.channel.send("<:dexter:481153458192252937> **Excelangue**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Léchouille - Ultralaser** \nMeilleur set en Défense: **Psykoud'Boul - Mégafouet**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "têtarte":
        message.channel.send("<:dexter:481153458192252937> **Têtarte**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Ecume - Bulle d'O** \nMeilleur set en Défense: **Ecume - Vibraqua**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "anorith":
        message.channel.send("<:dexter:481153458192252937> **Anorith**: Pokémon de type **Roche/Insecte** <:dexter:481153458192252937> \nVulnérable à: **Eau, Roche, Acier** \nRésistant à: **Poison, Normal** \nMeilleur set en Attaque: **Survinsecte - Pouvoir Antique** \nMeilleur set en Défense: **Survinsecte - Pouvoir Antique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "ténéfix":
        message.channel.send("<:dexter:481153458192252937> **Ténéfix**: Pokémon de type **Ténèbres/Spectre** <:dexter:481153458192252937> \nVulnérable à: **Fée** \nRésistant à: **Combat, Poison, Psy, Normal** \nMeilleur set en Attaque: **Griffe Ombre - Tricherie** \nMeilleur set en Défense: **Feinte - Tricherie**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "macronium":
        message.channel.send("<:dexter:481153458192252937> **Macronium**: Pokémon de type **Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison, Insecte, Glace** \nRésistant à: **Eau, Plante, Electrik, Sol** \nMeilleur set en Attaque: **Tranch'Herbe - Noeud Herbe** \nMeilleur set en Défense: **Tranch'Herbe - Noeud Herbe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "spoink":
        message.channel.send("<:dexter:481153458192252937> **Spoink**: Pokémon de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Psykoud'Boul - Ball'Ombre** \nMeilleur set en Défense: **Psykoud'Boul - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "coxyclaque":
        message.channel.send("<:dexter:481153458192252937> **Coxyclaque**: Pokémon de type **Insecte/Vol** <:dexter:481153458192252937> \nVulnérable à: **Roche, Feu, Vol, Glace, Electrik** \nRésistant à: **Insecte, Combat, Plante, Sol** \nMeilleur set en Attaque: **Piqûre - Bourdon** \nMeilleur set en Défense: **Survinsecte - Bourdon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "charmina":
        message.channel.send("<:dexter:481153458192252937> **Charmina**: Pokémon de type **Combat/Psy** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Spectre** \nRésistant à: **Combat, Roche** \nMeilleur set en Attaque: **Riposte - Dynamopoing** \nMeilleur set en Défense: **Riposte - Dynamopoing**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "tadmorv":
        message.channel.send("<:dexter:481153458192252937> **Tadmorv**: Pokémon de type **Poison** <:dexter:481153458192252937> \nVulnérable à: **Psy, Sol** \nRésistant à: **Combat, Plante, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Direct Toxik - Bomb-Beurk** \nMeilleur set en Défense: **Coud'Boue - Bomb-Beurk** \n \n<:dexter:481153458192252937> **Tadmorv d'Alola**: Pokémon de type **Poison/Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Spectre, Plante, Psy, Poison, Ténèbres** \nMeilleur set en Attaque: **Direct Toxik - Détricanon** \nMeilleur set en Défense: **Direct Toxik - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "nidorino":
        message.channel.send("<:dexter:481153458192252937> **Nidorino**: Pokémon de type **Poison** <:dexter:481153458192252937> \nVulnérable à: **Psy, Sol** \nRésistant à: **Combat, Plante, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Direct Toxik - Bomb-Beurk** \nMeilleur set en Défense: **Direct Toxik - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "ramboum":
        message.channel.send("<:dexter:481153458192252937> **Ramboum**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Morsure - Ecrasement** \nMeilleur set en Défense: **Eclate-Roc - Voix Enjôleuse**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "galekid":
        message.channel.send("<:dexter:481153458192252937> **Galekid**: Pokémon de type **Acier/Roche** <:dexter:481153458192252937> \nVulnérable à: **Sol, Combat, Eau** \nRésistant à: **Dragon, Glace, Psy, Fée, Insecte, Roche, Vol, Normal, Poison** \nMeilleur set en Attaque: **Griffe Acier - Tête de Fer** \nMeilleur set en Défense: **Griffe Acier - Tomberoche**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "lippouti":
        message.channel.send("<:dexter:481153458192252937> **Lippouti**: Pokémon de type **Glace/Psy** <:dexter:481153458192252937> \nVulnérable à: **Feu, Ténèbres, Roche, Insecte, Spectre, Acier** \nRésistant à: **Psy, Glace** \nMeilleur set en Attaque: **Ecras'Face - Laser Glace** \nMeilleur set en Défense: **Poudreuse - Choc Psy**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "nidorina":
        message.channel.send("<:dexter:481153458192252937> **Nidorina**: Pokémon de type **Poison** <:dexter:481153458192252937> \nVulnérable à: **Psy, Vol** \nRésistant à: **Combat, Plante, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Dard-Venin - Bomb-Beurk** \nMeilleur set en Défense: **Dard-Venin - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "corayon":
        message.channel.send("<:dexter:481153458192252937> **Corayon**: Pokémon de type **Eau/Roche** <:dexter:481153458192252937> \nVulnérable à: **Plante, Sol, Combat, Electrik** \nRésistant à: **Noraml, Glace, Poison, Vol, Feu** \nMeilleur set en Attaque: **Ecume - Rayon Gemme** \nMeilleur set en Défense: **Ecume - Rayon Gemme**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "ramoloss":
        message.channel.send("<:dexter:481153458192252937> **Ramoloss**: Pokémon de type **Eau/Psy** <:dexter:481153458192252937> \nVulnérable à: **Spectre, Ténèbres, Electrik, Plante, Insecte** \nRésistant à: **Acier, Combat, Eau, Psy, Glace, Feu** \nMeilleur set en Attaque: **Choc Mental - Psyko** \nMeilleur set en Défense: **Choc Mental - Choc Psy**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "machoc":
        message.channel.send("<:dexter:481153458192252937> **Machoc**: Pokémon de type **Combat** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Psy** \nRésistant à: **Insecte, Roche, Ténèbres** \nMeilleur set en Attaque: **Poing-Karaté - Coup-Croix** \nMeilleur set en Défense: **Eclate-Roc - Coup-Croix**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "sabelette":
        message.channel.send("<:dexter:481153458192252937> **Sabelette**: Pokémon de type **Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante, Glace, Eau** \nRésistant à: **Roche, Poison, Electrik** \nMeilleur set en Attaque: **Griffe - Tunnel** \nMeilleur set en Défense: **Tir de Boue - Tunnel** \n \n<:dexter:481153458192252937> **Sabelette**: Pokémon de type **Glace/Acier** <:dexter:481153458192252937> \nVulnérable à: **Feu, Combat, Sol** \nRésistant à: **Dragon, Psy, Normal, Plante, Insecte, Vol, Fée, Glace, Poison** \nMeilleur set en Attaque: **Griffe Acier - Blizzard** \nMeilleur set en Défense: **Poudreuse - Blizzard**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "racaillou":
        message.channel.send("<:dexter:481153458192252937> **Racaillou**: Pokémon de type **Roche/Sol** <:dexter:481153458192252937> \nVulnérable à: **Eau, Plante, Sol, Glace, Acier, Combat** \nRésistant à: **Normal, Roche, Vol, Feu, Electrik, Poison** \nMeilleur set en Attaque: **Jet-Pierres - Eboulement** \nMeilleur set en Défense: **Jet-Pierres - Eboulement** \n \n<:dexter:481153458192252937> **Racaillou d'Alola**: Pokémon de type **Roche/Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol, Combat, Eau, Plante** \nRésistant à: **Normal, Electrik, Poison, Feu, Vol** \nMeilleur set en Attaque: **Jet-Pierres - Tonnerre** \nMeilleur set en Défense: **Change Eclair - Tonnerre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "capumain":
        message.channel.send("<:dexter:481153458192252937> **Capumain**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Griffe - Météores** \nMeilleur set en Défense: **Etonnement - Météores**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "teddiursa":
        message.channel.send("<:dexter:481153458192252937> **Teddiursa**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Griffe - Câlinerie** \nMeilleur set en Défense: **Léchouille - Câlinerie**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "lilia":
        message.channel.send("<:dexter:481153458192252937> **Lilia**: Pokémon de type **Roche/Plante** <:dexter:481153458192252937> \nVulnérable à: **Combat, Glace, Insecte, Acier** \nRésistant à: **Electrik, Normal** \nMeilleur set en Attaque: **Harcèlement - Noeud Herbe** \nMeilleur set en Défense: **Harcèlement - Noeud Herbe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "magby":
        message.channel.send("<:dexter:481153458192252937> **Magby**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Flammèche - Rebondifeu** \nMeilleur set en Défense: **Flammèche - Poing de Feu**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "phanpy":
        message.channel.send("<:dexter:481153458192252937> **Phanpy**: Pokémon de type **Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante, Glace, Eau** \nRésistant à: **Roche, Poison, Electrik** \nMeilleur set en Attaque: **Charge - Piétisol** \nMeilleur set en Défense: **Eclate-Roc - Eboulement**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "kabuto":
        message.channel.send("<:dexter:481153458192252937> **Kabuto**: Pokémon de type **Roche, Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Sol, Combat, Electrik** \nRésistant à: **Normal, Glace, Poison, Vol, Feu** \nMeilleur set en Attaque: **Griffe - Pouvoir Antique** \nMeilleur set en Défense: **Tir de Boue - Pouvoir Antique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "abra":
        message.channel.send("<:dexter:481153458192252937> **Abra**: Pokémon de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Psykoud'Boul - Ball'Ombre** \nMeilleur set en Défense: **Psykoud'Boul - Ball'Ombre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "snubbull":
        message.channel.send("<:dexter:481153458192252937> **Snubbull**: Pokémon de type **Fée** <:dexter:481153458192252937> \nVulnérable à: **Acier, Poison** \nRésistant à: **Combat, Insecte, Ténèbres, Dragon** \nMeilleur set en Attaque: **Morsure - Eclat Magique** \nMeilleur set en Défense: **Charge - Eclat Magique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "papinox":
        message.channel.send("<:dexter:481153458192252937> **Papinox**: Pokémon de type **Insecte/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche, Psy** \nRésistant à: **Insecte, Poison, Fée, Combat, Plante** \nMeilleur set en Attaque: **Choc Mental - Bomb-Beurk** \nMeilleur set en Défense: **Choc Mental - Bourdon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "pifeuil":
        message.channel.send("<:dexter:481153458192252937> **Pifeuil**: Pokémon de type **Plante/Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Fée, Glace, Combat, Feu, Poison, Vol** \nRésistant à: **Sol, Spectre, Eau, Plante, Electrik, Ténèbres, Psy** \nMeilleur set en Attaque: **Feinte - Noeud Herbe** \nMeilleur set en Défense: **Feinte - Lame-Feuille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "caninos":
        message.channel.send("<:dexter:481153458192252937> **Caninos**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Flammèche - Lance-Flammes** \nMeilleur set en Défense: **Flammèche - Lance-Flammes**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "malosse":
        message.channel.send("<:dexter:481153458192252937> **Malosse**: Pokémon de type **Ténèbres/Feu** <:dexter:481153458192252937> \nVulnérable à: **Combat, Sol, Roche, Eau** \nRésistant à: **Acier, Spectre, Plante, Glace, Ténèbres, Feu, Psy** \nMeilleur set en Attaque: **Feinte - Lance-Flammes** \nMeilleur set en Défense: **Feinte - Mâchouille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "écrapince":
        message.channel.send("<:dexter:481153458192252937> **Écrapince**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Ecier, Glace, Feu** \nMeilleur set en Attaque: **Ecume - Bulle d'O** \nMeilleur set en Défense: **Ecume - Bulle d'O**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "noeunoeuf":
        message.channel.send("<:dexter:481153458192252937> **Noeunoeuf**: Pokémon de type **Plante/Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Feu, Glace, Vol, Poison, Ténèbres, Spectre** \nRésistant à: **Combat, Eau, Plante, Electrik, PSy, Sol** \nMeilleur set en Attaque: **Choc Mental - Psyko** \nMeilleur set en Défense: **Choc Mental - Balle Graine**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "lombre":
        message.channel.send("<:dexter:481153458192252937> **Lombre**: Pokémon de type **Eau/Plante** <:dexter:481153458192252937> \nVulnérable à: **Vol, Poison, Insecte** \nRésistant à: **Acier, Sol, Eau** \nMeilleur set en Attaque: **Ecume - Noeud Herbe** \nMeilleur set en Défense: **Ecume - Noeud Herbe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "canarticho":
        message.channel.send("<:dexter:481153458192252937> **Canarticho**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Electrik** \nRésistant à: **Plante, Insecte, Spectre, Sol** \nMeilleur set en Attaque: **Lame d'Air - Lame-Feuille** \nMeilleur set en Défense: **Lame d'Air - Lame-Feuille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "kraknoix":
        message.channel.send("<:dexter:481153458192252937> **Kraknoix**: Pokémon de type **Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante, Glace, Eau** \nRésistant à: **Roche, Poison, Electrik** \nMeilleur set en Attaque: **Tir de Boue - Tunnel** \nMeilleur set en Défense: **Survinsecte - Tunnel**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "smogo":
        message.channel.send("<:dexter:481153458192252937> **Smogo**: Pokémon de type **Poison** <:dexter:481153458192252937> \nVulnérable à: **Psy, Sol** \nRésistant à: **Combat, Plante, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Harcèlement - Bomb-Beurk** \nMeilleur set en Défense: **Harcèlement - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "roucoups":
        message.channel.send("<:dexter:481153458192252937> **Roucoups**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Electrik** \nRésistant à: **Plante, Insecte, Spectre, Sol** \nMeilleur set en Attaque: **Cru-Aile - Aéropique** \nMeilleur set en Défense: **Cru-Aile - Aéropique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "mélofée":
        message.channel.send("<:dexter:481153458192252937> **Mélofée**: Pokémon de type **Fée** <:dexter:481153458192252937> \nVulnérable à: **Acier, Poison** \nRésistant à: **Combat, Insecte, Ténèbres, Dragon** \nMeilleur set en Attaque: **Ecras'Face - Pouvoir Lunaire** \nMeilleur set en Défense: **Psykoud'Boul - Voix Enjôleuse**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "magnéti":
        message.channel.send("<:dexter:481153458192252937> **Magnéti**: Pokémon de type **Electrik/Acier** <:dexter:481153458192252937> \nVulnérable à: **Sol, Feu, Combat** \nRésistant à: **Dragon, Glace, Psy, Electrik, Normal, Plante, Insecte, Roche, Fée, Acier, Poison, Vol** \nMeilleur set en Attaque: **Eclair - Tonnerre** \nMeilleur set en Défense: **Etincelle**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "cacnea":
        message.channel.send("<:dexter:481153458192252937> **Cacnea**: Pokémon de type **Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison Insecte** \nRésistant à: **Eau, Plante, Electrik, Sol** \nMeilleur set en Attaque: **Coup Bas - Noeud Herbe** \nMeilleur set en Défense: **Coup Bas - Noeud Herbe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "élekid":
        message.channel.send("<:dexter:481153458192252937> **Élekid**: Pokémon de type **Électrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Électrik, Vol** \nMeilleur set en Attaque: **Éclair - Coup d'Jus** \nMeilleur set en Défense: **Éclair - Coup d'Jus**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "mystherbe":
        message.channel.send("<:dexter:481153458192252937> **Mystherbe**: Pokémon de type **Plante/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Glace, Psy** \nRésistant à: **Combat, Eau, Electrik, Fée, Plante** \nMeilleur set en Attaque: **Tranch'Herbe - Bomb-Beurk** \nMeilleur set en Défense: **Tranch'Herbe - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "loupio":
        message.channel.send("<:dexter:481153458192252937> **Loupio**: Pokémon de type **Eau/Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol, Plante** \nRésistant à: **Eau, Glace, Vol, Feu, Acier** \nMeilleur set en Attaque: **Ecume - Tonnerre** \nMeilleur set en Défense: **Ecume - Tonnerre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "vibraninf":
        message.channel.send("<:dexter:481153458192252937> **Vibraninf**: Pokémon de type **Sol/Dragon** <:dexter:481153458192252937> \nVulnérable à: **Glace, Fée, Dragon** \nRésistant à: **Roche, Poison, Feu, Electrik** \nMeilleur set en Attaque: **Dracosouffle - Piétisol** \nMeilleur set en Défense: **Tir de Boue - Piétisol**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "draby":
        message.channel.send("<:dexter:481153458192252937> **Draby**: Pokémon de type **Dragon** <:dexter:481153458192252937> \nVulnérable à: **Fée, Dragon, Glace** \nRésistant à: **Eau, Plante, Electrik, Feu** \nMeilleur set en Attaque: **Morsure - Lance-Flammes** \nMeilleur set en Défense: **Flammèche - Mâchouille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "pomdepik":
        message.channel.send("<:dexter:481153458192252937> **Pomdepik**: Pokémon de type **Insecte** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche** \nRésistant à: **Combat, Plante, Sol** \nMeilleur set en Attaque: **Piqûre - Gyroballe** \nMeilleur set en Défense: **Piqûre - Gyroballe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "qulbutoke":
        message.channel.send("<:dexter:481153458192252937> **Qulbutoke**: Pokémon de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Riposte - Voile Miroir** \nMeilleur set en Défense: **Riposte - Voile Miroir**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "zarbi":
        message.channel.send("<:dexter:481153458192252937> **Zarbi**: Pokémon de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Puissance Cachée - Lutte** \nMeilleur set en Défense: **Puissance Cachée - Lutte**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "kaiminus":
        message.channel.send("<:dexter:481153458192252937> **Kaiminus**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Vibraqua** \nMeilleur set en Défense: **Pistolet à O - Mâchouille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "doduo":
        message.channel.send("<:dexter:481153458192252937> **Doduo**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Electrik** \nRésistant à: **Plante, Insecte, Spectre, Sol** \nMeilleur set en Attaque: **Vive-Attaque - Rapace** \nMeilleur set en Défense: **Picpic - Bec Vrille**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "poissirène":
        message.channel.send("<:dexter:481153458192252937> **Poissirène**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Picpic - Hydroqueue** \nMeilleur set en Défense: **Picpic - Hydroqueue**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "férossinge":
        message.channel.send("<:dexter:481153458192252937> **Férossinge**: Pokémon de type **Combat** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Psy** \nRésistant à: **Insecte, Roche, Ténèbres** \nMeilleur set en Attaque: **Poing-Karaté - Coup-Croix** \nMeilleur set en Défense: **Poing-Karaté - Coup-Croix**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "onix":
        message.channel.send("<:dexter:481153458192252937> **Onix**: Pokémon de type **Roche/Sol** <:dexter:481153458192252937> \nVulnérable à: **Eau, Plante, Sol, Glace, Acier, Combat** \nRésistant à: **Normal, Roche, Vol, Feu, Electrik, Poison** \nMeilleur set en Attaque: **Jet-Pierres - Lame de Roc** \nMeilleur set en Défense: **Jet-Pierres - Tourbi-Sable**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "fantominus":
        message.channel.send("<:dexter:481153458192252937> **Fantominus**: Pokémon de type **Spectre/Poison** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Sol, Spectre, Psy** \nRésistant à: **Fée, Plante, Insecte, Poison, Normal, Combat** \nMeilleur set en Attaque: **Léchouille - Bomb-Beurk** \nMeilleur set en Défense: **Etonnement - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "soporifik":
        message.channel.send("<:dexter:481153458192252937> **Soporifik**: Pokémon de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Choc Mental - Psyko** \nMeilleur set en Défense: **Choc Mental - Choc Psy**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "bulbizarre":
        message.channel.send("<:dexter:481153458192252937> **Bulbizarre**: Pokémon de type **Plante/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Glace, Psy** \nRésistant à: **Combat, Eau, Electrik, Fée, Plante** \nMeilleur set en Attaque: **Fouet Lianes - Mégafouet** \nMeilleur set en Défense: **Fouet Lianes - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "gobou":
        message.channel.send("<:dexter:481153458192252937> **Gobou**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Ecrasement** \nMeilleur set en Défense: **Pistolet à O - Tunnel**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "évoli":
        message.channel.send("<:dexter:481153458192252937> **Évoli**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Vive-Attaque - Météores** \nMeilleur set en Défense: **Vive-Attaque - Tunnel**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "psykokwak":
        message.channel.send("<:dexter:481153458192252937> **Psykokwak**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Hydroqueue** \nMeilleur set en Défense: **Psykoud'Boul - Hydroqueue**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "kokiyas":
        message.channel.send("<:dexter:481153458192252937> **Kokiyas**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Charge - Vibraqua** \nMeilleur set en Défense: **Eclats Glace - Vibraqua**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "chamallot":
        message.channel.send("<:dexter:481153458192252937> **Chamallot**: Pokémon de type **Feu/Sol** <:dexter:481153458192252937> \nVulnérable à: **Eau, sol** \nRésistant à: **Feu, Insecte, Acier, Poison, Fée,Electrik** \nMeilleur set en Attaque: **Flammèche - Piétisol** \nMeilleur set en Défense: **Flammèche - Piétisol**")
    }	
	switch(args[0].toLocaleLowerCase()) {
        case "tentacool":
        message.channel.send("<:dexter:481153458192252937> **Tentacool**: Pokémon de type **Eau/Poison** <:dexter:481153458192252937> \nVulnérable à: **Sol, Psy, Electrik** \nRésistant à: **Glace, Feu, Eau, Combat, Acier, Inssecte, Poison, Fée** \nMeilleur set en Attaque: **Écume - Bulles d’O** \nMeilleur set en Défense: **Écume - Vibraqua**")
    }	
	switch(args[0].toLocaleLowerCase()) {
        case "osselait":
        message.channel.send("<:dexter:481153458192252937> **Osselait**: Pokémon de type **Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante, Glace, Eau** \nRésistant à: **Roche, Poison, Electrik** \nMeilleur set en Attaque: **Coud’Boue - Tunnel** \nMeilleur set en Défense: **Coud’Boue - Tunnel**")
    }	
	switch(args[0].toLocaleLowerCase()) {
        case "parecool":
        message.channel.send("<:dexter:481153458192252937> **Parecool**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Bâillement - Plaquage** \nMeilleur set en Défense: **Bâillement - Plaquage**")
    }	
	switch(args[0].toLocaleLowerCase()) {
        case "cadoizo":
        message.channel.send("<:dexter:481153458192252937> **Cadoizo**: Pokémon de type **Glace/Vol** <:dexter:481153458192252937> \nVulnérable à: **Roche, Feu, Eletrik, Acier** \nRésistant à: **Plante, Insecte, Sol** \nMeilleur set en Attaque: **Cadeau - Poing-Glace** \nMeilleur set en Défense: **Cadeau - Aéropique**")
    }	
	switch(args[0].toLocaleLowerCase()) {
        case "stari":
        message.channel.send("<:dexter:481153458192252937> **Stari**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Rayon Gemme** \nMeilleur set en Défense: ** Pistolet à O - Bulles d’O**")
    }	
	switch(args[0].toLocaleLowerCase()) {
        case "natu":
        message.channel.send("<:dexter:481153458192252937> **Natu**: Pokémon de type **Psy/Vol** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Glace, Rock, Eletrik, Spectre** \nRésistant à: **Plante, Psy, Combat, Sol** \nMeilleur set en Attaque: **PicPic - Bec Vrille** \nMeilleur set en Défense: **Picpic - Choc Psy**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "arcko":
        message.channel.send("<:dexter:481153458192252937> **Arcko**: Pokémon de type Plante <:dexter:481153458192252937> \nVulnérable à: **Fu, Vol, Poison, Insecte, Glace** \nRésistant à: **Eau, Plante, Electrik, Sol** \nMeilleur set en Attaque: **Écras’Face - Noeud Herbe** \nMeilleur set en Défense: **Balle Graine - Noeu Herbe**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "hypotrempe":
        message.channel.send("<:dexter:481153458192252937> **Hypotrempe**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Ecume - Dracochoc** \nMeilleur set en Défense: **Ecume - Dracochoc**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "chétiflor":
        message.channel.send("<:dexter:481153458192252937> **Chétiflor**: Pokémon de type **Plante/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Glace, Psy** \nRésistant à: **Combat, Eau, Electrik, Fée, Plante** \nMeilleur set en Attaque: **Fouet Lianes - Mégafouet** \nMeilleur set en Défense: **Acide - Mégafouet**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "embrylex":
        message.channel.send("<:dexter:481153458192252937> **Embrylex**: Pokémon de type **Roche/Sol** <:dexter:481153458192252937> \nVulnérable à: **Eau, Plante, Sol, Glace, Acier** \nRésistant à: **Normal, Roche, Vol, Feu, Electrik** \nMeilleur set en Attaque: **Mrosure -Pouvoir Antique** \nMeilleur set en Défense: **Eclate-Roc - Pouvoir Antique**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "mimitoss":
        message.channel.send("<:dexter:481153458192252937> **Mimitoss**: Pokémon de type **Insecte/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche, Psy** \nRésistant à: **Insecte, Poison, Fée, Combat, Plante** \nMeilleur set en Attaque: **piqûre - Rayon Signal** \nMeilleur set en Défense: **Choc Mental - Rayon Signal**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "otaria":
        message.channel.send("<:dexter:481153458192252937> **Otaria**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acie, Eau, Glace, Feu** \nMeilleur set en Attaque: **Léchouille - Hydroqueue** \nMeilleur set en Défense: **Eclats Glace - Hydroqueue**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "wattouat":
        message.channel.send("<:dexter:481153458192252937> **Wattouat**: Pokémon de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrik, Vol** \nMeilleur set en Attaque: **Eclair - Tonnerre** \nMeilleur set en Défense: **Eclair - Tonnerre**")
    }
	 switch(args[0].toLocaleLowerCase()) {
        case "floravol":
        message.channel.send("<:dexter:481153458192252937> **Floravol**: Pokémon de type **Plante/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Feu, Vol, Poison, Roche** \nRésistant à: **Eau, Combat, Plante, Sol** \nMeilleur set en Attaque: **Balle Graine - Noeud Herbe** \nMeilleur set en Défense: **Balle Graine - Noeud Herbe**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "obalie":
        message.channel.send("<:dexter:481153458192252937> **Obalie**: Pokémon de type **Glace/Eau** <:dexter:481153458192252937> \nVulnérable à: **Combat, Roche, Electrik, Plante** \nRésistant à: **Eau, Glace** \nMeilleur set en Attaque: **Pistolet à O - Onde Boréale** \nMeilleur set en Défense: **Eclate-Roc - Onde Boréale**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "carvanha":
        message.channel.send("<:dexter:481153458192252937> **Carvanha**: Pokémon de type **Eau/Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Fée, Insecte, Electrik, Plante, Combat** \nRésistant à: **Spectre, Acier, Eau, Glace, Ténèbres, Feu, Psy** \nMeilleur set en Attaque: **Aboiement - Mâchouille** \nMeilleur set en Défense: **Aboiement - Mâchouille**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "polichombr":
        message.channel.send("<:dexter:481153458192252937> **Polichombr**: Pokémon de type **Spectre** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Spectre** \nRésistant à: **Insecte, Poison, Combat, Normal** \nMeilleur set en Attaque: **Feinte - Vent Mauvais** \nMeilleur set en Défense: **Etonnement -Vent Mauvais**")
    }
        switch(args[0].toLocaleLowerCase()) {
        case "minidraco":
        message.channel.send("<:dexter:481153458192252937> **Minidraco**: Pokémon de type **Dragon** <:dexter:481153458192252937> \nVulnérable à: **Fée, Dragon, Glace** \nRésistant à: **Eau, Plante, Electrik, Feu** \nMeilleur set en Attaque: **Dracoouffle - Hydroqueue** \nMeilleur set en Défense: **Queue de Fer - Ligotage**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "voltorbe":
        message.channel.send("<:dexter:481153458192252937> **Voltorbe**: Pokémon de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrik, Vol** \nMeilleur set en Attaque: **Etincelle - Tonnerre** \nMeilleur set en Défense: **Etincelle - Coup d'jus**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "terhal":
        message.channel.send("<:dexter:481153458192252937> **Terhal**: Pokémon de type **Acier/Psy** <:dexter:481153458192252937> \nVulnérable à: **Feu, Ténèbres, Sol, Spectre** \nRésistant à: **Dragon, Glace, Normal, Plante, Acier, Roche, Vol, Fée, Psy, Poison** \nMeilleur set en Attaque: **Bélier - Lutte** \nMeilleur set en Défense: **Bélier - Lutte**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "kirlia":
        message.channel.send("<:dexter:481153458192252937> **Kirlia**: Pokémon de type **Psy/Fée** <:dexter:481153458192252937> \nVulnérable à: **Poison, Spectre, Acier** \nRésistant à: **Psy, Combat, Dragon** \nMeilleur set en Attaque: **Choc Mental - Psyko** \nMeilleur set en Défense: **Choc Mental - Voix Enjôleuse**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "paras":
        message.channel.send("<:dexter:481153458192252937> **Paras**: Pokémon de type **Insecte/Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison, Roche, Insecte, Glace** \nRésistant à: **Eau, Electrik, Combat, Plante, Sol** \nMeilleur set en Attaque: **Piqûre - Canon Graine** \nMeilleur set en Défense: **Piqûre - Canon Graine**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "héricendre":
        message.channel.send("<:dexter:481153458192252937> **Héricendre**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Flammèche - Lance-Flammes** \nMeilleur set en Défense: **Flammèche - Nitrocharge**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "tarinor":
        message.channel.send("<:dexter:481153458192252937> **Tarinor**: Pokémon de type **Roche** <:dexter:481153458192252937> \nVulnérable à: **Acier, Sol, Combat, Eau, Plante** \nRésistant à: **Normal, Poison, Vol Feu** \nMeilleur set en Attaque: **Jet-Pierres - Eboulement** \nMeilleur set en Défense: **Jet-Pierres - Eboulement**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "salamèche":
        message.channel.send("<:dexter:481153458192252937> **Salamèche**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Flammèche - Lance-Flammes** \nMeilleur set en Défense: **Flammèche - Nitrocharge**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "dynavolt":
        message.channel.send("<:dexter:481153458192252937> **Dynavolt**: Pokémon de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrik, Vol** \nMeilleur set en Attaque: **Etincelle - Tonnerre** \nMeilleur set en Défense: **Vive-Attaque - Coup d'Jus**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "carapuce":
        message.channel.send("<:dexter:481153458192252937> **Carapuce**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Ecume - Hydroqueue** \nMeilleur set en Défense: **Ecume - Hydroqueue**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "germignon":
        message.channel.send("<:dexter:481153458192252937> **Germignon**: Pokémon de type **Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison, Insecte, Glace** \nRésistant à: **Eau, Plante, Electrik, Sol** \nMeilleur set en Attaque: **Fouet Lianes - Noeud Herbe** \nMeilleur set en Défense: **Fouet Lianes - Noeud Herbe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "gloupti":
        message.channel.send("<:dexter:481153458192252937> **Gloupti**: Pokémon de type **Poison** <:dexter:481153458192252937> \nVulnérable à: **Psy, Sol** \nRésistant à: **Combat, Plante, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Ecras'Face - Détricanon** \nMeilleur set en Défense: **Eclate-Roc - Détricanon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "pikachu":
        message.channel.send("<:dexter:481153458192252937> **Pikachu**: Pokémon de type **Electrik** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrik, Vol** \nMeilleur set en Attaque: **Eclair - Eclair Fou** \nMeilleur set en Défense: **Vive-Attaque - Eclair Fou**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "abo":
        message.channel.send("<:dexter:481153458192252937> **Abo**: Pokémon de type **Poison** <:dexter:481153458192252937> \nVulnérable à: **Psy, Sol** \nRésistant à: **Combat, Plante, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Acide - Bomb-Beurk** \nMeilleur set en Défense: **Acide - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "goupix":
        message.channel.send("<:dexter:481153458192252937> **Goupix**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Flammèche - Lance-Flammes** \nMeilleur set en Défense: **Flammèches - Nitrocharge**  \n \n<:dexter:481153458192252937> **Goupix d'Alola**: Pokémon de type **Glace** <:dexter:481153458192252937> \nVulnérable à: **Feu, Combat, Roche, Acier** \nRésistant à: **Glace** \nMeilleur set en Attaque: **Poudreuse - Blizzard** \nMeilleur set en Défense: **Psykoud'Boul - Laser Glace**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "stalgamin":
        message.channel.send("<:dexter:481153458192252937> **Stalgamin**: Pokémon de type **Glace** <:dexter:481153458192252937> \nVulnérable à: **Feu, Combat, Roche, Acier** \nRésistant à: **Glace** \nMeilleur set en Attaque: **Poudreuse - Avalanche** \nMeilleur set en Défense: **Poudreuse - Avalanche**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "limagma":
        message.channel.send("<:dexter:481153458192252937> **Limagma**: Pokémon de type **Feu** <:dexter:481153458192252937> \nVulnérable à: **Sol, Roche, Eau** \nRésistant à: **Glace, Feu, Plante, Acier, Insecte, Fée** \nMeilleur set en Attaque: **Flammèche - Rebondifeu** \nMeilleur set en Défense: **Flammèche - Nitrocharge**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "rémoraid":
        message.channel.send("<:dexter:481153458192252937> **Rémoraid**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Vibraqua** \nMeilleur set en Défense: **Tir de Boue - Vibraqua**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "makuhita":
        message.channel.send("<:dexter:481153458192252937> **Makuhita**: Pokémon de type **Combat** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Psy** \nRésistant à: **Insecte, Roche, Ténèbres** \nMeilleur set en Attaque: **Eclate-Roc - Tacle Lourd** \nMeilleur set en Défense: **Eclate-Roc - Tacle Lourd**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "nidoran":
        message.channel.send("<:dexter:481153458192252937> **Nidoran** *(mâle et femelle)*: Pokémon de type **Poison** <:dexter:481153458192252937> \nVulnérable à: **Psy, Sol** \nRésistant à: **Combat, Plante, Insecte, Poison, Fée** \nMeilleur set en Attaque: **Dard-Venin - Bomb-Beurk** \nMeilleur set en Défense: **Dard-Venin - Bomb-Beurk**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "lovdisc":
        message.channel.send("<:dexter:481153458192252937> **Lovdisc**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Pistolet à O - Vibraqua** \nMeilleur set en Défense: **Pistolet à O - Vibraqua**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "tylton":
        message.channel.send("<:dexter:481153458192252937> **Tylton**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Electrik** \nRésistant à: **Plante, Insecte, Spectre, Sol** \nMeilleur set en Attaque: **Picpic - Aéropique** \nMeilleur set en Défense: **Picpic - Aéropique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "balignon":
        message.channel.send("<:dexter:481153458192252937> **Balignon**: Pokémon de type **Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison, Insecte, Glace** \nRésistant à: **Eau, Plante, Electrik, Sol** \nMeilleur set en Attaque: **Balle Graine - Noeud Herbe** \nMeilleur set en Défense: **Balle Graine - Noeud Herbe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "métamorph":
        message.channel.send("<:dexter:481153458192252937> **Métamorph**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Morphing - Lutte** \nMeilleur set en Défense: **Morphing - Lutte**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "barloche":
        message.channel.send("<:dexter:481153458192252937> **Barloche**: Pokémon de type **Eau/Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante** \nRésistant à: **Acier, Electrik, Roche, Poison, Feu** \nMeilleur set en Attaque: **Pistolet à O - Hydroqueue** \nMeilleur set en Défense: **Tir de Boue - Boue-Bombe**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "rondoudou":
        message.channel.send("<:dexter:481153458192252937> **Rondoudou**: Pokémon de type **Normal/Fée** <:dexter:481153458192252937> \nVulnérable à: **Acier, Poison** \nRésistant à: **Insecte, Ténèbres, Spectre, Dragon** \nMeilleur set en Attaque: **Ecras'Face - Eclat Magique** \nMeilleur set en Défense: **Feinte - Eclat Magique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "arakado":
        message.channel.send("<:dexter:481153458192252937> **Arakdo*: Pokémon de type **Insecte/Eau** <:dexter:481153458192252937> \nVulnérable à: **Vol, Roche, Electrik** \nRésistant à: **Combat, Eau, Acier, Glace, Sol** \nMeilleur set en Attaque: **Piqûre - Rayon Signal** \nMeilleur set en Défense: **Ecume - Rayon Signal**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "ptitard":
        message.channel.send("<:dexter:481153458192252937> **Ptitard**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Electrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Ecume - Bulles d'O** \nMeilleur set en Défense: **Ecume - Bulle d'O**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "mimigal":
        message.channel.send("<:dexter:481153458192252937> **Mimigal**: Pokémon de type **Insecte/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche, Psy** \nRésistant à: **Insecte, Poison, Fée, Combat, Plante** \nMeilleur set en Attaque: **Piqûre - Rayon Signal** \nMeilleur set en Défense: **Piqûre - Rayon Signal**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "balbuto":
        message.channel.send("<:dexter:481153458192252937> **Balbuto**: Pokémon de type **Sol/Psy** <:dexter:481153458192252937> \nVulnérable à: **Eau, Ténèbres, Glace, Plante, Insecte, Spectre** \nRésistant à: **Combat, Roche, Psy, Poison, Electrik** \nMeilleur set en Attaque: **Choc Mental - Tunnel** \nMeilleur set en Défense: **Choc Mental - Tunnel**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "piafabec":
        message.channel.send("<:dexter:481153458192252937> **Piafabec**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Electrik** \nRésistant à: **Plante, Insecte, Spectre, Sol** \nMeilleur set en Attaque: **Vive-Attaque - Piqué** \nMeilleur set en Défense: **Picpic - Piqué**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "marcarin":
        message.channel.send("<:dexter:481153458192252937> **Marcarin**: Pokémon de type **Glace/Sol** <:dexter:481153458192252937> \nVulnérable à: **Feu, Combat, Plante, Eau, Acier** \nRésistant à: **Poison, Electrik** \nMeilleur set en Attaque: **Poudreuse - Eboulement** \nMeilleur set en Défense: **Poudreuse - Vent Glace**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "coxy":
        message.channel.send("<:dexter:481153458192252937> **Coxy**: Pokémon de type **Insecte/Vol** <:dexter:481153458192252937> \nVulnérable à: **Roche, Feu, Vol, Glace, Electrik** \nRésistant à: **Insecte, Combat, Plante, Sol** \nMeilleur set en Attaque: **Piqûre - Aéropique** \nMeilleur set en Défense: **Piqûre - Vent Argenté**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "skitty":
        message.channel.send("<:dexter:481153458192252937> **Skitty**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Charge - Eclair Fou** \nMeilleur set en Défense: **Feinte - Eclair Fou**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "goélise":
        message.channel.send("<:dexter:481153458192252937> **Goélise**: Pokémon de type **Eau/Vol** <:dexter:481153458192252937> \nVulnérable à: **Electrik, Roche** \nRésistant à: **Combat, Eau, Acier, Insecte, Feu, Sol** \nMeilleur set en Attaque: **Pistolet à O - Laser Glace** \nMeilleur set en Défense: **Vive-Attaque - Laser Glace**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "nirondelle":
        message.channel.send("<:dexter:481153458192252937> **Nirondelle**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Electrik** \nRésistant à: **Plante, Insecte, Spectre, Sol** \nMeilleur set en Attaque: **Vive-Attaque - Aéropique** \nMeilleur set en Défense: **Picpic - Aéropique**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "hoothoot":
        message.channel.send("<:dexter:481153458192252937> **Hoothoot**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Roche, Electrik** \nRésistant à: **Plante, Insecte, Spectre, Sol** \nMeilleur set en Attaque: **Picpic - Piqué** \nMeilleur set en Défense: **Picpic - Piqué**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "magicarpe":
        message.channel.send("<:dexter:481153458192252937> **Magicarpe**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Électrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Trempette - Lutte** \nMeilleur set en Défense: **Trempette - Lutte**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "barpau":
        message.channel.send("<:dexter:481153458192252937> **Barpau**: Pokémon de type **Eau** <:dexter:481153458192252937> \nVulnérable à: **Plante, Électrik** \nRésistant à: **Acier, Eau, Glace, Feu** \nMeilleur set en Attaque: **Charge - Voile Miroir** \nMeilleur set en Défense: **Trempette - Voile Miroir**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "caratroc":
        message.channel.send("<:dexter:481153458192252937> **Caratroc**: Pokémon de type **Insecte/Roche** <:dexter:481153458192252937> \nVulnérable à: **Eau, Roche, Acier** \nRésistant à: **Poison, Normal** \nMeilleur set en Attaque: **Jet-Pierres - Lame de Roc** \nMeilleur set en Défense: **Survinsecte - Boule Roc**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "tournegrin":
        message.channel.send("<:dexter:481153458192252937> **Tournegrin**: Pokémon de type **Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, poison, Insecte, Glace** \nRésistant à: **Eau, Plante, Electrik, Sol** \nMeilleur set en Attaque: **Tranch'Herbe - Noeud Herbe** \nMeilleur set en Défense: **Tranch'Herbe - Noeud Herbe**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "azurill":
        message.channel.send("<:dexter:481153458192252937> **Azurill**: Pokémon de type **Normal/Fée** <:dexter:481153458192252937> \nVulnérable à: **Acier, Poison** \nRésistant à: **Insecte, Ténèbres, Spectre, Dragon** \nMeilleur set en Attaque: **Ecume - Plaquage** \nMeilleur set en Défense: **Ecume - laser Glace**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "pichu":
        message.channel.send("<:dexter:481153458192252937> **Pichu**: Pokémon de type **Electrick** <:dexter:481153458192252937> \nVulnérable à: **Sol** \nRésistant à: **Acier, Electrick, Vol** \nMeilleur set en Attaque: **Eclair - Tonnerre** \nMeilleur set en Défense: **Eclair - Tonnerre**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "coconfort":
        message.channel.send("<:dexter:481153458192252937> **Coconfort**: Pokémon de type **Insecte/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, vol, Roche, Psy** \nRésistant à: **Insecte, poison, Fée, Combat, Plante** \nMeilleur set en Attaque: **Piqûre - Lutte** \nMeilleur set en Défense: **Piqûre - Lutte**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "chenipan":
        message.channel.send("<:dexter:481153458192252937> **Chenipan**: Pokémon de type **Insecte** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche** \nRésistant à: **Combat, Plante, Sol** \nMeilleur set en Attaque: **Piqûre - Lutte** \nMeilleur set en Défense: **Piqûre - Lutte**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "aspicot":
        message.channel.send("<:dexter:481153458192252937> **Aspicot**: Pokémon de type **Insecte/Poison** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche, Psy** \nRésistant à: **Insecte, Poison, Fée, Combat, Plante** \nMeilleur set en Attaque: **Piqûre - Lutte** \nMeilleur set en Défense: **Piqûre - Lutte**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "debugant":
        message.channel.send("<:dexter:481153458192252937> **Debugant**: Pokémon de type **Combat** <:dexter:481153458192252937> \nVulnérable à: **Fée, Vol, Psy** \nRésistant à: **Insecte, Roche, Ténèbres** \nMeilleur set en Attaque: **Eclate-Roc - Eboulement** \nMeilleur set en Défense: **Eclate-Roc - Eboulement**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "chrysacier":
        message.channel.send("<:dexter:481153458192252937> **Chrysacier**: Pokémon de type **Insecte** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche** \nRésistant à: **Combat, Plante, Sol** \nMeilleur set en Attaque: **Piqûre - Lutte** \nMeilleur set en Défense: **Piqûre - Lutte**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "marill":
        message.channel.send("<:dexter:481153458192252937> **Marill**: Pokémon de type **Eau/Fée** <:dexter:481153458192252937> \nVulnérable à: **Poison, Electrick, Plante** \nRésistant à: **Insecte, Combat, Eau, glace, Ténèbres, Feu, Dragon** \nMeilleur set en Attaque: **Ecume - Hydroqueue** \nMeilleur set en Défense: **Ecume - Hydroqueue**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "zigzaton":
        message.channel.send("<:dexter:481153458192252937> **Zigzaton**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Charge - Noeud Herbe** \nMeilleur set en Défense: **Eclate-Roc - Noeud Herbe**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "tarsal":
        message.channel.send("<:dexter:481153458192252937> **Tarsal**: Pokémon de type **Psy/Fée** <:dexter:481153458192252937> \nVulnérable à: **Poison, Spectre, Acier** \nRésistant à: **Psy, Combat, Dragon** \nMeilleur set en Attaque: **Choc Mental - Choc Psy** \nMeilleur set en Défense: **Choc Mental - Choc Psy**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "taupiqueur":
        message.channel.send("<:dexter:481153458192252937> **Taupiqueur**: Pokémon de type **Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante, Glace, Eau** \nRésistant à: **Roche, Poison, Electrick** \nMeilleur set en Attaque: **Coud'Boue - Tunnel** \nMeilleur set en Défense: **Coud'Boue - Tunnel** \n \n<:dexter:481153458192252937> **Taupiqueur d'Alola**: Pokémon de type **Sol/Acier** <:dexter:481153458192252937> \nVulnérable à: **Feu, Eau, Sol, Combat** \nRésistant à: **Dragon, Psy, Normal, Acier, Insecte, Vol, Fée, Electrick, Roche, Poison** \nMeilleur set en Attaque: **Griffe Acier - Tunnel** \nMeilleur set en Défense: **Coud'Boue - Tunnel**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "chenipotte":
        message.channel.send("<:dexter:481153458192252937> **Chenipotte**: Pokémon de type **Insecte** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche** \nRésistant à: **Combat, Plante, Sol** \nMeilleur set en Attaque: **Piqûre - Lutte** \nMeilleur set en Défense: **Piqûre - Lutte**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "okéoké":
        message.channel.send("<:dexter:481153458192252937> **Okéoké**: Pokémon de type **Psy** <:dexter:481153458192252937> \nVulnérable à: **Insecte, Ténèbres, Spectre** \nRésistant à: **Combat, Psy** \nMeilleur set en Attaque: **Riposte - Voile Miroir** \nMeilleur set en Défense: **Riposte - Voile Miroir**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "granivol":
        message.channel.send("<:dexter:481153458192252937> **Granivol**: Pokémon de type **Plante/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Feu, Vol, Poison, Roche** \nRésistant à: **Eau, Combat, Plante, Sol** \nMeilleur set en Attaque: **Balle Graine - Noeud Herbe** \nMeilleur set en Défense: **Balle Graine - Noeud Herbe**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "toudoudou":
        message.channel.send("<:dexter:481153458192252937> **Toudoudou**: Pokémon de type **Normal/Fée** <:dexter:481153458192252937> \nVulnérable à: **Acie, Poison** \nRésistant à: **Insecte, Ténèbres, Spectre, Dragon** \nMeilleur set en Attaque: **Ecras'Face - Ball'Ombre** \nMeilleur set en Défense: **Feinte - Ball'Ombre**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "armulys":
        message.channel.send("<:dexter:481153458192252937> **Armulys**: Pokémon de type **Insecte** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche** \nRésistant à: **Combat, Plante, Sol** \nMeilleur set en Attaque: **Piqûre - Lutte** \nMeilleur set en Défense: **Piqûre - Lutte**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "blindalys":
        message.channel.send("<:dexter:481153458192252937> **Blindalys**: Pokémon de type **Insecte** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Roche** \nRésistant à: **Combat, Plante, Sol** \nMeilleur set en Attaque: **Piqûre - Lutte** \nMeilleur set en Défense: **Piqûre - Lutte**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "fouinette":
        message.channel.send("<:dexter:481153458192252937> **Fouinette**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Vive-Attaque - Noeud Herbe** \nMeilleur set en Défense: **Vive-Attaque - Tunnel**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "skelénox":
        message.channel.send("<:dexter:481153458192252937> **Skelénox**: Pokémon de type **Spectre** <:dexter:481153458192252937> \nVulnérable à: **Ténèbres, Spectre** \nRésistant à: **Insecte, Poison, Combat, Normal** \nMeilleur set en Attaque: **Châtiment - Vent Mauvais** \nMeilleur set en Défense: **Châtiment - Vent Mauvais**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "nénupiot":
        message.channel.send("<:dexter:481153458192252937> **Nénupiot**: Pokémon de type **Eau/Plante** <:dexter:481153458192252937> \nVulnérable à: **Vol, Poison, Insecte** \nRésistant à: **Acier, Sol, Eau** \nMeilleur set en Attaque: **Tranch'Herbe - Eco-Sphère** \nMeilleur set en Défense: **Tranch'Herbe - Eco-Sphère**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "grainipiot":
        message.channel.send("<:dexter:481153458192252937> **Grainipiot**: Pokémon de type **Plante** <:dexter:481153458192252937> \nVulnérable à: **Feu, Vol, Poison, Insecte, Glace** \nRésistant à: **Eau, Plante, Electrick, Sol** \nMeilleur set en Attaque: **Vive-Attaque - Noeud Herbe** \nMeilleur set en Défense: **Balle Graine - Noeud Herbe**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "togepi":
        message.channel.send("<:dexter:481153458192252937> **Togepi**: Pokémon de type **Fée** <:dexter:481153458192252937> \nVulnérable à: **Acier, Poison** \nRésistant à: **Combat, Insecte, Ténèbres, Dragon** \nMeilleur set en Attaque: **Picpic - Eclat Magique** \nMeilleur set en Défense: **Puissance Cachée - Eclat Magique**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "méditikka":
        message.channel.send("<:dexter:481153458192252937> **Méditikka**: Pokémon de type **Combat/Psy** <:dexter:481153458192252937> \nVulnérable à: **Fée, vol, Spectre** \nRésistant à: **Combat, Roche** \nMeilleur set en Attaque: **Choc Mental - Choc Psy** \nMeilleur set en Défense: **Choc Mental - Choc Psy**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "medhyèna":
        message.channel.send("<:dexter:481153458192252937> **Medhyèna**: Pokémon de type **Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Fée, Combat, Insecte** \nRésistant à: **Spectre, Ténèbres, Psy** \nMeilleur set en Attaque: **Aboiement - Mâchouille** \nMeilleur set en Défense: **Aboiement - Mâchouille**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "nosferapti":
        message.channel.send("<:dexter:481153458192252937> **Nosferapti**: Pokémon de type **Poison/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Rocke, Psy, Electrik** \nRésistant à: **Sol, Poison, Fée, Combat, Plante, Insecte** \nMeilleur set en Attaque: **Vive-Attaque - Tranch’Air** \nMeilleur set en Défense: **Vive-Attaque - Tranch’Air**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "roucool":
        message.channel.send("<:dexter:481153458192252937> **Roucool**: Pokémon de type **Normal/Vol** <:dexter:481153458192252937> \nVulnérable à: **Glace, Rocke, Electrik** \nRésistant à: **Sol, Spectre, Plante, Insecte** \nMeilleur set en Attaque: **Vive-Attaque - Aéropique** \nMeilleur set en Défense: **Vive-Attaque - Aéropique**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "rattata":
        message.channel.send("<:dexter:481153458192252937> **Rattata**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Vive-Attaque - Croc de Mort** \nMeilleur set en Défense: **Vive-Attaque - Croc de Mort** \n \n<:dexter:481153458192252937> **Rattata d'Alola**: Pokémon de type **Ténèbres, Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat, Fée, Insecte** \nRésistant à: **Psy, Ténèbres, Spectre** \nMeilleur set en Attaque: **Vive-Attaque -  Croc de Mort** \nMeilleur set en Défense: **Vive-Attaque - Mâchouille**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "axoloto":
        message.channel.send("<:dexter:481153458192252937> **Axoloto**: Pokémon de type **Eau/Sol** <:dexter:481153458192252937> \nVulnérable à: **Plante** \nRésistant à: **Acier, Électrik, Roche, Poison, Feu** \nMeilleur set en Attaque: **Pistolet à O - Tunnel** \nMeilleur set en Défense: **Tir de Boue - Tunnel**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "chuchmur":
        message.channel.send("<:dexter:481153458192252937> **Chuchmur**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Écras’Face - Écrasement** \nMeilleur set en Défense: ** Étonnement - Voix Enjôleuse**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "mélo":
        message.channel.send("<:dexter:481153458192252937> **Mélo**: Pokémon de type **Fée** <:dexter:481153458192252937> \nVulnérable à: **Acier, Poison** \nRésistant à: **Combat, Insecte, Ténèbres, Dragon** \nMeilleur set en Attaque: **Écras’Face - Nœud Herbe** \nMeilleur set en Défense: ** Psykoud’Boul - Nœud Herbe**")
    }
	switch(args[0].toLocaleLowerCase()) {
        case "miaouss":
        message.channel.send("<:dexter:481153458192252937> **Miaouss**: Pokémon de type **Normal** <:dexter:481153458192252937> \nVulnérable à: **Combat** \nRésistant à: **Spectre** \nMeilleur set en Attaque: **Griffe - Tricherie** \nMeilleur set en Défense: ** Griffe - Tranche-Nuit** \n \n<:dexter:481153458192252937> **Miaouss d'Alola**: Pokémon de type **Ténèbres** <:dexter:481153458192252937> \nVulnérable à: **Combat, Fée, Insecte** \nRésistant à: **Psy, Ténèbres, Spectre** \nMeilleur set en Attaque: **Morsure -  Tricherie** \nMeilleur set en Défense: **Morsure - Tranche-Nuit**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidartikodin":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Artikodin** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **37603** \nTaux de capture: **3%** \nCP après capture: **1599-1676** \nLes Pokémons à choisir: **Tyranocif, Grolem, Pyroli, Sulfura, Solaroc, Typhlosion, Armaldo, Simularbre, Raikou, Braségali, Amonistar, Métalosse, Entei**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidelecthor":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Electhor** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **42691** \nTaux de capture: **3%** \nCP après capture: **1820 - 1902** \nLes Pokémons à choisir: **Tyranocif, Grolem, Rayquaza, Mewtwo, Dracolosse, Amonistar, Lippoutou, Cochignon, Raikou**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidsulfura":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Sulfura** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **41953** \nTaux de capture: **3%** \nCP après capture: **1788 - 1870** \nLes Pokémons à choisir: **Tyranocif, Grolem, Amonistar, Kyogre, Léviator, Raikou, Rayquaza, Simularbre, Electhor, Sharpedo**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidmewtwo":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Mewtwo** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **49432** \nTaux de capture: **6%** \nCP après capture: **2184 - 2275** \nLes Pokémons à choisir: **Tyranocif, Démolosse, Mewtwo, Cizayox, Scarabrute, Ectoplasma, Dracolosse, Gardevoir, Léviator**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidraikou":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Raikou** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **42932** \nTaux de capture: **2%** \nCP après capture: **1831 - 1913** \nLes Pokémons à choisir: **Groudon, Rhinoféros, Grolem, Mewtwo, Donphan, Dracolosse, Noadkoko, Nidoking, Mackogneur**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidentei":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Entei** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **38628** \nTaux de capture: **2%** \nCP après capture: **1847 - 1930** \nLes Pokémons à choisir: **Léviator, Amonistar, Grolem, Aquali, Groudon, Rhinoféros, Aligatueur, Dracolosse, Hyporoi, Relicanth**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidsuicune":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Suicune** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **34471** \nTaux de capture: **2%** \nCP après capture: **1538 - 1613** \nLes Pokémons à choisir: **Raikou, Electhor, Noadkoko, Mewtwo, Jungko, Dracolosse, Groudon, Florizarre, Tengalice, Rafflesia, Empiflor, Saquedeneu, Voltali**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidlugia":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Lugia** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **42753** \nTaux de capture: **2%** \nCP après capture: **1969 - 2056** \nLes Pokémons à choisir: **Tyranocif, Raikou, Mewtwo, Electhor, Voltali, Grolem d'Alola, Rayquaza, Lippoutou, Absol, Ectoplasma**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidho-oh":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Ho-Oh** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **48276** \nTaux de capture: **2%** \nCP après capture: **2133 - 2222** \nLes Pokémons à choisir: **Tyranocif, Amonistar, Grolem, Kyogre, Raikou, Léviator, Electhor, Rayquaza**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidregirock":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Regirock** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **41777** \nTaux de capture: **2%** \nCP après capture: **1682 - 1764** \nLes Pokémons à choisir: **Kyogre, Mackogneur, Florizarre, Mewtwo, Hariyama, Métalosse, Groudon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidregice":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Regice** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **41777** \nTaux de capture: **2%** \nCP après capture: **1682 - 1764** \nLes Pokémons à choisir: **Sulfura, Entei, Mackogneur, Pyroli, Dracaufeu, Braségali, Chapignon, Ho-Oh, Métalosse**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidregisteel":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Registeel** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **30596** \nTaux de capture: **2%** \nCP après capture: **1222 - 1292** \nLes Pokémons à choisir: **Sulfura, Entei, Mackogneur, Dracaufeu, Pyroli, Hariyama, Scarabrute**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidlatias":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Latias** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **45704** \nTaux de capture: **2%** \nCP après capture: **1846 - 1929** \nLes Pokémons à choisir: **Rayquaza, Tyranocif, Dracolosse, Drattak, Mewtwo, Latios, Cizayox, Latias**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidlatios":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Latios** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **49322** \nTaux de capture: **2%** \nCP après capture: **1995 - 2082** \nLes Pokémons à choisir: **Rayquaza, Dracolosse, Latios, Drattak, Tyranocif, Mewtwo, Cizayox**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidkyogre":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Kyogre** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **51968** \nTaux de capture: **2%** \nCP après capture: **2236 - 2328** \nLes Pokémons à choisir: **Raikou, Florizarre, Noadkoko d'Alola, Jungko, Noadkoko, Electhor, Voltali**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidgroudon":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Groudon** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **51968** \nTaux de capture: **2%** \nCP après capture: **2236 - 2328** \nLes Pokémons à choisir: **Kyogre, Léviator, Rayquaza, Drattak, Ho-Oh**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidrayquaza":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Rayquaza** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **45468** \nTaux de capture: **2%** \nCP après capture: **1995 - 2083** \nLes Pokémons à choisir: **Artikodin, Lokhlass, Cochignon, Kaimorse, Crustabri, Rayquaza, Dracolosse, Lippoutou, Galeking**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidjirachi":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Jirachi** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **37733** \nTaux de capture: **2%** \nCP après capture: **1687 - 1766** \nLes Pokémons à choisir: <:emojichen:481150612675887105> *Pas d'info pour l'instant, déso* <:emojichen:481150612675887105>")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raiddeoxys":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Deoxys** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **45891** \nTaux de capture: **2%** \nCP après capture: **1485 - 1570** \nLes Pokémons à choisir: <:emojichen:481150612675887105> *Pas d'infos pour l'instant, déso* <:emojichen:481150612675887105>")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidflorizarre":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Florizarre** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **26921** \nTaux de capture: **5%** \nCP après capture: **1395 - 1467** \nLes Pokémons à choisir: **<:emojichen:481150612675887105> *Pas d'infos pour l'instant, déso* <:emojichen:481150612675887105>**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raiddracaufeu":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Dracaufeu** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **28485** \nTaux de capture: **5%** \nCP après capture: **1461 - 1535** \nLes Pokémons à choisir: **Amonistar, Kyogre, Grolem, Solaroc, Séléroc, Raikou, Rayquaza, Léviator, Tyranocif**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidtortank":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Tortank** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **24162** \nTaux de capture: **5%** \nCP après capture: **1241 - 1309** \nLes Pokémons à choisir: **<:emojichen:481150612675887105> *Pas d'infos pour l'instant, déso* <:emojichen:481150612675887105>**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidpikachu":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Pikachu** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **11845** \nTaux de capture: **20%** \nCP après capture: **410 - 450** \nLes Pokémons à choisir: **<:emojichen:481150612675887105> *Pas d'infos pour l'instant, déso* <:emojichen:481150612675887105>**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidnidoqueen":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Nidoqueen** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **231126** \nTaux de capture: **12,5%** \nCP après capture: **1267 - 1336** \nLes Pokémons à choisir: **Mewtwo, Mentali, Alakazam, Groudon, Léviator, Gardevoir, Noadkoko, Lippoutou, Rhinoféros, Grolem, Lugia, Dracolosse**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidnidoking":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Nidoking** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **24873** \nTaux de capture: **12,5%** \nCP après capture: **1294 - 1363** \nLes Pokémons à choisir: **Mewtwo, Léviator, Groudon, Laggron, Alakazam, Rhinoféros, Grolem, Lugia, Dracolosse**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidmiaouss":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Miaouss** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **9079** \nTaux de capture: **50%** \nCP après capture: **329 - 364** \nLes Pokémons à choisir: **<:emojichen:481150612675887105> *Pas d'infos pour l'instant, déso* <:emojichen:481150612675887105>**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidtartard":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Tartard** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **24247** \nTaux de capture: **12,5%** \nCP après capture: **1325 - 1395** \nLes Pokémons à choisir: **Mewtwo, Gardevoir, Raikou, Latios, Rayquaza, Alakazam, Mentali**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidempiflor":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Empiflor** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **23780** \nTaux de capture: **12,5%** \nCP après capture: **1228 - 1296** \nLes Pokémons à choisir: **Sulfura, Entei, Mewtwo, Pyroli, Dracaufeu, Alakazam, Mentali, Ho-Oh, Lugia, Dracolosse**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidgrolem":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Grolem** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **30572** \nTaux de capture: **12,5%** \nCP après capture: **1589 - 1666** \nLes Pokémons à choisir: **Kyogre, Léviator, Groudon, Noadkoko, Florizarre, Saquedeneu, Aquali, Laggron, Milobellus, Tengalice**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidrhinoféros":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Rhinoféros** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **30512** \nTaux de capture: **5%** \nCP après capture: **1804 - 1886** \nLes Pokémons à choisir: **Kyogre, Léviator, Florizarre, Noadkoko**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidlokhlass":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Lokhlass** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **21768** \nTaux de capture: **5%** \nCP après capture: **1414 - 1487** \nLes Pokémons à choisir: **Raikou, Mackogneur, Hariyama, Mewtwo, Electhor, Amonistar, Scarhino, Voltali, Noadkoko, Empiflor, Tartard, Tyranocif, Arcanin**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidronflex":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Ronflex** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **25419** \nTaux de capture: **5%** \nCP après capture: **1833 - 1917** \nLes Pokémons à choisir: **Mackogneur, Hariyama, Mewtwo, Sulfura, Dracolosse, Ursaring, Scarhino, Chapignon, Léviator, Tyranocif, Groudon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raiddracolosse":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Dracolosse** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **35383** \nTaux de capture: **5%** \nCP après capture: **1961 - 2046** \nLes Pokémons à choisir: **<:emojichen:481150612675887105> *Pas d'infos pour l'instant, déso* <:emojichen:481150612675887105>**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidaligatueur":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Aligatueur** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **27740** \nTaux de capture: **5%** \nCP après capture: **1481 - 1554** \nLes Pokémons à choisir: **Raikou, Electhor, Groudon, Noadkoko, Jungko, Empiflor, Voltali, Ho-Oh**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidqulbutoké":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Qulbutoké** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **7144** \nTaux de capture: **25%** \nCP après capture: **531 - 585** \nLes Pokémons à choisir: **<:emojichen:481150612675887105> *Pas d'infos pour l'instant, déso* <:emojichen:481150612675887105>**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidursaring":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Ursaring** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **27409** \nTaux de capture: **15%** \nCP après capture: **1501 - 1577** \nLes Pokémons à choisir: **Mackogneur, Hariyama, Scarabrute, Mewtwo, Chapignon, Braségali, Rayquaza, Drattak**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raiddémolosse":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Démolosse** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **27302** \nTaux de capture: **15%** \nCP après capture: **1373 - 1445** \nLes Pokémons à choisir: **Kyogre, Mackogneur, Hariyama, Léviator, Chapignon, Groudon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidtyranocif":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Tyranocif** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **34707** \nTaux de capture: **5%** \nCP après capture: **2011 - 2097** \nLes Pokémons à choisir: **Mackogneur, Hariyama, Braségali, Tartard, Chapignon, Scarabrute, Groudon, Aquali, Rhinoféros, Donphan**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidgaleking":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Galeking** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **33458** \nTaux de capture: **12,5%** \snCP après capture: **1636 - 1716** \nLes Pokémons à choisir: **Mackogneur, Hariyama, Groudon, Braségali, Scarabrute, Chapignon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidabsol":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Absol** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **26262** \nTaux de capture: **50%** \nCP après capture: **1232 - 1303** \nLes Pokémons à choisir: **Mackogneur, Hariyama, Donphan, Dracolosse, Chapignon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidkaimorse":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Kaimorse** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **23578** \nTaux de capture: **12,5%** \nCP après capture: **1417 - 1489** \nLes Pokémons à choisir: **Mackogneur, Raikou, Electhor, Hariyama, Chapignon, Kyogre**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidossatueuralola":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Ossatueur d'Alola** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **20190** \nTaux de capture: **15%** \nCP après capture: **908 - 966** \nLes Pokémons à choisir: **Kyogre, Tyranocif, Léviator, Groudon, Mewtwo, Ectoplasma, Branette, Absol**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidfeunard":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Feunard** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **14914** \nTaux de capture: **10%** \nCP après capture: **1167 - 1233** \nLes Pokémons à choisir: **Léviator, Groudon, Mewtwo, Aquali, Draccolosse, Tyranocif, Grolem, Sharpedo**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidarcanin":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Arcanin** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **17832** \nTaux de capture: **10%** \nCP après capture: **1546 - 1622** \nLes Pokémons à choisir: **Amonistar, Mewtwo, Grolem, Aquali, Dracolosse, Tyranocif, Rhinoféros**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidalakazam":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Alakazam** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **22646** \nTaux de capture: **10%** \nCP après capture: **1569 - 1649** \nLes Pokémons à choisir: **Mewtwo, Tyranocif, Cizayox, Absol, Démolosse, Scarabrute, Léviator, Rayquaza, Dracolosse, Kyogre, Ectoplasma**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidmackogneur":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Mackogneur** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **18144** \nTaux de capture: **10%** \nCP après capture: **1574 - 1650** \nLes Pokémons à choisir: **Mewtwo, Rayquaza, Lugia, Mentali, Gardevoir, Alakazam, Ho-Oh, Dracolosse, Noadkoko, Drattak, Métalosse**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidectoplasma":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Ectoplasma** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **19768** \nTaux de capture: **10%** \nCP après capture: **1420 - 1496** \nLes Pokémons à choisir: **Mewtwo, Groudon, Lugia, Tyranocif, Gardevoir, Dracolosse, Démolosse, Léviator, Alakazam, Mentali, Noadkoko, Ectoplasma, Rhinoféros**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidonix":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Onix** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **9534** \nTaux de capture: **20%** \nCP après capture: **523 - 572** \nLes Pokémons à choisir: **Kyogre, Groudon, Noadkoko, Florizarre, Léviator**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidkicklee":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Kicklee** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **19679** \nTaux de capture: **20%** \nCP après capture: **1302 - 1375** \nLes Pokémons à choisir: **Mewtwo, Gardevoir, Mentali, Alakazam, Rayquaza, Latios**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidtygnon":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Tygnon** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **17164** \nTaux de capture: **20%** \nCP après capture: **1132 - 1199** \nLes Pokémons à choisir: **Mewtwo, Rayquaza, Dracolosse, Alakazam, Latios**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidsaquedeneu":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Saquedeneu** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **16085** \nTaux de capture: **40%** \nCP après capture: **1195 - 1262** \nLes Pokémons à choisir: **Sulfura, Entei, Rayquaza, Dracaufeu, Pyroli, Lippoutou, Drattak**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidstaross":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Staross** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **17384** \nTaux de capture: **20%** \nCP après capture: **1246 - 1316** \nLes Pokémons à choisir: **Raikou, Mewtwo, Tyranocif, Groudon, Noadkoko, Electhor, Ectoplasma**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidinsécateur":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Insécateur** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **17358** \nTaux de capture: **30%** \nCP après capture: **1337 - 1408** \nLes Pokémons à choisir: **Grolem, Amonistar, Sulfura, Raikou, Entei, Tyranocif, Rayquaza**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidlippoutou":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Lippoutou** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **18296** \nTaux de capture: **30%** \nCP après capture: **1363 - 1435** \nLes Pokémons à choisir: **Entei, Métalosse, Sulfura, Tyranocif, Mewtwo, Pyraoli**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidscarabrute":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Scarabrute** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **20176** \nTaux de capture: **30%** \nCP après capture: **1506 - 1583** \nLes Pokémons à choisir: **Sulfura, Entei, Pyroli, Braségali, Rayquaza**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidaquali":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Aquali** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **16696** \nTaux de capture: **12,5%** \nCP après capture: **1724 - 1804** \nLes Pokémons à choisir: **Raikou, Florizarre, Noadkoko d'Alola, Noadkoko, Latios, Electhor**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidvoltali":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Voltali** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **19883** \nTaux de capture: **12,5%** \nCP après capture: **1484 - 1560** \nLes Pokémons à choisir: **Groudon, Rayquaza, Drattak, Mewtwo, Dracolosse, Ectoplasma**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidpyroli":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Pyroli** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **21155** \nTaux de capture: **12,5%** \nCP après capture: **1581 - 1659** \nLes Pokémons à choisir: **Kyogre, Tyranocif, Léviator, Amonsitar, Drattak, Groudon, Rayquaza, Grolem**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidporygon":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Porygon** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **11419** \nTaux de capture: **40%** \nCP après capture: **840 - 895** \nLes Pokémons à choisir: **Mackogneur, Hariyama, Mewtwo, Scarabrute, Braségali, Dracolosse, Tartard, Entei, Sulfura, Chapignon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidamonistar":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Amonistar** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **18915** \nTaux de capture: **15%** \nCP après capture: **1460 - 1534** \nLes Pokémons à choisir: **Groudon, Noadkoko, Jungko, Florizarre, Empliflor**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidkabutops":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Kabutops** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **19004** \nTaux de capture: **15%** \nCP après capture: **1365 - 1438** \nLes Pokémons à choisir: **Florizarre, Noadkoko, Groudon, Empiflor, Tengalice, Chapignon**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidptéra":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Ptéra** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **17294** \nTaux de capture: **20%** \nCP après capture: **1417 - 1490** \nLes Pokémons à choisir: **Kyogre, Raikou, Métalosse, Galeking, Aquali, Electhor**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidazumarill":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Azumarill** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **8989** \nTaux de capture: **15%** \nCP après capture: **803 - 858** \nLes Pokémons à choisir: **Raikou, Electhor, Noadkoko, Groudon, Florizarre, Ho-Oh**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidgranbull":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Granbull** <:dexter:481153458192252937> \nForme Chromatique: **Oui** \nCP: **15328** \nTaux de capture: **15%** \nCP après capture: **1324 - 1394** \nLes Pokémons à choisir: **Dracolosse, Métalosse, Kyogre, Tyranocif, Ho-Oh**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidcaratroc":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Caratroc** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **3553** \nTaux de capture: **30%** \nCP après capture: **137 - 171** \nLes Pokémons à choisir: **Kyogre, Léviator, Métalosse, Dracolosse, Amonistar, Drattak**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidcochignon":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Cochignon** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **13663** \nTaux de capture: **12,5%** \nCP après capture: **1237 - 1305** \nLes Pokémons à choisir: **Kyogre, Sulfura, Entei, Mackogneur, Hariyama, Aquali**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raiddonphan":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Donphan** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **18980** \nTaux de capture: **12,5%** \nCP après capture: **1649 - 1727** \nLes Pokémons à choisir: **Kyogre, Léviator, Florizarre, Noadkoko, Noadkoko d'Alola, Drattak, Latios, Jungko, Lippoutou**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidchapignon":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Chapignon** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **18174** \nTaux de capture: **20%** \nCP après capture: **1303 - 1375** \nLes Pokémons à choisir: **Rayquaza, Mewtwo, Dracaufeu, Sulfura, Dracolosse, Lugia**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidsharpedo":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Sharpedo** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **13989** \nTaux de capture: **20%** \nCP après capture: **1066 - 1134** \nLes Pokémons à choisir: **Mackogneur, Scarabrute, Hariyama, Raikou, Florizarre, Electhor**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidséléroc":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Séléroc** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **14103** \nTaux de capture: **30%** \nCP après capture: **1216 - 1283** \nLes Pokémons à choisir: **Kyogre, Groudon, Tyranocif, Mewtwo, Noadkoko, Florizarre, Léviator, Ectoplasma, Absol**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidsolaroc":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Solaroc** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **14103** \nTaux de capture: **30%** \nCP après capture: **1216 - 1283** \nLes Pokémons à choisir: **Kyogre, Groudon, Tyranocif, Mewtwo, Noadkoko, Florizarre, Léviator, Ectoplasma, Absol**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidkaorine":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Kaorine** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **13450** \nTaux de capture: **20%** \nCP après capture: **957 - 1018** \nLes Pokémons à choisir: **Kyogre, Mewtwo, Léviator, Tyranocif, Noadkoko, Cacturne**")
    }
    switch(args[0].toLocaleLowerCase()) {
        case "raidraichualola":
        message.channel.send("<:dexter:481153458192252937> Fiche Raid **Raichu d'Alola** <:dexter:481153458192252937> \nForme Chromatique: **Non** \nCP: **16178** \nTaux de capture: **10%** \nCP après capture: **1158 - 1224** \nLes Pokémons à choisir: **Mewtwo, Tyranocif, Démolosse, Rayquaza, Absol, Scarabrute, Groudon, Rhinoféros, Ectoplasma**")
    }
});


bot.login(process.env.TOKEN);
