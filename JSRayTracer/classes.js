class Ray{
    constructor(origin, direction){
        this.origin = origin
        this.direction = direction
    }

    PointAt(t){
        let a = this.origin.add((this.direction.scale(t)))
        return new Vec3(a.x, a.y, a.z) 
    }
}

// The result of casting a ray into our scene
// Position is the point where the ray intersects a sphere in the scene
// Normal is the normal unit vector of the sphere at the intersection point
// t is the t value along the ray where the intersection point is.  This value should, be -1 when the ray hits nothing
// SphereIndex is the array index of the sphere hit by the ray
class RayCastResult
{
    constructor(position, normal, t, sphereIndex)
    {
        this.position = position
        this.normal = normal
        this.t = t
        this.sphereIndex = sphereIndex
    }
}

class Sphere
{
    constructor (centre, radius, colour)
    {
        this.centre = centre
        this.radius = radius
        this.colour = colour
    }


    rayIntersects(ray){
        
        let raydir = new Vec3(ray.direction.x, ray.direction.y, ray.direction.z)
        let rayori = new Vec3(ray.origin.x, ray.origin.y, ray.origin.z)
        let spherecent = new Vec3(this.centre.x, this.centre.y, this.centre.z)


        let a = raydir.dot(raydir)
        let b = raydir.dot(rayori.minus(spherecent)) * 2
        let c = ((rayori.minus(spherecent)).dot(rayori.minus(spherecent))) - this.radius**2
        
        let disciminant = (b*b) - (4*a*c)
        if (disciminant <= 0 ){
            return -1
        }
        
        let result = (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a)
        

        return result;
    }
}
 

class Vec3
{
    constructor(x, y, z)
    {
        this.x = x
        this.y = y
        this.z = z
    }

    // Add other vector to this one and return the result
    add(other)
    {
        return new Vec3(this.x + other.x, this.y + other.y, this.z + other.z)
    }

    // Subtract other vector from this one and return the result
    minus(other)
    {
        return new Vec3(this.x - other.x, this.y - other.y, this.z - other.z)
    }

    // Multiply other vector by this one and return the result
    multiply(other)
    {
        return new Vec3(this.x * other.x, this.y * other.y, this.z * other.z)
    }

    // Scale this vector by the number scalar and return the result
    scale(scalar)
    {
        return new Vec3(this.x * scalar, this.y * scalar, this.z * scalar)
    }
    
    // Calculate the dot product of this vector with the other and return the result
    dot(other) 
    {
        return ((this.x * other.x) + (this.y * other.y) + (this.z * other.z))
    }

    // Calculate and return the magnitude of this vector
    magnitude() 
    {
        return Math.sqrt((this.x**2)+(this.y**2)+(this.z**2));
    }
    
    // Calculate and return the magnitude of this vector without the square root
    magnitudeSquared() 
    {
        return (this.x**2)+(this.y**2)+(this.z**2);
    }

    // Return a normalised version of this vector
    normalised() {
        let a = this.magnitude()
        return new Vec3((this.x / a), (this.y / a), (this.z / a))
    }
}
