// Make the same stuff with query selector
const key = [
  {
    id: 'green',
    primary: '#abf4ce',
    secondary: '#73edae',
    tertiary: '#1f804e',
    quaternary: '#384f44',
  },
  {
    id:'purple',
    primary: '#7707ff',
    secondary: '#a473ed',
    tertiary: '#4b1f80',
    quaternary: '#3b384f',
  },
  {
    id:'red',
    primary: '#ff075a',
    secondary: '#ed7373',
    tertiary: '#801f1f',
    quaternary: '#4f3838',
  },
  {
    id:'yellow',
    primary: '#f3ff07',
    secondary: '#e7ed73',
    tertiary: '#80801f',
    quaternary: '#4f4e38',
  },
  {
    id:'blue',
    primary: '#7397ed',
    secondary: '#89c5f5',
    tertiary: '#1f4f80',
    quaternary: '#38414f',
  },
  {
    id:'pink',
    primary: '#ee36b7',
    secondary: '#ed73d7',
    tertiary: '#801f70',
    quaternary: '#4e384f',
  },
];

const colors = document.getElementsByClassName('box');
let i;
for (i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', changecolor);
}

function changecolor() {
  let color = this.getAttribute('data-color');
  const select = key.find(elemento => {return elemento.id === color;});

  let root = document.querySelector(':root');
  root.style.setProperty('--bg', select.quaternary);
  root.style.setProperty('--side',`linear-gradient( ${select.primary}, ${select.secondary} )`);
  root.style.setProperty('--top', select.tertiary);
  root.style.setProperty('--up', select.primary);
  root.style.setProperty('--below', select.secondary);
  //   var rootStyles = getComputedStyle(root);
  //   var mainColor = rootStyles.getPropertyValue('--bg');
  //   console.log(rootStyles);
}