class Pays {
	constructor (name,gold,silver,bronze) {
		this.name = name;
		this.gold = gold;
		this.silver = silver;
		this.bronze = bronze;
		this.total = this.gold + this.silver + this.bronze;
	}
}


// Crée un objet pour chaque pays avec médailles randoms

const nameArray = ['Pologne','Lettonie','Estonie','Belgique','Ukraine','Espagne','Bélarus','Slovaquie','Rép. tchèque','Hongrie','Australie','Finlande','Nouvelle-Zélande','Slovénie','Rép. de Corée','Italie','Japon','Canada','France','Russian O.C.','Autriche','Suisse','Suède','Pays-Bas','Chine','Etats-Unis','Allemagne','Norvège'];
var paysArray = [];

nameArray.forEach(elt => {
	let gold = Math.floor(Math.random() * 10);
	let bronze = Math.floor(Math.random() * 10);
	let silver = Math.floor(Math.random() * 10);
	let newPays = new Pays(elt,gold,silver,bronze);
	paysArray.push(newPays);
})


// Classement des pays

var classement = paysArray.sort(function(a,b) {
	if (a.total < b.total) {
		return 1;
	} else if (a.total > b.total) {
		return -1;
	} else {
		return 0;
	}
});


// Affiche le classement

var classArray = document.querySelector('.classement');

for (var i = 0; i < classement.length; i++) {

	let newItem = document.createElement('div');
	newItem.classList.add('classement-item');

	let ordre = document.createElement('span');
	ordre.classList.add('ordre','center');
	ordre.innerText = i + 1;

	let pays = document.createElement('div');
	pays.classList.add('nomPays','decaleGauche');

	let drapeau = document.createElement('img');
	drapeau.classList.add('drapeau');
	drapeau.src = `images/drapeau/${classement[i].name}.png`

	let nomPays = document.createElement('span');
	nomPays.innerText = `${classement[i].name}`;

	let gold = document.createElement('span');
	gold.classList.add('gold','center');
	gold.innerText = `${classement[i].gold}`;

	let silver = document.createElement('span');
	silver.classList.add('silver','center');
	silver.innerText = `${classement[i].silver}`;

	let bronze = document.createElement('span');
	bronze.classList.add('bronze','center');
	bronze.innerText = `${classement[i].bronze}`;

	let totMed = document.createElement('span');
	totMed.classList.add('totMed','center');
	totMed.innerText = `${classement[i].total}`;

	classArray.append(newItem);
	newItem.append(ordre);
	newItem.append(pays);
	pays.append(drapeau);
	pays.append(nomPays);
	newItem.append(gold);
	newItem.append(silver);
	newItem.append(bronze);
	newItem.append(totMed);
}
