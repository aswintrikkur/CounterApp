export const ACTION = {     //for avoiding typos and ease of handling 
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
};

export const counterReducer = (state, action) => {
    const stateCopy = { ...state };

    // console.log('state: ', state);
    // console.log('stateCopy: ', stateCopy);

    switch (action.type) {
        case ACTION.DECREMENT:
            // state.count=state.count-1;  //won't workout if try to mutate the original state.

            { stateCopy.count > 0 && stateCopy.count--; }
            { stateCopy.count > 0 && (stateCopy.divWidth -= 5) };
            return stateCopy;

        case ACTION.INCREMENT:
            { stateCopy.count < 20 && stateCopy.count++ };
            { (stateCopy.count > 1 && stateCopy.count < 20) && (stateCopy.divWidth += 5) }
            return stateCopy;

        case ACTION.RESET:
            stateCopy.count = 0;
            stateCopy.divWidth = 0;
            return stateCopy;

        default:
            return (stateCopy);
    }

}