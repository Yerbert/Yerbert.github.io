function onSubmission()
{
    //check that all mandatory fields are filled out
    var elements = document.getElementById("form").elements;
    if (document.getElementById("name").value == "" || document.getElementById("datetime").value == "" || document.getElementById("objectdescription").value == "" || document.getElementById("objectcolour").value == "" || document.getElementById("objectnumber").value == "" || (elements[5].checked == false && elements[6].checked == false) || document.getElementById("objectcondition").value == "" || document.getElementById("file").value == "")
        {
            alert("Not all required fields filled in. Please fill in the missing fields");
            return;
        }
    document.getElementById("formdiv").style.display = 'none';
    document.getElementById("waitdiv").style.display = 'inline';
    //Fetch whether the user sees a defect or not
    var visibleDefect = elements[5].checked;
    //Random chance of a defect
    var defect = 0;
    var defectType = "";
    if (Math.floor(Math.random()*100) > 60)
        {
            defect = 1;
        }
    if (visibleDefect == true)
        {
            defect = 1;
        }
    if (defect == 1)
        {
            //need to classify defect
            var defectChance = Math.floor(Math.random()*100)
            if ( defectChance > 66)
                {
                    defectType = "Minor Defect - Unrepairable"
                }
            else if (defectChance > 33)
                {
                    defectType = "Major Defect - Unrepairable"
                }
            else if (defectChance > 0)
                {
                    defectType = "Repairable Defect"
                }
        }
    else{
        defectType = "Not Defective";
    }
    //Pause for a certian number of seconds
    var x = 5000;
    var adjustment = Math.floor(Math.random()*5000)+1-2500;
    var x = x-adjustment;
    setTimeout(function() {displayResult(defectType);}, x);
    
}

function startClassification()
{
    document.getElementById("welcomediv").style.display = 'none';
    document.getElementById("objectclassificationdiv").style.display = 'none';
    resetForm();
    document.getElementById("formdiv").style.display = 'inline';
    
}

function displayResult(defectType)
{
    //activate object defect classified page
    document.getElementById("waitdiv").style.display = 'none';
    document.getElementById("objectclassificationdiv").style.display = 'inline';
    document.getElementById("objectclassificationtext").innerHTML = defectType;
}

function resetForm()
{
    document.getElementById("name").value = "";
    document.getElementById("datetime").value = "";
    document.getElementById("objectdescription").value = "";
    document.getElementById("objectcolour").value = "";
    document.getElementById("objectnumber").value = "";
    var elements = document.getElementById("form").elements;
    elements[5].checked = false;
    elements[6].checked = false;
    document.getElementById("objectcondition").value = "";
    document.getElementById("file").value = "";
}
