const colors = document.querySelectorAll('.box');
const sides = document.querySelectorAll('.side');
const tops = document.querySelectorAll('.top');
const ups = document.querySelectorAll('.up');
const belows = document.querySelectorAll('.below');

function changeColor() {
  let color = this.getAttribute('color');
  sides.forEach(s => s.setAttribute('color',`${color}`));
  tops.forEach(t => t.setAttribute('color',`${color}`));
  ups.forEach(u => u.setAttribute('color',`${color}`));
  belows.forEach(b => b.setAttribute('color',`${color}`));
}

colors.forEach(c => c.addEventListener('click', changeColor));