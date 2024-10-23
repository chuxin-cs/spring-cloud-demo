export function customSort(data, targetUserId) {
  // 分离 userId 为2的对象
  const userId2Items = data.filter((item) => item.userId === targetUserId);
  const otherItems = data.filter((item) => item.userId !== targetUserId);

  // 根据 userType 排序其他对象
  otherItems.sort((a, b) => a.userType - b.userType);

  // 合并排序后的数组
  return userId2Items.concat(otherItems);
}

export function debounce(func, delay) {
  let timer; // 定时器
  return function () {
    let context = this; // 记录 this 值,防止在回调函数中丢失
    let args = arguments; // 函数参数
    //如果定时器存在，则清除定时器(如果没有,也没必要进行处理)
    timer ? clearTimeout(timer) : null;
    timer = setTimeout(() => {
      // 防止 this 值变为 window
      func.apply(context, args);
    }, delay);
  };
}
