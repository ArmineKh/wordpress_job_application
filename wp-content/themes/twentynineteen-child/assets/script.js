let i = 0; 
function increment(){
    i += 1; 
}
 
function setIncrements(){
    document.getElementById("iIncrement").value = i;
    document.getElementById("jIncrement").value = j;
}

function removeElement(parentDiv, childDiv){
     if (document.getElementById(childDiv)){
        var child = document.getElementById(childDiv);
        var parent = document.getElementById(parentDiv);
        parent.removeChild(child);
    }
    
}

function addPosition(){
    
    increment();

    let fieldsColumn = document.createElement('DIV')
    fieldsColumn.setAttribute("class", "fieds-column")
    fieldsColumn.setAttribute("id", "id_" + i)

    let companyInputWrap = document.createElement("SPAN");
    companyInputWrap.setAttribute("class", "wpcf7-form-control-wrap company");

    let companyInput = document.createElement("INPUT");
    companyInput.setAttribute("type", "text");
    companyInput.setAttribute("name", "company" + i);
    companyInput.setAttribute("class", "wpcf7-form-control wpcf7-text wpcf7-validates-as-required");
    companyInput.setAttribute("aria-required", "true");
    companyInput.setAttribute("aria-invalid", "false");
    companyInput.setAttribute("placeholder", "Company");
    companyInput.setAttribute("id", "company" + i);

    companyInputWrap.appendChild(companyInput)

    let titleInputWrap = document.createElement("SPAN");
    titleInputWrap.setAttribute("class", "wpcf7-form-control-wrap title")

    let titleInput = document.createElement("INPUT");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title" + i);
    titleInput.setAttribute("class", "wpcf7-form-control wpcf7-text wpcf7-validates-as-required");
    titleInput.setAttribute("aria-required", "true");
    titleInput.setAttribute("aria-invalid", "false");
    titleInput.setAttribute("placeholder", "Title");
    titleInput.setAttribute("id", "title" + i);

    titleInputWrap.appendChild(titleInput)

    let workSummaryTextareaWrap =  document.createElement("SPAN");
    workSummaryTextareaWrap.setAttribute("class", "wpcf7-form-control-wrap work-summary")

    let workSummaryTextarea = document.createElement("TEXTAREA");
    workSummaryTextarea.setAttribute("name", "work-summary" + i);
    workSummaryTextarea.setAttribute("class", "wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required");
    workSummaryTextarea.setAttribute("id", "work-summary" + i);
    workSummaryTextarea.setAttribute("aria-required", "true");
    workSummaryTextarea.setAttribute("aria-invalid", "false");
    workSummaryTextarea.setAttribute("placeholder", "Summary");
    workSummaryTextarea.setAttribute("cols", "30");
    workSummaryTextarea.setAttribute("rows", "3");

    workSummaryTextareaWrap.appendChild(workSummaryTextarea)

    let buttonWrapper = document.createElement('DIV')
    buttonWrapper.setAttribute("class", 'button-wrapper')

    let addButton = document.createElement("span");
    addButton.setAttribute("onclick", "addPosition()");
    let plus = document.createElement("i");
    plus.setAttribute("class", "fas fa-plus")
    addButton.textContent = "Add position";
    addButton.prepend(plus)

    let removeButton = document.createElement("span");
    removeButton.setAttribute("onclick", "removeElement('work-history-fields', 'id_" + i + "')");
    let remove = document.createElement("i");
    remove.setAttribute("class", "fas fa-trash-alt")
    removeButton.textContent = "Remove position";
    removeButton.prepend(remove)

    fieldsColumn.appendChild(companyInputWrap)
    fieldsColumn.appendChild(titleInputWrap)
    fieldsColumn.appendChild(workSummaryTextareaWrap)
    buttonWrapper.appendChild(addButton)
    buttonWrapper.appendChild(removeButton)
    fieldsColumn.appendChild(buttonWrapper)

    document.querySelector("#work-history-fields").appendChild(fieldsColumn)

    return false;
  
}




function addEducation(){
    increment();

    let fieldsColumn = document.createElement('DIV')
    fieldsColumn.setAttribute("class", "fieds-column")
    fieldsColumn.setAttribute("id", "id_" + i)

    let courseInputWrap = document.createElement("SPAN");
    courseInputWrap.setAttribute("class", "wpcf7-form-control-wrap company");

    let courseInput = document.createElement("INPUT");
    courseInput.setAttribute("type", "text");
    courseInput.setAttribute("name", "course" + i);
    courseInput.setAttribute("class", "wpcf7-form-control wpcf7-text wpcf7-validates-as-required");
    courseInput.setAttribute("aria-required", "true");
    courseInput.setAttribute("aria-invalid", "false");
    courseInput.setAttribute("placeholder", "Course");
    courseInput.setAttribute("id", "course" + i);

    courseInputWrap.appendChild(courseInput)

    let studyInputWrap = document.createElement("SPAN");
    studyInputWrap.setAttribute("class", "wpcf7-form-control-wrap title")

    let studyInput = document.createElement("INPUT");
    studyInput.setAttribute("type", "text");
    studyInput.setAttribute("name", "filed-study" + i);
    studyInput.setAttribute("class", "wpcf7-form-control wpcf7-text wpcf7-validates-as-required");
    studyInput.setAttribute("aria-required", "true");
    studyInput.setAttribute("aria-invalid", "false");
    studyInput.setAttribute("placeholder", "Field of study");
    studyInput.setAttribute("id", "filed-study" + i);

    studyInputWrap.appendChild(studyInput)

    let eduSummaryTextareaWrap =  document.createElement("SPAN");
    eduSummaryTextareaWrap.setAttribute("class", "wpcf7-form-control-wrap work-summary")

    let eduSummaryTextarea = document.createElement("TEXTAREA");
    eduSummaryTextarea.setAttribute("name", "work-summary" + i);
    eduSummaryTextarea.setAttribute("class", "wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required");
    eduSummaryTextarea.setAttribute("id", "work-summary" + i);
    eduSummaryTextarea.setAttribute("aria-required", "true");
    eduSummaryTextarea.setAttribute("aria-invalid", "false");
    eduSummaryTextarea.setAttribute("placeholder", "Summary");
    eduSummaryTextarea.setAttribute("cols", "30");
    eduSummaryTextarea.setAttribute("rows", "3");

    eduSummaryTextareaWrap.appendChild(eduSummaryTextarea)

    let buttonWrapper = document.createElement('DIV')
    buttonWrapper.setAttribute("class", 'button-wrapper')

    let addButton = document.createElement("span");
    addButton.setAttribute("onclick", "addEducation()");
    let plus = document.createElement("i");
    plus.setAttribute("class", "fas fa-plus")
    addButton.textContent = "Add position";
    addButton.prepend(plus)

    let removeButton = document.createElement("span");
    removeButton.setAttribute("onclick", "removeElement('education-fields', 'id_" + i + "')");
    let remove = document.createElement("i");
    remove.setAttribute("class", "fas fa-trash-alt")
    removeButton.textContent = "Remove position";
    removeButton.prepend(remove)

    fieldsColumn.appendChild(courseInputWrap)
    fieldsColumn.appendChild(studyInputWrap)
    fieldsColumn.appendChild(eduSummaryTextareaWrap)
    buttonWrapper.appendChild(addButton)
    buttonWrapper.appendChild(removeButton)
    fieldsColumn.appendChild(buttonWrapper)

    document.querySelector("#education-fields").appendChild(fieldsColumn)

    return false;
  
}


  let cvFileInput = document.getElementById("file-input");

  cvFileInput.addEventListener("change", function(event) {
    var files = cvFileInput.files;
    if (files.length) {
        console.log("Filename: " + files[0].name);
        console.log("Type: " + files[0].type);
        console.log("Size: " + files[0].size + " bytes");
        document.getElementById("file-upload-label").textContent = files[0].name 
        let fileIcon = document.createElement("i")
        fileIcon.setAttribute("class", "far fa-file-alt")
        document.getElementById("file-upload-label").prepend(fileIcon)
    }

}, false);








