
var readlineSync = require("readline-sync");
var score = 0;
console.log("Welcome to how well you know India The Game\nFor Every Correct answer you will be rewarded 1 Point");
console.log("\n**************************\n");

var userName = readlineSync.question("Enter Your Name: ");
var highscore = ["shubham"]
console.log("\n**************************\n");
const indiaTrivia = [
  {
    question: "What is the main ingredient in dosa?",
    answer: "Rice"
  },
  {
    question: "What is the Indian word for yogurt-based drinks like lassi?",
    answer: "Lassi"
  },
  {
    question: "What is the spice that gives curry its yellow color?",
    answer: "Turmeric"
  },
  {
    question: "What type of bread is typically served with Indian dishes?",
    answer: "Naan"
  },
  {
    question: "What is the name of the Indian flatbread made from lentil flour?",
    answer: "Pappadum"
  },
  {
    question: "What is the popular Indian snack made from chickpea flour?",
    answer: "Pakora"
  },
  {
    question: "What is the key ingredient in butter chicken?",
    answer: "Chicken"
  },
  {
    question: "What is the famous Indian rice dish with saffron and raisins?",
    answer: "Biryani"
  },
  {
    question: "What is the Indian dessert made from condensed milk and sugar?",
    answer: "Barfi"
  },
  {
    question: "What spice is commonly used in Indian chai tea?",
    answer: "Cardamom"
  },
  {
    question: "What is the Indian word for clarified butter?",
    answer: "Ghee"
  },
  {
    question: "What type of lentil is used to make dal?",
    answer: "Lentil"
  },
  {
    question: "What is the Indian word for pickled vegetables?",
    answer: "Achar"
  },
  {
    question: "What is the traditional Indian tandoori bread?",
    answer: "Naan"
  },
  {
    question: "What is the main ingredient in samosas?",
    answer: "Potato"
  },
  {
    question: "What is the Indian word for a spiced rice dish often served with vegetables and meat?",
    answer: "Biryani"
  },
  {
    question: "What is the popular Indian snack made from puffed rice and spices?",
    answer: "Bhel"
  },
  {
    question: "What is the Indian sweet made from fried dough soaked in sugar syrup?",
    answer: "Jalebi"
  },
  {
    question: "What is the name of the Indian cheese used in many vegetarian dishes?",
    answer: "Paneer"
  },
  {
    question: "What is the herb commonly used in Indian cooking known as?",
    answer: "Coriander"
  },
  {
    question: "What is the Indian word for a savory fried snack often served with chutney?",
    answer: "Samosa"
  },
  {
    question: "What is the Indian word for a mixture of spices used to flavor dishes?",
    answer: "Masala"
  },
  {
    question: "What is the main ingredient in saag paneer?",
    answer: "Spinach"
  },
  {
    question: "What is the Indian word for a clay oven used for baking bread and roasting meats?",
    answer: "Tandoor"
  },
  {
    question: "What is the dessert made from condensed milk and sugar, often garnished with nuts?",
    answer: "Kheer"
  },
  {
    question: "What is the Indian word for a yogurt-based side dish with spices and vegetables?",
    answer: "Raita"
  },
  {
    question: "What is the popular Indian street food made from fried dough and spicy toppings?",
    answer: "Pani Puri"
  },
  {
    question: "What is the spice commonly used to add heat to Indian dishes?",
    answer: "Chili"
  },
  {
    question: "What is the name of the Indian flatbread cooked on an open flame?",
    answer: "Roti"
  },
  {
    question: "What is the Indian word for a spicy, tangy condiment often served with snacks?",
    answer: "Chutney"
  }
];

// game loop
for (i = 0; i < indiaTrivia.length; i++) {
  var useranswer = readlineSync.question(indiaTrivia[i].question +" -> ");
  if (useranswer.toUpperCase() == indiaTrivia[i].answer.toUpperCase()) {
    score++;
    if (i > 15){
      score++;
    }
    console.log("correct Answer\nYour current score is " + score);
    console.log("\n**************************\n");
  } else {
    console.log("Wrong Answer\nThe correct answer is " + indiaTrivia[i].answer + "\nYour current score is " + score);
    if (i > 15){
      score--;
    }
    console.log("\n**************************\n");
  }
  if (i == 15){
      console.log("***** Level 2 *****\nIn this Level You Will Recieve 2 Point For correct and -1 for every wrong answer");
    }
}
// printing final score and storing data
if (score > 28) {
  console.log("You Won, You are Pro Your Name is Given for top Scprer list\nYour Final score is " + score);
  highscore.push(userName);
}
else if (score > 22 && score <= 28) {
  console.log("You Won\nYour Final score is " + score);
}
else if (score > 10 && score <= 22) {
  console.log("You Need to know more\nYour Final score is " + score);
}
else {
  console.log("Do you really live in India Yod Don't know anything about India\nYour Final score is " + score);
}

console.log("High scorer list " + highscore);

