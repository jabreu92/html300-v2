//How can I import local JSON file into here ? I tried a required() function but that is from node js. ?
const jsonDATA = '[{"name":"Paolo Maldini","jobTitle":"Front End Developer","company":"Web Weavers","experience":"3 years","school":"University of Washington","major":"Marketing","email":"paolo@example.com","linkedInUrl":"paolo.linkedinprofile.com","codeLanguages":["HTML","CSS","JavaScript","Node","Express"]},{"name":"Barbara Bonansea","jobTitle":"Software Engineer","company":"Excellence in the Cloud","experience":"12 years","school":"University of Southern California","major":"Computer Science","email":"barbara@example.com","linkedInUrl":"barbara.linkedinprofile.com","codeLanguages":["HTML","JavaScript","C","Go"]},{"name":"Javier Hernandez","jobTitle":"User Experience Engineer","company":"Web Sites and More","experience":"5 years","school":"Seattle University","major":"Performing Arts","email":"javier@example.com","linkedInUrl":"javier.linkedinprofile.com","codeLanguages":["HTML","CSS"]},{"name":"Maribel Dominguez","jobTitle":"Front End Engineer","company":"Bits and Bytes","experience":"6 years","school":"University of Washington","major":"Mechanical Engineering","email":"maribel@example.com","linkedInUrl":"maribel.linkedinprofile.com","codeLanguages":["HTML","CSS","JavaScript","React","Vue","Redux"]}]'
const persons = JSON.parse(jsonDATA);
console.log(persons);

const container = document.querySelector('.template-hook');

    let personsHTML = persons.map(function(el) {
        let person =`<div class="container">
        <div class="employee-card-left">
           <img class="employee-card-left___image" src="img/headshot.jpg" alt="Avatar" style="width:100%">
           <h1 class="employee-card-left___name"><strong>${el.name}</strong></h1>
           <p class="employee-card-left___position"> ${el.jobTitle}</p>
        </div>
        <div class="employee-card-right">
           <div class="employee-card-right___info">
              <p> <strong> Company: </strong>${el.company}</p>
              <p> <strong> Experience: </strong>${el.experience}</p>
              <p> <strong> School: </strong>${el.school}</p>
              <p> <strong> Major: </strong>${el.major}</p>
              <p> <strong> Email: </strong>${el.email}</p>
              <p> <i class="fa fa-linkedin-square" style="font-size:24px;color:blue"></i> ${el.linkedInUrl}</p>
           </div>
        </div>
     </div>`;
       
       return person;
       });
      
    let list = document.createElement('article');
    list.innerHTML = personsHTML;
    container.append(list);
   



