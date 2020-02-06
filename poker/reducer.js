const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    switch (type) {
        case 'RANDOM_CARD':
            return [
                ...state,
                {
                    value:
                    suit: 
                }
            ]
        default:
            return state
    }

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    
    return state;
}