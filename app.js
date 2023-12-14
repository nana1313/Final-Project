let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

showSlides();

const skills = [
  { name: "html", percent: 90 },
  { name: "css", percent: 80 },
  { name: "js", percent: 70 },
];

function animateSkillBars() {
  skills.forEach((skill) => {
    const skillProgress = document.querySelector(
      `.skill-progress.${skill.name}`
    );
    const targetWidth =
      (skill.percent / 100) * skillProgress.parentElement.offsetWidth;

    let currentWidth = 0;
    const animationInterval = setInterval(() => {
      if (currentWidth >= targetWidth) {
        clearInterval(animationInterval);
      } else {
        currentWidth++;
        skillProgress.style.width = `${currentWidth}px`;
      }
    }, 10);
  });
}

animateSkillBars();

function slideRecommendation(){
  const recomendationTxt1 = document.getElementById("recomendation-txt-1")
  const recomendationTxt2 = document.getElementById("recomendation-txt-2")
  const recomendationTxt3 = document.getElementById("recomendation-txt-3")
  const recomendationImg1 = document.getElementById("recomendation-img-1")
  const recomendationImg2 = document.getElementById("recomendation-img-2")
  const recomendationImg3 = document.getElementById("recomendation-img-3")
  const recomendationJob1 = document.getElementById("recomendation-job-1")
  const recomendationJob2 = document.getElementById("recomendation-job-2")
  const recomendationJob3 = document.getElementById("recomendation-job-3")
  const recomendationName1 = document.getElementById("recomendation-name-1")
  const recomendationName2 = document.getElementById("recomendation-name-2")
  const recomendationName3 = document.getElementById("recomendation-name-3")
  const recoCheck1 = document.getElementById('reco-check-1')
  const recoCheck2 = document.getElementById('reco-check-2')
  const recoCheck3 = document.getElementById('reco-check-3')
  recoCheck1.addEventListener("click", function(){
    recomendationTxt1.style.display = "block"
    recomendationTxt2.style.display = "none"
    recomendationTxt3.style.display = "none"
    recoCheck1.style.border = "2px solid #E93656"
    recoCheck2.style.border = "2px solid #FFFFFF"
    recoCheck3.style.border = "2px solid #FFFFFF"
    recomendationImg1.style.display = "block"
    recomendationImg2.style.display = "none"
    recomendationImg3.style.display = "none"
    recomendationJob1.style.display = "block"
    recomendationJob2.style.display = "none"
    recomendationJob3.style.display = "none"
    recomendationName1.style.display = "block"
    recomendationName2.style.display = "none"
    recomendationName3.style.display = "none"
  })
  recoCheck2.addEventListener("click", function(){
    recomendationTxt1.style.display = "none"
    recomendationTxt2.style.display = "block"
    recomendationTxt3.style.display = "none"
    recoCheck1.style.border = "2px solid #FFFFFF"
    recoCheck2.style.border = "2px solid #E93656"
    recoCheck3.style.border = "2px solid #FFFFFF"
    recomendationImg1.style.display = "none"
    recomendationImg2.style.display = "block"
    recomendationImg3.style.display = "none"
    recomendationJob1.style.display = "none"
    recomendationJob2.style.display = "block"
    recomendationJob3.style.display = "none"
    recomendationName1.style.display = "none"
    recomendationName2.style.display = "block"
    recomendationName3.style.display = "none"
  })
  recoCheck3.addEventListener("click", function(){
    recomendationTxt1.style.display = "none"
    recomendationTxt2.style.display = "none"
    recomendationTxt3.style.display = "block"
    recoCheck1.style.border = "2px solid #FFFFFF"
    recoCheck2.style.border = "2px solid #FFFFFF"
    recoCheck3.style.border = "2px solid #E93656"
    recomendationImg1.style.display = "none"
    recomendationImg2.style.display = "none"
    recomendationImg3.style.display = "block"
    recomendationJob1.style.display = "none"
    recomendationJob2.style.display = "none"
    recomendationJob3.style.display = "block"
    recomendationName1.style.display = "none"
    recomendationName2.style.display = "none"
    recomendationName3.style.display = "block"
  })
}
slideRecommendation();

function projectFilter(){
  const all = document.getElementById("all")
  const webPages = document.getElementById("web-pages")
  const logo = document.getElementById("logo-list")
  const design = document.getElementById("design") 
  
  const project1 = document.getElementById("project-1")
  const project2 = document.getElementById("project-2")
  const project3 = document.getElementById("project-3")
  const project4 = document.getElementById("project-4")
  const project5 = document.getElementById("project-5")
  const project6 = document.getElementById("project-6")

  all.addEventListener("click", function(){
    project1.style.display = "block"
    project2.style.display = "block"
    project3.style.display = "block"
    project4.style.display = "block"
    project5.style.display = "block"
    project6.style.display = "block"
  })

  webPages.addEventListener("click", function(){
    project1.style.display = "block"
    project2.style.display = "none"
    project3.style.display = "none"
    project4.style.display = "block"
    project5.style.display = "none"
    project6.style.display = "block"
  })
  logo.addEventListener("click", function(){
    project1.style.display = "none"
    project2.style.display = "block"
    project3.style.display = "block"
    project4.style.display = "block"
    project5.style.display = "block"
    project6.style.display = "none"
  })
  design.addEventListener("click", function(){
    project1.style.display = "none"
    project2.style.display = "block"
    project3.style.display = "block"
    project4.style.display = "none"
    project5.style.display = "none"
    project6.style.display = "none"
  })
}
projectFilter()

function submit() {
  const form = new FormData(document.getElementById('form-box'));
  fetch('https://borjomi.loremipsum.ge/api/send-message', {
    method: 'POST',
    body: form,
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 1) {
      const success = document.getElementById("modal")
      success.style.display = "block"
    } else {
      console.error("Failed to send message:", data.desc);
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
}
