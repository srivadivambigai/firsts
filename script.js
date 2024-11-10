document.getElementById('personalDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("1. On submitting, all the persons you have entered will get notification, call in case of alert.\n" +
          "2. Your battery will be always monitored; in case of low battery, your system will go to ultra battery saver.\n" +
          "3. Your voice will be monitored in the background; on sensing danger, it will automatically start our alert system.\n" +
          "4. In case the alert system is on, then your name and age will be shared with nearby users around you.");
});

function showGenderOptions() {
    document.getElementById('genderOptions').style.display = 'block';
}

function selectGender(gender) {
    document.getElementById('gender').value = gender;
    document.getElementById('genderOptions').style.display = 'none';
}

document.addEventListener('click', function(event) {
    const genderInput = document.getElementById('gender');
    const genderOptions = document.getElementById('genderOptions');
    if (event.target !== genderInput && !genderOptions.contains(event.target)) {
        genderOptions.style.display = 'none';
    }
});