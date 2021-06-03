const cont = document.querySelector('.cont');
const elsArr = [].slice.call(document.querySelectorAll('.el'));
const closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(() => {
  cont.classList.remove('s--inactive');
}, 200);

elsArr.forEach(el => {
  el.addEventListener('click', function click() {
    if (this.classList.contains('s--active')) return;
    cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

closeBtnsArr.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');

    const sessionRoot = Array.from(
      document.getElementsByClassName('session-root'),
    );
    sessionRoot.forEach(current => {
      const cur = current;
      cur.innerHTML = '';
    });
  });
});
