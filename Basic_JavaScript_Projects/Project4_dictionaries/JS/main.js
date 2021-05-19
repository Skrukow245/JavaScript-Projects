function my_Dictionary()    {
    var Animal = {
        Species:"Dog",
        Color:"Black and White",
        Breed:"Husky",
        Age:4,
        Sound:"Bark!"
    };
    delete Animal.Sound;                                                        //Deletes the Sound key before it can be displayed
    document.getElementById("Dictionary").innerHTML = Animal.Sound;             //Displays the key "Sound"
}