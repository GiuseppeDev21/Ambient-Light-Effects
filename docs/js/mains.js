// Make the same stuff with query selector
const Color = (color) => {
  switch (color) {
    case 'green':
      primary = '#abf4ce';
      secondary = '#73edae';
      top_ = '#1f804e';
      bg_ = '#384f44';
      break;
    case 'purple':
      primary = '#7707ff';
      secondary = '#a473ed';
      top_ = '#4b1f80';
      bg_ = '#3b384f';
      break;

    case 'red':
      primary = '#ff075a';
      secondary = '#ed7373';
      top_ = '#801f1f';
      bg_ = '#4f3838';
      break;

    case 'yellow':
      primary = '#f3ff07';
      secondary = '#e7ed73';
      top_ = '#80801f';
      bg_ = '#4f4e38';
      break;

    case 'blue':
      primary = '#7397ed';
      secondary = '#89c5f5';
      top_ = '#1f4f80';
      bg_ = '#38414f';
      break;

    case 'pink':
      primary = '#ee36b7';
      secondary = '#ed73d7';
      top_ = '#801f70';
      bg_ = '#4e384f';
      break;
    default:
      break;
  }
  let background = document.querySelector('body');
  background.style.background = bg_;

  let top = document.querySelector('.top');
  top.style.background = top_;

  let up = document.querySelector('.up');
  up.style.background = primary;

  let below = document.querySelector('.below');
  below.style.background = secondary;

  let elements = document.querySelectorAll('.side');
  for (let i = 0; i < elements.length; i++) {
    elements[
      i
    ].style.background = `linear-gradient( ${primary}, ${secondary} )`;
  }
};
