class MountSize {
    
    getMountSize(animal) {
        if (animal.toLowerCase() == "alligator") {
            return "small";         
        }   
        return "wide";
    }
}
  
module.exports = {
    MountSize,
};