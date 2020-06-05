import uuid from "uuid/v1";

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  id,
  img,
  description,
  edit,
  del
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    id,
    img,
    description,
    edit,
    del,
  };
}

const initState = {
  meal: [
    createData(
      "Bread",
      159,
      6.0,
      24,
      4.0,
      uuid(),
      "bread",
      "Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been a prominent food in large parts of the world and is one of the oldest man-made foods, having been of significant importance since the dawn of agriculture"
    ),
    createData(
      "Egg",
      159,
      6.0,
      24,
      4.0,
      uuid(),
      "egg",
      "Some eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years. Bird and reptile eggs consist of a protective eggshell, albumen, and vitellus, contained within various thin membranes"
    ),
    createData(
      "Rice",
      159,
      6.0,
      24,
      4.0,
      uuid(),
      "rice",
      "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia. It is the agricultural commodity with the third-highest worldwide production, after sugarcane and maize."
    ),
    createData(
      "Pap",
      159,
      6.0,
      24,
      4.0,
      uuid(),
      "ogi",
      "Ogi (or Akamu) is a fermented cereal pudding from Nigeria, typically made from maize, sorghum, or millet Traditionally, the grains are soaked in water for up to three days, before wet milling and sieving to remove husks. The filtered cereal is then allowed to ferment for up to three days until sour. It is then boiled into a pap, or cooked to make a creamy pudding. It may be eaten with moin moin or akara."
    ),
    createData(
      "Milk",
      159,
      6.0,
      24,
      4.0,
      uuid(),
      "milk",
      "Milk is a nutrient-rich, white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for infant mammals before they are able to digest other types of food"
    ),
    createData(
      "Sugar",
      159,
      6.0,
      24,
      4.0,
      uuid(),
      "sugar",
      "Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food. Simple sugars, also called monosaccharides, include glucose, fructose, and galactose."
    ),
    createData(
      "Yam",
      159,
      6.0,
      24,
      4.0,
      uuid(),
      "yam",
      "Yam is the common name for some plant species in the genus Dioscorea that form edible tubers. Yams are perennial herbaceous vines cultivated for the consumption of their starchy tubers in many temperate and tropical world regions, especially Latin America,"
    ),
    createData(
      "Chin Chin",
      159,
      6.0,
      24,
      4.0,
      uuid(),
      "chinchin",
      "Chin chin is a fried snack in Nigeria, West Africa. It is similar to the Scandinavian snack klenat, a crunchy, donut-like baked or fried dough of wheat flour, and other customary baking items. Chin chin may contain cowpeas. Many people bake it with ground nutmeg for flavor."
    ),
    createData(
      "Frozen yoghurt",
      159,
      6.0,
      24,
      4.0,
      uuid(),
      "yorghurt",
      "Yogurt, also spelled yoghurt, yogourt or yoghourt, is a food produced by bacterial fermentation of milk. The bacteria used to make yogurt are known as yogurt culture"
    ),
    createData(
      "Ice cream sandwich",
      237,
      9.0,
      37,
      4.3,
      uuid(),
      "icedcream",
      "Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavoured with a sweetener, either sugar or an alternative, and any spice, such as cocoa or vanilla. Colourings are usually added, in addition to stabilizers"
    ),
    createData(
      "Eclair",
      262,
      16.0,
      24,
      6.0,
      uuid(),
      "eclair",
      "An éclair is an oblong pastry made with choux dough filled with a cream and topped with chocolate icing. The dough, which is the same as that used for profiterole, is typically piped into an oblong shape with a pastry bag and baked until it is crisp and hollow inside."
    ),
    createData(
      "Sand Wich",
      159,
      6.0,
      24,
      4.0,
      uuid(),
      "sandwich",
      "A sandwich is a food typically consisting of vegetables, sliced cheese and/or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type"
    ),
    createData(
      "Beans",
      159,
      6.0,
      24,
      4.0,
      uuid(),
      "beans",
      "A bean is the seed of one of several genera of the flowering plant family Fabaceae, which are used as vegetables for human or animal food. They can be cooked in many different ways, including boiling, frying, and baking, and are used in several traditional dishes"
    ),
    createData(
      "Corn",
      262,
      16.0,
      24,
      6.0,
      uuid(),
      "maize",
      "Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago. The leafy stalk of the plant produces pollen inflorescences and separate ovuliferous inflorescences called ears that yield kernels or seeds, which are fruits"
    ),
  ],
};

const mealDbReducer = (state = initState, action) => {
  return state;
};

export default mealDbReducer;
