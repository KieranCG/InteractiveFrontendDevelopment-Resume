function sendMail(contactForm) {
    emailjs.send("service_leovedg", "template_67y0keo", {
        "from_name": contactForm.name.value,
        "fromEmail": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value,
    })
        .then(
            function (response) {
                console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
                console.log("FAILED...", error);
            }
        );
    return false;
};