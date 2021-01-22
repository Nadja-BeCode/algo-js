class circle {

    #xPos;
    #yPos;
    #radius;


    constructor(x,y,r){

        this.#xPos = x;
        this.#yPos = y;
        this.#radius = r;
    }

get surface(){
  return this
}


move(xOffset, yOffset){
    this.#xPos = xOffset;
    this.#yPos = yOffset;
}