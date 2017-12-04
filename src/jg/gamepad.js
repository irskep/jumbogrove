import _ from 'lodash';

function bindGamepad(director) {
  console.log(navigator.getGamepads()[0]);

  const selectActiveElement = () => {
    if (document.activeElement) document.activeElement.click();
  };

  const axisState = ['rest', 'rest', 'rest', 'rest'];
  const buttonState = [false, false];
  const update = () => {
    window.requestAnimationFrame(update);

    if (!navigator.getGamepads) return;
    const gp = navigator.getGamepads()[0];
    if (!gp) return;
    // const isXbox = gp.id.indexOf('360') !== -1 && gp.id.indexOf('45e') !== -1 && gp.id.indexOf('28e') !== -1;

    axisState.forEach((oldState, axis) => {
      let newState = 'rest';
      if (gp.axes[axis] > 0.5) {
        newState = 'right';
      } else if (gp.axes[axis] < -0.5) {
        newState = 'left';
      } else {
        newState = 'rest';
      }
      if (oldState === 'rest' && newState === 'right') {
        director.focusNextElement();
      } else if (oldState === 'rest' && newState === 'left') {
        director.focusPreviousElement();
      }
      axisState[axis] = newState;
    });

    buttonState.forEach((oldState, i) => {
      if (gp.buttons[i].pressed !== oldState) {
        buttonState[i] = gp.buttons[i].pressed;
        if (buttonState[i]) selectActiveElement();
      }
    })

  };
  update();
}

export {
  bindGamepad,
}