const photoSlideShow ={
    photoList: ["foto1","foto2","foto3","foto4"],
    currentPhotoIndex: 0,
    getCurrentPhoto() {
        return this.photoList[this.currentPhotoIndex];
    },
    nextPhoto() {
        if (this.currentPhotoIndex < this.photoList.length - 1){
            this.currentPhotoIndex++,
            console.log("This is the name of the current photo:  "+ this.getCurrentPhoto());
            photoSlideShow.getCurrentPhoto();
            }
            else{
                console.log("End of slideshow");
            }
        },
    prevPhoto() {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--,
            console.log("This is the previous photo:  " + this.getCurrentPhoto());
        }
        else {console.log("There are no previous photos.")};
    },

 }

 //prints the current photo name. Because of where it's place in the code it's gonna print the first one
 console.log("This is the current photo:  " + photoSlideShow.getCurrentPhoto());

 //checks if .nextPhoto() works
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();

//checks if .prePhoto() works
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
