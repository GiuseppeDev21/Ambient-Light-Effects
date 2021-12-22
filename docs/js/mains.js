// Make the same stuff with query selector
const Color = (color) => {

  let sd;
  let tp;
  let bg;
  switch (color) {
    case 'green':
      sd = 'linear-gradient(#73edae, #abf4ce)';
      tp = '#1f804e';
      bg = '#384f44';
      break;
    case 'purple':
      sd = 'linear-gradient(#7707ff, #a473ed)';
      tp = '#4b1f80';
      bg = '#3b384f';
      break;

    case 'red':
      break;

    case 'yellow':
      break;

    case 'blue':
      break;

    case 'pink':
      break;
    default:
      break;
  }
  let background = document.querySelector('body');
  background.style.background = bg;

  let top = document.querySelector('.top');
  top.style.background = tp;

  let elements = document.querySelectorAll('.side');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.background = sd;
  }
};
