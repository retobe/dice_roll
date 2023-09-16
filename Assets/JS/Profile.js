setValues();

var imageFileSubmit = document.querySelector("#image_url_submit");
var nameSubmit = document.querySelector("#name_submit");
var trashSubmit = document.querySelector("#trash_submit");
var submitBtn = document.querySelector(".submit");

var imgPre = document.querySelector("#pre_img")


function isImageLink(link) {
    // List of common image file extensions
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'];

    try {
        // Create a URL object to validate the link
        const url = new URL(link);

        // Extract the file extension from the URL pathname
        const pathname = url.pathname.toLowerCase();
        const fileExtension = pathname.split('.').pop();

        // Check if the file extension is in the list of image extensions
        return imageExtensions.includes(fileExtension);
    } catch (error) {
        // Invalid URL or other errors occurred
        return false;
    }
}

function updateImagePreview() {
    const imageUrl = imageFileSubmit.value.trim();

    if (isImageLink(imageUrl)) {
        imgPre.src = imageUrl;
        localStorage.setItem("userPfp", imageUrl);
    } else {
        imgPre.src = "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png";
    }
}

imageFileSubmit.addEventListener("input", updateImagePreview);

function submit() {
    if (isImageLink(imageFileSubmit.value.trim()) === false) {
        return alert('Please provide a valid image URL.');
    }
    if (nameSubmit.length > 20 || nameSubmit.length < 3) {
        return alert('Name must be between three and twenty characters');
    }

    if (trashSubmit.length < 5) {
        return alert(`Trash talk is too short, it should have at least five chars`);
    }

    if (trashSubmit.length > 40) {
        return alert(`Trash talk is too long, it can't exceed fourty chars`);
    }

    localStorage.setItem("userPfp", imgPre.src);
    localStorage.setItem("userName", nameSubmit.value);
    localStorage.setItem("userTrash", trashSubmit.value);

    alert("Success");

    return location.replace("../../Home.htm")


}