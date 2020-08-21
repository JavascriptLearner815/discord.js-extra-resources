var testBtn = {
    element: document.getElementById('test'),
    click: () => {
        console.log('You clicked the button.');
    }
}

testBtn.element.addEventListener('click', () => {
    testBtn.click;
});
