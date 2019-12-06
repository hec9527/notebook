
/**
 * @author   hc
 * @time     2019-10-18
 * @change   2019-10-19
 * @log:
 *    2019-10-18: 编辑界面，完成基本的布局已经图标样式   加载文件、读取文件、渲染到canvas
 *    2019-10-19：完成工具栏的功能细节
 *          BUG: 旋转之后 坐标系改变导致   图片移动与鼠标移动的方向不一致
 *          fix：调整坐标系统
 *          功能： 
 *                 选区大小可以自由调节
 *                 选区通过canvas完成并且添加蒙版
 */





window.onload = function () {
  // 文件选取
  function fileSelect() {
    // 文件拖拽选取
    const fileDrager = document.getElementsByClassName("uploader")[0];
    fileDrager.addEventListener("dragenter", dragBefore, false);
    fileDrager.addEventListener("dragover", dragBefore, false);
    fileDrager.addEventListener("drop", function (e) {
      e.stopPropagation();
      e.preventDefault();
      app.file = e.dataTransfer.files[0];
      addEventFileLoad();
    }, false);

    // 文件点击选取
    document.getElementById("fileReader").addEventListener("change", function () {
      if (this.files.length >= 1) {
        app.file = this.files[0];
        addEventFileLoad();
      } else {
        alert("文件读取失败，请刷新浏览器再试");
      }
    }, false);

    function addEventFileLoad() {
      const event = new Event("fileSelect");
      window.dispatchEvent(event);
    }

    function dragBefore(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  // 文件读取 读取文件并且绘制到canvas
  function fileReader() {
    window.addEventListener("fileRead", function (e) {
      flashCanvas();
      const event = new Event("imageDraw");
      window.dispatchEvent(event);
    }, false);
    window.addEventListener("fileSelect", function () {
      if (String(app.file.type).split("/")[0] !== "image") return alert("请打开图片文件");
      const fileLoader = new FileReader();
      fileLoader.onload = function (e) {
        const elImg = document.createElement("img");
        elImg.src = e.target.result;
        elImg.onload = function () {
          app.image = elImg;
          app.loadFile = true;
          app.imgPos.x = - app.image.width / 2;
          app.imgPos.y = - app.image.height / 2;
          tagleSection("editor");
          const event = new Event("fileRead");
          window.dispatchEvent(event);
        }
      }
      fileLoader.readAsDataURL(app.file);
    }, false);
  }


  // 切换显式界面
  function tagleSection(className) {
    const nodes = document.getElementsByClassName("section");
    Array.prototype.forEach.call(nodes, node => {
      node.classList.add("hide");
    });
    document.getElementsByClassName(className)[0].classList.remove("hide");
    reSizeCanvas();
  }

  // 重新设置canvas的大小
  function reSizeCanvas() {
    app.canvas.width = app.canvas.offsetWidth;
    app.canvas.height = app.canvas.offsetHeight;
  }

  // 初始化工具栏
  function toolbarinit() {
    // 重新打开文件
    document.getElementsByClassName("reupload")[0].addEventListener("click", () => {
      document.getElementById("fileReader").click();
      document.getElementsByClassName("refresh")[0].click();
    }, true);
    // 移动
    document.getElementsByClassName("move")[0].addEventListener("click", function () {
      app.moseStatus = "move";
      app.canvas.style = "cursor:move";
    }, true);
    // 选区
    document.getElementsByClassName("select")[0].addEventListener("click", function () {
      app.moseStatus = "select";
      app.canvas.style = "cursor:defaultf";
    }, true);
    // 左旋转
    document.getElementsByClassName("rotateL")[0].addEventListener("mousedown", () => rotateImage(-1), true);
    // 右旋转
    document.getElementsByClassName("rotateR")[0].addEventListener("mousedown", () => rotateImage(1), true);
    // 放大
    document.getElementsByClassName("enlarge")[0].addEventListener("mousedown", () => zoomImage(0.01), true);
    // 缩小
    document.getElementsByClassName("narrow")[0].addEventListener("mousedown", () => zoomImage(-0.01), true);
    // 提交
    document.getElementsByClassName("submit")[0].addEventListener("click", () => getRectImage(), false);
    // 文件信息
    document.getElementsByClassName("info")[0].addEventListener("click", () => {
      alert(`文件信息\n
      文件名：${app.file.name}\n
      文件类型：${app.file.type}\n
      文件大小：${app.file.size}B\n
      修改时间：${new Date(app.file.lastModified).toLocaleString()}\n`);
    }, false);
    // 重置
    document.getElementsByClassName("refresh")[0].addEventListener("click", () => {
      app.imgPos.x = - app.image.width / 2;
      app.imgPos.y = - app.image.height / 2;
      app.ratio = 1;
      app.rotate = 0;
      app.selectStatus = 0;
      app.selected = { x: 0, y: 0, w: 0, h: 0 }
    }, false);
    // 重制canvas大小
    window.addEventListener("resize", flashCanvas, false);


    // 处理以上事务
    app.canvas.addEventListener("mousedown", function (e) {
      const mousePos = { x: e.layerX, y: e.layerY };
      switch (app.moseStatus) {
        // 移动图片
        case "move": {
          const foo = function (e) {
            const mouseCurrentPos = { x: e.layerX, y: e.layerY };
            app.imgPos.x += mouseCurrentPos.x - mousePos.x;
            app.imgPos.y += mouseCurrentPos.y - mousePos.y;
            mousePos.x = mouseCurrentPos.x;
            mousePos.y = mouseCurrentPos.y;
            flashCanvas();
          }
          app.selectStatus = 0;
          app.canvas.addEventListener("mousemove", foo, {}, false);
          app.canvas.addEventListener("mouseup", () => {
            app.canvas.removeEventListener("mousemove", foo, false);
          }, { once: true }, false);
          break;
        }

        // 创建图片的选区
        case "select": {
          app.selectStatus = 1;
          const clipReact = document.getElementsByClassName("clip")[0];
          app.selected.x = mousePos.x = e.clientX;
          app.selected.y = mousePos.y = e.clientY;
          app.selected.w = 0;
          app.selected.h = 0;
          flashCanvas();

          const foo = function (e) {
            const cMousePos = { x: e.clientX, y: e.clientY };
            app.selected.w += cMousePos.x - mousePos.x;
            app.selected.h += cMousePos.y - mousePos.y;
            mousePos.x = cMousePos.x;
            mousePos.y = cMousePos.y;
            app.selectStatus = 2;
            flashCanvas();
          }
          const foo1 = function () {
            app.canvas.removeEventListener("mousemove", foo, false);
            clipReact.removeEventListener("mousemove", foo, false);
          }
          clipReact.addEventListener("mouseup", foo1, { once: 1 }, false);
          clipReact.addEventListener("mousemove", foo, {}, false);
          app.canvas.addEventListener("mouseup", foo1, { once: true }, false);
          app.canvas.addEventListener("mousemove", foo, {}, false);
          break;
        }
        default: {
          app.selectStatus = 0;
        }
      }
    }, false);

    // 选区移动
    const clipReact = document.getElementsByClassName("clip")[0];
    clipReact.addEventListener("mousedown", function (e) {
      const mousePos = { x: e.clientX, y: e.clientY };
      const foo = function (e) {
        const cMousePos = { x: e.clientX, y: e.clientY };
        app.selected.x += cMousePos.x - mousePos.x;
        app.selected.y += cMousePos.y - mousePos.y;
        mousePos.x = cMousePos.x;
        mousePos.y = cMousePos.y;
        flashCanvas();
      }
      clipReact.addEventListener("mousemove", foo, false);
      clipReact.addEventListener("mouseup", () => {
        clipReact.removeEventListener("mousemove", foo, false);
      }, { once: true });
    }, false)
  }



  // 旋转图像
  function rotateImage(x) {
    let tiemr = setInterval(() => {
      app.rotate += x;
      flashCanvas();
    }, 1000 / 90);
    this.addEventListener("mouseup", function () {
      clearInterval(tiemr);
    }, { once: true });
  }

  // 缩放图片
  function zoomImage(x) {
    let tiemr = setInterval(() => {
      const ratio = app.ratio;
      app.ratio += x;
      app.ratio = app.ratio <= 0.2 ? 0.2 : app.ratio;
      app.ratio = app.ratio >= 8 ? 8 : app.ratio;
      // 缩放后重新确定起始位置
      app.imgPos.x += (ratio - app.ratio) * app.image.width / 2;
      app.imgPos.y += (ratio - app.ratio) * app.image.height / 2;
      flashCanvas();
    }, 1000 / 90);
    this.addEventListener("mouseup", function () {
      clearInterval(tiemr);
    }, { once: true });
  }


  // 自动计算图片的宽高 缩放到宽/高正合适的大小
  function autoFixedImage() {
    const iw = app.image.width;
    const ih = app.image.height;
    const cw = app.canvas.width;
    const ch = app.canvas.height;
    const ratiox = iw / cw;
    const ratioy = ih / ch;

    if (ratiox > 1) {   //图片超过canvas的宽度
      ratiox = 1 / ratiox;  // 图片的缩小比例
    }
    if (ratioy > 1) {  // 图片超过canvas的高度
      ratioy = 1 / ratioy;
    }
    app.ratio = Math.max(ratiox, ratioy);
  }

  // 计算canvas中心位置并且缓存
  function getCanvasCenter() {
    if (getCanvasCenter.entity) {
      return getCanvasCenter.entity;
    } else {
      const w = app.canvas.width;
      const h = app.canvas.height;
      const entity = {};
      entity.x = w / 2;
      entity.y = h / 2;
      getCanvasCenter.entity = entity;
      return entity;
    }
  }

  // 获取新的图片
  function getRectImage() {
    const [x, y, w, h] = checkRect();
    // 确保选区非空
    if (w > 0 && y > 0 && app.selectStatus !== 0) {
      const a = document.createElement("a");
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const image = app.ctx.getImageData(x, y, w, h);

      canvas.width = image.width;
      canvas.height = image.height;
      ctx.putImageData(image, 0, 0);
      a.download = "download";
      a.href = canvas.toDataURL();
      a.click();
    } else {
      alert(`未选取图片:Rect ${JSON.stringify(app.selected)}   status ${app.selectStatus}`);
      console.log(app.selected, app.selectStatus);
    }
  }

  // 确保选取不会超出边界
  function checkRect() {
    const pl = app.canvas.offsetLeft;  // 边距
    const pt = app.canvas.offsetTop;
    const pw = app.canvas.offsetWidth;
    const ph = app.canvas.offsetHeight;

    let x = app.selected.x;
    let y = app.selected.y;
    let w = app.selected.w;
    let h = app.selected.h;

    if (x - pl < 0) x = pl;  // 左边出屏幕
    if (y - pt < 0) y = pt;  // 上边出屏幕
    if (x + w >= pl + pw) x = pl + pw - w - 1;  // 右边出屏幕  
    if (y + h >= pt + ph) y = pt + ph - h - 1;  // 下边出屏幕

    return [x, y, w, h];
  }



  // 刷新canvas绘制的内容
  function flashCanvas() {
    const clipReact = document.getElementsByClassName("clip")[0];
    const pos = getCanvasCenter();
    reSizeCanvas();

    // 重置中心位置、缩放比例、旋转
    app.ctx.translate(pos.x, pos.y);
    app.ctx.rotate(app.rotate * Math.PI / 180);   // 设置图片旋转的角度  角度转弧度
    // app.ctx.scale(app.ratio, app.ratio);   // 这个用于缩放画布的大小此处需要缩放图片的小大

    // 检查蚂蚁线位置
    const [x, y, w, h] = checkRect();

    // 绘制蚂蚁线
    if (app.moseStatus === "select") {
      clipReact.classList.remove("hide");
      clipReact.style.left = x + "px";
      clipReact.style.top = y + "px";
      clipReact.style.width = w + "px";
      clipReact.style.height = h + "px";
    } else {
      clipReact.classList.add("hide");
    }

    // 绘制canvas内容
    const iw = app.image.width * app.ratio;
    const ih = app.image.height * app.ratio;
    // 5参数 - 图片 绘制起始（x,y),绘制宽高
    // 9参数 - 图片 截取位置(x,y) 截取宽高(w,h)  绘制起始（x,y) 绘制宽高(w,h)
    app.ctx.drawImage(app.image, 0, 0, app.image.width, app.image.height, app.imgPos.x, app.imgPos.y, iw, ih);
  }


  // 创建全局对象用于保存应用程序的数据
  const app = (function () {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    return {
      loadFile: "false",   // 是否加载图像
      file: {},   // 文件信息
      image: undefined,   // 保存加载的图片数据
      canvas: canvas,
      ctx: ctx,    // canvas执行上下文
      rotate: 0,   // 旋转角度   这里是角度  实际canvas使用的是弧度
      ratio: 1,    // 缩放比例
      moseStatus: "move",
      selectStatus: 0,  // 选区状态：0未选取   1鼠标按下   2鼠标移动  3鼠标松开（然后转1）
      selected: { x: 0, y: 0, w: 0, h: 0 },   // 选择区域
      imgPos: { x: 0, y: 0 },
    }
  })();

  fileReader();
  fileSelect();
  toolbarinit();

  window.app = app;
}


