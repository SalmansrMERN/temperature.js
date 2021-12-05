var farn = prompt("Enter Farhenheit Value : ")

var cel = (farn - 32) * (5 / 9)

document.write("Celcilius Temperature : " + cel.toFixed(3) + "<br>")

var celc = prompt("Enter Celcius Value : ")

var farhn = ((celc * 9 / 5) + 32)

document.write("Farhenheit Temperature : " + farhn.toFixed(3))