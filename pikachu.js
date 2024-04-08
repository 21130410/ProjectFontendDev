// Mảng chứa các hình ảnh pokemon
const pokemonImages = [
    "pokemon1.jpg",
    "pokemon2.jpg",
    "pokemon3.jpg",
    "pokemon4.jpg",
    "pokemon4.jpg","pokemon4.jpg","pokemon4.jpg","pokemon4.jpg","pokemon4.jpg","pokemon4.jpg"
   
  ];
// Biến lưu trữ điểm số
let score = 0;

// Biến lưu trữ trạng thái game (đang chơi hay kết thúc)
let isPlaying = false;

// Hàm khởi tạo game
function initGame() {
    // Xáo trộn mảng hình ảnh Pikachu
    pokemonImages.sort(() => Math.random() - 0.5);

    // Tạo các thẻ HTML cho các hình ảnh Pikachu
    const imageEls = pokemonImages.map((image) => {
        const imageEl = document.createElement("img");
        imageEl.src = `images/${image}`;
        imageEl.classList.add("pikachu-image");
        return imageEl;
    });

   
    // Thêm các thẻ HTML vào khu vực hiển thị hình ảnh
    const gameBoardEl = document.querySelector(".game-board");
    gameBoardEl.innerHTML = "";
    imageEls.forEach((imageEl) => gameBoardEl.appendChild(imageEl));

    // Thêm sự kiện click cho các hình ảnh Pikachu
    imageEls.forEach((imageEl) => {
        imageEl.addEventListener("click", handleClickImage);
    });

    // Cập nhật điểm số
    updateScore();

    // Bắt đầu game
    isPlaying = true;
}

// Hàm xử lý sự kiện click vào hình ảnh Pikachu
function handleClickImage(event) {
    // Kiểm tra game đang chơi hay không
    if (!isPlaying) {
        return;
    }

    // Lấy thông tin về hình ảnh được click
    const imageEl = event.target;
    const imageSrc = imageEl.src;

    // ...

    // Xử lý logic game
    // ...

    // Cập nhật giao diện game
    // ...
}

// Hàm cập nhật điểm số
function updateScore() {
    // Hiển thị điểm số lên bảng điểm
    const scoreBoardEl = document.querySelector(".score-board");
    scoreBoardEl.innerHTML = `Điểm: ${score}`;
}

// Khởi tạo game khi trang web được tải
initGame();