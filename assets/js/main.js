/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {

    e.preventDefault();
    
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_p78019p', 'template_v0t2d9h', '#contact-form', '2eMZq08wHV_Npo2aq').then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        //remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        //clear form

        contactForm.reset();
    }, (err) => {
        console.log(err);
        contactMessage.textContent = 'Something went wrong(service error) ❌';
    });
}

contactForm.addEventListener('submit', sendEmail);
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

