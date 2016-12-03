'use strict';

exports.BattlePokedex = {
  	yddraig: {
	      	num: 10001,
	      	species: "Yddraig",
	      	types: ["Dragon"],
		      baseStats: {hp: 60, atk: 60, def: 55, spa: 75, spd: 55, spe: 85},
	      	abilities: {0: "Infernal Scales", H: "Shed Skin"},
	      	heightm: 1.1,
	      	weightkg: 23,
	      	color: "Red",
	      	eggGroups: ["Dragon"],
    	},
	detuoy: {
	      	num: 10002,
	      	species: "Detuoy",
	      	types: ["Steel", "Flying"],
		      baseStats: {hp: 60, atk: 120, def: 150, spa: 30, spd: 120, spe: 30},
	      	abilities: {0: "Aerilate"},
	      	heightm: 1.8,
	      	weightkg: 666,
	      	color: "Gray",
	      	eggGroups: ["Mineral"],
    	},
	mycelore: {
		num: 10003,
		species: "Mycelore",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 45, atk: 31, def: 21, spa: 86, spd: 106, spe: 31},
		abilities: {0: "Serene Grace", 1: "Effect Spore", H: "Wonder Skin"},
		heightm: 0.2,
		weightkg: 3.2,
		color: "Purple",
		evos: ["Muceptio"],
		eggGroups: ["Grass", "Amorphous"],
	},
	muceptio: {
		num: 10004,
		species: "Muceptio",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 60, atk: 46, def: 36, spa: 101, spd: 121, spe: 61},
		abilities: {0: "Serene Grace", 1: "Effect Spore", H: "Wonder Skin"},
		heightm: 0.6,
		weightkg: 9.8,
		color: "Purple",
		prevo: "mycelore",
		evos: ["Malifery"],
		eggGroups: ["Grass", "Amorphous"],
	},
	malifery: {
		num: 10005,
		species: "Malifery",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 75, atk: 61, def: 51, spa: 116, spd: 136, spe: 91},
		abilities: {0: "Serene Grace", 1: "Effect Spore", H: "Wonder Skin"},
		heightm: 1.6,
		weightkg: 23.8,
		color: "Purple",
		prevo: "muceptio",
		eggGroups: ["Grass", "Amorphous"],
	},
	canos: {
		num: 10006,
		species: "Canos",
		types: ["Normal"],
		baseStats: {hp: 35, atk: 50, def: 30, spa: 35, spd: 40, spe: 40},
		abilities: {0: "Run Away", 1: "Quick Feet", H: "Pick Up"},
		heightm: 0.5,
		weightkg: 6.8,
		color: "Brown",
		evos: ["Mortos"],
		eggGroups: ["Field"],
	},
	mortos: {
		num: 10007,
		species: "Mortos",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 70, atk: 100, def: 60, spa: 70, spd: 80, spe: 80},
		abilities: {0: "Run Away", 1: "Quick Feet", H: "Pick Up"},
		heightm: 1.0,
		weightkg: 20.2,
		color: "Gray",
		prevo: "canos",
		eggGroups: ["Field"],
	},
	
	/* Istori Forms */
	
	doduo: {
		num: 84,
		species: "Doduo",
		types: ["Normal", "Flying"],
		baseStats: {hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75},
		abilities: {0: "Run Away", 1: "Early Bird", H: "Tangled Feet"},
		heightm: 1.4,
		weightkg: 39.2,
		color: "Brown",
		evos: ["dodrio"],
		eggGroups: ["Flying"],
		otherFormes: ["doduoistor"],
	},
	dodrio: {
		num: 85,
		species: "Dodrio",
		types: ["Normal", "Flying"],
		baseStats: {hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110},
		abilities: {0: "Run Away", 1: "Early Bird", H: "Tangled Feet"},
		heightm: 1.8,
		weightkg: 85.2,
		color: "Brown",
		prevo: "doduo",
		evoLevel: 31,
		eggGroups: ["Flying"],
		otherFormes: ["dodrioistor"],
	},
	doduoistor: {
		num: 84,
		species: "Doduo-Istor",
		types: ["Steel", "Flying"],
		baseStats: {hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75},
		abilities: {0: "Pressure", 1: "Early Bird", H: "Tangled Feet"},
		heightm: 1.4,
		weightkg: 39.2,
		color: "Brown",
		evos: ["dodrioistor"],
		eggGroups: ["Flying"],
	},
	dodrioistor: {
		num: 85,
		species: "Dodrio-Istor",
		types: ["Steel", "Flying"],
		baseStats: {hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110},
		abilities: {0: "Pressure", 1: "Early Bird", H: "Tangled Feet"},
		heightm: 1.8,
		weightkg: 85.2,
		color: "Brown",
		prevo: "doduoistor",
		evoLevel: 31,
		eggGroups: ["Flying"],
	},
  };
