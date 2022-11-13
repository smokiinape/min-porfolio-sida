const navTog = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-link');

navTog.addEventListener('click',() =>{
    document.body.classList.toggle('nav-open');
});



let url = './resume.json';

async function myResume() {
  let response = await fetch(url);

  if (response.ok) {
    let data = await response.json();
    console.log(data);

    // container 
    const works = document.createElement("div");
    const studying = document.createElement("div");
    works.classList = "working";
    studying.classList = "studying";
    document.querySelector(".jobs").append(works);
    document.querySelector(".educations").append(studying);

    // Names for my titels
    const workTitel = document.createElement("h3");
    const studyingTitel = document.createElement("h3");
    workTitel.classList = "job-titel";
    studyingTitel.classList = "education-titel";
    workTitel.textContent = data.jobs;
    studyingTitel.textContent = data.educations;
    document.querySelector(".working").append(workTitel);
    document.querySelector(".studying").append(studyingTitel);

    // text

    const jobTing = document.createElement("p")
    const educationTing = document.createElement("p");
    jobTing.classList = "job-ting";
    educationTing.classList = "education-ting";
    document.querySelector(".working").append(jobTing);
    document.querySelector(".studying").append(educationTing);
    


    
        for (let i = 0; i < data.workexperience.length; i++) {
            const jobRole = document.createElement("i");
            const jobTitel = document.createElement("i");
            const jobDesc = document.createElement("i");
            jobRole.classList = "jobRole";
            jobTitel.classList = "jobTitel";
            jobDesc.classList = "jobDesc";
            document.querySelector(".job-ting").append(jobRole);
            document.querySelector(".job-ting").append(jobTitel);
            document.querySelector(".job-ting").append(jobDesc);
            jobRole.innerHTML = data.workexperience[i].title + "<br><br>";
            jobTitel.innerHTML = data.workexperience[i].company + "<br>";
            jobDesc.innerHTML = data.workexperience[i].decs + "<br><br>";
          
          
          }
    
    

        for (let i = 0; i < data.education.length; i++) {
          const educationalRole = document.createElement("i");
          const educationTitel = document.createElement("i");
          const educationDesc = document.createElement("i");
          educationalRole.classList = "educationalRole";
          educationTitel.classList = "educationTitel";
          educationDesc.classList = "educationDesc";
          document.querySelector(".education-ting").append(educationalRole);
          document.querySelector(".education-ting").append(educationTitel);
          document.querySelector(".education-ting").append(educationDesc);
          educationalRole.innerHTML = data.education[i].title + "<br>";
          educationTitel.innerHTML = data.education[i].company + "<br>";
          educationDesc.innerHTML = data.education[i].decs + "<br>";
        }

  } else {
    console.log("HTTP-Error: " + response.status);
  }
}


myResume();