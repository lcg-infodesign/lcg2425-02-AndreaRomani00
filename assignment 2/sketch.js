function setup() 
{
  createCanvas(windowWidth, windowHeight); // imposta la tela a schermo intero
  noLoop();
}

function draw() 
{
  background("white"); // colore sfondo
  noFill();

  let gridSize = 5; // numero di righe e colonne della "tabella"
  let spacing = width / gridSize; // spazio tra i glifi (in funzione della griglia)
  
  // primo livello di glifi (colorati random)
  for (let row = 0; row < gridSize; row++) 
    {
      for (let col = 0; col < gridSize; col++) 
      {
        push();
        // calcola la posizione del glifo nella griglia
        translate(col * spacing + spacing / 2, row * spacing + spacing / 2);
        fill(randomColor()); // imposta un colore casuale per ogni glifo di sfondo
        drawGlifi(random(1, 3), spacing * 0.6, int(random(5, 10))); // glifi di dimensioni e punti casuali
        pop();
      }
  }
  
  // secondo liv di glifi
  stroke("black");
  for (let row = 0; row < gridSize; row++) 
    {
      for (let col = 0; col < gridSize; col++) 
      {
        push();
        translate(col * spacing + spacing / 2, row * spacing + spacing / 2);
        drawGlifi(random(1, 5), spacing * 0.6, int(random(5, 10))); // valori casuali per generare i glifi
        pop();
      }
    }
}

// funzione per generare un colore casuale RGB
function randomColor() 
{
  return color(random(255), random(255), random(255));
}

function drawGlifi(numGlifi = 3, side = 50, points = 4) 
{
  for (let n = 0; n < numGlifi; n++) 
    {
      let angle = random(TWO_PI); // angolo casuale per ruotare i glifo
      push();
      rotate(angle);
      drawGlifo(side, points); 
      pop();
    }
}

function drawGlifo(side = 50, points = 7) 
{
  // il beginShape e endShape permettono di creare forme che hanno senso (non degli scarabocchi)
  beginShape();
  for (let p = 0; p < points; p++) 
    {
      let angle = map(p, 0, points, 0, TWO_PI); // posiziona i punti su un cerchio
      let radius = random(side * 0.3, side * 0.6); // varia la distanza dal centro
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;
      curveVertex(x, y);
    }
  endShape(CLOSE);
}

// ridimensiona il canvas a tutta pagina
function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
  redraw(); // ridisegna il canvas per adattare i glifi
}

//suggerimento super figo per chi arriva in fondo al codice, metti la scheda in finestra e cambiane la dimensione (;
