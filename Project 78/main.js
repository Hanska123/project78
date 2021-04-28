var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.https://t3.ftcdn.net/jpg/02/74/86/30/360_F_274863032_xgwvNFF0u9vZAGPmtvCRHdGxIeeDLAb9.jpg", "https://image.shutterstock.com/image-vector/portrait-handsome-man-shirt-jeans-260nw-582282625.jpg" , "https://image.freepik.com/free-vector/cartoon-cute-mother-daughter-vector_39961-1259.jpg", "https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-images.jpg", "https://i.pinimg.com/736x/ea/69/dc/ea69dc6226e72a33f82d3add20b470df.jpg"];
var names = ["Ragavareddy", "Bharati", "Ravi", "Srividya", "Hanska", "Hanish"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
