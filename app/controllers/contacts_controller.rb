class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:error] = nil
      flash.now[:notice] = 'Tu mensaje ha sido recibido. Muchas gracias.'
    else
      flash.now[:error] = 'Ha habido un error enviando tu mensaje, por favor,
                          ponte en contacto con nosotros por tel&eacute;fono o envi&aacute;ndonos un email.'
      render :new
    end
  end
end
