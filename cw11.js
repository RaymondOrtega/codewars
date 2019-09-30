// Write a function that returns the total surface area and volume of a box as an array: [area, volume].
function getSize(width, height, depth){

let areaVol = []
let Vol= 2*(width*height)+2*(height*depth)+2*(depth*width)
let sf = width * height * depth
 areaVol.push(Vol)
 areaVol.push(sf)

 return areaVol
 }
