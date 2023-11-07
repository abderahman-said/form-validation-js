
document.addEventListener("DOMContentLoaded", function() {
  const previousBtn = document.getElementById("previousBtn");
  const nextBtn = document.getElementById("nextBtn");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const navDots = document.querySelector(".nav-dots");
  const finish = document.getElementById("finish");
  const toast = document.querySelector(".toast");

  let currentItem = 0;
  carouselItems[currentItem].style.display = "block";
  for (let i = 0; i < carouselItems.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("nav-dot");
    if (i === currentItem) {
      dot.classList.add("active");
    }
    navDots.appendChild(dot);
  }
  function switchImage() {
    if (!optionSelected && this === nextBtn ) {
      return;
    }
  

    carouselItems[currentItem].style.display = "none";
    navDots.children[currentItem].classList.remove("active");
  
    if (this === previousBtn ) {
      currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
    } else {
      if (currentItem === carouselItems.length - 1) {
        currentItem = 0;
      } else {
        currentItem++;
      }
    }
  
    carouselItems[currentItem].style.display = "block";
    navDots.children[currentItem].classList.add("active");
  
    if (currentItem === 0 && document.querySelector(".home__button_flex")) {
      previousBtn.style.display = "none";
      document.querySelector(".home__button_flex").style.flexDirection = "row-reverse";
    } else {
      previousBtn.style.display = "block";
      document.querySelector(".home__button_flex").style.flexDirection = "row";
    }
if (currentItem === carouselItems.length - 1  ) {
    nextBtn.innerHTML = "انهاء";

}
else {
    nextBtn.innerHTML = "متابعه <i class='fa-solid fa-arrow-left'></i>";
}
const selectedBtn = carouselItems[currentItem].querySelector("#nextBtn.selected");
if (selectedBtn) {
  optionSelected = true;
  nextBtn.classList.remove("disabled");
}
 else {
  optionSelected = false;
  nextBtn.classList.add("disabled");
}

if (currentItem === carouselItems.length - 1 ) {
  nextBtn.innerHTML = "انهاء";
  optionSelected = false;
  nextBtn.disabled = true;
  nextBtn.addEventListener("click", function() {
  customAlert.alert("رسالة تحتاج أن تظهر عند النقر على الزر", "عنوان الرسالة");
  // alert(" Success! .");
  document.querySelector("form").submit();
  console.log(";:::::::::;")
  });
  }

}

  // finish.style.display = "none";
  previousBtn.addEventListener("click", switchImage);
  nextBtn.addEventListener("click", switchImage);
  previousBtn.style.display = "none";
 
});
function invokeAlert() {
  alertDiv.style.display = "block";
}
const buttons = document.querySelectorAll(".button_form");
let optionSelected = false;

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    console.log(button.id)
    buttons.forEach(function(btn) {
      btn.classList.remove("selected");
      btn.style.backgroundColor = "#000";
      btn.style.color = "#fff";
      btn.textContent = "اختيار";
    });
    this.textContent = "تم الاختيار";
    this.classList.add("selected");

    if (this.classList.contains("selected")) {
      this.style.backgroundColor = "#ccc";
      this.style.color = "#000";
      optionSelected = true;
      nextBtn.disabled = false;
    } else {
      this.style.backgroundColor = "#000";
      this.style.color = "#ccc";
      optionSelected = false;
      nextBtn.disabled = true;
    }
  });
});


previousBtn.addEventListener("click", function() {
  optionSelected = false;
  buttons.forEach(function(button) {
    button.textContent = "اختيار";
    button.classList.remove("selected");
    button.style.backgroundColor = "#000";
    button.style.color = "#fff";
  });
});

const forms = ["myForm", "myForm2", "myForm3", "myForm4"];
let currentFormIndex = 0;

function submitForm() {
  if ( optionSelected === true    ) {
    nextBtn.disabled === true
    event.preventDefault();
    const form = document.getElementById(forms[currentFormIndex]);
    const formData = new FormData(form);
      console.log("Form data for " + forms[currentFormIndex] + ":", formData);
    }
  else {
    nextBtn.disabled === false
    
  }

}
let raton = document.querySelector(".cursor");
        let enlaces = document.querySelectorAll("li");
        window.addEventListener("DOMContentLoaded" , function () {
          raton.style.left = "0%";
          raton.style.top = "0%";
          
        });
        window.addEventListener("mousemove", moveCursor)

        function moveCursor(e) {
            raton.style.top = e.pageY + "px";
            raton.style.left = e.pageX + "px";
        }
        window.addEventListener("mousedown", () => {
            raton.classList.add("cursor-click");
        })
        window.addEventListener("mouseup", () => {
            raton.classList.remove("cursor-click");
        })

        enlaces.forEach(function (element) {
            element.addEventListener("mouseover", function () {
                raton.classList.add("cursor-hover");
            });
            element.addEventListener("mouseout", function () {
                raton.classList.remove("cursor-hover");
            })
        });



// function submitForm() {
//   event.preventDefault();
//   const form = document.getElementById("myForm");
//   const formData = new FormData(form);
//   console.log("..." ,formData )
//   // fetch("submit.php", {
//   //   method: "POST",
//   //   body: formData
//   // })
//   // .then(response => {
//   //   console.log(response);
//   // })
//   // .catch(error => {
//   //   console.error(error);
//   // });
// }



function CustomAlert(){
  this.alert = function(message,title){
    document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

    let dialogoverlay = document.getElementById('dialogoverlay');
    let dialogbox = document.getElementById('dialogbox');
    let winH = window.innerHeight;
    dialogoverlay.style.height = winH+"px";
    dialogbox.style.top = "100px";

    dialogoverlay.style.display = "block";
    dialogbox.style.display = "block";
    
    document.getElementById('dialogboxhead').style.display = 'block';

    if(typeof title === 'undefined') {
      document.getElementById('dialogboxhead').style.display = 'none';
    } else {
      document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
    }
    document.getElementById('dialogboxbody').innerHTML = message;
    document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
  }
  
  this.ok = function(){
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
}

let customAlert = new CustomAlert();

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
    setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});

// function submit(){
//   var a=document.getElementById("radio1");
//   var b=document.getElementById("radio2");
//   if(a.checked==true){
//     console.log(a.id)
//   }
//   else{
//     console.log(b.id) 
//  }
//   }

// document.getElementById("nextBtn").scroll(0,0); 



  // nextBtn.innerHTML = "انهاء";

    // nextBtn.innerHTML = "متابعه <i class='fa-solid fa-arrow-left'></i>";
 // nextBtn.style.display = "none";
  // finish.style.display = "block";
 // nextBtn.style.display = "block";
  // finish.style.display = "none";
// nextBtn.addEventListener("click", function() {
//   if (currentItem === carouselItems.length - 1 &&optionSelected  ) {
//     customAlert.alert("رسالة تحتاج أن تظهر عند النقر على الزر", "عنوان الرسالة");
//     document.querySelector("form").submit();
//   } else {
//     switchImage();
//   }
// });
