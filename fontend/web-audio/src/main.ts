import loader from './loader';

loader().then(res => {
  console.log('资源加载完成');
  console.log(res);

  document.addEventListener('click', () => {
    res.play('start');
  });

  document.addEventListener('mousemove', () => res.play('move'));
});
