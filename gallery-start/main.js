const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 添加图片循环 */
for (var i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);
    // newImage.addEventListener('click', clickPic(newImage.src));
    newImage.onclick = function () {
        var picsrc = this.src;
        // console.log(picsrc);
        changeDisplayImage(picsrc);
    }
}

function changeDisplayImage(picsrc) {
    displayedImage.src = picsrc;
}

/* 编写 变暗/变量 按钮功能 */

btn.onclick = function () {
    if (this.className == 'dark') {
        this.className = 'light';
        this.textContent = '变亮';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        this.className = 'dark';
        this.textContent = '变暗';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}