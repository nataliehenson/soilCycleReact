import compostbin from "../assets/img/compostbin.jpeg";
import bicyclecompost from "../assets/img/bicyclecompost.JPG";
import rainbarrel from "../assets/img/rainbarrel.jpg";
import classphoto from "../assets/img/class.JPG";

export const SERVICES = [
    {
        id: 0,
        name: "Compost Pickup",
        image: bicyclecompost,
        featured: false,
        description:
            "Contact us for weekly pick up of your compost if you live near near Lincoln Park/Baker in Denver, Colorado.",
    },
    {
        id: 1,
        name: "Buy a Compost Bin",
        image: compostbin,
        featured: false,
        description:
            "Buy a compost bin that is made from diverted landfill materials.",
    },
    {
        id: 2,
        name: "Buy a Rain Barrel",
        image: rainbarrel,
        featured: false,
        description:
            "Buy a rain barrel to collect rainwater and water your garden. All made from locally diverted materials",
    },
    {
        id: 3,
        name: "Attend a Class",
        image: classphoto,
        featured: true,
        description:
            "Come learn from our Service Leaders about composting, winter gardening, or vermaculture",
    },
];
