//index.js

Page({
  data: {
    inputVal:'',
    msgData:[
      // { msg: "asdfgh" },
      // { msg: "assdfsdffgh" },
      // { msg: "as214dfgh" }
    ]
  },

  changeInputVal(ev) {
    // console.log(ev);
    this.setData({
      inputVal:ev.detail.value,
    });
  },

  addMsg(){
    // console.log('add a msg')
    // console.log(this.data.inputVal)
    // this.data.msgData.push({
    //   msg:this.data.inputVal
    // });
    var list = this.data.msgData;
    list.push({
      msg: this.data.inputVal
    });
    this.setData({
      msgData:list,
      inputVal:'',
    });
  },

  delMsg(ev){
    // console.log('delete');
    var n = ev.target.dataset.index;
    var list = this.data.msgData;
    list.splice(n,1);

    this.setData({
      msgData:list
    });
  },

})
