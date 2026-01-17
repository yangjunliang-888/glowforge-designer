// GLOWFORGE设计器 - 功能脚本
let speed = 50;
let isRunning = false;

document.getElementById('speed-up').onclick = function() {
    if (speed < 100) {
        speed += 10;
        alert('速度增加至：' + speed + '%');
    }
};

document.getElementById('speed-down').onclick = function() {
    if (speed > 0) {
        speed -= 10;
        alert('速度减少至：' + speed + '%');
    }
};

document.getElementById('pause').onclick = function() {
    isRunning = !isRunning;
    const status = document.querySelector('.status');
    const button = document.getElementById('pause');
    
    if (isRunning) {
        status.textContent = '状态: 运行中 🟢';
        button.textContent = '暂停';
    } else {
        status.textContent = '状态: 已暂停 ⏸️';
        button.textContent = '继续';
    }
};

// 页面加载完成提示
window.onload = function() {
    console.log('GLOWFORGE设计器加载完成！');
};