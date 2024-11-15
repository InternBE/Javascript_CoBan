// // var array = ['JavaScript', 'PHP', 'Ruby'];

// // var [a, b, ...rest] = array;

// // console.log(a);
// // console.log(rest);

// // var course = {
// //   name: 'JavaScript',
// //   price: 1000,
// //   image: 'image-address',
// //   children: {
// //     name: 'PHP',
// //   }
// // };

// // var { name:parentName, children:{name} } = course;

// // console.log(parentName);
// // console.log(children);
// // //rest parameter
// // function logger(...params) {
// //   console.log(params);
// // }

// // console.log(logger(1, 2, 3, 4, 5, 6, 7, 8));

// // function logger([a, b, ...rest]) {
// //   console.log(a);
// //   console.log(b);
// //   console.log(rest);
// // }

// // logger([2, 6, 12, 3, 4, 4]);
// // //Spread
// // var array1 = ['JavaScript', 'Ruby', 'PHP'];
// // var array2 = ['ReactJS', 'Dart'];
// // var array3 = [...array2, ...array1];
// // console.log(array3);
// // //
// // var array = ['JavaScript', 'PHP', 'Ruby'];

// // function logger(...rest) {
// //   for (var i = 0; i < rest.length; i++) {
// //     console.log(rest[i]);
// //   }
// // }

// // logger(...array);

// // function highlight([first, ...strings],...values) {
// //   return values.reduce(
// //     (acc, curr) => [...acc, `<span>${curr}</span>`,strings.shift()],
// //     [first]
// //   );
// // }

// // var brand = 'F8';
// // var course = 'JavaScript';
// // const html = highlight`Học lập trình ${course} tại ${brand}!`;
// // console.log(html);

// // import logger from './logger.js';

// // import * as constants from './constants.js';
// // console.log(constants);
// // const obj = {
// //   name: 'Alice',
// //   cat: {
// //       name: 'Dinah',
// //       cat2: {
// //           name: 'Dinah 2',
// //           cat3: {
// //               name: 'Dinah 3'
// //           }
// //       }
// //   }
// // };
// // // optinal channing:?
// // if (obj.cat?.cat2?.cat3) {
// //   console.log(obj.cat.cat2.cat3.name);
// // }


// // var users = [
// //   {
// //       id: 1,
// //       name: 'Kien Dam'
// //   },
// //   {
// //       id: 2,
// //       name: 'Son Dang'
// //   }
// // ];
// // var comments = [
// //   {
// //       id: 1,
// //       user_id: 1,
// //       content: 'Anh Sơn chưa ra video :('
// //   },
// //   {
// //       id: 2,
// //       user_id: 2,
// //       content: 'Ra rồi nhé :('
// //   }
// // ];
// // function getComments() {
// //   return new Promise(function(resolve) {
// //     setTimeout(function() {
// //       resolve(comments);
// //     }, 1000);
// //   });
// // }
// // getComments()
// //   .then(function(comments) {
// //     var userIds = comments.map(function(comment) {
// //       return comment.user_id;
// //     });

// //     return getUsersByIds(userIds)
// //       .then(function(users) {
// //         return {
// //           users: users,
// //           comments: comments
// //         };
// //       });
// //   })
// //   .then(function(data) {
   
// //     var commentBlock = document.getElementById("comment-block");
// //     var html = '';
// //     data.comments.forEach(function(comment) {
// //       var user = data.users.find(function(user) {
// //         return user.id === comment.user_id;
// //       });
// //       html += `<div>${user.name}: ${comment.content}</div>`;
// //   });

// //   // Gán nội dung HTML đã tạo cho phần tử commentBlock
// //   commentBlock.innerHTML = html;
// //   });
// //   function getUsersByIds(userIds) {
// //     return new Promise(function(resolve) {
// //       var result = users.filter(function(user) {
// //         return userIds.includes(user.id);
// //       });
// //       setTimeout(function() {
// //         resolve(result);
// //       },1000  );
// //     }, 1000);
// //   }

// // Khái niệm fetch
// // fetch là một API của JavaScript dùng để thực hiện các yêu cầu HTTP (GET, POST, PUT, DELETE...) 
// // đến các máy chủ từ xa, cho phép tải tài nguyên hoặc gửi dữ liệu lên server. fetch trả về một Promise và hoạt 
// // động bất đồng bộ, giúp tránh chặn luồng chính của ứng dụng khi đang xử lý các yêu cầu mạng.
// // var postApi = 'https://jsonplaceholder.typicode.com/posts';

// // fetch(postApi)
// //   .then(function(response) {
// //     return response.json();
// //   })
// //   .then(function(posts) {
// //     var htmls = posts.map(function(post) {
// //       return `
// //         <li>
// //           <h2>${post.title}</h2>
// //           <p>${post.body}</p>
// //         </li>`;
// //     });

// //     var html = htmls.join('');
// //     document.getElementById('post-block').innerHTML = html;
// //   })
// //   .catch(function(error) {
// //     console.error('Có lỗi xảy ra:', error);
// //   });



// // GET
// // Mục đích: Lấy dữ liệu từ server.
// // POST
// // Mục đích: Gửi dữ liệu mới đến server để tạo tài nguyên mới.
// //  PUT
// // Mục đích: Cập nhật toàn bộ tài nguyên hiện có trên server.
// //  DELETE
// // Mục đích: Xóa tài nguyên khỏi server.
// // var courseApi = 'http://localhost:3000/posts';
// // fetch(courseApi)
// //     .then(function(response) {
// //       return response.json();
// //     })
// //     .then(function(courses) {
// //       console.log(courses);
// //     });





// // var courseApi = 'http://localhost:3000/courses';
// // function start() {
// //   getCourses(renderCourses);
// //   handleCreateForm();
// // }
// // start();

// // // Hàm lấy danh sách các khóa học
// // function getCourses(callback) {
// //   fetch(courseApi)
// //     .then(function(response) {
// //       return response.json();
// //     })
// //     .then(callback);
// // }

// // // Hàm tạo khóa học mới
// // function createCourse(data, callback) {
// //   var options = {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify(data)
// //   };

// //   fetch(courseApi, options)
// //     .then(function(response) {
// //       return response.json();
// //     })
// //     .then(callback);
// // }

// // // Hàm xóa khóa học
// // function deleteCourse(id) {
// //   var options = {
// //     method: 'DELETE',
// //     headers: {
// //       'Content-Type': 'application/json'
// //     }
// //   };

// //   fetch(courseApi + '/' + id, options)
// //     .then(function(response) {
// //       if (!response.ok) {
// //         throw new Error('Không thể xóa khóa học.');
// //       }
// //       return response.json();
// //     })
// //     .then(function() {
// //       var courseItem= document.querySelector('.course-item-' + id) 
// //       if(courseItem)
// //       {
// //         courseItem.remove();
// //       }
// //     })
// //     .catch(function(error) {
// //       console.error('Có lỗi khi xóa khóa học:', error);
// //     });
// // }




// // // Hàm hiển thị danh sách các khóa học
// // function renderCourses(courses) {
// //   var listCoursesBlock = document.querySelector('#list-courses');


// //   var htmls = courses.map(function(course) {
// //     console.log('Course ID:', course.id);  // Kiểm tra ID khóa học
// //     return `
// //       <li class="course-item-${course.id}">
// //         <h4>${course.title}</h4>
// //         <p>${course.author}</p>
// //         <button data-id="${course.id}">Xóa</button>
// //       </li>
// //     `;
// //   });

// //   listCoursesBlock.innerHTML = htmls.join('');
  
// //   // Thêm sự kiện cho các nút Xóa
// //   var deleteButtons = listCoursesBlock.querySelectorAll('button');
// //   deleteButtons.forEach(function(button) {
// //     button.addEventListener('click', function() {
// //       var id = button.getAttribute('data-id');
// //       deleteCourse(id);
// //     });
// //   });
// // }

// // // Hàm xử lý form tạo khóa học
// // function handleCreateForm() {
// //   var createBtn = document.querySelector('#create');
// //   createBtn.onclick = function(event) {
// //     event.preventDefault();  // Ngăn không cho form gửi đi

// //     // Lấy dữ liệu từ form
// //     var title = document.querySelector('input[name="title"]').value;
// //     var author = document.querySelector('input[name="author"]').value;

// //     // Kiểm tra xem các trường có giá trị hợp lệ không
// //     if (title && author) {
// //       var formData = {
// //         title: title,
// //         author: author
// //       };

// //       createCourse(formData, function() {
// //         getCourses(renderCourses);  // Làm mới danh sách khóa học sau khi tạo mới
// //       });
// //     } else {
// //       console.error('Vui lòng nhập đầy đủ thông tin!');
// //     }
// //   };
// // }



// // Phương thức reduce trong JavaScript là một phương thức của mảng, giúp "rút gọn" mảng thành một giá trị duy 
// // nhất thông qua việc lặp qua tất cả các phần tử của mảng và áp dụng một hàm để tính toán một giá trị kết quả.

// // Cú pháp của reduce:
// // array.reduce(callback, initialValue);
// // callback: Hàm được gọi cho mỗi phần tử trong mảng, với 4 tham số:
// // accumulator (tích lũy): Đây là giá trị được trả về từ lần gọi trước của hàm, 
// // hoặc giá trị mặc định nếu có initialValue.
// // currentValue (giá trị hiện tại): Phần tử hiện tại trong mảng.
// // currentIndex (tùy chọn): Vị trí của phần tử hiện tại trong mảng.
// // array (tùy chọn): Mảng gốc mà phương thức reduce đang thao tác.
// // initialValue (tùy chọn): Giá trị ban đầu của accumulator (tích lũy). 
// // Nếu không cung cấp, thì phần tử đầu tiên trong mảng sẽ được sử dụng làm giá trị khởi tạo.
// // Logic hoạt động của reduce:
// // Hàm callback được gọi cho mỗi phần tử của mảng, bắt đầu từ phần tử đầu tiên.
// // accumulator sẽ lưu trữ giá trị tính toán (tích lũy) qua mỗi lần gọi hàm callback.
// // Hàm callback sẽ trả về giá trị mới cho accumulator ở mỗi lần lặp, và giá trị này sẽ được truyền vào lần 
// // gọi kế tiếp.
// // Khi mảng đã được duyệt hết, reduce trả về giá trị cuối cùng của accumulator.

// //Ví dụ
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);  // Kết quả là 15


// // accumulator bắt đầu với giá trị 0 (do initialValue là 0).
// // Sau đó, hàm callback sẽ cộng dồn các giá trị của currentValue vào accumulator.
// // Lần lượt:
// // Lần 1: accumulator = 0, currentValue = 1 => accumulator = 1
// // Lần 2: accumulator = 1, currentValue = 2 => accumulator = 3
// // Lần 3: accumulator = 3, currentValue = 3 => accumulator = 6
// // Lần 4: accumulator = 6, currentValue = 4 => accumulator = 10
// // Lần 5: accumulator = 10, currentValue = 5 => accumulator = 15
// // Kết quả cuối cùng là 15.
