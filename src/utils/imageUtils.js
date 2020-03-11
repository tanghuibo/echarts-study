export default {
  // 保存成图片 支持 png,jpg
  saveToImg(canvas, type = 'png') {
    return canvas.toDataURL(`image/${type}`);
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
