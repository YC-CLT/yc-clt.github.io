// 战机动画控制
function triggerFighter() {
    const FIGHTER_EMOJIS = ['🚀', '🛸', '🛰️', '👨‍🚀', '👩‍🚀'];
    const ANIMATION_DURATION = '8s';
    
    try {
        const fighter = document.querySelector('.fighter');
        if (!fighter) return;
        
        // 随机选择战机表情
        const randomEmoji = FIGHTER_EMOJIS[Math.floor(Math.random() * FIGHTER_EMOJIS.length)];
        fighter.textContent = randomEmoji;
        
        // 重置动画
        fighter.style.removeProperty('animation');
        void fighter.offsetHeight; // 触发重绘
        fighter.style.animation = `flyby ${ANIMATION_DURATION} linear`;
    } catch (error) {
        console.error('战机动画出错:', error);
    }
}