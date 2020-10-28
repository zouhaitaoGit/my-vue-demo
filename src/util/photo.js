
export default class Album {
  constructor (className, box) {
    this.init(className)
    this.startRotate(document.querySelector(box))
  }
  init (className) {
    let eles = document.querySelectorAll(className)
    let baseDeg = 360 / eles.length;
    // ES6语法，类数组借用数组方法
    [...eles].forEach((item, index) => {
      this.setStyle(item, `rotateY(${index * baseDeg}deg) translateZ(300px)`)
    })
  }
  startRotate (ele) {
    /*
      定时器旋转相册
    */
    let i = 0
    setInterval(() => {
      this.setStyle(ele, `rotateX(20deg) rotateY(${i++}deg)`)
    }, 500)
  }
  setStyle (ele, style) {
    ele.style.transform = style
  }
}
