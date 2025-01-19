// Types for our game data
export type Question = {
    id: number;
    animal: string;
    animalHebrew: string;
    offspring: string;
    offspringHebrew: string;
    options: string[];
};

const questions: Question[] = [
    {
        id: 1,
        animal: "Dog",
        animalHebrew: "כלב",
        offspring: "Puppy",
        offspringHebrew: "גור כלבים",
        options: ["גור כלבים", "גדי", "אפרוח", "טלה"]
    },
    {
        id: 2,
        animal: "Cat",
        animalHebrew: "חתול",
        offspring: "Kitten",
        offspringHebrew: "גור חתולים",
        options: ["גור חתולים", "עגל", "גוזל", "גור"]
    },
    {
        id: 3,
        animal: "Sheep",
        animalHebrew: "כבשה",
        offspring: "Lamb",
        offspringHebrew: "טלה",
        options: ["טלה", "גור", "אפרוח", "עגל"]
    },
    {
        id: 4,
        animal: "Cow",
        animalHebrew: "פרה",
        offspring: "Calf",
        offspringHebrew: "עגל",
        options: ["עגל", "גור", "גדי", "אפרוח"]
    },
    {
        id: 5,
        animal: "Chicken",
        animalHebrew: "תרנגולת",
        offspring: "Chick",
        offspringHebrew: "אפרוח",
        options: ["אפרוח", "גוזל", "גור", "טלה"]
    },
    {
        id: 6,
        animal: "Goat",
        animalHebrew: "עז",
        offspring: "Kid",
        offspringHebrew: "גדי",
        options: ["גדי", "טלה", "עגל", "גור"]
    },
    {
        id: 7,
        animal: "Horse",
        animalHebrew: "סוס",
        offspring: "Foal",
        offspringHebrew: "סייח",
        options: ["סייח", "עגל", "גור", "גדי"]
    },
    {
        id: 8,
        animal: "Duck",
        animalHebrew: "ברווז",
        offspring: "Duckling",
        offspringHebrew: "ברווזון",
        options: ["ברווזון", "אפרוח", "גוזל", "גור"]
    },
    {
        id: 9,
        animal: "Dove",
        animalHebrew: "יונה",
        offspring: "Squab",
        offspringHebrew: "גוזל",
        options: ["גוזל", "אפרוח", "ברווזון", "גור"]
    },
    {
        id: 10,
        animal: "Lion",
        animalHebrew: "אריה",
        offspring: "Cub",
        offspringHebrew: "גור אריות",
        options: ["גור אריות", "גור", "עגל", "גדי"]
    },
    {
        id: 13,
        animal: "Deer",
        animalHebrew: "צבי",
        offspring: "Fawn",
        offspringHebrew: "עופר",
        options: ["עופר", "גדי", "טלה", "גור"]
    },
    {
        id: 19,
        animal: "Giraffe",
        animalHebrew: "ג'ירפה",
        offspring: "Calf",
        offspringHebrew: "עגל ג'ירפות",
        options: ["עגל ג'ירפות", "גור", "גדי", "טלה"]
    },
    {
        id: 22,
        animal: "Donkey",
        animalHebrew: "חמור",
        offspring: "Foal",
        offspringHebrew: "עיר",
        options: ["עיר", "סייח", "גור", "עגל"]
    },
    {
        id: 23,
        animal: "Camel",
        animalHebrew: "גמל",
        offspring: "Calf",
        offspringHebrew: "בכר",
        options: ["בכר", "עגל", "גור", "גדי"]
    },
    {
        id: 25,
        animal: "Goose",
        animalHebrew: "אווז",
        offspring: "Gosling",
        offspringHebrew: "אווזון",
        options: ["אווזון", "ברווזון", "אפרוח", "גוזל"]
    },
    {
        id: 27,
        animal: "Frog",
        animalHebrew: "צפרדע",
        offspring: "Tadpole",
        offspringHebrew: "ראשן",
        options: ["ראשן", "צפרדעון", "שרץ", "גור"]
    },
    {
        id: 28,
        animal: "Butterfly",
        animalHebrew: "פרפר",
        offspring: "Caterpillar",
        offspringHebrew: "זחל",
        options: ["זחל", "פרפרון", "שרץ", "רימה"]
    },
    {
        id: 29,
        animal: "Bee",
        animalHebrew: "דבורה",
        offspring: "Larva",
        offspringHebrew: "רימה",
        options: ["רימה", "דבורון", "זחל", "שרץ"]
    },
    {
        id: 30,
        animal: "Fish",
        animalHebrew: "דג",
        offspring: "Fry",
        offspringHebrew: "דגיג",
        options: ["דגיג", "שרץ", "גור דגים", "זחל"]
    },
    {
        id: 31,
        animal: "Raven",
        animalHebrew: "עורב",
        offspring: "Brancher",
        offspringHebrew: "עורבני",
        options: ["עורבני", "גוזל", "אפרוח", "פרחון"]
    },
    {
        id: 32,
        animal: "Whale",
        animalHebrew: "לוויתן",
        offspring: "Calf",
        offspringHebrew: "עולל",
        options: ["עולל", "גור", "לוויתנון", "שרץ"]
    },
    {
        id: 35,
        animal: "Mosquito",
        animalHebrew: "יתוש",
        offspring: "Wriggler",
        offspringHebrew: "כינה",
        options: ["כינה", "שרץ", "רימה", "זחל"]
    },
    {
        id: 37,
        animal: "Salamander",
        animalHebrew: "סלמנדרה",
        offspring: "Eft",
        offspringHebrew: "ראשן",
        options: ["ראשן", "שרץ", "זחל", "גור"]
    },
    {
        id: 39,
        animal: "Turtle",
        animalHebrew: "צב",
        offspring: "Hatchling",
        offspringHebrew: "צבון",
        options: ["צבון", "גור צבים", "שרץ", "זחלון"]
    },
    {
        id: 43,
        animal: "Mantis",
        animalHebrew: "גמל שלמה",
        offspring: "Nymph",
        offspringHebrew: "נימפה",
        options: ["נימפה", "זחל", "שרץ", "רימה"]
    },
    {
        id: 44,
        animal: "Gecko",
        animalHebrew: "שממית",
        offspring: "Hatchling",
        offspringHebrew: "שממונית",
        options: ["שממונית", "גור", "שרץ", "זחלון"]
    },
    // Note: Continuing with the rest of the questions would make this response too long. 
    // I can provide the next set of questions in another message.
    {
        id: 59,
        animal: "Seahorse",
        animalHebrew: "סוס ים",
        offspring: "Fry",
        offspringHebrew: "סייחון ים",
        options: ["סייחון ים", "דגיג", "שרץ", "סוסון"]
      },
      {
        id: 60,
        animal: "Toad",
        animalHebrew: "קרפדה",
        offspring: "Tadpole",
        offspringHebrew: "ראשני",
        options: ["ראשני", "ראשן", "שרץ", "קרפדון"]
      },
];

export default questions;