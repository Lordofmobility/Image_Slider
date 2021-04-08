images = [
    "Image_1.jpg", "Image_2.jpeg", "Image_3.jpg", "Image_4.jpg", "Image_5.jpg", "Image_6.jpg", "Image_7.jpg"
]
canvas = document.getElementById("canvas");

i = 0

function right_click() {
    document.getElementById("changingimage").src = images[i]
    if (i == 6) {
        i = 0
    } else {
        i++
    }
}

function left_click() {
    document.getElementById("changingimage").src = images[i]
    if (i == 0) {
        i = 6
    } else {
        i--
    }
}