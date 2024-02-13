///////////////////////////////  body  ////////////////////////////////////////////////////////

const body = document.querySelector('body');

body.style.background = 'linear-gradient(90deg, #8BA7AE, #B6DFE9 60%, #8BA7AE)';
body.style.margin = '0';
body.style.padding = '0';

///////////////////////////////  h1  ////////////////////////////////////////////////////////

let h1 = document.createElement('h1');

h1.textContent = 'Etch A Sketch';
h1.style.fontSize = '5rem';
h1.style.color = '#AD7B5A';
h1.style.textAlign = 'center';

body.appendChild(h1);

///////////////////////////////  p  ////////////////////////////////////////////////////////

let para = document.createElement('p');

para.textContent = 'Let your fly imagination!';

para.style.color = '#5C2602';
para.style.textAlign = 'center';
para.style.fontSize = '3rem'

body.appendChild(para);

///////////////////////////////  input-color  //////////////////////////////////////////////////////

let inputColor = document.createElement('input');

inputColor.setAttribute('type', 'color');

inputColor.style.position = 'relative';
inputColor.style.display = 'block';
inputColor.style.width = '80px';
inputColor.style.height = '80px';
inputColor.style.border = 'none';
inputColor.style.borderRadius = '50%';
inputColor.style.marginLeft = '10rem';
inputColor.style.marginTop = '11rem';
inputColor.style.transform = 'translateY(-2rem)';

body.appendChild(inputColor);

///////////////////////////////  button-colorMode  /////////////////////////////////////////////////

let colorMode = document.createElement('button');

colorMode.textContent = 'Color Mode';

colorMode.style.position = 'absolute';
colorMode.style.fontSize = '1.3rem';
colorMode.style.color = '#262607'
colorMode.style.background = 'linear-gradient(90deg, #AD7B5A, #5C2602)';
colorMode.style.marginTop = '1rem';
colorMode.style.marginLeft = '8.6rem';
colorMode.style.border = '1px solid #000';
colorMode.style.borderRadius = '20%';
colorMode.style.transition = 'ease .5s';
colorMode.style.transform = 'scale(1.05)';

colorMode.addEventListener('mouseover', () => {
	colorMode.style.fontSize = '1.4rem';
	colorMode.style.marginLeft = '8.4rem';
	colorMode.style.marginTop = '.9rem';
	colorMode.style.transform = 'scale(1.05)';
});

colorMode.addEventListener('mouseout', () => {
	colorMode.style.fontSize = '1.3rem';
	colorMode.style.marginLeft = '8.6rem';
	colorMode.style.marginTop = '1rem';
});


body.appendChild(colorMode);

///////////////////////////////  button-rainbowMode  ///////////////////////////////////////////////

let rainbowMode = document.createElement('button');

rainbowMode.textContent = 'Rainbow Mode';

rainbowMode.style.position = 'absolute';
rainbowMode.style.fontSize = '1.3rem';
rainbowMode.style.color = '#262607'
rainbowMode.style.background = 'linear-gradient(90deg, #AD7B5A, #5C2602)';
rainbowMode.style.marginTop = '6rem';
rainbowMode.style.marginLeft = '7.6rem';
rainbowMode.style.border = '1px solid #000';
rainbowMode.style.borderRadius = '20%';
rainbowMode.style.transition = 'ease .5s';
rainbowMode.style.transform = 'scale(1.05)';

rainbowMode.addEventListener('mouseover', () => {
	rainbowMode.style.fontSize = '1.4rem';
	rainbowMode.style.marginLeft = '7.3rem';
	rainbowMode.style.marginTop = '5.9rem';
	rainbowMode.style.transform = 'scale(1.05)';
});

rainbowMode.addEventListener('mouseout', () => {
	rainbowMode.style.fontSize = '1.3rem';
	rainbowMode.style.marginLeft = '7.6rem';
	rainbowMode.style.marginTop = '6rem';
});

body.appendChild(rainbowMode);

///////////////////////////////  button-erase  /////////////////////////////////////////////////

let erase = document.createElement('button');

erase.textContent = 'Erase';

erase.style.position = 'absolute';
erase.style.fontSize = '1.3rem';
erase.style.color = '#262607'
erase.style.background = 'linear-gradient(90deg, #AD7B5A, #5C2602)';
erase.style.marginTop = '11rem';
erase.style.marginLeft = '10rem';
erase.style.border = '1px solid #000';
erase.style.borderRadius = '20%';
erase.style.transition = 'ease .5s';
erase.style.transform = 'scale(1.05)';

erase.addEventListener('mouseover', () => {
	erase.style.fontSize = '1.4rem';
	erase.style.marginLeft = '9.9rem';
	erase.style.marginTop = '10.9rem';
	erase.style.transform = 'scale(1.05)';
});

erase.addEventListener('mouseout', () => {
	erase.style.fontSize = '1.3rem';
	erase.style.marginLeft = '10rem';
	erase.style.marginTop = '11rem';
});

body.appendChild(erase);

///////////////////////////////  button-clear  /////////////////////////////////////////////////

let clear = document.createElement('button');

clear.textContent = 'Clear';

clear.style.position = 'absolute';
clear.style.fontSize = '1.3rem';
clear.style.color = '#262607'
clear.style.background = 'linear-gradient(90deg, #AD7B5A, #5C2602)';
clear.style.marginTop = '16rem';
clear.style.marginLeft = '10.1rem';
clear.style.border = '1px solid #000';
clear.style.borderRadius = '20%';
clear.style.transition = 'ease .5s';
clear.style.transform = 'scale(1.05)';

clear.addEventListener('mouseover', () => {
	clear.style.fontSize = '1.4rem';
	clear.style.marginLeft = '10rem';
	clear.style.marginTop = '15.8rem';
	clear.style.transform = 'scale(1.05)';
});

clear.addEventListener('mouseout', () => {
	clear.style.fontSize = '1.3rem';
	clear.style.marginLeft = '10.1rem';
	clear.style.marginTop = '16rem';
});

body.appendChild(clear);

///////////////////////////////  div-container  /////////////////////////////////////////////////

let divContainer = document.createElement('div');

divContainer.style.border = '1px solid #333';
divContainer.style.position = 'absolute';
divContainer.style.display = 'flex';
divContainer.style.flexWrap = 'wrap';
divContainer.style.flexDirection = 'column'
divContainer.style.width = '34rem';
divContainer.style.height = '34rem';
divContainer.style.top = '23rem';
divContainer.style.right = '7rem';
divContainer.style.backgroundColor = '#ccc';
divContainer.style.boxShadow = '#333 0 3px 8px';
divContainer.style.borderRadius = '2%';

body.appendChild(divContainer);

///////////////////////////////  sub-divs  /////////////////////////////////////////////////

let createGrid = (width, height, divClass) => {
	const grid = [];
	for (let i = 0; i < height; i++) {
		const row = [];
		for (let j = 0; j < width; j++) {
			
			let divs = document.createElement('div');
			let color = '';

			divs.classList.add(divClass);
			divs.style.backgroundColor = '#fff';
			divs.style.width = '2rem';
			divs.style.height = '2rem';
			divs.style.border = '1px outset #000';
			divs.style.borderRadius = '20%';

			divs.addEventListener('mousedown', (e) => {
				e.target.style.backgroundColor = color;	
				e.preventDefault();		
			});

			divs.addEventListener('mousemove', (e) => {
				if (e.type === 'mousemove' && e.buttons === 1) {
					e.target.style.backgroundColor = color;	
				}
			});

			colorMode.addEventListener('click', () => {
				let chooseColor = inputColor.value;
				color = chooseColor;
				return color;
			});

        	rainbowMode.addEventListener('click', () => {
				color = randomColor();
			});

        	erase.addEventListener('click', () => {
				color = '#fff';
			});

			clear.addEventListener('click', () => {
				divs.style.backgroundColor = '#fff';
			});

			divContainer.appendChild(divs);
		}
		grid.push(row);
	} 
	return grid;
};

createGrid(16, 16, 'myDivs');

const randomColor = () => {
	let colors = ['yellow', 'red', 'blue', 'orange', 'pink', 'green', 'ligthBlue', 'grey', 'purple'];
	return colors[Math.floor(Math.random() * colors.length)];
};

///////////////////////////////  footer  /////////////////////////////////////////////////

let footer = document.createElement('footer');

footer.style.background = 'linear-gradient(90deg, #7A969D, #A5CED8 60%, #7A969D)';
footer.style.borderTop = '1px double #69858C';
footer.style.position = 'absolute';
footer.style.width = '99.8%';
footer.style.height = '5rem';
footer.style.top = '58rem';

body.appendChild(footer);

///////////////////////////////  pFooter  /////////////////////////////////////////////////

let pFooter = document.createElement('p');

pFooter.textContent = '© Copyright 2023 por Nicolás Andrés Gómez Velásquez adaptado de "Michalosman"(de The Odin Project).';

pFooter.style.fontSize = '1rem';
pFooter.style.paddingTop = '.5rem';
pFooter.style.textAlign = 'center';

footer.appendChild(pFooter);