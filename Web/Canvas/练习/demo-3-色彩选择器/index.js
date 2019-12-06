/**
 * @author    hc
 * @time      2019-10-20
 * @change    2019-10-20
 * @log  
 *      颜色选择器
 *   通过canvas实现颜色选择器
 *   选取有的颜色为rgb 可以转换为其它色彩模式
 */


//  color picker module
function ColorPicker(pos) {
    // set pos
    this.pos = pos || function (e) { return { x: e.clientX, y: e.clientY } };
}



// init
ColorPicker.prototype.init = function () {
    // alias 
    const colorPicker = this;

    // init color picker element
    // let el = `<div class="color-picker color-value" title="双击复制颜色值">#fff</div><canvas class="color-picker color-map"></canvas><div class="color-picker color-opacity"></div><div class="color-picker color-rgb"></div>`;
    // this.el = document.createElement("div");
    // this.el.id = 'color-picker';
    // this.el.innerHTML = el;
    // document.body.appendChild(this.el);

    this.el = document.getElementById("color-picker");

    this.el.value = document.getElementsByClassName("color-picker color-value")[0];
    this.el.canvas = document.getElementsByClassName("color-picker color-map")[0];
    this.el.opacityBtn = document.getElementsByClassName("color-picker color-opacity-btn")[0];
    this.el.opacity = document.getElementsByClassName("color-picker color-opacity")[0];
    this.el.colorMap = document.getElementsByClassName("color-picker color-rgb")[0];
    this.el.colorMapBtn = document.getElementsByClassName("color-picker color-rgb-btn")[0];
    this.el.value.el = this.el;



    // init css stylesheet 
    const style = document.createElement("style");
    // style.innerHTML = `#color-picker{user-select:none;-moz-user-select:none;-webkit-user-select:none;text-align:center;position:absolute;width:300px;height:200px;box-shadow:3px 3px 7px rgba(204,204,204,0.8);border:1px solid #ccc}#color-picker.hide{display:none!important}.color-picker.color-value{border-bottom:1px solid #ccc;font-size:14px;cursor:move;margin-bottom:7px}.color-picker.color-map{margin:5px;width:200px;height:160px;display:inline-block}.color-picker.color-opacity,.color-picker.color-rgb{display:inline-block;height:160px;width:25px;margin:5px;cursor:pointer}.color-picker.color-opacity,.color-picker.color-map,.color-picker.color-rgb,.color-picker.color-value{background-size:15px 15px;background-image:repeating-conic-gradient(from 0deg,#fff 0deg 90deg,#ddd 90deg 180deg)}`;
    document.head.appendChild(style);
    // background-image: linear-gradient(to right, #f00 0%, #ff0 16.66%, #0f0 33.32% ,#0ff 49.98%, #00f 66.64%,#f0f 100%);
    this.el.colorMap.style = `background-size:100%  100%;background-image: linear-gradient(to bottom, #f00 0%, #ff0 20%, #0f0 40%, #0ff 50%, #00f 80%, #f0f 100%)`;


    
    // init prototype
    this.reset();

    // set default position
    this.setPos(this.pos.x, this.pos.y);


    // init element draggable
    this.el.value.addEventListener("mousedown", function (e) {
        // Original window position
        const wpos = { x: colorPicker.el.offsetLeft, y: colorPicker.el.offsetTop };
        // Original mouse position
        const mpos = { x: e.clientX, y: e.clientY };

        const mousemove = function (event) {
            // Current mouse position
            const cmpos = { x: event.clientX, y: event.clientY };
            let l = cmpos.x - mpos.x + wpos.x;
            let t = cmpos.y - mpos.y + wpos.y;
            colorPicker.setPos(l, t);
        }

        window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", mousemove, false);
        })
        window.addEventListener("mousemove", mousemove, false);
    }, false);



    // init element click
    this.el.value.addEventListener("dblclick", function (e) {
        const node = document.createElement("input");
        node.setAttribute('value', `${this.innerHTML}`);
        document.getElementsByTagName("body")[0].appendChild(node);
        node.select();
        if (document.execCommand('copy')) {
            const bool = document.execCommand('copy', 'true');
            bool && console.log('复制成功');
            !bool && console.log('复制失败');
            document.getElementsByTagName("body")[0].removeChild(node);
        }
    })


    // click opacity bar change opacity
    this.el.opacity.addEventListener("mousedown", function (e) {
        // click opacity bar, set current opacity by height 
        colorPicker.opacity = getPercent(e.layerY);
        colorPicker.flash();
    }, false);


    // move opacity btn change opacity 
    this.el.opacityBtn.addEventListener("mousedown", function (e) {
        moveBtn(e, colorPicker.el.opacityBtn, 'opacity');
        colorPicker.flash();
    });


    // click color map bar   this must be color map   r rg g gb b br  six color  mixed 
    this.el.colorMap.addEventListener("mousedown", function (e) {
        // click it to change current color's   rgb   this maybe complex

        // ! change the current color

        colorPicker.flash();
    })


    // move color map btn to change btn position  and change current color 
    this.el.colorMapBtn.addEventListener("mousedown", function (e) {
        const perc = moveBtn(e, document.getElementsByClassName("color-rgb-btn")[0]);

        // ! here to set current color

        colorPicker.flash();
    })




    // move btn 
    function moveBtn(e, el, pro) {
        const mpos = e.clientY;
        const dpos = el.offsetTop;

        const mousemove = function (e) {
            const cpos = e.clientY;

            let t = cpos - mpos + dpos;
            if (t < 0) {
                t = 0;
            }
            if (t > 150) {
                t = 150;
            }

            el.style.top = t + "px";

            const perc = getPercent(t);

            pro && (colorPicker[pro] = perc);

            return perc;
        }

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", mousemove, false);
        })
        document.addEventListener("mousemove", mousemove, false);
    }


    // get percent by bth offsetTop
    function getPercent(num) {
        num = parseInt(num) === NaN ? 0 : num | 0;
        num = num > 150 ? 150 : num;
        num = num < 0 ? 0 : num;

        return Number(1 - num / 150).toFixed(2);
    }
}




// set colorpicker window position 
ColorPicker.prototype.setPos = function (x, y) {
    const el = colorPicker.el;
    let l = parseInt(x);
    let t = parseInt(y);

    if (l < 5) {
        l = 5;
    }
    if (t < 5) {
        t = 5;
    }


    if (el.offsetWidth + l >= window.innerWidth - 5) {
        l = window.innerWidth - el.offsetWidth - 5;
    }
    if (el.offsetHeight + t >= window.innerHeight - 5) {
        t = window.innerHeight - el.offsetHeight - 5;
    }

    el.style.left = l + 'px';
    el.style.top = t + "px";
}




// reset/init default property
ColorPicker.prototype.reset = function () {
    for (pro in colorPicker.default) {
        colorPicker[pro] = colorPicker.default[pro];
    }
}




// default property 
ColorPicker.prototype.default = {
    "colorModule": "rgb",
    "colorModules": ['rgb', 'rgba', 'hex', 'hsl'],
    "currentColor": "rgb(255,0,0)",
    "selectColor": "rgb(255,255,255)",
    "opacity": 1,
    "fontColor": "#fff",  // #fff   #000   this change by gray value 


}




// flash window 
ColorPicker.prototype.flash = function () {
    // flash color value box
    this.el.value.innerHTML = this.currentColor;
    this.el.value.style.background = this.currentColor;
    this.el.value.style.color = this.fontColor;


    // flash canvas box




}









const colorPicker = new ColorPicker(200, 100);

colorPicker.init();



