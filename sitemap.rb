require 'rubygems'
require 'sitemap_generator'

SitemapGenerator::Sitemap.default_host = 'http://pilarvara.com'
SitemapGenerator::Sitemap.create do
  add '/', :changefreq => 'monthly', :priority => 0.9
  add '/contacto-localizacion', :changefreq => 'monthly', :priority => 0.9
  add '/instalaciones', :changefreq => 'monthly', :priority => 0.6
  add '/financiacion', :changefreq => 'monthly', :priority => 0.8
  add '/aviso-legal', :changefreq => 'monthly', :priority => 0.1
  add '/equipo-humano', :changefreq => 'monthly', :priority => 0.7
  add '/tratamientos/implantologia', :changefreq => 'monthly', :priority => 0.9
  add '/tratamientos/periodoncia', :changefreq => 'monthly', :priority => 0.9
  add '/tratamientos/rehabilitacion', :changefreq => 'monthly', :priority => 0.9
  add '/tratamientos/odontologia_conservadora', :changefreq => 'monthly', :priority => 0.9
  add '/tratamientos/odontologia_estetica', :changefreq => 'monthly', :priority => 0.9
  add '/tratamientos/odontologia_preventiva', :changefreq => 'monthly', :priority => 0.9
  add '/tratamientos/plasma_rico_en_factores_de_crecimiento', :changefreq => 'monthly', :priority => 0.9
  add '/tratamientos/tecnologia', :changefreq => 'monthly', :priority => 0.9
end
SitemapGenerator::Sitemap.ping_search_engines
