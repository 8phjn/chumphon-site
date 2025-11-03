// หน้า Login
function login() {
  const user = document.getElementById("username")?.value;
  const pass = document.getElementById("password")?.value;
  if (user === "admin" && pass === "1234") {
    window.location.href = "chumporn.html";
  } else {
    alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!");
  }
}

// หน้าแสดงสถานที่
function openDetail(name) {
  window.location.href = "detail.html?place=" + encodeURIComponent(name);
}

// หน้าแสดงรายละเอียด
const params = new URLSearchParams(window.location.search);
const place = params.get('place');

const data = {
  "เกาะร้านเป็ด": {
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Koh_Ran_Pet_Chumphon.jpg",
    desc: "เกาะร้านเป็ดเป็นจุดดำน้ำที่สวยงามของจังหวัดชุมพร มีแนวปะการังและปลาสีสันสดใส"
  },
  "หาดทรายรี": {
    img: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sairee_Beach_Chumphon.jpg",
    desc: "หาดทรายรีเป็นชายหาดยอดนิยมของชุมพร เหมาะสำหรับเล่นน้ำและชมพระอาทิตย์ตก"
  },
  "น้ำตกหงาว": {
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Namtok_Ngao_Chumphon.jpg",
    desc: "น้ำตกหงาวมีน้ำตกหลายชั้น มีธรรมชาติร่มรื่นและเป็นที่พักผ่อนยอดนิยมของนักท่องเที่ยว"
  }
};

if (document.getElementById('title') && data[place]) {
  document.getElementById('title').textContent = place;
  document.getElementById('image').src = data[place].img;
  document.getElementById('desc').textContent = data[place].desc;
}

function goBack() {
  window.location.href = "chumporn.html";
}
