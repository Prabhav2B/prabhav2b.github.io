function pickColor() {



    var x = document.getElementsByClassName('pick');

    for (var i = 0; i < x.length; i++) {
        x[i].style.color = randomColor();
    }
}

function randomColor() {
    // Array containing colors 
    var colors = [
        '#8F8AFF', '#FF8AE2', '#FFBE8A',
        '#B3FF8A', '#8AFFED', '#8AA3FF',
        '#FF978A', '#FFE68A', '#8AF1FF'
    ];
    var random_color = colors[Math.floor(
        Math.random() * colors.length)];
    return random_color;
}