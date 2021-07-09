class MountSize {
    
    getMountSize(animal) {
        if (animal == "alligator") {
            return "small";
        } else {
            return "wide";
        }   
    }
}
  
module.exports = {
    MountSize,
};