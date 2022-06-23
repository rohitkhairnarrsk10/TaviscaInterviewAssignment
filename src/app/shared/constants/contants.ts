export const TRAVELERS = [
    { value: 1, label: "1 Adult" },
    { value: 2, label: "2 Adult" },
    { value: 3, label: "3 Adult" },
    { value: 4, label: "4 Adult" },
];
export const TRAVEL_CLASS = [
    { id: 1, label: "Economy" },
    { id: 2, label: "Business" },
];

export const AIRPORT_LIST = [
    { id: 1, label: "Delhi" },
    { id: 2, label: "Pune" },
    { id: 3, label: "Mumbai" },
    { id: 4, label: "Bangalore" },
];

export const MockData = [
    {
        id: 1,
        airlines: "Air Asia",
        departAirport: "Delhi",
        destinationAirport: "Mumbai",
        departDate: "2022-06-29T05:21:37.365Z",
        returnDate: "2022-06-30T05:21:37.365Z",
        fair: "100",
        icon: "assets/airAsia.png",
        stops: ["Ahemedabad", "Chandigadh", "Jaypur"],
        seatingClasses: [
            { id: 1, parentId: 1, name: "Basic Economy", fair: 125 },
            { id: 2, parentId: 1, name: "Main Cabin", fair: 200 },
            { id: 3, parentId: 2, name: "Main Business", fair: 400 },
            { id: 3, parentId: 2, name: "Basic Business", fair: 300 }
        ]
    },
    {
        id: 2,
        airlines: "Air Asia",
        departAirport: "Delhi",
        destinationAirport: "Mumbai",
        departDate: "2022-06-29T05:21:37.365Z",
        returnDate: "2022-06-30T05:21:37.365Z",
        fair: "100",
        icon: "assets/airAsia.png",
        stops: ["Ahemedabad", "Jaypur"],
        seatingClasses: [
            { id: 1, parentId: 1, name: "Basic Economy", fair: 125 },
            { id: 2, parentId: 1, name: "Main Cabin", fair: 200 },
            { id: 3, parentId: 2, name: "Main Business", fair: 400 },
            { id: 3, parentId: 2, name: "Basic Business", fair: 300 }
        ]
    },
    {
        id: 3,
        airlines: "Air Asia",
        departAirport: "Delhi",
        destinationAirport: "Mumbai",
        departDate: "2022-06-29T05:21:37.365Z",
        returnDate: "2022-06-30T05:21:37.365Z",
        fair: "100",
        icon: "assets/airAsia.png",
        stops: ["Ahemedabad", "Chandigadh"],
        seatingClasses: [
            { id: 1, parentId: 1, name: "Basic Economy", fair: 125 },
            { id: 2, parentId: 1, name: "Main Cabin", fair: 200 },
            { id: 3, parentId: 2, name: "Main Business", fair: 400 },
            { id: 3, parentId: 2, name: "Basic Business", fair: 300 }
        ]
    },
    {
        id: 5,
        airlines: "Emirates",
        departAirport: "Bangalore",
        destinationAirport: "Pune",
        departDate: "2022-06-28T05:21:37.365Z",
        returnDate: "2022-06-29T05:21:37.365Z",
        icon: "assets/emirates.png",
        stops: ["Mysore", "Mumbai"],
        seatingClasses: [
            { id: 1, parentId: 1, name: "Basic Economy", fair: 125 },
            { id: 2, parentId: 1, name: "Main Cabin", fair: 200 },
            { id: 3, parentId: 2, name: "Main Business", fair: 400 },
            { id: 3, parentId: 2, name: "Basic Business", fair: 300 }
        ]
    },
    {
        id: 6,
        airlines: "Emirates",
        departAirport: "Bangalore",
        destinationAirport: "Pune",
        departDate: "2022-06-28T05:21:37.365Z",
        returnDate: "2022-06-29T05:21:37.365Z",
        icon: "assets/emirates.png",
        stops: ["Mysore", "Mumbai","Chennai"],
        seatingClasses: [
            { id: 1, parentId: 1, name: "Basic Economy", fair: 125 },
            { id: 2, parentId: 1, name: "Main Cabin", fair: 200 },
            { id: 3, parentId: 2, name: "Main Business", fair: 400 },
            { id: 3, parentId: 2, name: "Basic Business", fair: 300 }
        ]
    },
]