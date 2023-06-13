
export const counterReducer = (state, action) => {
    const stateCopy = { ...state };

    console.log('state: ', state);
    console.log('stateCopy: ', stateCopy);

    switch (action.type) {
        case 'decrement':
            // state.count=state.count-1;  //won't workout if try to mutate the original state.

            { stateCopy.count > 0 && stateCopy.count--; }
            { stateCopy.count > 0 && (stateCopy.divWidth -= 5) };
            return stateCopy;

        case 'increment':
            { stateCopy.count < 20 && stateCopy.count++ };
            { (stateCopy.count > 1 && stateCopy.count < 20) && (stateCopy.divWidth += 5) }
            return stateCopy;

        case 'reset':
            stateCopy.count = 0;
            stateCopy.divWidth = 0;
            return stateCopy;

        default:
            return (stateCopy);
    }

}