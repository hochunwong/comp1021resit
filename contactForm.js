// Script to submit form from contactForm.html

async function submitForm(event) {
    console.log("Hello! :D");

    event.preventDefault();


    // Get data from form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const member = document.getElementById('member').value;
    const message = document.getElementById('message').value;


    // Build in correct format
    const webhookBody = {
        embeds: [{
            title: 'Website Form Submitted',
            fields: [
                { name: 'Name', value: name },
                { name: 'Email', value: email },
                { name: 'Member', value: member },
                { name: 'Message', value: message }
            ]
        }],
    };


    // Submit to discord webhook
    const webhookUrl = 'https://discord.com/api/webhooks/1271024157588721714/IIkLO5JB1YKbcemeMir5vi1zDfEqd2RRrSXmp7VIiXxrJrudi47ZTihmzxDqSQJmw0OO';

    const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(webhookBody),
    });


    // Check if message was recieved
    if (response.ok) {
        alert('Message successfully sent!');
    } else {
        alert('Error, please try again :(');
    }

}
