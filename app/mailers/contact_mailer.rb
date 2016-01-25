class ContactMailer < ActionMailer::Base
  default from: "info@pilarvara.com"

  def contact_email(contact)
    Rails.logger.info("Sending mail")
    @contact = contact
    mail(to: 'pilarvaraparra@gmail.com', name: @contact.name,
    email: @contact.email, phone: @contact.phone, topic: @contact.topic,
    message: @contact.message )
    Rails.logger.info("Mail sent")
  end

end
