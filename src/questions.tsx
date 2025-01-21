// Types for our game data
export type Question = {
    id: number;
    category: 'offspring' | 'female' | 'synonym';
    word?: string;
    wordHebrew: string;
    answer?: string;
    answerHebrew: string;
    options: string[];
};

const questions: Question[] = [
    {
        "id": 1,
        "word": "Dog",
        "wordHebrew": "כלב",
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
        "word": "Cat",
        "wordHebrew": "חתול",
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
        "word": "Sheep",
        "wordHebrew": "כבשה",
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
        "word": "Cow",
        "wordHebrew": "פרה",
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
        "word": "Chicken",
        "wordHebrew": "תרנגולת",
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
        "word": "Goat",
        "wordHebrew": "עז",
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
        "word": "Horse",
        "wordHebrew": "סוס",
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
        "word": "Duck",
        "wordHebrew": "ברווז",
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
        "word": "Dove",
        "wordHebrew": "יונה",
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
        "word": "Lion",
        "wordHebrew": "אריה",
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
        "word": "Deer",
        "wordHebrew": "צבי",
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
        "word": "Giraffe",
        "wordHebrew": "ג'ירפה",
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
        "word": "Donkey",
        "wordHebrew": "חמור",
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
        "word": "Camel",
        "wordHebrew": "גמל",
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
        "word": "Goose",
        "wordHebrew": "אווז",
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
        "word": "Frog",
        "wordHebrew": "צפרדע",
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
        "word": "Butterfly",
        "wordHebrew": "פרפר",
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
        "word": "Bee",
        "wordHebrew": "דבורה",
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
        "word": "Fish",
        "wordHebrew": "דג",
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
        "word": "Raven",
        "wordHebrew": "עורב",
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
        "word": "Whale",
        "wordHebrew": "לוויתן",
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
        "word": "Mosquito",
        "wordHebrew": "יתוש",
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
        "word": "Salamander",
        "wordHebrew": "סלמנדרה",
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
        "word": "Turtle",
        "wordHebrew": "צב",
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
        "word": "Mantis",
        "wordHebrew": "גמל שלמה",
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
        "word": "Gecko",
        "wordHebrew": "שממית",
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
        "word": "Seahorse",
        "wordHebrew": "סוס ים",
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
        "word": "Toad",
        "wordHebrew": "קרפדה",
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
        "id": 66,
        "category": "female",
        "word": "Dog",
        "wordHebrew": "כלב",
        "answer": "Female Dog",
        "answerHebrew": "כלבה",
        "options": [
            "כלבה",
            "כלבת",
            "כלבית",
            "נקבת כלב"
        ]
    },
    {
        "id": 67,
        "category": "female",
        "word": "Cat",
        "wordHebrew": "חתול",
        "answer": "Female Cat",
        "answerHebrew": "חתולה",
        "options": [
            "חתולה",
            "חתלה",
            "חתולית",
            "נקבת חתול"
        ]
    },
    {
        "id": 68,
        "category": "female",
        "word": "Lion",
        "wordHebrew": "אריה",
        "answer": "Lioness",
        "answerHebrew": "לביאה",
        "options": [
            "לביאה",
            "אריה נקבה",
            "אריאה",
            "ארית"
        ]
    },
    {
        "id": 69,
        "category": "female",
        "word": "Horse",
        "wordHebrew": "סוס",
        "answer": "Mare",
        "answerHebrew": "סוסה",
        "options": [
            "סוסה",
            "סוסית",
            "סוסת",
            "נקבת סוס"
        ]
    },
    {
        "id": 70,
        "category": "female",
        "word": "Donkey",
        "wordHebrew": "חמור",
        "answer": "Jenny",
        "answerHebrew": "אתון",
        "options": [
            "אתון",
            "חמורה",
            "חמורית",
            "נקבת חמור"
        ]
    },
    {
        "id": 71,
        "category": "female",
        "word": "Goat",
        "wordHebrew": "עז",
        "answer": "Female Goat",
        "answerHebrew": "עיזה",
        "options": [
            "עיזה",
            "עזה",
            "עזית",
            "נקבת עז"
        ]
    },
    {
        "id": 72,
        "category": "female",
        "word": "Duck",
        "wordHebrew": "ברווז",
        "answer": "Female Duck",
        "answerHebrew": "ברווזה",
        "options": [
            "ברווזה",
            "ברווזית",
            "ברוזה",
            "נקבת ברווז"
        ]
    },
    {
        "id": 73,
        "category": "female",
        "word": "Elephant",
        "wordHebrew": "פיל",
        "answer": "Female Elephant",
        "answerHebrew": "פילה",
        "options": [
            "פילה",
            "פילית",
            "פילת",
            "נקבת פיל"
        ]
    },
    {
        "id": 74,
        "category": "female",
        "word": "Wolf",
        "wordHebrew": "זאב",
        "answer": "She-wolf",
        "answerHebrew": "זאבה",
        "options": [
            "זאבה",
            "זאבית",
            "זאבת",
            "נקבת זאב"
        ]
    },
    {
        "id": 75,
        "category": "female",
        "word": "Bear",
        "wordHebrew": "דוב",
        "answer": "Female Bear",
        "answerHebrew": "דובה",
        "options": [
            "דובה",
            "דובית",
            "דובת",
            "נקבת דוב"
        ]
    },
    {
        "id": 76,
        "category": "female",
        "word": "Camel",
        "wordHebrew": "גמל",
        "answer": "Female Camel",
        "answerHebrew": "נאקה",
        "options": [
            "נאקה",
            "גמלה",
            "גמלית",
            "נקבת גמל"
        ]
    },
    {
        "id": 77,
        "category": "female",
        "word": "Tiger",
        "wordHebrew": "נמר",
        "answer": "Tigress",
        "answerHebrew": "נמרה",
        "options": [
            "נמרה",
            "נמרית",
            "נמרת",
            "נקבת נמר"
        ]
    },
    {
        "id": 78,
        "category": "female",
        "word": "Deer",
        "wordHebrew": "צבי",
        "answer": "Doe",
        "answerHebrew": "איילה",
        "options": [
            "איילה",
            "צביה",
            "צבית",
            "נקבת צבי"
        ]
    },
    {
        "id": 79,
        "category": "female",
        "word": "Rooster",
        "wordHebrew": "תרנגול",
        "answer": "Hen",
        "answerHebrew": "תרנגולת",
        "options": [
            "תרנגולת",
            "תרנגולה",
            "תרנגולית",
            "נקבת תרנגול"
        ]
    },
    {
        "id": 81,
        "category": "synonym",
        "wordHebrew": "שמח",
        "answerHebrew": "עליז",
        "options": [
            "עליז",
            "עצוב",
            "כועס",
            "מפוחד"
        ]
    },
    {
        "id": 82,
        "category": "synonym",
        "wordHebrew": "גדול",
        "answerHebrew": "ענק",
        "options": [
            "ענק",
            "קטן",
            "צר",
            "נמוך"
        ]
    },
    {
        "id": 83,
        "category": "synonym",
        "wordHebrew": "יפה",
        "answerHebrew": "נאה",
        "options": [
            "נאה",
            "מכוער",
            "גס",
            "רע"
        ]
    },
    {
        "id": 84,
        "category": "synonym",
        "wordHebrew": "מהר",
        "answerHebrew": "חיש",
        "options": [
            "חיש",
            "לאט",
            "בעצלתיים",
            "באיטיות"
        ]
    },
    {
        "id": 85,
        "category": "synonym",
        "wordHebrew": "חכם",
        "answerHebrew": "נבון",
        "options": [
            "נבון",
            "טיפש",
            "כסיל",
            "שוטה"
        ]
    },
    {
        "id": 86,
        "category": "synonym",
        "wordHebrew": "קר",
        "answerHebrew": "צונן",
        "options": [
            "צונן",
            "חם",
            "רותח",
            "לוהט"
        ]
    },
    {
        "id": 87,
        "category": "synonym",
        "wordHebrew": "רטוב",
        "answerHebrew": "לח",
        "options": [
            "לח",
            "יבש",
            "צחיח",
            "חרב"
        ]
    },
    {
        "id": 88,
        "category": "synonym",
        "wordHebrew": "צעיר",
        "answerHebrew": "רך",
        "options": [
            "רך",
            "זקן",
            "ישיש",
            "קשיש"
        ]
    },
    {
        "id": 89,
        "category": "synonym",
        "wordHebrew": "חדש",
        "answerHebrew": "טרי",
        "options": [
            "טרי",
            "ישן",
            "בלוי",
            "עתיק"
        ]
    },
    {
        "id": 91,
        "category": "synonym",
        "wordHebrew": "מצחיק",
        "answerHebrew": "משעשע",
        "options": [
            "עצוב",
            "משעשע",
            "כועס",
            "רציני"
        ]
    },
    {
        "id": 93,
        "category": "synonym",
        "wordHebrew": "רעב",
        "answerHebrew": "רעוב",
        "options": [
            "שבע",
            "רעוב",
            "צמא",
            "עייף"
        ]
    },
    {
        "id": 94,
        "category": "synonym",
        "wordHebrew": "מתוק",
        "answerHebrew": "ממותק",
        "options": [
            "חמוץ",
            "ממותק",
            "מר",
            "מלוח"
        ]
    },
    {
        "id": 96,
        "category": "synonym",
        "wordHebrew": "רך",
        "answerHebrew": "עדין",
        "options": [
            "קשה",
            "עדין",
            "גס",
            "מחוספס"
        ]
    },
    {
        "id": 97,
        "category": "synonym",
        "wordHebrew": "ארוך",
        "answerHebrew": "ממושך",
        "options": [
            "קצר",
            "ממושך",
            "נמוך",
            "צר"
        ]
    },
    {
        "id": 98,
        "category": "synonym",
        "wordHebrew": "רחב",
        "answerHebrew": "מרווח",
        "options": [
            "צר",
            "מרווח",
            "דחוס",
            "קטן"
        ]
    },
    {
        "id": 99,
        "category": "synonym",
        "wordHebrew": "עמוק",
        "answerHebrew": "תהומי",
        "options": [
            "רדוד",
            "תהומי",
            "שטחי",
            "נמוך"
        ]
    },
    {
        "id": 100,
        "category": "synonym",
        "wordHebrew": "בהיר",
        "answerHebrew": "מואר",
        "options": [
            "כהה",
            "מואר",
            "אפל",
            "חשוך"
        ]
    },
    {
        "id": 101,
        "category": "synonym",
        "wordHebrew": "שקט",
        "answerHebrew": "רגוע",
        "options": [
            "רועש",
            "רגוע",
            "סוער",
            "צועק"
        ]
    },
    {
        "id": 102,
        "category": "synonym",
        "wordHebrew": "אמיץ",
        "answerHebrew": "גיבור",
        "options": [
            "פחדן",
            "גיבור",
            "חלש",
            "עצלן"
        ]
    },
    {
        "id": 103,
        "category": "synonym",
        "wordHebrew": "מהיר",
        "answerHebrew": "זריז",
        "options": [
            "איטי",
            "זריז",
            "כבד",
            "עצל"
        ]
    },
    {
        "id": 104,
        "category": "synonym",
        "wordHebrew": "נעים",
        "answerHebrew": "כיף",
        "options": [
            "רע",
            "כיף",
            "מפחיד",
            "קשה"
        ]
    },
    {
        "id": 105,
        "category": "synonym",
        "wordHebrew": "חזק",
        "answerHebrew": "עוצמתי",
        "options": [
            "חלש",
            "עוצמתי",
            "רופס",
            "שברירי"
        ]
    },
    {
        "id": 106,
        "category": "synonym",
        "wordHebrew": "עליז",
        "answerHebrew": "שמח",
        "options": [
            "עצוב",
            "שמח",
            "כועס",
            "בוכה"
        ]
    },
    {
        "id": 107,
        "category": "synonym",
        "wordHebrew": "טעים",
        "answerHebrew": "ערב",
        "options": [
            "דוחה",
            "ערב",
            "מר",
            "תפל"
        ]
    },
    {
        "id": 108,
        "category": "synonym",
        "wordHebrew": "רענן",
        "answerHebrew": "רגיש",
        "options": [
            "עייף",
            "רגיש",
            "ישן",
            "חלש"
        ]
    },
    {
        "id": 110,
        "category": "synonym",
        "wordHebrew": "קטן",
        "answerHebrew": "זעיר",
        "options": [
            "ענק",
            "זעיר",
            "גדול",
            "רחב"
        ]
    },
    {
        "id": 112,
        "category": "synonym",
        "wordHebrew": "נקי",
        "answerHebrew": "מבריק",
        "options": [
            "מלוכלך",
            "מבריק",
            "מטונף",
            "אפור"
        ]
    },
    {
        "id": 114,
        "category": "synonym",
        "wordHebrew": "חם",
        "answerHebrew": "לוהט",
        "options": [
            "קר",
            "לוהט",
            "קפוא",
            "פושר"
        ]
    },
    {
        "id": 116,
        "category": "synonym",
        "wordHebrew": "גבוה",
        "answerHebrew": "רם",
        "options": [
            "נמוך",
            "רם",
            "שפל",
            "קטן"
        ]
    },
    {
        "id": 117,
        "category": "synonym",
        "wordHebrew": "עדין",
        "answerHebrew": "רגיש",
        "options": [
            "גס",
            "רגיש",
            "אכזר",
            "קשה"
        ]
    },
    {
        "id": 120,
        "category": "synonym",
        "wordHebrew": "זהיר",
        "answerHebrew": "קפדן",
        "options": [
            "פזיז",
            "קפדן",
            "רשלן",
            "מהיר"
        ]
    },
    {
        "id": 122,
        "category": "synonym",
        "wordHebrew": "טוב",
        "answerHebrew": "מעולה",
        "options": [
            "רע",
            "מעולה",
            "גרוע",
            "איום"
        ]
    },
    {
        "id": 124,
        "category": "synonym",
        "wordHebrew": "קשה",
        "answerHebrew": "מורכב",
        "options": [
            "קל",
            "מורכב",
            "פשוט",
            "רך"
        ]
    },
    {
        "id": 126,
        "category": "synonym",
        "wordHebrew": "מבריק",
        "answerHebrew": "זוהר",
        "options": [
            "עמום",
            "זוהר",
            "כהה",
            "אפל"
        ]
    },
    {
        "id": 128,
        "category": "synonym",
        "wordHebrew": "רועש",
        "answerHebrew": "קולני",
        "options": [
            "שקט",
            "קולני",
            "חרישי",
            "רגוע"
        ]
    },
    {
        "id": 131,
        "category": "synonym",
        "wordHebrew": "מלא",
        "answerHebrew": "גדוש",
        "options": [
            "ריק",
            "גדוש",
            "חסר",
            "דליל"
        ]
    },
    {
        "id": 132,
        "category": "synonym",
        "wordHebrew": "עשיר",
        "answerHebrew": "אמיד",
        "options": [
            "עני",
            "אמיד",
            "דל",
            "רש"
        ]
    },
    {
        "id": 133,
        "category": "synonym",
        "wordHebrew": "בריא",
        "answerHebrew": "חסון",
        "options": [
            "חולה",
            "חסון",
            "חלש",
            "חולני"
        ]
    },
    {
        "id": 135,
        "category": "synonym",
        "wordHebrew": "מסודר",
        "answerHebrew": "מאורגן",
        "options": [
            "מבולגן",
            "מאורגן",
            "מפוזר",
            "הפוך"
        ]
    },
    {
        "id": 136,
        "category": "synonym",
        "wordHebrew": "פשוט",
        "answerHebrew": "קל",
        "options": [
            "מסובך",
            "קל",
            "מורכב",
            "קשה"
        ]
    },
    {
        "id": 137,
        "category": "synonym",
        "wordHebrew": "שמיים",
        "answerHebrew": "רקיע",
        "options": [
            "רקיע",
            "אדמה",
            "ים",
            "חול"
        ]
    },
    {
        "id": 138,
        "category": "synonym",
        "wordHebrew": "תלמיד",
        "answerHebrew": "לומד",
        "options": [
            "לומד",
            "מורה",
            "מנהל",
            "שומר"
        ]
    },
    {
        "id": 140,
        "category": "synonym",
        "wordHebrew": "מורה",
        "answerHebrew": "מלמד",
        "options": [
            "מלמד",
            "תלמיד",
            "הורה",
            "מנהל"
        ]
    },
    {
        "id": 141,
        "category": "synonym",
        "wordHebrew": "בית",
        "answerHebrew": "דירה",
        "options": [
            "דירה",
            "גינה",
            "חצר",
            "רחוב"
        ]
    },
    {
        "id": 142,
        "category": "synonym",
        "wordHebrew": "אוכל",
        "answerHebrew": "מזון",
        "options": [
            "מזון",
            "שתייה",
            "ממתק",
            "פרי"
        ]
    },
    {
        "id": 144,
        "category": "synonym",
        "wordHebrew": "חבר",
        "answerHebrew": "ידיד",
        "options": [
            "ידיד",
            "אויב",
            "זר",
            "שכן"
        ]
    },
    {
        "id": 145,
        "category": "synonym",
        "wordHebrew": "מתנה",
        "answerHebrew": "שי",
        "options": [
            "שי",
            "קנייה",
            "כסף",
            "משחק"
        ]
    },
    {
        "id": 146,
        "category": "synonym",
        "wordHebrew": "שיר",
        "answerHebrew": "זמר",
        "options": [
            "זמר",
            "סיפור",
            "ריקוד",
            "ציור"
        ]
    },
    {
        "id": 147,
        "category": "synonym",
        "wordHebrew": "דג",
        "answerHebrew": "שרץ",
        "options": [
            "שרץ",
            "ציפור",
            "חתול",
            "כלב"
        ]
    },
    {
        "id": 148,
        "category": "synonym",
        "wordHebrew": "פרח",
        "answerHebrew": "ציץ",
        "options": [
            "ציץ",
            "עלה",
            "ענף",
            "שורש"
        ]
    },
    {
        "id": 150,
        "category": "synonym",
        "wordHebrew": "מים",
        "answerHebrew": "נוזל",
        "options": [
            "נוזל",
            "קרח",
            "אדים",
            "חול"
        ]
    },
    {
        "id": 151,
        "category": "synonym",
        "wordHebrew": "סיפור",
        "answerHebrew": "מעשה",
        "options": [
            "מעשה",
            "שיר",
            "חידה",
            "בדיחה"
        ]
    },
    {
        "id": 152,
        "category": "synonym",
        "wordHebrew": "כדור",
        "answerHebrew": "גלגל",
        "options": [
            "גלגל",
            "קובייה",
            "מרובע",
            "משולש"
        ]
    },
    {
        "id": 153,
        "category": "synonym",
        "wordHebrew": "צבע",
        "answerHebrew": "גוון",
        "options": [
            "גוון",
            "קו",
            "נקודה",
            "צורה"
        ]
    },
    {
        "id": 154,
        "category": "synonym",
        "wordHebrew": "דלת",
        "answerHebrew": "פתח",
        "options": [
            "פתח",
            "חלון",
            "קיר",
            "גג"
        ]
    },
    {
        "id": 155,
        "category": "synonym",
        "wordHebrew": "כובע",
        "answerHebrew": "מצנפת",
        "options": [
            "מצנפת",
            "חולצה",
            "מכנס",
            "נעל"
        ]
    },
    {
        "id": 156,
        "category": "synonym",
        "wordHebrew": "מחברת",
        "answerHebrew": "פנקס",
        "options": [
            "פנקס",
            "ספר",
            "עט",
            "תיק"
        ]
    },
    {
        "id": 157,
        "category": "synonym",
        "wordHebrew": "תיק",
        "answerHebrew": "ילקוט",
        "options": [
            "ילקוט",
            "מחברת",
            "קלמר",
            "ספר"
        ]
    },
    {
        "id": 158,
        "category": "synonym",
        "wordHebrew": "חלון",
        "answerHebrew": "אשנב",
        "options": [
            "אשנב",
            "דלת",
            "קיר",
            "רצפה"
        ]
    },
    {
        "id": 163,
        "category": "synonym",
        "wordHebrew": "עץ",
        "answerHebrew": "אילן",
        "options": [
            "אילן",
            "שיח",
            "פרח",
            "דשא"
        ]
    },
    {
        "id": 164,
        "category": "synonym",
        "wordHebrew": "גשם",
        "answerHebrew": "מטר",
        "options": [
            "מטר",
            "שמש",
            "רוח",
            "שלג"
        ]
    },
    {
        "id": 166,
        "category": "synonym",
        "wordHebrew": "מיטה",
        "answerHebrew": "משכב",
        "options": [
            "משכב",
            "כיסא",
            "שולחן",
            "ספה"
        ]
    },
    {
        "id": 167,
        "category": "synonym",
        "wordHebrew": "בגד",
        "answerHebrew": "לבוש",
        "options": [
            "לבוש",
            "נעל",
            "כובע",
            "תיק"
        ]
    },
    {
        "id": 168,
        "category": "synonym",
        "wordHebrew": "ראש",
        "answerHebrew": "קודקוד",
        "options": [
            "קודקוד",
            "יד",
            "רגל",
            "בטן"
        ]
    },
    {
        "id": 170,
        "category": "synonym",
        "wordHebrew": "שמש",
        "answerHebrew": "חמה",
        "options": [
            "חמה",
            "ירח",
            "כוכב",
            "ענן"
        ]
    },
    {
        "id": 171,
        "category": "synonym",
        "wordHebrew": "ירח",
        "answerHebrew": "לבנה",
        "options": [
            "לבנה",
            "שמש",
            "כוכב",
            "ענן"
        ]
    },
    {
        "id": 172,
        "category": "synonym",
        "wordHebrew": "אש",
        "answerHebrew": "להבה",
        "options": [
            "להבה",
            "מים",
            "עשן",
            "רוח"
        ]
    },
    {
        "id": 174,
        "category": "synonym",
        "wordHebrew": "חג",
        "answerHebrew": "מועד",
        "options": [
            "מועד",
            "שבת",
            "יום",
            "לילה"
        ]
    }
]

export default questions;