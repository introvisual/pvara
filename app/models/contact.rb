class Contact < MailForm::Base
  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :phone,     :numericality => {:only_integer => true}
  attribute :topic,     :validate => true
  attribute :message,   :validate => true

  # e-mail headers.
  def headers
    {
      :subject => "Contacto desde la web Pilar Vara",
      :to => "info@pilarvara.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end
