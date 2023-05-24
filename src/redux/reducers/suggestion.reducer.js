//I manually created a whole list of food types to be used for suggestion feature
const foodTypes = ['Canadian', 'Caribbean', 'Cuban', 'Hawaiian', 'Mexican', 'Burmese', 'Cambodian', 'Chinese', 'Filipino',
    'Indian', 'Indonesian', 'Japanese', 'Korean', 'Lebanese', 'Malaysian', 'Middle Eastern', 'Pakistani', 'Singaporean',
    'Southeast Asian', 'Sri Lankan', 'Thai', 'Tibetan', 'Turkish', 'Vietnamese', 'Danish', 'French', 'German', 'Greek',
    'Irish', 'Italian', 'Mediterranean', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Russian', 'Sicilian', 'Spanish',
    'Swedish', 'Swiss', 'Ukrainian', 'Argentinean', 'Brazilian', 'Chilean', 'Latin American', 'Peruvian', 'South American',
    'Venezuelan', 'Steak House', 'Pizza', 'Hot Dogs', 'Sandwich', 'Breakfast', 'Chicken', 'Ice Cream', 'Burgers', 'Pastries',
    'Brunch', 'Bistro', 'Seafood', 'Vegan', 'Vegetarian', 'Grill', 'Jewish/Kosher', 'Soup', 'Lunch', 'Dinner', 'Organic',
    'Noodles', 'African', 'Egyptian', 'Ethiopian', 'Brunch', 'Beef', 'Pork'];

//randomizer returns a random number from 0 to the length number of foodTypes
const randomizer = () => {
    return Math.floor(Math.random() * foodTypes.length);
}

//This function generates a new set of suggestions everytime it is called upon
const generateTypes = () => {
    const suggest1 = foodTypes[randomizer()];
    const suggest2 = foodTypes[randomizer()];
    const suggest3 = foodTypes[randomizer()];
    const suggest4 = foodTypes[randomizer()];
    const suggest5 = foodTypes[randomizer()];
    return [suggest1, suggest2, suggest3, suggest4, suggest5];
}

//This is my suggestions reducer that the component will utilize
const suggestions = (state = generateTypes(), action) => {
    switch (action.type) {
        case 'REROLL':
            return generateTypes();
        default:
            return state;
    }
};

export default suggestions;