document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', () => {
    alert('ボタンがクリックされました！');
    btn.textContent = 'クリックされました';
    btn.style.backgroundColor = '#27ae60';
  });
});