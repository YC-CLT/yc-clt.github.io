// 创建星空背景
function createStars() {
    const STAR_COUNT = 200;
    const MIN_SIZE = 1;  // 最小星星尺寸(px)
    const MAX_SIZE = 3;  // 最大星星尺寸(px)
    const MIN_DURATION = 5;  // 最小动画持续时间(s)
    const MAX_DURATION = 15; // 最大动画持续时间(s)
    
    try {
        const starsContainer = document.getElementById('stars');
        if (!starsContainer) return;
        
        // 使用文档片段提高性能
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < STAR_COUNT; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // 随机位置和大小
            const size = MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // 随机动画持续时间
            const duration = MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION);
            star.style.setProperty('--duration', `${duration}s`);
            
            fragment.appendChild(star);
        }
        
        starsContainer.appendChild(fragment);
    } catch (error) {
        console.error('创建星空出错:', error);
    }
}

// 使用DOMContentLoaded替代load事件，更早执行
document.addEventListener('DOMContentLoaded', createStars);        