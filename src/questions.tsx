// Types for our game data
export type Question = {
    id: number;
    category: 'offspring' | 'female';
    animal: string;
    animalHebrew: string;
    answer: string;
    answerHebrew: string;
    options: string[];
  };

const questions: Question[] = [
    {
        "id": 1,
        "animal": "Dog",
        "animalHebrew": "כלב",
        "answer": "Puppy",
        "answerHebrew": "גור כלבים",
        "options": [
            "גור כלבים",
            "גדי",
            "אפרוח",
            "טלה"
        ],
        "category": "offspring"
    },
    {
        "id": 2,
        "animal": "Cat",
        "animalHebrew": "חתול",
        "answer": "Kitten",
        "answerHebrew": "גור חתולים",
        "options": [
            "גור חתולים",
            "עגל",
            "גוזל",
            "גור"
        ],
        "category": "offspring"
    },
    {
        "id": 3,
        "animal": "Sheep",
        "animalHebrew": "כבשה",
        "answer": "Lamb",
        "answerHebrew": "טלה",
        "options": [
            "טלה",
            "גור",
            "אפרוח",
            "עגל"
        ],
        "category": "offspring"
    },
    {
        "id": 4,
        "animal": "Cow",
        "animalHebrew": "פרה",
        "answer": "Calf",
        "answerHebrew": "עגל",
        "options": [
            "עגל",
            "גור",
            "גדי",
            "אפרוח"
        ],
        "category": "offspring"
    },
    {
        "id": 5,
        "animal": "Chicken",
        "animalHebrew": "תרנגולת",
        "answer": "Chick",
        "answerHebrew": "אפרוח",
        "options": [
            "אפרוח",
            "גוזל",
            "גור",
            "טלה"
        ],
        "category": "offspring"
    },
    {
        "id": 6,
        "animal": "Goat",
        "animalHebrew": "עז",
        "answer": "Kid",
        "answerHebrew": "גדי",
        "options": [
            "גדי",
            "טלה",
            "עגל",
            "גור"
        ],
        "category": "offspring"
    },
    {
        "id": 7,
        "animal": "Horse",
        "animalHebrew": "סוס",
        "answer": "Foal",
        "answerHebrew": "סייח",
        "options": [
            "סייח",
            "עגל",
            "גור",
            "גדי"
        ],
        "category": "offspring"
    },
    {
        "id": 8,
        "animal": "Duck",
        "animalHebrew": "ברווז",
        "answer": "Duckling",
        "answerHebrew": "ברווזון",
        "options": [
            "ברווזון",
            "אפרוח",
            "גוזל",
            "גור"
        ],
        "category": "offspring"
    },
    {
        "id": 9,
        "animal": "Dove",
        "animalHebrew": "יונה",
        "answer": "Squab",
        "answerHebrew": "גוזל",
        "options": [
            "גוזל",
            "אפרוח",
            "ברווזון",
            "גור"
        ],
        "category": "offspring"
    },
    {
        "id": 10,
        "animal": "Lion",
        "animalHebrew": "אריה",
        "answer": "Cub",
        "answerHebrew": "גור אריות",
        "options": [
            "גור אריות",
            "גור",
            "עגל",
            "גדי"
        ],
        "category": "offspring"
    },
    {
        "id": 13,
        "animal": "Deer",
        "animalHebrew": "צבי",
        "answer": "Fawn",
        "answerHebrew": "עופר",
        "options": [
            "עופר",
            "גדי",
            "טלה",
            "גור"
        ],
        "category": "offspring"
    },
    {
        "id": 19,
        "animal": "Giraffe",
        "animalHebrew": "ג'ירפה",
        "answer": "Calf",
        "answerHebrew": "עגל ג'ירפות",
        "options": [
            "עגל ג'ירפות",
            "גור",
            "גדי",
            "טלה"
        ],
        "category": "offspring"
    },
    {
        "id": 22,
        "animal": "Donkey",
        "animalHebrew": "חמור",
        "answer": "Foal",
        "answerHebrew": "עיר",
        "options": [
            "עיר",
            "סייח",
            "גור",
            "עגל"
        ],
        "category": "offspring"
    },
    {
        "id": 23,
        "animal": "Camel",
        "animalHebrew": "גמל",
        "answer": "Calf",
        "answerHebrew": "בכר",
        "options": [
            "בכר",
            "עגל",
            "גור",
            "גדי"
        ],
        "category": "offspring"
    },
    {
        "id": 25,
        "animal": "Goose",
        "animalHebrew": "אווז",
        "answer": "Gosling",
        "answerHebrew": "אווזון",
        "options": [
            "אווזון",
            "ברווזון",
            "אפרוח",
            "גוזל"
        ],
        "category": "offspring"
    },
    {
        "id": 27,
        "animal": "Frog",
        "animalHebrew": "צפרדע",
        "answer": "Tadpole",
        "answerHebrew": "ראשן",
        "options": [
            "ראשן",
            "צפרדעון",
            "שרץ",
            "גור"
        ],
        "category": "offspring"
    },
    {
        "id": 28,
        "animal": "Butterfly",
        "animalHebrew": "פרפר",
        "answer": "Caterpillar",
        "answerHebrew": "זחל",
        "options": [
            "זחל",
            "פרפרון",
            "שרץ",
            "רימה"
        ],
        "category": "offspring"
    },
    {
        "id": 29,
        "animal": "Bee",
        "animalHebrew": "דבורה",
        "answer": "Larva",
        "answerHebrew": "רימה",
        "options": [
            "רימה",
            "דבורון",
            "זחל",
            "שרץ"
        ],
        "category": "offspring"
    },
    {
        "id": 30,
        "animal": "Fish",
        "animalHebrew": "דג",
        "answer": "Fry",
        "answerHebrew": "דגיג",
        "options": [
            "דגיג",
            "שרץ",
            "גור דגים",
            "זחל"
        ],
        "category": "offspring"
    },
    {
        "id": 31,
        "animal": "Raven",
        "animalHebrew": "עורב",
        "answer": "Brancher",
        "answerHebrew": "עורבני",
        "options": [
            "עורבני",
            "גוזל",
            "אפרוח",
            "פרחון"
        ],
        "category": "offspring"
    },
    {
        "id": 32,
        "animal": "Whale",
        "animalHebrew": "לוויתן",
        "answer": "Calf",
        "answerHebrew": "עולל",
        "options": [
            "עולל",
            "גור",
            "לוויתנון",
            "שרץ"
        ],
        "category": "offspring"
    },
    {
        "id": 35,
        "animal": "Mosquito",
        "animalHebrew": "יתוש",
        "answer": "Wriggler",
        "answerHebrew": "כינה",
        "options": [
            "כינה",
            "שרץ",
            "רימה",
            "זחל"
        ],
        "category": "offspring"
    },
    {
        "id": 37,
        "animal": "Salamander",
        "animalHebrew": "סלמנדרה",
        "answer": "Eft",
        "answerHebrew": "ראשן",
        "options": [
            "ראשן",
            "שרץ",
            "זחל",
            "גור"
        ],
        "category": "offspring"
    },
    {
        "id": 39,
        "animal": "Turtle",
        "animalHebrew": "צב",
        "answer": "Hatchling",
        "answerHebrew": "צבון",
        "options": [
            "צבון",
            "גור צבים",
            "שרץ",
            "זחלון"
        ],
        "category": "offspring"
    },
    {
        "id": 43,
        "animal": "Mantis",
        "animalHebrew": "גמל שלמה",
        "answer": "Nymph",
        "answerHebrew": "נימפה",
        "options": [
            "נימפה",
            "זחל",
            "שרץ",
            "רימה"
        ],
        "category": "offspring"
    },
    {
        "id": 44,
        "animal": "Gecko",
        "animalHebrew": "שממית",
        "answer": "Hatchling",
        "answerHebrew": "שממונית",
        "options": [
            "שממונית",
            "גור",
            "שרץ",
            "זחלון"
        ],
        "category": "offspring"
    },
    {
        "id": 59,
        "animal": "Seahorse",
        "animalHebrew": "סוס ים",
        "answer": "Fry",
        "answerHebrew": "סייחון ים",
        "options": [
            "סייחון ים",
            "דגיג",
            "שרץ",
            "סוסון"
        ],
        "category": "offspring"
    },
    {
        "id": 60,
        "animal": "Toad",
        "animalHebrew": "קרפדה",
        "answer": "Tadpole",
        "answerHebrew": "ראשני",
        "options": [
            "ראשני",
            "ראשן",
            "שרץ",
            "קרפדון"
        ],
        "category": "offspring"
    },
    {
        id: 66,
        category: 'female',
        animal: "Dog",
        animalHebrew: "כלב",
        answer: "Female Dog",
        answerHebrew: "כלבה",
        options: ["כלבה", "כלבת", "כלבית", "נקבת כלב"]
    },
    {
        id: 67,
        category: 'female',
        animal: "Cat",
        animalHebrew: "חתול",
        answer: "Female Cat",
        answerHebrew: "חתולה",
        options: ["חתולה", "חתלה", "חתולית", "נקבת חתול"]
    },
    {
        id: 68,
        category: 'female',
        animal: "Lion",
        animalHebrew: "אריה",
        answer: "Lioness",
        answerHebrew: "לביאה",
        options: ["לביאה", "אריה נקבה", "אריאה", "ארית"]
    },
    {
        id: 69,
        category: 'female',
        animal: "Horse",
        animalHebrew: "סוס",
        answer: "Mare",
        answerHebrew: "סוסה",
        options: ["סוסה", "סוסית", "סוסת", "נקבת סוס"]
    },
    {
        id: 70,
        category: 'female',
        animal: "Donkey",
        animalHebrew: "חמור",
        answer: "Jenny",
        answerHebrew: "אתון",
        options: ["אתון", "חמורה", "חמורית", "נקבת חמור"]
    },
    {
        id: 71,
        category: 'female',
        animal: "Goat",
        animalHebrew: "עז",
        answer: "Female Goat",
        answerHebrew: "עיזה",
        options: ["עיזה", "עזה", "עזית", "נקבת עז"]
    },
    {
        id: 72,
        category: 'female',
        animal: "Duck",
        animalHebrew: "ברווז",
        answer: "Female Duck",
        answerHebrew: "ברווזה",
        options: ["ברווזה", "ברווזית", "ברוזה", "נקבת ברווז"]
    },
    {
        id: 73,
        category: 'female',
        animal: "Elephant",
        animalHebrew: "פיל",
        answer: "Female Elephant",
        answerHebrew: "פילה",
        options: ["פילה", "פילית", "פילת", "נקבת פיל"]
    },
    {
        id: 74,
        category: 'female',
        animal: "Wolf",
        animalHebrew: "זאב",
        answer: "She-wolf",
        answerHebrew: "זאבה",
        options: ["זאבה", "זאבית", "זאבת", "נקבת זאב"]
    },
    {
        id: 75,
        category: 'female',
        animal: "Bear",
        animalHebrew: "דוב",
        answer: "Female Bear",
        answerHebrew: "דובה",
        options: ["דובה", "דובית", "דובת", "נקבת דוב"]
    },
    {
        id: 76,
        category: 'female',
        animal: "Camel",
        animalHebrew: "גמל",
        answer: "Female Camel",
        answerHebrew: "נאקה",
        options: ["נאקה", "גמלה", "גמלית", "נקבת גמל"]
    },
    {
        id: 77,
        category: 'female',
        animal: "Tiger",
        animalHebrew: "נמר",
        answer: "Tigress",
        answerHebrew: "נמרה",
        options: ["נמרה", "נמרית", "נמרת", "נקבת נמר"]
    },
    {
        id: 78,
        category: 'female',
        animal: "Deer",
        animalHebrew: "צבי",
        answer: "Doe",
        answerHebrew: "איילה",
        options: ["איילה", "צביה", "צבית", "נקבת צבי"]
    },
    {
        id: 79,
        category: 'female',
        animal: "Rooster",
        animalHebrew: "תרנגול",
        answer: "Hen",
        answerHebrew: "תרנגולת",
        options: ["תרנגולת", "תרנגולה", "תרנגולית", "נקבת תרנגול"]
    },
];

export default questions;