class trash 
{
	constructor(x, y, w, h)
	{
		var trashOptions = {
		    isStatic: true			
		}
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.body = Bodies.rectangle(x, y, w, h , trashOptions);
		this.image = loadImage("dustbingreen.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var trashPos = this.body.position;		

			push()
			translate(trashPos.x, trashPos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("white");
			fill("white");
			imageMode(CENTER); 
			image(this.image, 0,-this.h/2,this.w, this.h)
			pop()
			
	}

}