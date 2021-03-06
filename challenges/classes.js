
// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
  constructor(properties){
    this.length = properties.length;
    this.width = properties.width;
    this.height = properties.height;
  }
  volume(){
  return (this.length * this.width * this.height);
  } 
  surfaceArea(){
  return 2 * (this.length * this.width +(this.length * this.height + (this.width * this.height)));
  }
}  


const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
})



// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130



/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  
  Find out the formulas for volume and surface area for cubes and create those methods as well. 
   Create a new cube object and log out the results of your new cube.

*/
class CubeMaker extends CuboidMaker{
  constructor(cMProperties){
      super(cMProperties);
  }
  cMvolume(){
    return (this.length * this.width * this.height);
  }
  cMSurfaceArea(){
    return 6 *(this.length * this.width);
  }
}

const Cube = new CubeMaker({
  length: 2, 
  width: 2,
  height: 2,
  })


const Cube2 = new CubeMaker({
  length: 8,
  width: 8,
  height: 8,
})  
/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  
  Find out the formulas for volume and surface area for cubes and create those methods as well. 
   Create a new cube object and log out the results of your new cube.

*/
console.log(Cube.cMSurfaceArea());
console.log(Cube.cMvolume());
console.log(Cube2.cMSurfaceArea());
console.log(Cube2.cMvolume());