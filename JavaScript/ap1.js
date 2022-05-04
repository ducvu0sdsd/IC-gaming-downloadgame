var a = document.querySelector('.img-feature1')
var listimg1 = document.querySelectorAll('.list-image1 img')
var prevbtn1 = document.querySelector('.prev1')
var nextbtn1 = document.querySelector('.next1')

var b = 0;

function updateimageindex1(index1) {
    document.querySelectorAll('.list-image1 div').forEach(item => {
        item.classList.remove('active1')
    })
    b = index1
    a.src = listimg1[index1].getAttribute('src')
    listimg1[index1].parentElement.classList.add('active1')
}

listimg1.forEach((imgElement, index1) => {
    imgElement.addEventListener('click', f => {
        a.style.opacity = '0'
        setTimeout(() => {
            updateimageindex1(index1)
            a.style.opacity = '1'
        }, 400)

    })
})

prevbtn1.addEventListener('click', f => {
    if (b == 0) {
        b = listimg1.length - 1
    } else {
        b--;
    }
    a.style.opacity = '0'
    setTimeout(() => {
        updateimageindex1(b)
        a.style.opacity = '1'
    }, 400)
})
nextbtn1.addEventListener('click', f => {
    if (b == listimg1.length - 1) {
        b = 0
    } else {
        b++;
    }
    a.style.opacity = '0'
    setTimeout(() => {
        updateimageindex1(b)
        a.style.opacity = '1'
    }, 400)
})