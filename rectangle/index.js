const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const width = document.getElementById('width');
const height = document.getElementById('height');
const red = document.getElementById('red');
const blue =  document.getElementById('blue');

width.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('plus 10')
    dispatch({
        type: 'INCREASE_WIDTH'
    })
});

height.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('plus 10')
    dispatch({
        type: 'INCREASE_HEIGHT'
    })
})

red.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('red')
    dispatch({
        type: 'RED_COLOR'
    })
})

blue.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('blue')
    dispatch({
        type: 'BLUE_COLOR'
    })
})