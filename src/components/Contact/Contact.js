import React,{useState} from 'react';

function Contact(props){
  const[showMsgclassName, setShowMsgclassName] = useState('hide');
  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
      'service_zcko5on', templateId,
      variables, 'OiVhVxzTDhWLTBAWO'
      ).then(res => {
        console.log('Email successfully sent!')
        setShowMsgclassName("show");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    const templateId = 'template_3ham6j7';
    console.log(event.target.emailid.value + event.target.message.value) ;
    sendFeedback(templateId, {message: event.target.message.value, from_name: event.target.name.value , reply_to: event.target.emailid.value})
  }
  

  return(
    <section id="contact" ref={props.refContactProp}>
        <div className="container flex">
          <div className="header">
            CONTACT
          </div>
          <div className="header-bar"></div>
          <div className="highlight">
            Have a question or want to work together?
          </div>
          <form className="flex" id="contact-form" onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Your Name" required/>
            <input name="emailid" type="email-id" placeholder="Your Email Id" required/>
            <textarea placeholder="Your Message" type="text" name="message" required></textarea>
            <div className={`${showMsgclassName}`} id="">
              <div>
                Your message was sent successfully. Thanks!
              </div>
            </div>
            <button type="submit" className="contact-button" name="contact_submit">Submit</button>
          </form>
        </div>
      </section>
  )
}


export default Contact;