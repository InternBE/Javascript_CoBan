// 1. Ví dụ về xử lý đồng bộ (Sync)
console.log("Bắt đầu công việc đồng bộ");
for (let i = 1; i <= 3; i++) {
    // Vòng lặp thực hiện các công việc đồng bộ, sẽ được hoàn thành tuần tự
    console.log(`Thực hiện công việc đồng bộ ${i}`);
}
console.log("Hoàn thành công việc đồng bộ");

// 2. Ví dụ về xử lý bất đồng bộ (Async) với setTimeout
console.log("\nBắt đầu công việc bất đồng bộ");
setTimeout(() => {
    // setTimeout tạo ra một tác vụ bất đồng bộ hoàn thành sau 2 giây
    console.log("Công việc bất đồng bộ 1 hoàn thành sau 2 giây");
}, 2000);
setTimeout(() => {
    // Tác vụ bất đồng bộ khác hoàn thành sau 1 giây
    console.log("Công việc bất đồng bộ 2 hoàn thành sau 1 giây");
}, 1000);
console.log("Công việc tiếp tục trong khi chờ bất đồng bộ");
// Chương trình tiếp tục chạy trong khi chờ các setTimeout hoàn thành

// 3. "Nỗi đau" callback hell
function doTask1(callback) {
    setTimeout(() => {
        console.log("Task 1 hoàn thành");
        callback(); // Gọi hàm callback để tiếp tục đến task tiếp theo
    }, 1000);
}

function doTask2(callback) {
    setTimeout(() => {
        console.log("Task 2 hoàn thành");
        callback();
    }, 2000);
}

function doTask3(callback) {
    setTimeout(() => {
        console.log("Task 3 hoàn thành");
        callback();
    }, 1500);
}

console.log("\nVí dụ về callback hell:");
doTask1(() => {
    doTask2(() => {
        doTask3(() => {
            console.log("Tất cả các task đã hoàn thành (callback hell)");
            // Các callback lồng nhau khiến mã khó đọc và duy trì, tạo ra "callback hell"
        });
    });
});

// 4. Cách hoạt động và lý thuyết về Promise
console.log("\nLý thuyết về Promise:");
const examplePromise = new Promise((resolve, reject) => {
    let success = true; // Đặt success là true để kiểm tra resolve; đổi thành false sẽ gọi reject
    if (success) {
        resolve("Promise đã được hoàn thành thành công!");
    } else {
        reject("Promise bị từ chối.");
    }
});

examplePromise
    .then(result => {
        console.log("Kết quả của Promise:", result);
        return "Kết quả từ then tiếp theo"; // Trả về một giá trị cho then tiếp theo
    })
    .then(result2 => {
        console.log("Kết quả tiếp theo:", result2);
    })
    .catch(error => {
        console.error("Lỗi của Promise:", error); // Xử lý lỗi nếu promise bị từ chối
    })
    .finally(() => {
        console.log("Promise đã kết thúc (dù thành công hay thất bại)");
    });

// 5. Thực hành với Promise chain
function createPromise(taskName, delay, shouldReject = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(`Lỗi từ ${taskName}`);
            } else {
                resolve(`${taskName} hoàn thành sau ${delay}ms`);
            }
        }, delay);
    });
}

console.log("\nThực hành với Promise chain:");
createPromise("Task A", 1000)
    .then(result => {
        console.log(result);
        return createPromise("Task B", 2000); // Tiếp tục chain với Task B
    })
    .then(result => {
        console.log(result);
        return createPromise("Task C", 1500); // Tiếp tục chain với Task C
    })
    .then(result => {
        console.log(result);
        console.log("Tất cả các task trong Promise chain đã hoàn thành");
    })
    .catch(error => {
        console.error("Lỗi trong Promise chain:", error); // Bắt lỗi nếu bất kỳ promise nào bị reject
    });

// 6. Thực hành với Promise.all()
console.log("\nThực hành với Promise.all:");
const promise1 = createPromise("Task 1", 1000);
const promise2 = createPromise("Task 2", 2000);
const promise3 = createPromise("Task 3", 1500);
const promise4 = createPromise("Task 4 (lỗi)", 1200, true); // Sẽ bị reject

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("Kết quả của Promise.all:", results); // Chỉ in kết quả nếu tất cả promise đều thành công
    })
    .catch(error => {
        console.error("Lỗi từ Promise.all:", error); // Nếu một trong các promise bị reject, sẽ vào catch
    });

Promise.all([promise1, promise4, promise3])
    .then(results => {
        console.log("Kết quả của Promise.all (với lỗi):", results);
    })
    .catch(error => {
        console.error("Lỗi từ Promise.all (có lỗi):", error); // Bắt lỗi khi có bất kỳ promise nào bị reject
    });

// 7. Sử dụng Promise.race()
console.log("\nThực hành với Promise.race:");
Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log("Kết quả của Promise.race:", result); // In kết quả của promise hoàn thành đầu tiên
    })
    .catch(error => {
        console.error("Lỗi từ Promise.race:", error)}); // Nếu promise đầu tiên bị reject, vào catch

// 8. Sử dụng async/await để xử lý bất đồng bộ
console.log("\nSử dụng async/await:");
async function runAsyncTasks() {
    try {
        const resultA = await createPromise("Task X", 1000); // Chờ Task X hoàn thành
        console.log(resultA);
        const resultB = await createPromise("Task Y", 2000); // Chờ Task Y hoàn thành
        console.log(resultB);
        const resultC = await createPromise("Task Z", 1500); // Chờ Task Z hoàn thành
        console.log(resultC);
        console.log("Tất cả các task trong async/await đã hoàn thành");
    } catch (error) {
        console.error("Lỗi trong async/await:", error); // Bắt lỗi nếu có promise bị reject
    } finally {
        console.log("Kết thúc async/await"); // Được thực thi dù thành công hay lỗi
    }
}

runAsyncTasks();
