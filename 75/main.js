// Lấy phần tử div với class "box box-2"
const box = document.querySelector('.box');

// Thêm lớp 'active' vào phần tử khi trang được tải
box.classList.add('active');  // Lớp 'active' sẽ làm nền của phần tử chuyển sang màu xanh lá

// Kiểm tra xem phần tử có lớp 'box-2' không
if (box.classList.contains('box-2')) {
    console.log('Phần tử có lớp "box-2"');
}

// Tự động thay đổi lớp sau 3 giây
setTimeout(() => {
  box.classList.remove('box-2');  // Xóa lớp 'box-2'
  box.classList.add('highlight'); // Thêm lớp 'highlight' (viền vàng)
}, 3000);

// Bật/tắt lớp 'active' mỗi khi người dùng nhấn vào phần tử
box.addEventListener('click', () => {
  box.classList.toggle('active'); // Nếu lớp 'active' có, nó sẽ bị xóa; nếu không có, lớp sẽ được thêm vào
});
