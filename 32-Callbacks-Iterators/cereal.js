const manufacturers = {
  N: "Nabisco",
  K: "Kellogs",
  G: "General Mills",
  P: "Post",
  Q: "Quaker",
  R: "Ralcorp"
};

const types = {
  H: "Hot",
  C: "Cold"
};

const cerealData = [
  {
    name: "100% Bran",
    mfr: "N",
    type: "C",
    calories: 70,
    protein: 4,
    fat: 1,
    sodium: 130,
    fiber: 10,
    carbo: 5,
    sugars: 6,
    potass: 280,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.33,
    rating: 68.402973
  },
  {
    name: "100% Natural Bran",
    mfr: "Q",
    type: "C",
    calories: 120,
    protein: 3,
    fat: 5,
    sodium: 15,
    fiber: 2,
    carbo: 8,
    sugars: 8,
    potass: 135,
    vitamins: 0,
    shelf: 3,
    weight: 1,
    cups: 1,
    rating: 33.983679
  },
  {
    name: "All-Bran",
    mfr: "K",
    type: "C",
    calories: 70,
    protein: 4,
    fat: 1,
    sodium: 260,
    fiber: 9,
    carbo: 7,
    sugars: 5,
    potass: 320,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.33,
    rating: 59.425505
  },
  {
    name: "All-Bran with Extra Fiber",
    mfr: "K",
    type: "C",
    calories: 50,
    protein: 4,
    fat: 0,
    sodium: 140,
    fiber: 14,
    carbo: 8,
    sugars: 0,
    potass: 330,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.5,
    rating: 93.704912
  },
  {
    name: "Almond Delight",
    mfr: "R",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 2,
    sodium: 200,
    fiber: 1,
    carbo: 14,
    sugars: 8,
    potass: -1,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.75,
    rating: 34.384843
  },
  {
    name: "Apple Cinnamon Cheerios",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 2,
    sodium: 180,
    fiber: 1.5,
    carbo: 10.5,
    sugars: 10,
    potass: 70,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 0.75,
    rating: 29.509541
  },
  {
    name: "Apple Jacks",
    mfr: "K",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 0,
    sodium: 125,
    fiber: 1,
    carbo: 11,
    sugars: 14,
    potass: 30,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 1,
    rating: 33.174094
  },
  {
    name: "Basic 4",
    mfr: "G",
    type: "C",
    calories: 130,
    protein: 3,
    fat: 2,
    sodium: 210,
    fiber: 2,
    carbo: 18,
    sugars: 8,
    potass: 100,
    vitamins: 25,
    shelf: 3,
    weight: 1.33,
    cups: 0.75,
    rating: 37.038562
  },
  {
    name: "Bran Chex",
    mfr: "R",
    type: "C",
    calories: 90,
    protein: 2,
    fat: 1,
    sodium: 200,
    fiber: 4,
    carbo: 15,
    sugars: 6,
    potass: 125,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 0.67,
    rating: 49.120253
  },
  {
    name: "Bran Flakes",
    mfr: "P",
    type: "C",
    calories: 90,
    protein: 3,
    fat: 0,
    sodium: 210,
    fiber: 5,
    carbo: 13,
    sugars: 5,
    potass: 190,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.67,
    rating: 53.313813
  },
  {
    name: "Cap'n'Crunch",
    mfr: "Q",
    type: "C",
    calories: 120,
    protein: 1,
    fat: 2,
    sodium: 220,
    fiber: 0,
    carbo: 12,
    sugars: 12,
    potass: 35,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 0.75,
    rating: 18.042851
  },
  {
    name: "Cheerios",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 6,
    fat: 2,
    sodium: 290,
    fiber: 2,
    carbo: 17,
    sugars: 1,
    potass: 105,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 1.25,
    rating: 50.764999
  },
  {
    name: "Cinnamon Toast Crunch",
    mfr: "G",
    type: "C",
    calories: 120,
    protein: 1,
    fat: 3,
    sodium: 210,
    fiber: 0,
    carbo: 13,
    sugars: 9,
    potass: 45,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 0.75,
    rating: 19.823573
  },
  {
    name: "Clusters",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 3,
    fat: 2,
    sodium: 140,
    fiber: 2,
    carbo: 13,
    sugars: 7,
    potass: 105,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.5,
    rating: 40.400208
  },
  {
    name: "Cocoa Puffs",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 1,
    fat: 1,
    sodium: 180,
    fiber: 0,
    carbo: 12,
    sugars: 13,
    potass: 55,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 1,
    rating: 22.736446
  },
  {
    name: "Corn Chex",
    mfr: "R",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 0,
    sodium: 280,
    fiber: 0,
    carbo: 22,
    sugars: 3,
    potass: 25,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 1,
    rating: 41.445019
  },
  {
    name: "Corn Flakes",
    mfr: "K",
    type: "C",
    calories: 100,
    protein: 2,
    fat: 0,
    sodium: 290,
    fiber: 1,
    carbo: 21,
    sugars: 2,
    potass: 35,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 1,
    rating: 45.863324
  },
  {
    name: "Corn Pops",
    mfr: "K",
    type: "C",
    calories: 110,
    protein: 1,
    fat: 0,
    sodium: 90,
    fiber: 1,
    carbo: 13,
    sugars: 12,
    potass: 20,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 1,
    rating: 35.782791
  },
  {
    name: "Count Chocula",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 1,
    fat: 1,
    sodium: 180,
    fiber: 0,
    carbo: 12,
    sugars: 13,
    potass: 65,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 1,
    rating: 22.396513
  },
  {
    name: "Cracklin' Oat Bran",
    mfr: "K",
    type: "C",
    calories: 110,
    protein: 3,
    fat: 3,
    sodium: 140,
    fiber: 4,
    carbo: 10,
    sugars: 7,
    potass: 160,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.5,
    rating: 40.448772
  },
  {
    name: "Cream of Wheat (Quick)",
    mfr: "N",
    type: "H",
    calories: 100,
    protein: 3,
    fat: 0,
    sodium: 80,
    fiber: 1,
    carbo: 21,
    sugars: 0,
    potass: -1,
    vitamins: 0,
    shelf: 2,
    weight: 1,
    cups: 1,
    rating: 64.533816
  },
  {
    name: "Crispix",
    mfr: "K",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 0,
    sodium: 220,
    fiber: 1,
    carbo: 21,
    sugars: 3,
    potass: 30,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 1,
    rating: 46.895644
  },
  {
    name: "Crispy Wheat & Raisins",
    mfr: "G",
    type: "C",
    calories: 100,
    protein: 2,
    fat: 1,
    sodium: 140,
    fiber: 2,
    carbo: 11,
    sugars: 10,
    potass: 120,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.75,
    rating: 36.176196
  },
  {
    name: "Double Chex",
    mfr: "R",
    type: "C",
    calories: 100,
    protein: 2,
    fat: 0,
    sodium: 190,
    fiber: 1,
    carbo: 18,
    sugars: 5,
    potass: 80,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.75,
    rating: 44.330856
  },
  {
    name: "Froot Loops",
    mfr: "K",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 1,
    sodium: 125,
    fiber: 1,
    carbo: 11,
    sugars: 13,
    potass: 30,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 1,
    rating: 32.207582
  },
  {
    name: "Frosted Flakes",
    mfr: "K",
    type: "C",
    calories: 110,
    protein: 1,
    fat: 0,
    sodium: 200,
    fiber: 1,
    carbo: 14,
    sugars: 11,
    potass: 25,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 0.75,
    rating: 31.435973
  },
  {
    name: "Frosted Mini-Wheats",
    mfr: "K",
    type: "C",
    calories: 100,
    protein: 3,
    fat: 0,
    sodium: 0,
    fiber: 3,
    carbo: 14,
    sugars: 7,
    potass: 100,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 0.8,
    rating: 58.345141
  },
  {
    name: "Fruit & Fibre Dates; Walnuts; and Oats",
    mfr: "P",
    type: "C",
    calories: 120,
    protein: 3,
    fat: 2,
    sodium: 160,
    fiber: 5,
    carbo: 12,
    sugars: 10,
    potass: 200,
    vitamins: 25,
    shelf: 3,
    weight: 1.25,
    cups: 0.67,
    rating: 40.917047
  },
  {
    name: "Fruitful Bran",
    mfr: "K",
    type: "C",
    calories: 120,
    protein: 3,
    fat: 0,
    sodium: 240,
    fiber: 5,
    carbo: 14,
    sugars: 12,
    potass: 190,
    vitamins: 25,
    shelf: 3,
    weight: 1.33,
    cups: 0.67,
    rating: 41.015492
  },
  {
    name: "Fruity Pebbles",
    mfr: "P",
    type: "C",
    calories: 110,
    protein: 1,
    fat: 1,
    sodium: 135,
    fiber: 0,
    carbo: 13,
    sugars: 12,
    potass: 25,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 0.75,
    rating: 28.025765
  },
  {
    name: "Golden Crisp",
    mfr: "P",
    type: "C",
    calories: 100,
    protein: 2,
    fat: 0,
    sodium: 45,
    fiber: 0,
    carbo: 11,
    sugars: 15,
    potass: 40,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 0.88,
    rating: 35.252444
  },
  {
    name: "Golden Grahams",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 1,
    fat: 1,
    sodium: 280,
    fiber: 0,
    carbo: 15,
    sugars: 9,
    potass: 45,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 0.75,
    rating: 23.804043
  },
  {
    name: "Grape Nuts Flakes",
    mfr: "P",
    type: "C",
    calories: 100,
    protein: 3,
    fat: 1,
    sodium: 140,
    fiber: 3,
    carbo: 15,
    sugars: 5,
    potass: 85,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.88,
    rating: 52.076897
  },
  {
    name: "Grape-Nuts",
    mfr: "P",
    type: "C",
    calories: 110,
    protein: 3,
    fat: 0,
    sodium: 170,
    fiber: 3,
    carbo: 17,
    sugars: 3,
    potass: 90,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.25,
    rating: 53.371007
  },
  {
    name: "Great Grains Pecan",
    mfr: "P",
    type: "C",
    calories: 120,
    protein: 3,
    fat: 3,
    sodium: 75,
    fiber: 3,
    carbo: 13,
    sugars: 4,
    potass: 100,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.33,
    rating: 45.811716
  },
  {
    name: "Honey Graham Ohs",
    mfr: "Q",
    type: "C",
    calories: 120,
    protein: 1,
    fat: 2,
    sodium: 220,
    fiber: 1,
    carbo: 12,
    sugars: 11,
    potass: 45,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 1,
    rating: 21.871292
  },
  {
    name: "Honey Nut Cheerios",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 3,
    fat: 1,
    sodium: 250,
    fiber: 1.5,
    carbo: 11.5,
    sugars: 10,
    potass: 90,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 0.75,
    rating: 31.072217
  },
  {
    name: "Honey-comb",
    mfr: "P",
    type: "C",
    calories: 110,
    protein: 1,
    fat: 0,
    sodium: 180,
    fiber: 0,
    carbo: 14,
    sugars: 11,
    potass: 35,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 1.33,
    rating: 28.742414
  },
  {
    name: "Just Right Crunchy  Nuggets",
    mfr: "K",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 1,
    sodium: 170,
    fiber: 1,
    carbo: 17,
    sugars: 6,
    potass: 60,
    vitamins: 100,
    shelf: 3,
    weight: 1,
    cups: 1,
    rating: 36.523683
  },
  {
    name: "Just Right Fruit & Nut",
    mfr: "K",
    type: "C",
    calories: 140,
    protein: 3,
    fat: 1,
    sodium: 170,
    fiber: 2,
    carbo: 20,
    sugars: 9,
    potass: 95,
    vitamins: 100,
    shelf: 3,
    weight: 1.3,
    cups: 0.75,
    rating: 36.471512
  },
  {
    name: "Kix",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 1,
    sodium: 260,
    fiber: 0,
    carbo: 21,
    sugars: 3,
    potass: 40,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 1.5,
    rating: 39.241114
  },
  {
    name: "Life",
    mfr: "Q",
    type: "C",
    calories: 100,
    protein: 4,
    fat: 2,
    sodium: 150,
    fiber: 2,
    carbo: 12,
    sugars: 6,
    potass: 95,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 0.67,
    rating: 45.328074
  },
  {
    name: "Lucky Charms",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 1,
    sodium: 180,
    fiber: 0,
    carbo: 12,
    sugars: 12,
    potass: 55,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 1,
    rating: 26.734515
  },
  {
    name: "Maypo",
    mfr: "A",
    type: "H",
    calories: 100,
    protein: 4,
    fat: 1,
    sodium: 0,
    fiber: 0,
    carbo: 16,
    sugars: 3,
    potass: 95,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 1,
    rating: 54.850917
  },
  {
    name: "Muesli Raisins; Dates; & Almonds",
    mfr: "R",
    type: "C",
    calories: 150,
    protein: 4,
    fat: 3,
    sodium: 95,
    fiber: 3,
    carbo: 16,
    sugars: 11,
    potass: 170,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 1,
    rating: 37.136863
  },
  {
    name: "Muesli Raisins; Peaches; & Pecans",
    mfr: "R",
    type: "C",
    calories: 150,
    protein: 4,
    fat: 3,
    sodium: 150,
    fiber: 3,
    carbo: 16,
    sugars: 11,
    potass: 170,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 1,
    rating: 34.139765
  },
  {
    name: "Mueslix Crispy Blend",
    mfr: "K",
    type: "C",
    calories: 160,
    protein: 3,
    fat: 2,
    sodium: 150,
    fiber: 3,
    carbo: 17,
    sugars: 13,
    potass: 160,
    vitamins: 25,
    shelf: 3,
    weight: 1.5,
    cups: 0.67,
    rating: 30.313351
  },
  {
    name: "Multi-Grain Cheerios",
    mfr: "G",
    type: "C",
    calories: 100,
    protein: 2,
    fat: 1,
    sodium: 220,
    fiber: 2,
    carbo: 15,
    sugars: 6,
    potass: 90,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 1,
    rating: 40.105965
  },
  {
    name: "Nut&Honey Crunch",
    mfr: "K",
    type: "C",
    calories: 120,
    protein: 2,
    fat: 1,
    sodium: 190,
    fiber: 0,
    carbo: 15,
    sugars: 9,
    potass: 40,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 0.67,
    rating: 29.924285
  },
  {
    name: "Nutri-Grain Almond-Raisin",
    mfr: "K",
    type: "C",
    calories: 140,
    protein: 3,
    fat: 2,
    sodium: 220,
    fiber: 3,
    carbo: 21,
    sugars: 7,
    potass: 130,
    vitamins: 25,
    shelf: 3,
    weight: 1.33,
    cups: 0.67,
    rating: 40.69232
  },
  {
    name: "Nutri-grain Wheat",
    mfr: "K",
    type: "C",
    calories: 90,
    protein: 3,
    fat: 0,
    sodium: 170,
    fiber: 3,
    carbo: 18,
    sugars: 2,
    potass: 90,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 1,
    rating: 59.642837
  },
  {
    name: "Oatmeal Raisin Crisp",
    mfr: "G",
    type: "C",
    calories: 130,
    protein: 3,
    fat: 2,
    sodium: 170,
    fiber: 1.5,
    carbo: 13.5,
    sugars: 10,
    potass: 120,
    vitamins: 25,
    shelf: 3,
    weight: 1.25,
    cups: 0.5,
    rating: 30.450843
  },
  {
    name: "Post Nat. Raisin Bran",
    mfr: "P",
    type: "C",
    calories: 120,
    protein: 3,
    fat: 1,
    sodium: 200,
    fiber: 6,
    carbo: 11,
    sugars: 14,
    potass: 260,
    vitamins: 25,
    shelf: 3,
    weight: 1.33,
    cups: 0.67,
    rating: 37.840594
  },
  {
    name: "Product 19",
    mfr: "K",
    type: "C",
    calories: 100,
    protein: 3,
    fat: 0,
    sodium: 320,
    fiber: 1,
    carbo: 20,
    sugars: 3,
    potass: 45,
    vitamins: 100,
    shelf: 3,
    weight: 1,
    cups: 1,
    rating: 41.50354
  },
  {
    name: "Puffed Rice",
    mfr: "Q",
    type: "C",
    calories: 50,
    protein: 1,
    fat: 0,
    sodium: 0,
    fiber: 0,
    carbo: 13,
    sugars: 0,
    potass: 15,
    vitamins: 0,
    shelf: 3,
    weight: 0.5,
    cups: 1,
    rating: 60.756112
  },
  {
    name: "Puffed Wheat",
    mfr: "Q",
    type: "C",
    calories: 50,
    protein: 2,
    fat: 0,
    sodium: 0,
    fiber: 1,
    carbo: 10,
    sugars: 0,
    potass: 50,
    vitamins: 0,
    shelf: 3,
    weight: 0.5,
    cups: 1,
    rating: 63.005645
  },
  {
    name: "Quaker Oat Squares",
    mfr: "Q",
    type: "C",
    calories: 100,
    protein: 4,
    fat: 1,
    sodium: 135,
    fiber: 2,
    carbo: 14,
    sugars: 6,
    potass: 110,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.5,
    rating: 49.511874
  },
  {
    name: "Quaker Oatmeal",
    mfr: "Q",
    type: "H",
    calories: 100,
    protein: 5,
    fat: 2,
    sodium: 0,
    fiber: 2.7,
    carbo: -1,
    sugars: -1,
    potass: 110,
    vitamins: 0,
    shelf: 1,
    weight: 1,
    cups: 0.67,
    rating: 50.828392
  },
  {
    name: "Raisin Bran",
    mfr: "K",
    type: "C",
    calories: 120,
    protein: 3,
    fat: 1,
    sodium: 210,
    fiber: 5,
    carbo: 14,
    sugars: 12,
    potass: 240,
    vitamins: 25,
    shelf: 2,
    weight: 1.33,
    cups: 0.75,
    rating: 39.259197
  },
  {
    name: "Raisin Nut Bran",
    mfr: "G",
    type: "C",
    calories: 100,
    protein: 3,
    fat: 2,
    sodium: 140,
    fiber: 2.5,
    carbo: 10.5,
    sugars: 8,
    potass: 140,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.5,
    rating: 39.7034
  },
  {
    name: "Raisin Squares",
    mfr: "K",
    type: "C",
    calories: 90,
    protein: 2,
    fat: 0,
    sodium: 0,
    fiber: 2,
    carbo: 15,
    sugars: 6,
    potass: 110,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.5,
    rating: 55.333142
  },
  {
    name: "Rice Chex",
    mfr: "R",
    type: "C",
    calories: 110,
    protein: 1,
    fat: 0,
    sodium: 240,
    fiber: 0,
    carbo: 23,
    sugars: 2,
    potass: 30,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 1.13,
    rating: 41.998933
  },
  {
    name: "Rice Krispies",
    mfr: "K",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 0,
    sodium: 290,
    fiber: 0,
    carbo: 22,
    sugars: 3,
    potass: 35,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 1,
    rating: 40.560159
  },
  {
    name: "Shredded Wheat",
    mfr: "N",
    type: "C",
    calories: 80,
    protein: 2,
    fat: 0,
    sodium: 0,
    fiber: 3,
    carbo: 16,
    sugars: 0,
    potass: 95,
    vitamins: 0,
    shelf: 1,
    weight: 0.83,
    cups: 1,
    rating: 68.235885
  },
  {
    name: "Shredded Wheat 'n'Bran",
    mfr: "N",
    type: "C",
    calories: 90,
    protein: 3,
    fat: 0,
    sodium: 0,
    fiber: 4,
    carbo: 19,
    sugars: 0,
    potass: 140,
    vitamins: 0,
    shelf: 1,
    weight: 1,
    cups: 0.67,
    rating: 74.472949
  },
  {
    name: "Shredded Wheat spoon size",
    mfr: "N",
    type: "C",
    calories: 90,
    protein: 3,
    fat: 0,
    sodium: 0,
    fiber: 3,
    carbo: 20,
    sugars: 0,
    potass: 120,
    vitamins: 0,
    shelf: 1,
    weight: 1,
    cups: 0.67,
    rating: 72.801787
  },
  {
    name: "Smacks",
    mfr: "K",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 1,
    sodium: 70,
    fiber: 1,
    carbo: 9,
    sugars: 15,
    potass: 40,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 0.75,
    rating: 31.230054
  },
  {
    name: "Special K",
    mfr: "K",
    type: "C",
    calories: 110,
    protein: 6,
    fat: 0,
    sodium: 230,
    fiber: 1,
    carbo: 16,
    sugars: 3,
    potass: 55,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 1,
    rating: 53.131324
  },
  {
    name: "Strawberry Fruit Wheats",
    mfr: "N",
    type: "C",
    calories: 90,
    protein: 2,
    fat: 0,
    sodium: 15,
    fiber: 3,
    carbo: 15,
    sugars: 5,
    potass: 90,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 1,
    rating: 59.363993
  },
  {
    name: "Total Corn Flakes",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 1,
    sodium: 200,
    fiber: 0,
    carbo: 21,
    sugars: 3,
    potass: 35,
    vitamins: 100,
    shelf: 3,
    weight: 1,
    cups: 1,
    rating: 38.839746
  },
  {
    name: "Total Raisin Bran",
    mfr: "G",
    type: "C",
    calories: 140,
    protein: 3,
    fat: 1,
    sodium: 190,
    fiber: 4,
    carbo: 15,
    sugars: 14,
    potass: 230,
    vitamins: 100,
    shelf: 3,
    weight: 1.5,
    cups: 1,
    rating: 28.592785
  },
  {
    name: "Total Whole Grain",
    mfr: "G",
    type: "C",
    calories: 100,
    protein: 3,
    fat: 1,
    sodium: 200,
    fiber: 3,
    carbo: 16,
    sugars: 3,
    potass: 110,
    vitamins: 100,
    shelf: 3,
    weight: 1,
    cups: 1,
    rating: 46.658844
  },
  {
    name: "Triples",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 1,
    sodium: 250,
    fiber: 0,
    carbo: 21,
    sugars: 3,
    potass: 60,
    vitamins: 25,
    shelf: 3,
    weight: 1,
    cups: 0.75,
    rating: 39.106174
  },
  {
    name: "Trix",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 1,
    fat: 1,
    sodium: 140,
    fiber: 0,
    carbo: 13,
    sugars: 12,
    potass: 25,
    vitamins: 25,
    shelf: 2,
    weight: 1,
    cups: 1,
    rating: 27.753301
  },
  {
    name: "Wheat Chex",
    mfr: "R",
    type: "C",
    calories: 100,
    protein: 3,
    fat: 1,
    sodium: 230,
    fiber: 3,
    carbo: 17,
    sugars: 3,
    potass: 115,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 0.67,
    rating: 49.787445
  },
  {
    name: "Wheaties",
    mfr: "G",
    type: "C",
    calories: 100,
    protein: 3,
    fat: 1,
    sodium: 200,
    fiber: 3,
    carbo: 17,
    sugars: 3,
    potass: 110,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 1,
    rating: 51.592193
  },
  {
    name: "Wheaties Honey Gold",
    mfr: "G",
    type: "C",
    calories: 110,
    protein: 2,
    fat: 1,
    sodium: 200,
    fiber: 1,
    carbo: 16,
    sugars: 8,
    potass: 60,
    vitamins: 25,
    shelf: 1,
    weight: 1,
    cups: 0.75,
    rating: 36.187559
  }
];
