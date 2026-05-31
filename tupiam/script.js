document.addEventListener('DOMContentLoaded', function () {
    const welcomeScreen = document.getElementById('welcomeScreen');

    // 3秒后隐藏欢迎界面
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');

        // 隐藏后移除DOM元素（可选）
        setTimeout(() => {
            welcomeScreen.remove();
        }, 1000);
    },1000 );
});
// 1. 导航栏滚动变色特效
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. 作品图片点击放大功能
const workCards = document.querySelectorAll('.work-card');
const imgModal = new bootstrap.Modal(document.getElementById('imgModal'));
const modalImg = document.getElementById('modalImg');

workCards.forEach(card => {
    card.addEventListener('click', function () {
        const imgSrc = this.querySelector('img').src;
        modalImg.src = imgSrc;
        imgModal.show();
    });
});

// 3. 留言表单验证 + 动态渲染留言
const form = document.getElementById('messageForm');
const msgContainer = document.getElementById('msgContainer');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 获取输入值
    const name = document.getElementById('name').value.trim();
    const content = document.getElementById('content').value.trim();

    // 表单验证
    if (!name || !content) {
        alert('请填写完整的昵称和留言内容！');
        return;
    }

    // 创建留言元素
    const msgItem = document.createElement('div');
    msgItem.className = 'border-bottom pb-2 mb-2';
    msgItem.innerHTML = `
    <h6 class="text-primary">${name}</h6>
    <p class="mb-0">${content}</p>
    <small class="text-muted">${new Date().toLocaleString()}</small>
  `;

    // 添加到页面顶部
    msgContainer.prepend(msgItem);

    // 清空表单
    form.reset();
    alert('留言提交成功！');
});
// 彩蛋交互功能
const eggIcon = document.getElementById('eggIcon');
const eggModal = new bootstrap.Modal(document.getElementById('eggModal'));

// 修复原有setTimeout参数缺失问题（之前代码里setTimeout第二个参数为空）
document.addEventListener('DOMContentLoaded', function () {
    const welcomeScreen = document.getElementById('welcomeScreen');

    // 3秒后隐藏欢迎界面
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');

        // 隐藏后移除DOM元素（可选）
        setTimeout(() => {
            welcomeScreen.remove();
        }, 1000);
    }, 3000); // 补充缺失的3000毫秒参数
});

// 彩蛋点击事件
eggIcon.addEventListener('click', function() {
  // 可选：添加点击反馈
  this.style.transform = 'scale(0.9)';
  setTimeout(() => {
    this.style.transform = '';
  }, 150);
  
  eggModal.show();
});
  // 等待页面所有元素加载完成
document.addEventListener('DOMContentLoaded', function() {
   
     

    // 彩蛋跟随鼠标3D旋转（新增功能）
    document.addEventListener('mousemove', function(e) {
        if (!eggIcon) return;

        // 获取彩蛋的位置和中心坐标
        const eggRect = eggIcon.getBoundingClientRect();
        const eggCenterX = eggRect.left + eggRect.width / 2;
        const eggCenterY = eggRect.top + eggRect.height / 2;

        // 计算鼠标相对彩蛋中心的偏移（限制范围-1~1）
        const offsetX = (e.clientX - eggCenterX) / (eggRect.width / 2);
        const offsetY = (e.clientY - eggCenterY) / (eggRect.height / 2);

        // 控制旋转角度（避免过度旋转）
        const rotateX = -offsetY * 40;
        const rotateY = offsetX * 40;

        // 应用3D旋转
        eggIcon.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`;
    });

    // 鼠标离开彩蛋重置旋转
    if (eggIcon) {
        eggIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateX(10deg) rotateY(10deg) scale(1)';
        });
    }
});