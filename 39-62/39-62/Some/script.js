
// ==============For in JavaScript====================

/* Cú pháp
  for (khởi_tạo; điều_kiện; cập_nhật) {
    // Mã cần thực hiện mỗi lần lặp
  }
*/

for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  // Kết quả là 0 1 2 3 4
  
  
  
  // ==============Một số lỗi làm cho vòng lặp trở nên vô hạn=================
  
  
  /* 
  ======Điều kiện luôn đúng=====
    for (let i = 0; i < 10; i++) {
      console.log(i);
  }
  
  =====Thiếu biểu thức cập nhật hoặc biểu thức không phù hợp====
  for (let i = 0; i < 5; i++) {
      console.log(i);
  }
  
  =====Biểu thức cập nhật làm thay đổi biến đếm sai hướng=====
  for (let i = 3; i > 0; i--) {
      console.log(i);
  }
  
  
  =====Điều kiện dừng phụ thuộc vào biến bên ngoài vòng lặp=====
  let stop = false;
  
  for (let i = 0; !stop; i++) {
  if(i=1){
  stop = true;}
      console.log(i);
  }
  
  =====Sử dụng kiểu dữ liệu không phù hợp cho biến đếm=====
  for (let i = 0.1; i < 1; i += 0.1) {
    console.log(i.toFixed(1));
  }
  
  */
  
  for (let i = 0.1; i < 1; i += 0.1) {
    console.log('Count: ',i.toFixed(1));
  }