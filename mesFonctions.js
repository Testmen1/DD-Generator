function de(){
  let des = document.getElementsByClassName('de');
  var temp;
  for(let i=0;i<des.length;i++){
    temp = [getRandomInt(1,7),getRandomInt(1,7),getRandomInt(1,7),getRandomInt(1,7)];
    temp.sort(function(a, b) {
      return b - a;
    });
    des[i].value = temp[0] + temp[1] + temp[2] + temp[3];
  }
}

function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function caracrand(){
  let des = document.getElementsByClassName('de');
  let inputcarac = document.getElementsByClassName('carac');
  let chaine = [];
  let temp;
  let random;
  for(let i=0;i<inputcarac.length;i++){
    chaine[i] = des[i].value;
  }
  for(let i=0;i<inputcarac.length;i++){
    temp = chaine[i];
    random = getRandomInt(0,6);
    chaine[i] = chaine[random];
    chaine[random] = temp;
  }
  for(let i=0;i<inputcarac.length;i++){
    inputcarac[i].value = chaine[i];
  }
}

function reset(){
  let des = document.getElementsByClassName('de');
  for(let i=0;i<des.length;i++){
    des[i].value = '';
  }
}

function resetForm(){
  var form = document.getElementsByClassName('myForm');
  for(let i=0;i<form.length;i++){
    form[i].reset();
  }
}

function enregistrercaracteristiques(){
  var nom = document.getElementsByName('NomPersonnage')[0].value;
  var joueur = document.getElementsByName('NomJoueur')[0].value;
  var race = document.getElementsByName('Race')[0].value;
  var age = document.getElementsByName('Age')[0].value;
  var sexe = document.getElementsByName('Sexe')[0].value;
  var taille = document.getElementsByName('Taille')[0].value;
  var classe = document.getElementsByName('Classe')[0].value;
  var alignement = document.getElementsByName('Alignement')[0].value;
  var force = document.getElementsByName('Force')[0].value;
  var dexterite = document.getElementsByName('Dexterite')[0].value;
  var constitution = document.getElementsByName('Constitution')[0].value;
  var intelligence = document.getElementsByName('Intelligence')[0].value;
  var sagesse = document.getElementsByName('Sagesse')[0].value;
  var charisme = document.getElementsByName('Charisme')[0].value;
  var objetJSON = { "NomPersonnage": nom, "NomJoueur": joueur, "Race": race, "Age": age, "Sexe": sexe, "Taille": taille, "Poids": poids , "Classe": classe, "Alignement": alignement,"Dieu": dieu, "Force": force, "Dextérité": dexterite, "Constitution": constitution, "Sagesse": sagesse, "Charisme": charisme};
  var jsonString = JSON.stringify(objetJSON);
  downloadJSON(jsonString, nom+"caracteristiques.json");
}

function downloadJSON(jsonString, fileName) {
      var blob = new Blob([jsonString], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
}

function deuxiemepartie(){
  var cacher = document.getElementsByClassName("premier");
  for(let i=0;i<cacher.length;i++){
    cacher[i].hidden = true;
  }
  var cacher2 = document.getElementsByClassName("quatrieme");
  for(let i=0;i<cacher2.length;i++){
    cacher2[i].hidden = true;
  }
  var apparaitre = document.getElementsByClassName("deuxieme");
  for(let i=0;i<apparaitre.length;i++){
    apparaitre[i].hidden = false;
  }
}

function troisiemepartie(){
  var cacher = document.getElementsByClassName("deuxieme");
  for(let i=0;i<cacher.length;i++){
    cacher[i].hidden = true;
  }
  var cacher2 = document.getElementsByClassName("quatrieme");
  for(let i=0;i<cacher2.length;i++){
    cacher2[i].hidden = true;
  }
  var apparaitre = document.getElementsByClassName("troisieme");
  for(let i=0;i<apparaitre.length;i++){
    apparaitre[i].hidden = false;
  }
}

function quatriemepartie(){
  var cacher = document.getElementsByClassName("deuxieme");
  for(let i=0;i<cacher.length;i++){
    cacher[i].hidden = true;
  }
  var cacher2 = document.getElementsByClassName("troisieme");
  for(let i=0;i<cacher2.length;i++){
    cacher2[i].hidden = true;
  }
  var apparaitre = document.getElementsByClassName("quatrieme");
  for(let i=0;i<apparaitre.length;i++){
    apparaitre[i].hidden = false;
  }
  nbpoints = document.getElementsByClassName("nbcompe");
  for(let i=0;i<nbpoints.length;i++){
    nbpoints[i].value = 0;
  }
}

function dieu(){
  var race = document.getElementsByName('Race')[0].value;
  var classe = document.getElementsByName('Classe')[0].value;
  var alignement = document.getElementsByName('Alignement')[0].value;
  let apparaitre;
  let i;
  if(classe!=null){
    apparaitre = document.getElementsByClassName(classe);
    for(i=0;i<apparaitre.length;i++){
      apparaitre[i].hidden = false;
    }
  }
  if(race!=null){
    apparaitre = document.getElementsByClassName(race);
    for(i=0;i<apparaitre.length;i++){
      apparaitre[i].hidden = false;
    }
  }
  if(alignement!=null){
    if(alignement=="LB"){
      chaotique =  document.getElementsByClassName('C');
      mauvais = document.getElementsByClassName('M');
      for(i=0;i<chaotique.length;i++){
        chaotique[i].hidden = true;
      }
      for(i=0;i<mauvais.length;i++){
        mauvais[i].hidden = true;
      }
    }else if(alignement=="NB"){
      mauvais = document.getElementsByClassName('M');
      for(i=0;i<mauvais.length;i++){
        mauvais[i].hidden = true;
      }
    }else if(alignement=="CB"){
      mauvais = document.getElementsByClassName('M');
      for(i=0;i<mauvais.length;i++){
        mauvais[i].hidden = true;
      }
      loyal =  document.getElementsByClassName('L');
      for(i=0;i<loyal.length;i++){
        loyal[i].hidden = true;
      }
    }else if(alignement=="LN"){
      chaotique =  document.getElementsByClassName('C');
      for(i=0;i<chaotique.length;i++){
        chaotique[i].hidden = true;
      }
    }else if(alignement=="NC"){
      loyal =  document.getElementsByClassName('L');
      for(i=0;i<loyal.length;i++){
        loyal[i].hidden = true;
      }
    }else if(alignement=="LM"){
      bon = document.getElementsByClassName('B');
      for(i=0;i<bon.length;i++){
        bon[i].hidden = true;
      }
      chaotique =  document.getElementsByClassName('C');
      for(i=0;i<chaotique.length;i++){
        chaotique[i].hidden = true;
      }
    }else if(alignement=="NM"){
      bon = document.getElementsByClassName('B');
      for(i=0;i<bon.length;i++){
        bon[i].hidden = true;
      }
    }else if(alignement=="CM"){
      bon = document.getElementsByClassName('B');
      for(i=0;i<bon.length;i++){
        bon[i].hidden = true;
      }
      loyal =  document.getElementsByClassName('L');
      for(i=0;i<loyal.length;i++){
        loyal[i].hidden = true;
      }
    }
  }
}

function alignement(){
  let i = 0;
  var classe = document.getElementsByName('Classe')[0].value;
  if(classe!=null){
    document.getElementsByName('Alignement')[0].value = "";
    if(classe=="Barbare"){
      var loyal = document.getElementsByClassName('L');
      for(i=0;i<loyal.length;i++){
        loyal[i].hidden = true;
      }
    }else if(classe=="Barde"){
      var loyal = document.getElementsByClassName('L');
      for(i=0;i<loyal.length;i++){
        loyal[i].hidden = true;
      }
    }else if(classe=="Druide"){
      var nonneutre = document.getElementsByClassName('nonneutre');
      for(i=0;i<nonneutre.length;i++){
        nonneutre[i].hidden = true;
      }
    }else if(classe=="Moine"){
      var nonloyal = document.getElementsByClassName('nonloyal');
      for(i=0;i<nonloyal.length;i++){
        nonloyal[i].hidden = true;
      }
    }else if(classe=="Paladin"){
      var nonloyal = document.getElementsByClassName('nonloyal');
      var mauvais = document.getElementsByClassName('M');
      var neutre = document.getElementsByClassName('N');
      for(i=0;i<nonloyal.length;i++){
        nonloyal[i].hidden = true;
      }
      for(i=0;i<mauvais.length;i++){
        mauvais[i].hidden = true;
      }
      for(i=0;i<neutre.length;i++){
        neutre[i].hidden = true;
      }
    }
  }
}

function suite(){
  alignement();
  deuxiemepartie();
}

function suite2(){
  dieu();
  troisiemepartie();
}

function suite3(){
  nbcompetence();
  quatriemepartie();
}

function sexerandom(){
  var selectElement = document.getElementById("sexe");
  var options = selectElement.options;
  var optionAleatoire = options[Math.floor(Math.random() * options.length)];
  optionAleatoire.selected = true;
}

function racerandom(){
  var selectElement = document.getElementById("race");
  var options = selectElement.options;
  var optionAleatoire = options[Math.floor(Math.random() * options.length)];
  optionAleatoire.selected = true;
}

function classerandom(){
  var selectElement = document.getElementById("classe");
  var options = selectElement.options;
  var optionAleatoire = options[Math.floor(Math.random() * options.length)];
  optionAleatoire.selected = true;
}

function cheveuxrandom(){
  var cheveux = ["brun","blond","roux","blanc","noir","chauve","châtain","rouge","gris"];
  var indexAleatoire = Math.floor(Math.random() * cheveux.length);
  var elementAleatoire = cheveux[indexAleatoire];
  document.getElementById("cheveux").value = elementAleatoire;
}

function yeuxrandom(){
  var yeux = ["marron","vert","bleu","blanc","noir","borgne","aveugle","rouge","gris","violet","jaune","orange"];
  var indexAleatoire = Math.floor(Math.random() * yeux.length);
  var elementAleatoire = yeux[indexAleatoire];
  document.getElementById("yeux").value = elementAleatoire;
}

function agerandom(){
  var race = document.getElementsByName('Race')[0].value;
  var classe = document.getElementsByName('Classe')[0].value;
  var age;
  var de;
  if(race=="Humain"){
    age=15;
    if((classe=="Barbare")||(classe=="Ensorceleur")||(classe=="Roublard")){
      de = getRandomInt(1,5);
      age = age + de;
    }else if((classe=="Barde")||(classe=="Guerrier")||(classe=="Paladin")||(classe=="Rodeur")){
      de = getRandomInt(1,7);
      age = age + de;
    }else if((classe=="Druide")||(classe=="Magicien")||(classe=="Moine")||(classe=="Pretre")){
      de = getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }
  }else if(race=="DemiElfe"){
    age=20;
    if((classe=="Barbare")||(classe=="Ensorceleur")||(classe=="Roublard")){
      de = getRandomInt(1,7);
      age = age + de;
    }else if((classe=="Barde")||(classe=="Guerrier")||(classe=="Paladin")||(classe=="Rodeur")){
      de = getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }else if((classe=="Druide")||(classe=="Magicien")||(classe=="Moine")||(classe=="Pretre")){
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }
  }else if(race=="DemiOrque"){
    age=14;
    if((classe=="Barbare")||(classe=="Ensorceleur")||(classe=="Roublard")){
      de = getRandomInt(1,5);
      age = age + de;
    }else if((classe=="Barde")||(classe=="Guerrier")||(classe=="Paladin")||(classe=="Rodeur")){
      de = getRandomInt(1,7);
      age = age + de;
    }else if((classe=="Druide")||(classe=="Magicien")||(classe=="Moine")||(classe=="Pretre")){
      de = getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }
  }else if(race=="Elfe"){
    age=110;
    if((classe=="Barbare")||(classe=="Ensorceleur")||(classe=="Roublard")){
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }else if((classe=="Barde")||(classe=="Guerrier")||(classe=="Paladin")||(classe=="Rodeur")){
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }else if((classe=="Druide")||(classe=="Magicien")||(classe=="Moine")||(classe=="Pretre")){
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }
  }else if(race=="Gnome"){
    age=40;
    if((classe=="Barbare")||(classe=="Ensorceleur")||(classe=="Roublard")){
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }else if((classe=="Barde")||(classe=="Guerrier")||(classe=="Paladin")||(classe=="Rodeur")){
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }else if((classe=="Druide")||(classe=="Magicien")||(classe=="Moine")||(classe=="Pretre")){
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }
  }else if(race=="Nain"){
    age=40;
    if((classe=="Barbare")||(classe=="Ensorceleur")||(classe=="Roublard")){
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }else if((classe=="Barde")||(classe=="Guerrier")||(classe=="Paladin")||(classe=="Rodeur")){
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }else if((classe=="Druide")||(classe=="Magicien")||(classe=="Moine")||(classe=="Pretre")){
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }
  }else if(race=="Halfelin"){
    age=20;
    if((classe=="Barbare")||(classe=="Ensorceleur")||(classe=="Roublard")){
      de = getRandomInt(1,5)+getRandomInt(1,5);
      age = age + de;
    }else if((classe=="Barde")||(classe=="Guerrier")||(classe=="Paladin")||(classe=="Rodeur")){
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }else if((classe=="Druide")||(classe=="Magicien")||(classe=="Moine")||(classe=="Pretre")){
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      age = age + de;
    }
  }
  document.getElementById("age").value = age;
}

function poidstaillerandom(){
  var race = document.getElementsByName('Race')[0].value;
  var sexe = document.getElementsByName('Sexe')[0].value;
  var taille;
  var poids;
  var de;
  var debis;
  if(race=="Humain"){
    if(sexe=="Homme"){
      taille = 150;
      de = getRandomInt(1,11)+getRandomInt(1,11)+getRandomInt(1,11)+getRandomInt(1,11)+getRandomInt(1,11);
      debis = getRandomInt(1,5)+getRandomInt(1,5);
      poids = 60;
    }else{
      taille = 135;
      de = getRandomInt(1,11)+getRandomInt(1,11)+getRandomInt(1,11)+getRandomInt(1,11)+getRandomInt(1,11);
      debis = getRandomInt(1,5)+getRandomInt(1,5);
      poids = 42;
    }
    poids = poids + (de*debis)/5;
    taille = taille + de;
  }else if(race=="DemiElfe"){
    if(sexe=="Homme"){
      taille = 140;
      de = getRandomInt(1,9)+getRandomInt(1,9)+getRandomInt(1,9)+getRandomInt(1,9)+getRandomInt(1,9);
      debis = getRandomInt(1,5)+getRandomInt(1,5);
      poids = 50;
    }else{
      taille = 135;
      de = getRandomInt(1,9)+getRandomInt(1,9)+getRandomInt(1,9)+getRandomInt(1,9)+getRandomInt(1,9);
      debis = getRandomInt(1,5)+getRandomInt(1,5);
      poids = 40;
    }
    poids = poids + (de*debis)/5;
    taille = taille + de;
  }else if(race=="DemiOrque"){
    if(sexe=="Homme"){
      taille = 150;
      de = getRandomInt(1,13)+getRandomInt(1,13)+getRandomInt(1,13)+getRandomInt(1,13)+getRandomInt(1,13);
      debis = getRandomInt(1,7)+getRandomInt(1,7);
      poids = 75;
    }else{
      taille = 135;
      de = getRandomInt(1,13)+getRandomInt(1,13)+getRandomInt(1,13)+getRandomInt(1,13)+getRandomInt(1,13);
      debis = getRandomInt(1,7)+getRandomInt(1,7);
      poids = 55;
    }
    taille = taille + de;
    poids = poids + (de*debis)/5;
  }else if(race=="Elfe"){
    if(sexe=="Homme"){
      taille = 135;
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      debis = getRandomInt(1,7);
      poids = 42;
    }else{
      taille = 135;
      de = getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7)+getRandomInt(1,7);
      debis = getRandomInt(1,7);
      poids = 40;
    }
    taille = taille + de;
    poids = poids + (de*debis)/5;
  }else if(race=="Gnome"){
    if(sexe=="Homme"){
      taille = 90;
      de = getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5);
      debis = getRandomInt(1,2);
      poids = 20;
    }else{
      taille = 85;
      de = getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5);
      debis = getRandomInt(1,2);
      poids = 17;
    }
    taille = taille + de;
    poids = poids + (de*debis)/5;
  }else if(race=="Nain"){
    if(sexe=="Homme"){
      taille = 115;
      de = getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5);
      debis = getRandomInt(1,7)+getRandomInt(1,7);
      poids = 65;
    }else{
      taille = 110;
      de = getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5);
      debis = getRandomInt(1,7)+getRandomInt(1,7);
      poids = 50;
    }
    taille = taille + de;
    poids = poids + (de*debis)/5;
  }else if(race=="Halfelin"){
    if(sexe=="Homme"){
      taille = 80;
      de = getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5);
      debis = getRandomInt(1,2);
      poids = 15;
    }else{
      taille = 75;
      de = getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5)+getRandomInt(1,5);
      debis = getRandomInt(1,2);
      poids = 12;
    }
    taille = taille + de;
    poids = poids + (de*debis)/5;
  }
  document.getElementById("taille").value = taille;
  document.getElementById("poids").value = poids;
}

function allrandom(){
  classerandom();
  racerandom();
  sexerandom();
  cheveuxrandom();
  yeuxrandom();
}

function nbcompetence(){
  var classe = document.getElementsByName('Classe')[0].value;
  var race = document.getElementsByName('Race')[0].value;
  var intelligence = document.getElementsByName('Intelligence')[0].value;
  var modificateur;
  modificateur = 0;
  if(intelligence==3){
    modificateur = -4;
  }else if((intelligence==4)||(intelligence==5)){
    modificateur = -3;
  }else if((intelligence==6)||(intelligence==7)){
    modificateur = -2;
  }else if((intelligence==8)||(intelligence==9)){
    modificateur = -1;
  }else if((intelligence==10)||(intelligence==11)){
    modificateur = 0;
  }else if((intelligence==12)||(intelligence==13)){
    modificateur = 1;
  }else if((intelligence==14)||(intelligence==15)){
    modificateur = 2;
  }else if((intelligence==16)||(intelligence==17)){
    modificateur = 3;
  }else if((intelligence==18)||(intelligence==19)){
    modificateur = 4;
  }else if((intelligence==20)||(intelligence==21)){
    modificateur = 5;
  }
  var nbpoints;
  if((classe=="Barbare")||(classe=="Druide")||(classe=="Moine")){
    nbpoints = (4 + modificateur)*4;
  }else if((classe=="Barde")||(classe=="Rodeur")){
    nbpoints = (6 + modificateur)*4;
  }else if(classe=="Roublard"){
    nbpoints = (8 + modificateur)*4;
  }else if((classe=="Ensorceleur")||(classe=="Guerrier")||(classe=="Magicien")||(classe=="Paladin")||(classe=="Pretre")){
    nbpoints = (2 + modificateur)*4;
  }
  if(race=="Humain"){
    nbpoints = nbpoints + 4;
  }
  nbcompetence = document.getElementById("nbcompetence");
  nbcompetence.innerHTML = nbpoints;
}

function enleverpts(laquelle){
  points = document.getElementById("nbcompetence");
  var currentValue = parseInt(points.innerHTML);
  classe = laquelle.className;
  pointsJoueur = document.getElementsByName(classe)[0];
  var currentpointJoueur = parseInt(pointsJoueur.value);
  if(currentpointJoueur>0){
    points.innerHTML = currentValue + 2;
    pointsJoueur.value = currentpointJoueur - 1;
  }else{
    alert("Vous ne pouvez pas enlever plus de points");
  }
}

function ajouterpts(laquelle){
  points = document.getElementById("nbcompetence");
  var currentValue = parseInt(points.innerHTML);
  classe = laquelle.className;
  pointsJoueur = document.getElementsByName(classe)[0];
  var currentpointJoueur = parseInt(pointsJoueur.value);
  if(currentValue>1){
    if(currentpointJoueur<3){
      points.innerHTML = currentValue - 2;
      pointsJoueur.value = currentpointJoueur + 1;
    }else{
      alert("Le maximum de degré de maîtrise est 3");
    }
  }else{
    alert("Vous n'avez plus assez de points");
  }
}
