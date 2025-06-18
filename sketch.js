let t = 0;

function setup() {
  createCanvas(800, 400);
  frameRate(60);
}

function draw() {
  background(135, 206, 235); // Céu azul claro

  // Sol
  fill(255, 204, 0);
  ellipse(100, 80, 80, 80);

  let transition = constrain(t / 600, 0, 1); // 10 segundos de transição

  drawMountains(1 - transition);
  drawTrees(1 - transition);
  drawBuildings(transition);
  drawCars(transition);

  t++;
}

// Montanhas (campo)
function drawMountains(alpha) {
  noStroke();
  fill(34, 139, 34, alpha * 255);
  triangle(100, 300, 250, 100, 400, 300);
  triangle(300, 300, 450, 150, 600, 300);
}

// Árvores (campo)
function drawTrees(alpha) {
  for (let x = 50; x < width; x += 100) {
    let y = 300;
    fill(139, 69, 19, alpha * 255); // tronco
    rect(x + 10, y - 40, 10, 40);
    fill(34, 139, 34, alpha * 255); // copa
    ellipse(x + 15, y - 50, 40, 40);
  }
}

// Prédios (cidade)
function drawBuildings(alpha) {
  for (let x = 500; x < width; x += 60) {
    let h = random(100, 200);
    fill(50, 50, 50, alpha * 255);
    rect(x, 400 - h, 50, h);
  }
}

// Carros (cidade)
function drawCars(alpha) {
  let x = (frameCount * 3) % width;
  fill(255, 0, 0, alpha * 255);
  rect(x, 360, 40, 20);
  fill(0, alpha * 255);
  ellipse(x + 10, 380, 10, 10);
  ellipse(x + 30, 380, 10, 10);
}