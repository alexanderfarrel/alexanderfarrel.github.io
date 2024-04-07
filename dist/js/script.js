// custom alert
// window.alert = function (message) {
//   const alert = document.createElement("div");
//   const button = document.createElement("button");
//   alert.style.animation = "toleft 1s forwards";
//   button.innerText = "Okey!";
//   alert.classList.add("customAlert");
//   alert.setAttribute(
//     "style",
//     `
//   position: fixed;
//   display: flex;
//   top:80px;
//   right: -100%;
//   padding: 10px 80px;
//   background: blue;
//   flex-direction: column;
//   `
//   );
//   alert.innerHTML = `<span>${message}</span>`;
//   alert.appendChild(button);
//   button.addEventListener("click", () => {
//     alert.remove();
//   });
//   document.body.appendChild(alert);
// };
// document.querySelector(".contact h2").addEventListener("click", () => {
//   alert("anjay");
// });

//bot token
var telegram_bot_id = "6517589508:AAF9Z5-bi8inQWBrP6yP34pJJimuKXlXpnE";
//chat id
var chat_id = 6142917433;
var u_name, message;
var ready = function () {
  u_name = document.getElementById("name").value;
  message = document.getElementById("message").value;
  message = "Name: " + u_name + "\nMessage: " + message;
};
var sender = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    alert(
      "Berhasil Terkirim! \nPesan kamu akan otomatis terkirim ke telegram alex"
    );
  });
  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
  return false;
};

// Hamburger Menu
const hamburgerMenu = document.querySelector(".list input");
const nav = document.querySelector(".navlist");
const li1 = document.querySelector(".li1");
const li2 = document.querySelector(".li2");
const li3 = document.querySelector(".li3");
const li4 = document.querySelector(".li4");
const li5 = document.querySelector(".li5");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("slide");
  li1.classList.toggle("fadein");
  li2.classList.toggle("fadein");
  li3.classList.toggle("fadein");
  li4.classList.toggle("fadein");
  li5.classList.toggle("fadein");
});

// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector(".header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Card Slider
const wrapper = document.querySelector(".certificate article .wrapper");
const box = document.querySelector(".certificate article .wrapper .box");
const arrowBtns = document.querySelectorAll(".certificate article .wrapper i");
const firstCardWidth = document.querySelector(
  ".certificate article .wrapper .box .card"
).offsetWidth; //width card (430px)
const boxChildrens = [...box.children]; //spread operator
let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// let cardPerView = Math.round(box.offsetWidth / firstCardWidth); //3
let cardPerView = 4;

boxChildrens.slice(0, cardPerView).forEach((card) => {
  box.insertAdjacentHTML("beforeend", card.outerHTML);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    box.scrollLeft += firstCardWidth;
  } else if (e.key === "ArrowLeft") {
    box.scrollLeft -= firstCardWidth;
  }
});

//arrow button untuk scroll image
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    box.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  startX = e.pageX; //koordinat x titik pointer
  startScrollLeft = box.scrollLeft; //mencatat posisi element ul / box
};
const dragStop = () => {
  isDragging = false;
};
const dragging = (e) => {
  disabledArrow();
  if (!isDragging) return; //jika cursor tidak sedang menyeret card/ menekan card (mousedown) = return
  if (e.pageX - startX > 50) {
    box.scrollLeft -= firstCardWidth;
  } else if (e.pageX - startX < -50) {
    box.scrollLeft += firstCardWidth;
  }
  // box.scrollLeft = startScrollLeft - (e.pageX - startX);
};

// animasi akan berhenti ketika pointer dalam keadaan scroll box
const infiniteScroll = () => {
  disabledArrow();
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay(); //jika dalam pembungkus box sedang tidak dihover makan animasi akan dijalankan
};

const autoPlay = () => {
  if (!isAutoPlay) return;
  //autoplay box setiap 2 detik
  timeoutId = setTimeout(() => (box.scrollLeft += firstCardWidth), 2000);
  if (Math.ceil(box.scrollLeft) === box.scrollWidth - box.offsetWidth) {
    setTimeout(() => (box.scrollLeft = 0), 1500);
  }
};
autoPlay();

box.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);
box.addEventListener("mousemove", dragging);
box.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

const leftArrow = document.querySelectorAll(
  ".certificate article .wrapper #left"
);
const rightArrow = document.querySelectorAll(
  ".certificate article .wrapper #right"
);

function disabledArrow() {
  if (box.scrollLeft == box.scrollWidth - box.offsetWidth) {
    rightArrow.forEach((arrow) => {
      arrow.style.display = "none";
    });
  } else if (box.scrollLeft == 0) {
    leftArrow.forEach((arrow) => {
      arrow.style.display = "none";
    });
  } else {
    leftArrow.forEach((arrow) => {
      arrow.style.display = "block";
    });
    rightArrow.forEach((arrow) => {
      arrow.style.display = "block";
    });
  }
}

// image slider Hero
const input = document.querySelectorAll(".hero .sliders input");
const image1 = document.querySelector(".hero .sliders .img .i-1");
const image2 = document.querySelector(".hero .sliders .img .i-2");
const image3 = document.querySelector(".hero .sliders .img .i-3");

// varible untuk form
const inputForm = document.querySelectorAll(
  ".contact-form form .inputBox input"
);
const textareaForm = document.querySelector(
  ".contact-form form .inputBox textarea"
);
const spanInput = document.querySelectorAll(
  ".contact-form form .inputBox span"
);
const iInput = document.querySelectorAll(".contact-form form .inputBox i");

if (window.innerWidth > 760) {
  // hero sliders
  input[0].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(0px);`;
    image2.style.cssText = `transform: translateX(0px);`;
    image3.style.cssText = `transform: translateX(0px);`;
  });
  input[1].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(-${
      image1.offsetWidth + (12.5 / 100) * image1.offsetWidth
    }px);`;
    image2.style.cssText = `transform: translateX(-${
      image2.offsetWidth + (9.5 / 100) * image2.offsetWidth
    }px);`;
    image3.style.cssText = `transform: translateX(-${
      image3.offsetWidth + (9 / 100) * image3.offsetWidth
    }px);`;
  });
  input[2].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(-${
      (image1.offsetWidth + (12.5 / 100) * image1.offsetWidth) * 2
    }px);`;
    image2.style.cssText = `transform: translateX(-${
      (image2.offsetWidth + (12.5 / 100) * image2.offsetWidth) * 2
    }px);`;
    image3.style.cssText = `transform: translateX(-${
      (image3.offsetWidth + (9.5 / 100) * image3.offsetWidth) * 2
    }px);`;
  });
} else if (window.innerWidth <= 760 && window.innerWidth > 554) {
  input[0].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(0px);`;
    image2.style.cssText = `transform: translateX(0px);`;
    image3.style.cssText = `transform: translateX(0px);`;
  });
  input[1].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(-${
      image1.offsetWidth + (12.5 / 100) * image1.offsetWidth
    }px);`;
    image2.style.cssText = `transform: translateX(-${
      image2.offsetWidth + (13 / 100) * image2.offsetWidth
    }px);`;
    image3.style.cssText = `transform: translateX(-${
      image3.offsetWidth + (9 / 100) * image3.offsetWidth
    }px);`;
  });
  input[2].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(-${
      (image1.offsetWidth + (12.5 / 100) * image1.offsetWidth) * 2
    }px);`;
    image2.style.cssText = `transform: translateX(-${
      (image2.offsetWidth + (12.5 / 100) * image2.offsetWidth) * 2
    }px);`;
    image3.style.cssText = `transform: translateX(-${
      (image3.offsetWidth + (12.5 / 100) * image3.offsetWidth) * 2
    }px);`;
  });
} else if (window.innerWidth <= 554 && window.innerWidth > 404) {
  input[0].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(0px);`;
    image2.style.cssText = `transform: translateX(0px);`;
    image3.style.cssText = `transform: translateX(0px);`;
  });
  input[1].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(-${
      image1.offsetWidth + (17 / 100) * image1.offsetWidth
    }px);`;
    image2.style.cssText = `transform: translateX(-${
      image2.offsetWidth + (17 / 100) * image2.offsetWidth
    }px);`;
    image3.style.cssText = `transform: translateX(-${
      image3.offsetWidth + (17 / 100) * image3.offsetWidth
    }px);`;
  });
  input[2].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(-${
      (image1.offsetWidth + (12.5 / 100) * image1.offsetWidth) * 2
    }px);`;
    image2.style.cssText = `transform: translateX(-${
      (image2.offsetWidth + (18.5 / 100) * image2.offsetWidth) * 2
    }px);`;
    image3.style.cssText = `transform: translateX(-${
      (image3.offsetWidth + (16.5 / 100) * image3.offsetWidth) * 2
    }px);`;
  });
} else if (window.innerWidth <= 404 && window.innerWidth > 335) {
  input[0].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(0px);`;
    image2.style.cssText = `transform: translateX(0px);`;
    image3.style.cssText = `transform: translateX(0px);`;
  });
  input[1].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(-${
      image1.offsetWidth + (20 / 100) * image1.offsetWidth
    }px);`;
    image2.style.cssText = `transform: translateX(-${
      image2.offsetWidth + (20.5 / 100) * image2.offsetWidth
    }px);`;
    image3.style.cssText = `transform: translateX(-${
      image3.offsetWidth + (17 / 100) * image3.offsetWidth
    }px);`;
  });
  input[2].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(-${
      (image1.offsetWidth + (12.5 / 100) * image1.offsetWidth) * 2
    }px);`;
    image2.style.cssText = `transform: translateX(-${
      (image2.offsetWidth + (18.5 / 100) * image2.offsetWidth) * 2
    }px);`;
    image3.style.cssText = `transform: translateX(-${
      (image3.offsetWidth + (20.5 / 100) * image3.offsetWidth) * 2
    }px);`;
  });
} else if (window.innerWidth <= 335) {
  input[0].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(0px);`;
    image2.style.cssText = `transform: translateX(0px);`;
    image3.style.cssText = `transform: translateX(0px);`;
  });
  input[1].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(-${
      image1.offsetWidth + (22 / 100) * image1.offsetWidth
    }px);`;
    image2.style.cssText = `transform: translateX(-${
      image2.offsetWidth + (26 / 100) * image2.offsetWidth
    }px);`;
    image3.style.cssText = `transform: translateX(-${
      image3.offsetWidth + (17 / 100) * image3.offsetWidth
    }px);`;
  });
  input[2].addEventListener("click", () => {
    image1.style.cssText = `transform: translateX(-${
      (image1.offsetWidth + (12.5 / 100) * image1.offsetWidth) * 2
    }px);`;
    image2.style.cssText = `transform: translateX(-${
      (image2.offsetWidth + (20 / 100) * image2.offsetWidth) * 2
    }px);`;
    image3.style.cssText = `transform: translateX(-${
      (image3.offsetWidth + (25 / 100) * image3.offsetWidth) * 2
    }px);`;
  });
}
if (window.innerWidth > 675) {
  // ketika input focus dan blur
  inputForm.forEach((input) => {
    input.addEventListener("focus", () => {
      spanInput.forEach((span) => {
        if (span.getAttribute("id") === input.getAttribute("class")) {
          span.style.cssText = `color: #20b7ee;
        transform: translateY(-38px);
        font-size: 1rem;`;
        }
      });
      iInput.forEach((i) => {
        if (i.getAttribute("id") === input.getAttribute("class")) {
          i.style.height = `52px`;
        }
      });
    });

    input.addEventListener("blur", () => {
      let inputValue = input.value;

      spanInput.forEach((span) => {
        if (span.getAttribute("id") === input.getAttribute("class")) {
          // ketika dalam input terdapat value
          if (inputValue) {
            span.style.cssText = `color: #20b7ee;
            transform: translateY(-38px);
            font-size: 1rem;`;
          } else {
            //jika dalam input tidak terdapat value
            span.style.cssText = `color: gray;
          transform: translateY(0px);
          font-size: 1.2rem;`;
          }
        }
        iInput.forEach((i) => {
          if (i.getAttribute("id") === input.getAttribute("class")) {
            if (inputValue) {
              i.style.height = `52px`;
            } else {
              i.style.height = `4px`;
            }
          }
        });
      });
    });
  });

  //ketika textarea focus dan blur
  textareaForm.addEventListener("focus", () => {
    spanInput.forEach((span) => {
      if (span.getAttribute("id") === textareaForm.getAttribute("class")) {
        span.style.cssText = `color: #20b7ee;
      transform: translateY(-50px);
      font-size: 1rem;`;
      }
    });
    iInput.forEach((i) => {
      if (i.getAttribute("id") === textareaForm.getAttribute("class")) {
        i.style.height = `17.5rem`;
      }
    });
  });
  textareaForm.addEventListener("blur", () => {
    let inputValue = textareaForm.value;
    spanInput.forEach((span) => {
      if (span.getAttribute("id") === textareaForm.getAttribute("class")) {
        if (inputValue) {
          span.style.cssText = `color: #20b7ee;
        transform: translateY(-50px);
        font-size: 1rem;`;
        } else {
          span.style.cssText = `color: gray;
        transform: translateY(0px);
        font-size: 1.2rem;`;
        }
      }
    });
    iInput.forEach((i) => {
      if (i.getAttribute("id") === textareaForm.getAttribute("class")) {
        if (inputValue) {
          i.style.height = `17.5rem`;
        } else {
          i.style.height = `4px`;
        }
      }
    });
  });
}
if (window.innerWidth <= 675) {
  inputForm.forEach((input) => {
    input.addEventListener("focus", () => {
      spanInput.forEach((span) => {
        if (span.getAttribute("id") === input.getAttribute("class")) {
          span.style.cssText = `color: #20b7ee;
        transform: translateY(-35px);
        font-size: .7rem;`;
        }
      });
      iInput.forEach((i) => {
        if (i.getAttribute("id") === input.getAttribute("class")) {
          i.style.height = `45px`;
        }
      });
    });

    input.addEventListener("blur", () => {
      let inputValue = input.value;

      spanInput.forEach((span) => {
        if (span.getAttribute("id") === input.getAttribute("class")) {
          // ketika dalam input terdapat value
          if (inputValue) {
            span.style.cssText = `color: #20b7ee;
            transform: translateY(-35px);
            font-size: .7rem;`;
          } else {
            //jika dalam input tidak terdapat value
            span.style.cssText = `color: gray;
          transform: translateY(0px);
          font-size: .8rem;`;
          }
        }
        iInput.forEach((i) => {
          if (i.getAttribute("id") === input.getAttribute("class")) {
            if (inputValue) {
              i.style.height = `45px`;
            } else {
              i.style.height = `4px`;
            }
          }
        });
      });
    });
  });

  //ketika textarea focus dan blur
  textareaForm.addEventListener("focus", () => {
    spanInput.forEach((span) => {
      if (span.getAttribute("id") === textareaForm.getAttribute("class")) {
        span.style.cssText = `color: #20b7ee;
      transform: translateY(-40px);
      font-size: .8rem;`;
      }
    });
    iInput.forEach((i) => {
      if (i.getAttribute("id") === textareaForm.getAttribute("class")) {
        i.style.height = `12.8rem`;
      }
    });
  });
  textareaForm.addEventListener("blur", () => {
    let inputValue = textareaForm.value;
    spanInput.forEach((span) => {
      if (span.getAttribute("id") === textareaForm.getAttribute("class")) {
        if (inputValue) {
          span.style.cssText = `color: #20b7ee;
        transform: translateY(-40px);
        font-size: .8rem;`;
        } else {
          span.style.cssText = `color: gray;
        transform: translateY(0px);
        font-size: .9rem;`;
        }
      }
    });
    iInput.forEach((i) => {
      if (i.getAttribute("id") === textareaForm.getAttribute("class")) {
        if (inputValue) {
          i.style.height = `12.8rem`;
        } else {
          i.style.height = `4px`;
        }
      }
    });
  });
}

// zoom image
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup img");

document.querySelector(".popup span").addEventListener("click", () => {
  setTimeout(() => {
    popup.style.display = "none";
  }, 800);
  popup.style.animation = "fadeOut .8s forwards";
  popupImg.style.animation = "fadeDown .8s forwards";
});

document.querySelectorAll(".hero img").forEach((img) => {
  img.addEventListener("click", () => {
    popup.style.animation = "fadeIn .8s forwards";
    popupImg.style.animation = "fadeUp .8s forwards";
    popup.style.display = "flex";
    popupImg.src = img.getAttribute("src");
  });
});

document
  .querySelectorAll(".certificate article .wrapper .box .card img")
  .forEach((img) => {
    img.addEventListener("click", () => {
      popup.style.animation = "fadeIn .6s forwards";
      popupImg.style.animation = "fadeUp .8s forwards";
      popup.style.display = "flex";
      popupImg.src = img.getAttribute("src");
    });
  });

document
  .querySelectorAll(".portofolio .content .row .img img")
  .forEach((img) => {
    img.addEventListener("click", () => {
      popup.style.animation = "fadeIn .6s forwards";
      popupImg.style.animation = "fadeUp .8s forwards";
      popup.style.display = "flex";
      popupImg.src = img.getAttribute("src");
    });
  });
