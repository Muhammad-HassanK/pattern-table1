function drawSquarePattern() {
    const size = document.getElementById("size").value;
    let patternOutput = '';

    for (let i = 1; i <= size; i++) {
      let row = `${i} = `;
      for (let j = 1; j <= size; j++) {
        row += j + "* ";
      }
      patternOutput += row + '<br>';
    }

    document.getElementById("patternOutput").innerHTML = patternOutput;

  }