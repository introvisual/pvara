class PilarvaraController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_filter :verify_authenticity_token

  def index
    render layout: "application", locals: { body_class: 'op1' }
  end

  def equipo_humano
    render layout: "application", locals: { body_class: 'op2' }
  end

  def aviso_legal
    render layout: "application", locals: { body_class: 'op0' }
  end

  def galeria
    render layout: "application", locals: { body_class: 'op4' }
  end

  def financiacion
    render layout: "application", locals: { body_class: 'op5' }
  end

  def contacto_localizacion
    @contact = Contact.new
    render layout: "application", locals: { body_class: 'op6' }
  end

  def treatment
    @view_name = params[:id]
    respond_to do |format|
      format.html { render :template => "pilarvara/treatments/#{@view_name}", layout: "application", locals: { body_class: "op3 hide-submenu #{@view_name}" } }
    end
  end

  def contacto_localizacion_post
    @contact = Contact.new
    @contact.name = params[:nombre_completo]
    @contact.email = params[:email]
    @contact.phone = params[:phone]
    @contact.topic = params[:asunto_del_mensaje]
    @contact.message = params[:texto_del_mensaje]

    # Commented recaptcha because changes are not supported by gem. If spam appears,
    # talk to Pilar to update gem
     if !verify_recaptcha(:message => "Oh! It's error with reCAPTCHA!")
       Rails.logger.info "Captcha incorrecto"
       flash[:notice] = "El c&oacute;digo de seguridad no coincide"
     else
       Rails.logger.info "Captcha correcto"

      begin
        Rails.logger.info "Enviando correo"
        ContactMailer.contact_email(@contact).deliver
        Rails.logger.info "Correo enviado"
        flash[:notice] = "Hemos recibido su contacto correctamente"
      rescue => e
        Rails.logger.info "Error enviando el correo"
        Rails.logger.info "Error -> #{e.message}"
        flash[:notice] = "Ha habido un error enviando tu mensaje, por favor,
                            ponte en contacto con nosotros por tel&eacute;fono o envi&aacute;ndonos un email."
      end

     end

    render layout: "application", locals: { body_class: 'op6' }
  end

  rescue_from ActionView::MissingTemplate do |exception|
     raise ActionController::RoutingError.new('Not Found')
  end

end
