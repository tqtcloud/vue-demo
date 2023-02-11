import { ElNotification,ElMessageBox  } from 'element-plus'
import nProgress from 'nprogress';
// 消息提示
export function toast(message,type = "success",dangerouslyUseHTMLString = 'false'){
    ElNotification({
        message,
        type,
        duration:1500,
        dangerouslyUseHTMLString
    })
}

export function showModal(cntent = "提示内容",type = "warning",title = ""){
    return ElMessageBox.confirm(
        cntent,
        title,
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          duration:1500,
          type,
        }
      )
}

// 显示全屏loading 
export function showFullloading(){
  nProgress.start();
}

// 隐藏全屏loading 
export function hideFulloading(){
  nProgress.done();
}