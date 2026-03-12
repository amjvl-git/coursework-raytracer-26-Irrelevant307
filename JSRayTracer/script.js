

let colour = new Vec3(0,0,0);
document.addEventListener("DOMContentLoaded", () => {
    let imagewidth = document.getElementById(mycanvas).width;
    let imageheight = document.getElementById(mycanvas).height;
});


let aspectratio = imageheight / imagewidth

class Ray{
    constructor(origin, direction){
        this.origin = origin
        this.direction = direction
    }

    PointAt(t){
        return (this.origin + (this.direction * t))
    }
}

for(let i = 0; 1 <= imagewidth; i++){
    for(let j = 0; 1 <= imageheight; j++){
        let u = i / (imagewidth-1);
        let v = i / (imagewidth-1);

        colour.x - u * 255;
        colour.y - v * 255;
        setpixel(i,j,colour);
    }  
}

