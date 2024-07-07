function whatsapplink() {
    let phoneNumber = '+918090517516';  // Replace with the desired phone number
    let message = encodeURIComponent('Hello, I Viewed You On your website.!');  // Your message content

    // Construct the WhatsApp URL
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open the WhatsApp URL
    window.open(whatsappUrl, '_blank');
}