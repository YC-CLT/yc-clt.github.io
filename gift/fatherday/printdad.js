(function() {
    'use strict';

    const MESSAGES = [
        {
            delay: 0,
            text: "initializing...ok"
        },
        {
            delay: 2000,
            text: "您的怀抱是初春的暖阳，寒夜里永远为我留一盏光。您用半生搭成港湾，潮起潮落都是爱的呢喃。"
        },
        {
            delay: 3200,
            text: "您用岁月换我成长，发丝里藏着最美的时光。岁月偷走您年轻的容颜，却让温暖在褶皱里沉淀。皱纹里长出的温柔，是您教我读世界的眼眸。"
        },
        {
            delay: 4600,
            text: "您把生活熬成糖，苦涩都变成我前行的光。平凡日子里盛开的芬芳，是您教我活成幸福的模样。"
        },
        {
            delay: 5000,
            text: "我长高的刻度，是您被压弯的脊梁，岁月用风霜换我向阳生长。旧相册里您也曾是少女，却为我收起裙摆，把青春揉进一日三餐。您把叮嘱叠进便当盒，用白发编成风筝线，千里之外仍牵着我的晴天。"
        },
        {
            delay: 8450,
            text: "说不出口的爱都藏在，清晨温好的粥里，深夜留的灯里，和永远比我早醒的生物钟里。"
        },
        {
            delay: 9250,
            text: "今赋诗："
        },
        {
            delay: 10000,
            text: "三尺台前霜染头，几何人世画中收。<br>线引圆规摹岁月，情凝粉笔写春秋。<br>银屏絮语三餐问，故里烟波一镜收。<br>寸草心随南雁去，朝朝衔露报晖柔。"
        },
        {
            delay: 12000,
            text: "作词："
        },
        {
            delay: 13000,
            text: "粉笔生涯卅载春，青丝渐雪未辞辛。夜半灯前批课案，星灿，晨风总伴早读人。微信视频千里暖，轻唤，叮咛如月照归程。游子登高云起处，凝伫，萱堂念念是昆仑。"
        },
        {
            delay: 15000,
            text: "古文："
        },
        {
            delay: 16000,
            text: "今负笈千里，微信频传，虽隔山水，慈颜宛在屏间。每见鬓角添霜，儿心戚戚；闻得嘘寒问暖，不胜心暖。<br>呜呼！寸草春晖，难报万一。惟愿母体康泰，福寿绵长，他日儿当承欢膝下，效斑衣之戏，奉菽水之欢。"
        },
        {
            delay: 18000,
            text: "英文："
        },
        {
            delay: 19000,
            text: "Mom, your love is the timeless equation that balances chaos with calm, your pixelated WeChat hugs stitching continents into one heartbeat—thank you for solving life's unknowns with your infinite formula of care."
        },
        {
            delay: 20000,
            text: "C语言："
        },
        {
            delay: 18000,
            text: "<code>#include <母爱永恒.h> // 自定义母亲节专属头文件<br>int main() {<br>    while(1) { // 母爱如无限循环永不终止<br>        float muqin_love = 3.1415926; // 圆周率般周而复始的关怀<br>        char* video_call = WeChatVideoCall(\"Friday\"); // 每周五准时闪烁的亲情坐标<br><br>        for(int days=0; days<sizeof(青春); days++) {<br>            muqin_love *= pow(牵挂, 距离); // 牵挂随大学距离指数增长<br>            erzi_gratitude += (板书粉尘 + 深夜批卷 + 银发增量); // 讲台粉笔灰沉淀成星群<br>        }<br><br>        printf(\"妈妈，您用%d年教我解的方程\\n答案原来是：\\n\", 青春);<br>        printf(\"∞%%的爱 + %s = 穿越%d公里的月光\\n\", video_call, 家乡到大学里程);<br>    }<br>    return 母亲节快乐; // 返回值永远为真<br>}</code>"
        },
    ];

    // 提取常量
    const DURATION_FACTOR = 60;  // 

    function scramble(element, text, options = {}) {
        const defaults = {
            probability: 0.2,
            glitches: '!@#$%^&*()[]{}<>?/\\|;:',
            blank: '',
            duration: text.length * DURATION_FACTOR,
            ease: 'linear',  // Changed from 'easeInOutQuad' to built-in easing
            delay: 0.0
        };
        
        const settings = {...defaults, ...options};
        const $element = $(element);
        const glitchChars = settings.glitches.split('');
        const glitchLength = glitchChars.length;
        
        function shuffle() {
            return Math.random() < 0.5 ? 1 : -1;
        }
        
        function wrap(text, className) {
            return `<span class="${className}">${text}</span>`;
        }
        
        const glitches = glitchChars.map(char => wrap(char, 'glitch'));
        const textChars = text.split('');
        const textLength = textChars.length;
        const order = Array.from({length: textLength}, (_, i) => i).sort(shuffle);
        const output = [];
        
        for (let i = 0; i < textLength; i++) {
            const glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
            const addGlitch = Math.random() < settings.probability;
            output.push(addGlitch ? glitches[glitchIndex] : '');
        }
        
        const object = { value: 0 };
        const target = { value: 1 };
        
        $(object).delay(settings.delay).animate(target, {
            duration: settings.duration,
            easing: settings.ease,
            step: function() {
                const progress = Math.floor(object.value * (textLength - 1));
                for (let i = 0; i <= progress; i++) {
                    const index = order[i];
                    output[index] = textChars[index];
                }
                $element.html(output.join(''));
            },
            complete: function() {
                $element.html(text);
            }
        });
    }

    function animateMessages() {
        // 使用 jQuery 方法替代原生属性操作
        $paragraphs.each((index, element) => {
            const { delay, text } = MESSAGES[index];
            $(element).empty();  // 保持 jQuery 方法一致性
            scramble(element, text, { delay });
        });
    }

    const $message = $('#message');
    const $animate = $('#animate');
    let $paragraphs = null;

    function initialize() {
        // 恢复正确的元素引用
        $animate.on('click', animateMessages);
        
        // 恢复原来的段落创建方式
        $message.empty();
        MESSAGES.forEach(() => {
            $message.append($('<p>'));
        });
        
        $paragraphs = $message.find('p');
    }

    // 保持文档就绪写法
    $(document).ready(initialize);
})();