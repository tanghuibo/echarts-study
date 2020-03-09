export default {
  // 保存成png格式的图片
  saveAsPNG(canvas) {
    return canvas.toDataURL("image/png");
  },

  // 保存成jpg格式的图片
  saveAsJPG(canvas) {
    return canvas.toDataURL("image/jpeg");
  },

  // 保存成bmp格式的图片  目前浏览器支持性不好
  saveAsBMP(canvas) {
    return canvas.toDataURL("image/bmp");
  },
  /**
   * @author 下载
   * @param {String} url 需要下载的文件地址
   * */
  download(url) {
    var oA = document.createElement("a");
    oA.download = ""; // 设置下载的文件名，默认是'下载'
    oA.href = url;
    document.body.appendChild(oA);
    oA.click();
    oA.remove(); // 下载之后把创建的元素删除
  }
};
