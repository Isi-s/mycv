function SendMail(){

    var params = {
        from_name :document.getElementById('name').value,
        email_id :document.getElementById('email').value,
        message :document.getElementById('message')


    }
    emailjs.send('service_kv15kwn', 'template_20go6rg', params).then(function(res){
        alert("Isi will receive your message in his email inbox!" + res.status);
    })
}