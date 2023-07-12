function checkform(){ 
    if(document.getElementById('kw').value.length==0){    
        alert('请输入视频链接地址');
        return false;
    }
    if(document.getElementById('kw').value=="请输入视频链接地址"){    
        alert('请输入视频链接地址');
        return false;
    }
}