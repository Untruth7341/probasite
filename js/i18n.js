/* =========================================================
   Grikona — i18n (ES / EN / ZH)
   Uso:  window.GRIKONA_I18N.t("clave")
   Atributos en HTML:
     data-i18n              -> textContent
     data-i18n-html         -> innerHTML
     data-i18n-placeholder  -> placeholder
     data-i18n-aria         -> aria-label
   ========================================================= */
(function () {
  "use strict";

  var STORAGE_KEY = "grikona_lang";
  var DEFAULT_LANG = "es";

  var LANGUAGES = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "zh", label: "中文", flag: "🇨🇳" }
  ];

  var T = {
    /* ================= ESPAÑOL ================= */
    es: {
      "meta.title": "Grikona — Inmobiliaria verificada en Valencia",
      "nav.how": "Cómo funciona",
      "nav.trust": "Confianza",
      "nav.pricing": "Precios",
      "nav.faq": "FAQ",
      "nav.agencies": "Para inmobiliarias",
      "nav.cta": "Valoración gratuita",
      "nav.menu": "Abrir menú",

      "hero.eyebrow": "Inmobiliaria en Valencia · RAICV-6201",
      "hero.h1": "Tu hogar en Valencia, verificado y sin sorpresas",
      "hero.lead": "Compra, vende o alquila con un equipo que comprueba cada propiedad y te acompaña de la primera visita a la firma. Sin anuncios fantasma, sin comisiones abusivas.",
      "hero.cta1": "Quiero acceso anticipado",
      "hero.cta2": "Ver cómo funciona",
      "hero.socialStrong": "+100 familias",
      "hero.socialText": "ya confían en Grikona",

      "phone.demo": "DEMO",
      "phone.title": "Tu próximo hogar",
      "phone.subtitle": "Valencia",
      "phone.feedback": "Desliza y descubre",
      "phone.tagline": "Tu hogar empieza con un Grikona Match",
      "phone.verified": "Verificado",
      "phone.stampLike": "ME ENCAJA",
      "phone.stampSkip": "SIGUIENTE",
      "deck.match": "¡Match! ",
      "deck.discard": "Descartado: ",

      "prop1.name": "Ático en Ruzafa", "prop1.zone": "Ruzafa · Valencia", "prop1.specs": "3 hab · 95 m²",
      "prop2.name": "Piso en El Carmen", "prop2.zone": "El Carmen · Valencia", "prop2.specs": "2 hab · 78 m²",
      "prop3.name": "Piso en El Cabanyal", "prop3.zone": "El Cabanyal · Valencia", "prop3.specs": "2 hab · 70 m²",
      "prop4.name": "Chalet en La Cañada", "prop4.zone": "La Cañada · Valencia", "prop4.specs": "4 hab · 210 m²",
      "prop5.name": "Piso en Benimaclet", "prop5.zone": "Benimaclet · Valencia", "prop5.specs": "3 hab · 88 m²",

      "strip.label": "Trabajamos en",

      "problem.eyebrow": "El problema",
      "problem.h2": "El mercado inmobiliario tiene un problema de calidad, no de oferta",
      "problem.lead": "Miles de viviendas se venden cada año en Valencia. Pero la experiencia de comprar, vender o alquilar sigue siendo lenta, cara y opaca.",
      "problem.1.label": "de anuncios en portales son duplicados o directamente fantasma",
      "problem.1.title": "Buscas piso y pierdes el tiempo",
      "problem.1.body": "Navegas entre anuncios falsos, precios inflados y contactos que nunca responden. Envías decenas de mensajes y no sabes si el piso sigue disponible.",
      "problem.2.label": "de los contactos que recibes no tienen intención real de comprar",
      "problem.2.title": "Publicas y te llueven curiosos",
      "problem.2.body": "Pones tu piso en un portal y recibes decenas de llamadas de agencias, curiosos y personas que no están en posición de comprar o alquilar.",
      "problem.3.label": "de gestión media por operación entre visitas, llamadas y papeleo",
      "problem.3.title": "Gestionar una operación desgasta",
      "problem.3.body": "Visitas, documentación, negociación y seguimiento. El cuello de botella no es encontrar interesados, es llevar la operación hasta el final sin errores.",

      "solution.eyebrow": "La solución",
      "solution.h2": "Una plataforma para buscar. Un equipo para acompañarte.",
      "solution.lead": "Encuentra viviendas verificadas desde cualquier dispositivo y deja que nuestro equipo se encargue de la parte difícil: visitas, negociación y papeleo.",
      "solution.appLabel": "La app móvil · dos perfiles",
      "solution.seekers": "Buscadores",
      "solution.seekersH": "Encuentra tu hogar.",
      "solution.seekersP": "Descubre viviendas para comprar o alquilar y habla con quien las gestiona.",
      "solution.owners": "Propietarios",
      "solution.ownersH": "Encuentra a quien lo busca.",
      "solution.ownersP": "Publica tu vivienda, recibe contactos cualificados y elige cuánto apoyo necesitas.",
      "solution.appClosing": "Dos lados de una misma conexión, en la misma app.",
      "solution.dashLabel": "El panel web · Inmobiliarias",
      "solution.dashH": "Acompaña a quien quiere tu ayuda.",
      "solution.dashP": "Recibe solicitudes de propietarios y organiza captaciones, equipo y seguimiento desde tu panel profesional.",
      "solution.dashLink": "Conoce el dashboard",
      "solution.helpEyebrow": "Si publicas una vivienda",
      "solution.helpH": "La ayuda profesional empieza con tu decisión.",
      "solution.helpP": "Al publicar, eliges cómo quieres gestionar tu inmueble. Así conectamos tu anuncio con los profesionales adecuados.",
      "choice1": "Quiero ayuda desde el principio",
      "choice1p": "Te conectamos con agentes verificados que trabajan en tu zona y con tu tipo de vivienda. Ellos se encargan de las visitas, la negociación y toda la documentación.",
      "choice2": "Primero lo intento por mi cuenta",
      "choice2p": "Si eliges esta opción y no encuentras un match en un plazo razonable, se activa la conexión con profesionales. Tú decides dejar preparada esa ayuda.",
      "choice3": "Prefiero gestionarlo directamente",
      "choice3p": "Publicas y hablas con compradores e inquilinos verificados. Mantienes la gestión de tu vivienda completamente en tus manos.",

      "trust.eyebrow": "Grikona / Confianza",
      "trust.title": "Confianza<br>desde el<br><span>primer día.</span>",
      "trust.statement": "Construido sobre verificación,<br>no sobre volumen.",
      "trust.intro": "Mientras otros portales priorizan la cantidad, nosotros comprobamos cada persona y cada propiedad antes de publicar.",
      "trust.verifTitle": "Capas de<br><strong>verificación.</strong>",
      "trust.v1t": "Identidad verificada", "trust.v1p": "DNI/NIE y comprobación documental obligatoria de cada propietario.",
      "trust.v2t": "Anuncios reales", "trust.v2p": "Verificación catastral y visita física de cada propiedad antes de publicarla.",
      "trust.v3t": "Datos protegidos", "trust.v3p": "Infraestructura segura y cumplimiento estricto del RGPD.",
      "trust.community": "Familias acompañadas",
      "trust.fee": "Comisión de captación durante la fase de lanzamiento",

      "how.eyebrow": "Cómo funciona",
      "how.h2": "Tu conexión empieza en la app",
      "how.lead": "Dos perfiles en la misma app: busca tu próximo hogar o publica la vivienda que quieres vender o alquilar.",
      "how.tabSeekers": "Buscadores",
      "how.tabOwners": "Propietarios",
      "how.s1t": "Dinos qué buscas", "how.s1p": "Presupuesto real, zona, plazos. Nuestro sistema aprende tus preferencias reales, no solo los filtros que marcas.",
      "how.s2t": "Recibe solo anuncios verificados", "how.s2p": "Cada propiedad pasa verificación de identidad, titularidad catastral y control de calidad. Nada de anuncios fantasma.",
      "how.s3t": "Conecta directamente", "how.s3p": "Cuando hay encaje, se produce el match. Contacto directo con el propietario o su agente, sin intermediarios opacos.",
      "how.o1t": "Publica tu vivienda", "how.o1p": "Sube fotos, datos y precio. Verificamos la titularidad y te ayudamos a fijar un precio competitivo de mercado.",
      "how.o2t": "Recibe contactos cualificados", "how.o2p": "Solo personas verificadas y con intención real de comprar o alquilar. Tú decides cómo gestionar cada contacto.",
      "how.o3t": "Cierra con apoyo o en solitario", "how.o3p": "Gestiona la operación tú mismo o pide ayuda a nuestro equipo en cualquier punto del proceso.",
      "how.dashEyebrow": "Para inmobiliarias · Dashboard web",
      "how.dashH": "Tu trabajo profesional tiene su propio espacio.",
      "how.dashP": "Consulta la evolución de tus contactos, los matches y el estado de tu cartera desde las analíticas del dashboard.",
      "how.kpi1": "Contactos este mes", "how.kpi2": "Matches activos", "how.kpi3": "Cartera",
      "how.chartTitle": "Evolución de leads y matches",
      "how.dashNote": "Dashboard real · Analíticas con datos de demostración.",
      "dash.nav1": "Resumen", "dash.nav2": "Propiedades", "dash.nav3": "Contactos", "dash.nav4": "Analíticas",

      "features.eyebrow": "Lo que nos hace diferentes",
      "features.h2": "Conectar es más fácil cuando puedes confiar.",
      "feat.1t": "Verificación como producto",
      "feat.1p": "Identidad del propietario, titularidad catastral y control de calidad del anuncio. Los portales tradicionales no verifican porque su modelo depende del volumen, no de la calidad.",
      "feat.2t": "Matching por intención real",
      "feat.2p": "Nuestro sistema analiza presupuesto efectivo, plazos de decisión y tolerancia a concesiones. No muestra lo que más se clickea: muestra lo que realmente encaja.",
      "feat.3t": "Acompañamiento humano",
      "feat.3p": "App para buscadores y propietarios, y un equipo profesional que se encarga de visitas, negociación y papeleo. Cada perfil tiene la ayuda que necesita.",
      "feat.4t": "Reputación verificable",
      "feat.4p": "Valoraciones post-interacción e historial de operaciones. Un comprador con tres operaciones cerradas no es lo mismo que un recién llegado. Confianza sin intermediarios caros.",

      "pricing.eyebrow": "Precios",
      "pricing.h2": "Empieza gratis. Crece a tu ritmo.",
      "pricing.lead": "Sin permanencia. Sin sorpresas. Paga solo por lo que necesitas.",
      "plan1.label": "App · Para particulares", "plan1.name": "Gratis",
      "plan1.f1": "Anuncios limitados", "plan1.f2": "Mensajes limitados", "plan1.f3": "Verificación básica",
      "plan1.cta": "Empezar gratis",
      "plan2.label": "App · Para propietarios activos", "plan2.name": "Pro Individual",
      "plan2.f1": "Hasta 5 anuncios activos", "plan2.f2": "Mensajes ilimitados", "plan2.f3": "Estadísticas de rendimiento", "plan2.f4": "Visibilidad mejorada",
      "plan2.cta": "Probar 14 días gratis", "plan2.popular": "Más popular",
      "plan3.label": "Dashboard · Para inmobiliarias", "plan3.name": "Pro Agencia",
      "plan3.f1": "Anuncios ilimitados", "plan3.f2": "Dashboard con CRM", "plan3.f3": "Analíticas por asesor", "plan3.f4": "Posicionamiento premium", "plan3.f5": "Acceso al feed opt-in",
      "plan3.cta": "Probar 14 días gratis",
      "pricing.note": "También disponible: anuncios destacados desde 1,99€/día, etiquetas especiales desde 0,99€ y créditos de contacto desde 0,50€.",

      "cmp.eyebrow": "Comparativa",
      "cmp.h2": "¿Cómo se compara Grikona?",
      "cmp.h.feature": "Característica", "cmp.h.grikona": "Grikona", "cmp.h.portals": "Portales tradicionales", "cmp.h.digital": "Agencias digitales",
      "cmp.r1": "Modelo", "cmp.r1.g": "Marketplace verificado + agencia", "cmp.r1.p": "Portal de anuncios", "cmp.r1.d": "Agencia digital",
      "cmp.r2": "Verificación de anuncios", "cmp.r2.g": "Identidad + titularidad + visita", "cmp.r2.p": "No verifican (modelo de volumen)", "cmp.r2.d": "Solo propiedades propias",
      "cmp.r3": "Comisión por operación", "cmp.r3.g": "0% (fase lanzamiento)", "cmp.r3.p": "No aplica", "cmp.r3.d": "2-5% sobre la venta",
      "cmp.r4": "Cuota mensual mínima", "cmp.r4.g": "0€ (plan gratuito)", "cmp.r4.p": "Desde 300€/mes", "cmp.r4.d": "No aplica",
      "cmp.r5": "Matching inteligente", "cmp.r5.g": "Por intención real", "cmp.r5.p": "Por filtros y posicionamiento pagado", "cmp.r5.d": "Asignación interna",
      "cmp.r6": "Ayuda a elección del propietario", "cmp.r6.g": "Exclusivo", "cmp.r6.p": "No existe", "cmp.r6.d": "No existe",
      "cmp.r7": "Dashboard profesional", "cmp.r7.g": "CRM + analíticas por asesor", "cmp.r7.p": "Herramientas básicas", "cmp.r7.d": "Solo uso interno",
      "cmp.m.portals": "Portales", "cmp.m.digital": "Agencias digitales",

      "roadmap.eyebrow": "Roadmap",
      "roadmap.h2": "Una visión, paso a paso",
      "roadmap.m1t": "Fundación", "roadmap.m1p": "Nace Grikona en el centro de Valencia. Equipo inicial, marca y primeras operaciones de barrio.",
      "roadmap.m2t": "Consolidación", "roadmap.m2p": "Más de 10 años de experiencia acumulada y una cartera estable en Ruzafa, El Carmen y L'Eixample.",
      "roadmap.m3t": "Digitalización", "roadmap.m3p": "Inicio del desarrollo de la plataforma: verificación documental, matching y panel para agencias.",
      "roadmap.m4t": "Plataforma verificada", "roadmap.m4p": "Lanzamiento de la app y el dashboard en Valencia capital, con las primeras agencias colaboradoras.",
      "roadmap.m5t": "Referencia en España", "roadmap.m5p": "Expansión a Alicante, Castellón, Málaga, Sevilla y Bilbao. La nueva forma de operar en inmobiliario.",
      "roadmap.vision": "«La vivienda deja de ser un dolor de cabeza y se convierte en una experiencia natural, eficiente y empoderada.»",

      "faq.eyebrow": "FAQ",
      "faq.h2": "Preguntas frecuentes",
      "faq.q1": "¿Qué es Grikona?", "faq.a1": "Grikona es una inmobiliaria de Valencia que combina una plataforma digital de propiedades verificadas con un equipo profesional que te acompaña en la compra, la venta o el alquiler.",
      "faq.q2": "¿En qué se diferencia de los portales tradicionales?", "faq.a2": "Aquí no publicamos anuncios sin comprobar. Verificamos la identidad del propietario, la titularidad catastral y visitamos la propiedad antes de publicarla. Así no pierdes el tiempo con anuncios duplicados o fantasma.",
      "faq.q3": "¿Cuánto cuesta usar Grikona?", "faq.a3": "Usar la app es gratis. Si eres propietario activo, el plan Pro Individual cuesta 9,99€/mes. Para inmobiliarias, el plan Pro Agencia cuesta 49,99€/mes. Durante la fase de lanzamiento no cobramos comisión de captación.",
      "faq.q4": "¿Cómo verificáis los anuncios?", "faq.a4": "Aplicamos tres capas: identidad verificada (DNI/NIE y comprobación documental), anuncios reales (verificación catastral y visita física) y datos protegidos (infraestructura segura y cumplimiento del RGPD).",
      "faq.q5": "¿En qué zona opera Grikona?", "faq.a5": "Empezamos en Valencia capital y su área metropolitana: Ruzafa, El Carmen, El Cabanyal, Benimaclet, L'Eixample, Ciutat Vella, Quatre Carreres y La Cañada, entre otras.",
      "faq.q6": "¿Puedo elegir si quiero ayuda inmobiliaria?", "faq.a6": "Sí. Al publicar eliges si quieres acompañamiento desde el principio, si prefieres intentarlo por tu cuenta con ayuda de reserva, o si prefieres gestionarlo todo directamente.",
      "faq.q7": "¿Cómo puedo unirme?", "faq.a7": "Apúntate a la lista de espera desde el formulario de esta página. Te avisaremos en cuanto abramos el acceso anticipado en Valencia.",

      "cta.waitlist": "+100 ya en la lista de espera",
      "cta.h2": "Tu próxima conexión está a un <span class=\"mow\" aria-hidden=\"true\"></span> de distancia",
      "cta.p": "Busques hogar o publiques tu vivienda, apúntate al acceso anticipado. Empezamos en Valencia.",
      "cta.placeholder": "tu@email.com",
      "cta.button": "Quiero acceso",
      "cta.done": "¡Apuntado!",
      "cta.meta": "Lanzamiento en Valencia · 2026<br>¿Prefieres hablar directamente? <a href=\"mailto:info@grikona.com\">info@grikona.com</a>",

      "footer.desc": "Una plataforma para buscar y publicar vivienda. Un equipo que te acompaña en la compra, la venta y el alquiler en Valencia.",
      "footer.nav": "Navegación",
      "footer.contact": "Contacto",
      "footer.copy": "© 2026 Grikona · Agencia inmobiliaria registrada RAICV-6201",
      "footer.privacy": "Política de privacidad",
      "footer.terms": "Términos y condiciones",
      "footer.cookies": "Cookies",

      "chat.title": "Soporte Grikona",
      "chat.status": "En línea · respondemos en minutos",
      "chat.welcome": "¡Hola! 👋 Soy el asistente de Grikona. ¿En qué puedo ayudarte hoy?",
      "chat.placeholder": "Escribe tu mensaje...",
      "chat.send": "Enviar",
      "chat.quick1": "Quiero comprar", "chat.quick2": "Quiero alquilar", "chat.quick3": "Quiero vender",
      "chat.replyBuy": "¡Genial! Cuéntanos la zona y tu presupuesto aproximado y te enviamos opciones verificadas.",
      "chat.replyRent": "¡Perfecto! Dinos la zona y el alquiler mensual que buscas y te mostramos opciones disponibles.",
      "chat.replySell": "Podemos hacer una valoración gratuita de tu vivienda. ¿Nos dejas tu email o teléfono?",
      "chat.replyDefault": "Gracias por escribirnos. Un asesor de Grikona te responderá en breve. También puedes dejarnos tu email.",
      "chat.launcherAria": "Abrir chat de soporte",
      "chat.closeAria": "Cerrar chat"
    },

    /* ================= ENGLISH ================= */
    en: {
      "meta.title": "Grikona — Verified real estate in Valencia",
      "nav.how": "How it works",
      "nav.trust": "Trust",
      "nav.pricing": "Pricing",
      "nav.faq": "FAQ",
      "nav.agencies": "For agencies",
      "nav.cta": "Free valuation",
      "nav.menu": "Open menu",

      "hero.eyebrow": "Real estate agency in Valencia · RAICV-6201",
      "hero.h1": "Your home in Valencia, verified and with no surprises",
      "hero.lead": "Buy, sell or rent with a team that checks every property and supports you from the first viewing to the signing. No ghost listings, no abusive fees.",
      "hero.cta1": "I want early access",
      "hero.cta2": "See how it works",
      "hero.socialStrong": "+100 families",
      "hero.socialText": "already trust Grikona",

      "phone.demo": "DEMO",
      "phone.title": "Your next home",
      "phone.subtitle": "Valencia",
      "phone.feedback": "Swipe and discover",
      "phone.tagline": "Your home starts with a Grikona Match",
      "phone.verified": "Verified",
      "phone.stampLike": "I LIKE IT",
      "phone.stampSkip": "NEXT",
      "deck.match": "It's a match! ",
      "deck.discard": "Discarded: ",

      "prop1.name": "Penthouse in Ruzafa", "prop1.zone": "Ruzafa · Valencia", "prop1.specs": "3 beds · 95 m²",
      "prop2.name": "Flat in El Carmen", "prop2.zone": "El Carmen · Valencia", "prop2.specs": "2 beds · 78 m²",
      "prop3.name": "Flat in El Cabanyal", "prop3.zone": "El Cabanyal · Valencia", "prop3.specs": "2 beds · 70 m²",
      "prop4.name": "Villa in La Cañada", "prop4.zone": "La Cañada · Valencia", "prop4.specs": "4 beds · 210 m²",
      "prop5.name": "Flat in Benimaclet", "prop5.zone": "Benimaclet · Valencia", "prop5.specs": "3 beds · 88 m²",

      "strip.label": "We work in",

      "problem.eyebrow": "The problem",
      "problem.h2": "The property market has a quality problem, not a supply problem",
      "problem.lead": "Thousands of homes are sold in Valencia every year. Yet buying, selling or renting is still slow, expensive and opaque.",
      "problem.1.label": "of listings on portals are duplicates or outright fake",
      "problem.1.title": "You look for a flat and waste your time",
      "problem.1.body": "You browse fake listings, inflated prices and contacts that never reply. You send dozens of messages and never know if the flat is still available.",
      "problem.2.label": "of the enquiries you get have no real intention to buy",
      "problem.2.title": "You list and get flooded with time-wasters",
      "problem.2.body": "You put your flat on a portal and get dozens of calls from agencies, curious onlookers and people who cannot actually buy or rent.",
      "problem.3.label": "average hours of admin per deal across viewings, calls and paperwork",
      "problem.3.title": "Managing a deal is exhausting",
      "problem.3.body": "Viewings, paperwork, negotiation and follow-up. The bottleneck is not finding interested people, it is closing the deal without mistakes.",

      "solution.eyebrow": "The solution",
      "solution.h2": "A platform to search. A team to guide you.",
      "solution.lead": "Find verified homes from any device and let our team handle the hard part: viewings, negotiation and paperwork.",
      "solution.appLabel": "The mobile app · two profiles",
      "solution.seekers": "Seekers",
      "solution.seekersH": "Find your home.",
      "solution.seekersP": "Discover homes to buy or rent and talk to whoever manages them.",
      "solution.owners": "Owners",
      "solution.ownersH": "Find the people looking for it.",
      "solution.ownersP": "List your home, receive qualified leads and choose how much support you need.",
      "solution.appClosing": "Two sides of one connection, in the same app.",
      "solution.dashLabel": "The web dashboard · Agencies",
      "solution.dashH": "Guide those who want your help.",
      "solution.dashP": "Receive owner requests and organise listings, team and follow-up from your professional dashboard.",
      "solution.dashLink": "See the dashboard",
      "solution.helpEyebrow": "If you list a home",
      "solution.helpH": "Professional help starts with your decision.",
      "solution.helpP": "When you list, you choose how you want to manage your property. That is how we connect your listing with the right professionals.",
      "choice1": "I want help from the start",
      "choice1p": "We connect you with verified agents who work in your area and with your type of home. They handle viewings, negotiation and all the paperwork.",
      "choice2": "I'll try it on my own first",
      "choice2p": "If you choose this and don't find a match within a reasonable time, the connection with professionals is activated. You decide to keep that help ready.",
      "choice3": "I'd rather manage it myself",
      "choice3p": "You list and talk to verified buyers and tenants. You keep the management of your home entirely in your hands.",

      "trust.eyebrow": "Grikona / Trust",
      "trust.title": "Trust<br>from<br><span>day one.</span>",
      "trust.statement": "Built on verification,<br>not on volume.",
      "trust.intro": "While other portals prioritise quantity, we check every person and every property before publishing.",
      "trust.verifTitle": "Layers of<br><strong>verification.</strong>",
      "trust.v1t": "Verified identity", "trust.v1p": "ID document and mandatory documentary checks for every owner.",
      "trust.v2t": "Real listings", "trust.v2p": "Land-registry verification and a physical visit to every property before publishing.",
      "trust.v3t": "Protected data", "trust.v3p": "Secure infrastructure and strict GDPR compliance.",
      "trust.community": "Families supported",
      "trust.fee": "Acquisition commission during the launch phase",

      "how.eyebrow": "How it works",
      "how.h2": "Your connection starts in the app",
      "how.lead": "Two profiles in the same app: find your next home or list the property you want to sell or rent.",
      "how.tabSeekers": "Seekers",
      "how.tabOwners": "Owners",
      "how.s1t": "Tell us what you're looking for", "how.s1p": "Real budget, area, timing. Our system learns your real preferences, not just the filters you tick.",
      "how.s2t": "Get only verified listings", "how.s2p": "Every property goes through identity, land-registry and quality checks. No ghost listings.",
      "how.s3t": "Connect directly", "how.s3p": "When there's a fit, the match happens. Direct contact with the owner or their agent, with no opaque middlemen.",
      "how.o1t": "List your home", "how.o1p": "Upload photos, details and price. We verify ownership and help you set a competitive market price.",
      "how.o2t": "Receive qualified leads", "how.o2p": "Only verified people with a real intention to buy or rent. You decide how to handle each lead.",
      "how.o3t": "Close with support or on your own", "how.o3p": "Manage the deal yourself or ask our team for help at any point in the process.",
      "how.dashEyebrow": "For agencies · Web dashboard",
      "how.dashH": "Your professional work has its own space.",
      "how.dashP": "Track your leads, matches and portfolio status from the dashboard analytics.",
      "how.kpi1": "Leads this month", "how.kpi2": "Active matches", "how.kpi3": "Portfolio",
      "how.chartTitle": "Leads and matches over time",
      "how.dashNote": "Real dashboard · Analytics with demo data.",
      "dash.nav1": "Overview", "dash.nav2": "Properties", "dash.nav3": "Leads", "dash.nav4": "Analytics",

      "features.eyebrow": "What sets us apart",
      "features.h2": "Connecting is easier when you can trust.",
      "feat.1t": "Verification as a product",
      "feat.1p": "Owner identity, land-registry ownership and listing quality checks. Traditional portals don't verify because their model depends on volume, not quality.",
      "feat.2t": "Matching by real intent",
      "feat.2p": "Our system analyses effective budget, decision timing and tolerance for trade-offs. It doesn't show what gets the most clicks: it shows what truly fits.",
      "feat.3t": "Human support",
      "feat.3p": "An app for seekers and owners, and a professional team that handles viewings, negotiation and paperwork. Every profile gets the help it needs.",
      "feat.4t": "Verifiable reputation",
      "feat.4p": "Post-interaction reviews and a transaction history. A buyer with three closed deals is not the same as a newcomer. Trust without expensive middlemen.",

      "pricing.eyebrow": "Pricing",
      "pricing.h2": "Start free. Grow at your own pace.",
      "pricing.lead": "No lock-in. No surprises. Pay only for what you need.",
      "plan1.label": "App · For individuals", "plan1.name": "Free",
      "plan1.f1": "Limited listings", "plan1.f2": "Limited messages", "plan1.f3": "Basic verification",
      "plan1.cta": "Start free",
      "plan2.label": "App · For active owners", "plan2.name": "Pro Individual",
      "plan2.f1": "Up to 5 active listings", "plan2.f2": "Unlimited messages", "plan2.f3": "Performance statistics", "plan2.f4": "Enhanced visibility",
      "plan2.cta": "Try 14 days free", "plan2.popular": "Most popular",
      "plan3.label": "Dashboard · For agencies", "plan3.name": "Pro Agency",
      "plan3.f1": "Unlimited listings", "plan3.f2": "Dashboard with CRM", "plan3.f3": "Per-agent analytics", "plan3.f4": "Premium positioning", "plan3.f5": "Access to the opt-in feed",
      "plan3.cta": "Try 14 days free",
      "pricing.note": "Also available: featured listings from €1.99/day, special tags from €0.99 and contact credits from €0.50.",

      "cmp.eyebrow": "Comparison",
      "cmp.h2": "How does Grikona compare?",
      "cmp.h.feature": "Feature", "cmp.h.grikona": "Grikona", "cmp.h.portals": "Traditional portals", "cmp.h.digital": "Digital agencies",
      "cmp.r1": "Model", "cmp.r1.g": "Verified marketplace + agency", "cmp.r1.p": "Listing portal", "cmp.r1.d": "Digital agency",
      "cmp.r2": "Listing verification", "cmp.r2.g": "Identity + ownership + visit", "cmp.r2.p": "They don't verify (volume model)", "cmp.r2.d": "Only their own properties",
      "cmp.r3": "Commission per deal", "cmp.r3.g": "0% (launch phase)", "cmp.r3.p": "Not applicable", "cmp.r3.d": "2-5% of the sale",
      "cmp.r4": "Minimum monthly fee", "cmp.r4.g": "€0 (free plan)", "cmp.r4.p": "From €300/month", "cmp.r4.d": "Not applicable",
      "cmp.r5": "Smart matching", "cmp.r5.g": "By real intent", "cmp.r5.p": "By filters and paid positioning", "cmp.r5.d": "Internal assignment",
      "cmp.r6": "Owner's choice of help", "cmp.r6.g": "Exclusive", "cmp.r6.p": "Doesn't exist", "cmp.r6.d": "Doesn't exist",
      "cmp.r7": "Professional dashboard", "cmp.r7.g": "CRM + per-agent analytics", "cmp.r7.p": "Basic tools", "cmp.r7.d": "Internal use only",
      "cmp.m.portals": "Portals", "cmp.m.digital": "Digital agencies",

      "roadmap.eyebrow": "Roadmap",
      "roadmap.h2": "A vision, step by step",
      "roadmap.m1t": "Founding", "roadmap.m1p": "Grikona is born in central Valencia. Initial team, brand and first neighbourhood deals.",
      "roadmap.m2t": "Consolidation", "roadmap.m2p": "Over 10 years of experience and a stable portfolio in Ruzafa, El Carmen and L'Eixample.",
      "roadmap.m3t": "Digitalisation", "roadmap.m3p": "Development of the platform begins: document verification, matching and an agency dashboard.",
      "roadmap.m4t": "Verified platform", "roadmap.m4p": "Launch of the app and dashboard in Valencia city, with the first partner agencies.",
      "roadmap.m5t": "A benchmark in Spain", "roadmap.m5p": "Expansion to Alicante, Castellón, Málaga, Sevilla and Bilbao. The new way to work in real estate.",
      "roadmap.vision": "\"Housing stops being a headache and becomes a natural, efficient and empowering experience.\"",

      "faq.eyebrow": "FAQ",
      "faq.h2": "Frequently asked questions",
      "faq.q1": "What is Grikona?", "faq.a1": "Grikona is a Valencia estate agency that combines a digital platform of verified properties with a professional team that supports you when buying, selling or renting.",
      "faq.q2": "How is it different from traditional portals?", "faq.a2": "We don't publish unchecked listings. We verify the owner's identity and ownership and visit the property before publishing it. So you don't waste time on duplicate or fake ads.",
      "faq.q3": "How much does Grikona cost?", "faq.a3": "Using the app is free. If you're an active owner, the Pro Individual plan costs €9.99/month. For agencies, the Pro Agency plan costs €49.99/month. During the launch phase we don't charge an acquisition commission.",
      "faq.q4": "How do you verify listings?", "faq.a4": "We apply three layers: verified identity (ID and document checks), real listings (land-registry verification and a physical visit) and protected data (secure infrastructure and GDPR compliance).",
      "faq.q5": "Where does Grikona operate?", "faq.a5": "We start in Valencia city and its metropolitan area: Ruzafa, El Carmen, El Cabanyal, Benimaclet, L'Eixample, Ciutat Vella, Quatre Carreres and La Cañada, among others.",
      "faq.q6": "Can I choose whether I want agency help?", "faq.a6": "Yes. When listing you choose whether you want support from the start, prefer to try on your own with backup help, or prefer to manage everything yourself.",
      "faq.q7": "How can I join?", "faq.a7": "Join the waiting list using the form on this page. We'll let you know as soon as early access opens in Valencia.",

      "cta.waitlist": "+100 already on the waiting list",
      "cta.h2": "Your next connection is one <span class=\"mow\" aria-hidden=\"true\"></span> away",
      "cta.p": "Whether you're looking for a home or listing your property, join early access. We start in Valencia.",
      "cta.placeholder": "you@email.com",
      "cta.button": "I want access",
      "cta.done": "You're in!",
      "cta.meta": "Launch in Valencia · 2026<br>Prefer to talk directly? <a href=\"mailto:info@grikona.com\">info@grikona.com</a>",

      "footer.desc": "A platform to search and list homes. A team that supports you when buying, selling and renting in Valencia.",
      "footer.nav": "Navigation",
      "footer.contact": "Contact",
      "footer.copy": "© 2026 Grikona · Registered estate agency RAICV-6201",
      "footer.privacy": "Privacy policy",
      "footer.terms": "Terms and conditions",
      "footer.cookies": "Cookies",

      "chat.title": "Grikona Support",
      "chat.status": "Online · we reply in minutes",
      "chat.welcome": "Hi! 👋 I'm the Grikona assistant. How can I help you today?",
      "chat.placeholder": "Type your message...",
      "chat.send": "Send",
      "chat.quick1": "I want to buy", "chat.quick2": "I want to rent", "chat.quick3": "I want to sell",
      "chat.replyBuy": "Great! Tell us the area and your approximate budget and we'll send you verified options.",
      "chat.replyRent": "Perfect! Tell us the area and monthly rent you're after and we'll show you available options.",
      "chat.replySell": "We can do a free valuation of your home. Could you leave us your email or phone?",
      "chat.replyDefault": "Thanks for reaching out. A Grikona advisor will reply shortly. You can also leave us your email.",
      "chat.launcherAria": "Open support chat",
      "chat.closeAria": "Close chat"
    },

    /* ================= 中文 ================= */
    zh: {
      "meta.title": "Grikona — 瓦伦西亚认证房产中介",
      "nav.how": "运作方式",
      "nav.trust": "信任",
      "nav.pricing": "价格",
      "nav.faq": "常见问题",
      "nav.agencies": "面向中介机构",
      "nav.cta": "免费估价",
      "nav.menu": "打开菜单",

      "hero.eyebrow": "瓦伦西亚房产中介 · RAICV-6201",
      "hero.h1": "您在瓦伦西亚的家，认证可靠，绝无意外",
      "hero.lead": "买卖或租赁，由专业团队核验每一处房源，全程陪伴您从看房到签约。没有虚假房源，没有高额佣金。",
      "hero.cta1": "我要抢先体验",
      "hero.cta2": "了解运作方式",
      "hero.socialStrong": "100+ 个家庭",
      "hero.socialText": "已经信任 Grikona",

      "phone.demo": "演示",
      "phone.title": "您的下一个家",
      "phone.subtitle": "瓦伦西亚",
      "phone.feedback": "滑动发现",
      "phone.tagline": "家的旅程，从 Grikona 匹配开始",
      "phone.verified": "已认证",
      "phone.stampLike": "我喜欢",
      "phone.stampSkip": "下一个",
      "deck.match": "匹配成功！",
      "deck.discard": "已跳过：",

      "prop1.name": "鲁萨法顶层公寓", "prop1.zone": "鲁萨法 · 瓦伦西亚", "prop1.specs": "3室 · 95㎡",
      "prop2.name": "埃尔卡门公寓", "prop2.zone": "埃尔卡门 · 瓦伦西亚", "prop2.specs": "2室 · 78㎡",
      "prop3.name": "卡巴尼亚尔公寓", "prop3.zone": "卡巴尼亚尔 · 瓦伦西亚", "prop3.specs": "2室 · 70㎡",
      "prop4.name": "拉卡尼亚达别墅", "prop4.zone": "拉卡尼亚达 · 瓦伦西亚", "prop4.specs": "4室 · 210㎡",
      "prop5.name": "贝尼马克莱特公寓", "prop5.zone": "贝尼马克莱特 · 瓦伦西亚", "prop5.specs": "3室 · 88㎡",

      "strip.label": "我们的服务区域",

      "problem.eyebrow": "问题",
      "problem.h2": "房地产市场的问题在于质量，而非供给",
      "problem.lead": "瓦伦西亚每年售出成千上万套住房，但买卖或租赁的过程依然缓慢、昂贵且不透明。",
      "problem.1.label": "的房产门户信息是重复或虚假的",
      "problem.1.title": "找房浪费大量时间",
      "problem.1.body": "您在虚假房源、虚高价格和无人回复的信息之间浏览。发出数十条消息，却不知道房子是否还在。",
      "problem.2.label": "的咨询者没有真实购买意向",
      "problem.2.title": "发布房源却引来大量无关咨询",
      "problem.2.body": "把房子挂到门户网站，就会接到大量中介、围观者和根本买不起或租不起的人的电话。",
      "problem.3.label": "的每笔交易平均管理工时（看房、电话和文书）",
      "problem.3.title": "管理一笔交易令人疲惫",
      "problem.3.body": "看房、文件、谈判和跟进。瓶颈不在于找到意向客户，而在于无差错地完成交易。",

      "solution.eyebrow": "解决方案",
      "solution.h2": "一个找房平台，一支陪伴您的团队。",
      "solution.lead": "在任何设备上找到认证房源，把看房、谈判和文书等难题交给我们的团队。",
      "solution.appLabel": "手机应用 · 两种身份",
      "solution.seekers": "找房者",
      "solution.seekersH": "找到您的家。",
      "solution.seekersP": "发现可买可租的房源，并与管理方直接沟通。",
      "solution.owners": "房东",
      "solution.ownersH": "找到真正想找它的人。",
      "solution.ownersP": "发布您的房源，获得优质咨询，并自行选择所需的支持程度。",
      "solution.appClosing": "连接的两端，尽在同一个应用。",
      "solution.dashLabel": "网页后台 · 中介机构",
      "solution.dashH": "陪伴那些需要您帮助的人。",
      "solution.dashP": "接收房东的委托，在专业后台管理房源、团队和跟进工作。",
      "solution.dashLink": "了解后台",
      "solution.helpEyebrow": "如果您发布房源",
      "solution.helpH": "专业帮助，从您的选择开始。",
      "solution.helpP": "发布时，您可以选择如何管理房产。我们会据此将您的房源与合适的专业人士对接。",
      "choice1": "我希望从一开始就获得帮助",
      "choice1p": "我们会为您对接在您所在区域、擅长您这类房源的认证经纪人，由他们负责看房、谈判和全部文书。",
      "choice2": "我想先自己试试",
      "choice2p": "如果选择此项且在一定时间内未匹配成功，系统会自动为您对接专业人士。由您决定是否保留这项备用帮助。",
      "choice3": "我更愿意自己管理",
      "choice3p": "您发布房源，并与认证的买家或租客沟通。房产管理完全掌握在您手中。",

      "trust.eyebrow": "Grikona / 信任",
      "trust.title": "信任<br>从<span>第一天</span><br>开始。",
      "trust.statement": "建立在核验之上，<br>而非数量之上。",
      "trust.intro": "当其他门户追求数量时，我们在发布前核验每一个人和每一处房源。",
      "trust.verifTitle": "三重<br><strong>认证。</strong>",
      "trust.v1t": "身份认证", "trust.v1p": "每位房东均须提供身份证件并通过文件审核。",
      "trust.v2t": "真实房源", "trust.v2p": "发布前对每处房产进行产权核验和实地看房。",
      "trust.v3t": "数据保护", "trust.v3p": "安全的基础设施，严格遵守 GDPR。",
      "trust.community": "已服务家庭",
      "trust.fee": "启动阶段免收房源获取佣金",

      "how.eyebrow": "运作方式",
      "how.h2": "您的连接从应用开始",
      "how.lead": "同一应用，两种身份：寻找下一个家，或发布您想出售或出租的房产。",
      "how.tabSeekers": "找房者",
      "how.tabOwners": "房东",
      "how.s1t": "告诉我们您的需求", "how.s1p": "真实预算、区域、时间。我们的系统了解您的真实偏好，而不仅是您勾选的筛选条件。",
      "how.s2t": "只接收认证房源", "how.s2p": "每处房产都经过身份、产权和质量审核。没有虚假房源。",
      "how.s3t": "直接对接", "how.s3p": "一旦匹配成功，即可直接联系房东或其经纪人，没有不透明的中间环节。",
      "how.o1t": "发布您的房源", "how.o1p": "上传照片、信息和价格。我们核验产权，并帮您设定有竞争力的市场价。",
      "how.o2t": "获得优质咨询", "how.o2p": "只有经过认证、有真实购买或租赁意向的人。由您决定如何处理每条咨询。",
      "how.o3t": "独立完成或获得支持", "how.o3p": "您可以自行处理交易，或在流程的任何环节请我们的团队协助。",
      "how.dashEyebrow": "面向中介机构 · 网页后台",
      "how.dashH": "您的专业工作，拥有专属空间。",
      "how.dashP": "通过后台分析，查看咨询进展、匹配情况和房源组合状态。",
      "how.kpi1": "本月咨询", "how.kpi2": "活跃匹配", "how.kpi3": "房源组合",
      "how.chartTitle": "咨询与匹配趋势",
      "how.dashNote": "真实后台 · 演示数据分析。",
      "dash.nav1": "概览", "dash.nav2": "房源", "dash.nav3": "咨询", "dash.nav4": "分析",

      "features.eyebrow": "我们的不同之处",
      "features.h2": "当彼此信任，连接更容易。",
      "feat.1t": "把认证做成产品",
      "feat.1p": "房东身份、产权登记和房源质量审核。传统门户不做认证，因为它们的模式依赖数量而非质量。",
      "feat.2t": "基于真实意向的匹配",
      "feat.2p": "我们的系统分析实际预算、决策时间和可接受的取舍，展示的不是点击最多的，而是真正合适的。",
      "feat.3t": "真人陪伴",
      "feat.3p": "为找房者和房东提供应用，并由专业团队负责看房、谈判和文书。每种身份都能获得所需帮助。",
      "feat.4t": "可验证的声誉",
      "feat.4p": "互动后的评价和交易记录。完成过三笔交易的买家与新手截然不同。无需昂贵中介，也能建立信任。",

      "pricing.eyebrow": "价格",
      "pricing.h2": "免费开始，按需成长。",
      "pricing.lead": "无合约绑定，无隐藏费用，只为所需付费。",
      "plan1.label": "应用 · 个人用户", "plan1.name": "免费",
      "plan1.f1": "房源数量有限", "plan1.f2": "消息数量有限", "plan1.f3": "基础认证",
      "plan1.cta": "免费开始",
      "plan2.label": "应用 · 活跃房东", "plan2.name": "个人专业版",
      "plan2.f1": "最多 5 个在售房源", "plan2.f2": "无限消息", "plan2.f3": "表现数据统计", "plan2.f4": "更高曝光",
      "plan2.cta": "免费试用 14 天", "plan2.popular": "最受欢迎",
      "plan3.label": "后台 · 中介机构", "plan3.name": "机构专业版",
      "plan3.f1": "无限房源", "plan3.f2": "带 CRM 的后台", "plan3.f3": "按经纪人分析", "plan3.f4": "优质展示位置", "plan3.f5": "接入授权房源库",
      "plan3.cta": "免费试用 14 天",
      "pricing.note": "另提供：首页推荐房源 1.99€/天起，特殊标签 0.99€起，联系点数 0.50€起。",

      "cmp.eyebrow": "对比",
      "cmp.h2": "Grikona 表现如何？",
      "cmp.h.feature": "特性", "cmp.h.grikona": "Grikona", "cmp.h.portals": "传统门户", "cmp.h.digital": "数字中介",
      "cmp.r1": "模式", "cmp.r1.g": "认证平台 + 中介", "cmp.r1.p": "房源门户", "cmp.r1.d": "数字中介",
      "cmp.r2": "房源认证", "cmp.r2.g": "身份 + 产权 + 实地看房", "cmp.r2.p": "不认证（数量模式）", "cmp.r2.d": "仅自有房源",
      "cmp.r3": "每笔交易佣金", "cmp.r3.g": "0%（启动阶段）", "cmp.r3.p": "不适用", "cmp.r3.d": "成交价的 2-5%",
      "cmp.r4": "最低月费", "cmp.r4.g": "0€（免费套餐）", "cmp.r4.p": "300€/月起", "cmp.r4.d": "不适用",
      "cmp.r5": "智能匹配", "cmp.r5.g": "基于真实意向", "cmp.r5.p": "按筛选和付费排名", "cmp.r5.d": "内部指派",
      "cmp.r6": "房东自选帮助", "cmp.r6.g": "独家", "cmp.r6.p": "不存在", "cmp.r6.d": "不存在",
      "cmp.r7": "专业后台", "cmp.r7.g": "CRM + 按经纪人分析", "cmp.r7.p": "基础工具", "cmp.r7.d": "仅供内部使用",
      "cmp.m.portals": "门户", "cmp.m.digital": "数字中介",

      "roadmap.eyebrow": "发展路线",
      "roadmap.h2": "一步一步，实现愿景",
      "roadmap.m1t": "创立", "roadmap.m1p": "Grikona 在瓦伦西亚市中心成立。初始团队、品牌和首批社区交易。",
      "roadmap.m2t": "稳步发展", "roadmap.m2p": "积累超过 10 年经验，在鲁萨法、埃尔卡门和扩展区拥有稳定房源。",
      "roadmap.m3t": "数字化", "roadmap.m3p": "开始开发平台：文件核验、智能匹配和中介后台。",
      "roadmap.m4t": "认证平台上线", "roadmap.m4p": "在瓦伦西亚市推出应用和后台，并迎来首批合作中介。",
      "roadmap.m5t": "成为西班牙标杆", "roadmap.m5p": "拓展至阿利坎特、卡斯特利翁、马拉加、塞维利亚和毕尔巴鄂。房地产运营的新方式。",
      "roadmap.vision": "「住房不再是烦恼，而成为一种自然、高效、自主的体验。」",

      "faq.eyebrow": "常见问题",
      "faq.h2": "常见问题",
      "faq.q1": "什么是 Grikona？", "faq.a1": "Grikona 是瓦伦西亚的一家房产中介，将认证房源的数字平台与专业团队相结合，在买卖或租赁过程中为您提供支持。",
      "faq.q2": "与传统门户有何不同？", "faq.a2": "我们不发布未经核实的房源。发布前会核验房东身份和产权，并实地看房。这样您就不会在重复或虚假房源上浪费时间。",
      "faq.q3": "使用 Grikona 需要多少钱？", "faq.a3": "使用应用免费。活跃房东可选择个人专业版，每月 9.99€；中介机构可选择机构专业版，每月 49.99€。启动阶段不收取房源获取佣金。",
      "faq.q4": "你们如何认证房源？", "faq.a4": "我们采用三重认证：身份认证（身份证件和文件审核）、真实房源（产权核验和实地看房）以及数据保护（安全基础设施和 GDPR 合规）。",
      "faq.q5": "Grikona 在哪些区域运营？", "faq.a5": "我们首先覆盖瓦伦西亚市及都会区：鲁萨法、埃尔卡门、卡巴尼亚尔、贝尼马克莱特、扩展区、老城区、夸特雷卡雷雷斯和拉卡尼亚达等。",
      "faq.q6": "我可以选择是否需要中介帮助吗？", "faq.a6": "可以。发布时您可以选择：从一开始就获得陪伴，或先自行尝试并保留备用帮助，或完全自己管理。",
      "faq.q7": "我该如何加入？", "faq.a7": "通过本页表单加入等候名单。瓦伦西亚开放抢先体验时，我们会第一时间通知您。",

      "cta.waitlist": "已有 100+ 人加入等候名单",
      "cta.h2": "您的下一次连接，只差一个 <span class=\"mow\" aria-hidden=\"true\"></span>",
      "cta.p": "无论您是在找房还是发布房源，都欢迎加入抢先体验。我们从瓦伦西亚开始。",
      "cta.placeholder": "you@email.com",
      "cta.button": "我要加入",
      "cta.done": "已加入！",
      "cta.meta": "瓦伦西亚上线 · 2026<br>更想直接联系？<a href=\"mailto:info@grikona.com\">info@grikona.com</a>",

      "footer.desc": "一个找房与发布房源的平台。一支在瓦伦西亚陪伴您买卖和租赁的团队。",
      "footer.nav": "导航",
      "footer.contact": "联系方式",
      "footer.copy": "© 2026 Grikona · 注册房产中介 RAICV-6201",
      "footer.privacy": "隐私政策",
      "footer.terms": "条款与条件",
      "footer.cookies": "Cookie",

      "chat.title": "Grikona 客服",
      "chat.status": "在线 · 几分钟内回复",
      "chat.welcome": "您好！👋 我是 Grikona 助手，今天能帮您什么？",
      "chat.placeholder": "输入您的消息……",
      "chat.send": "发送",
      "chat.quick1": "我想买房", "chat.quick2": "我想租房", "chat.quick3": "我想卖房",
      "chat.replyBuy": "太好了！请告诉我们区域和大致预算，我们会为您推荐认证房源。",
      "chat.replyRent": "好的！请告诉我们区域和您期望的月租，我们会为您展示可选房源。",
      "chat.replySell": "我们可以为您的房产免费估价。方便留下邮箱或电话吗？",
      "chat.replyDefault": "感谢您的留言。Grikona 顾问会尽快回复您。也可以留下您的邮箱。",
      "chat.launcherAria": "打开客服聊天",
      "chat.closeAria": "关闭聊天"
    }
  };

  /* ---------- Página "Para inmobiliarias" (comparte nav/footer/chat) ---------- */
  var AG = {
    es: {
      "ag.meta.title": "Para inmobiliarias — Dashboard de Grikona",
      "ag.breadcrumb": "Inicio / Para inmobiliarias",
      "ag.hero.h1": "El dashboard para agencias que quieren captar mejor",
      "ag.hero.p": "Recibe solicitudes de propietarios que han elegido trabajar con profesionales, gestiona tu equipo y haz seguimiento de cada inmueble desde un solo panel.",
      "ag.hero.cta1": "Solicitar demo",
      "ag.hero.cta2": "Ver precios",
      "ag.dash.eyebrow": "El dashboard web",
      "ag.dash.h2": "Todo tu negocio en una sola pantalla",
      "ag.dash.lead": "Analíticas por asesor, estado de cada propiedad en tiempo real y un CRM ligero diseñado para agencias.",
      "ag.how.eyebrow": "Cómo funciona",
      "ag.how.h2": "De la solicitud a la captación",
      "ag.s1t": "Configura tu perfil de agencia", "ag.s1p": "Zona, tipología, rango de precios y especialización. El sistema te asigna solo inmuebles que encajan con tu cartera.",
      "ag.s2t": "Recibe propietarios que quieren tu ayuda", "ag.s2p": "Llegan solicitudes de propietarios que han elegido trabajar con profesionales y cuyo inmueble encaja con tu actividad.",
      "ag.s3t": "Gestiona desde el dashboard", "ag.s3p": "CRM ligero, analíticas por asesor y estado de cada inmueble en tiempo real. Todo en una webapp diseñada para agencias.",
      "ag.adv.eyebrow": "Ventajas",
      "ag.adv.h2": "Por qué las agencias eligen Grikona",
      "ag.a1t": "Leads cualificados", "ag.a1p": "Solo propietarios verificados y con intención real de vender o alquilar. Se acabaron las puertas frías.",
      "ag.a2t": "Ahorro de tiempo", "ag.a2p": "Automatiza el seguimiento y céntrate en las visitas y el cierre. Menos gestión manual, más operaciones.",
      "ag.a3t": "Marca verificada", "ag.a3p": "Aparece como agencia de confianza dentro de la plataforma y refuerza tu reputación ante los propietarios.",
      "ag.a4t": "Sin coste de entrada", "ag.a4p": "Empieza con 14 días de prueba. Sin permanencia y con una cuota mensual clara que puedes cancelar cuando quieras.",
      "ag.demo.eyebrow": "Solicitar demo",
      "ag.demo.h2": "Descubre el dashboard en 20 minutos",
      "ag.demo.lead": "Cuéntanos quién eres y te enseñamos cómo Grikona puede llenar tu cartera de inmuebles verificados.",
      "ag.demo.agency": "Nombre de la agencia",
      "ag.demo.email": "Email de contacto",
      "ag.demo.zone": "Ciudad / zona",
      "ag.demo.cta": "Solicitar demo",
      "ag.cta.h2": "¿Listo para captar inmuebles verificados?",
      "ag.cta.p": "Únete a las agencias que ya trabajan con Grikona en Valencia.",
      "ag.cta.btn1": "Solicitar demo",
      "ag.cta.btn2": "Escríbenos"
    },
    en: {
      "ag.meta.title": "For agencies — Grikona Dashboard",
      "ag.breadcrumb": "Home / For agencies",
      "ag.hero.h1": "The dashboard for agencies that want to win more listings",
      "ag.hero.p": "Receive requests from owners who chose to work with professionals, manage your team and track every property from a single panel.",
      "ag.hero.cta1": "Request a demo",
      "ag.hero.cta2": "See pricing",
      "ag.dash.eyebrow": "The web dashboard",
      "ag.dash.h2": "Your whole business on one screen",
      "ag.dash.lead": "Per-agent analytics, real-time status of every property and a lightweight CRM built for agencies.",
      "ag.how.eyebrow": "How it works",
      "ag.how.h2": "From request to listing",
      "ag.s1t": "Set up your agency profile", "ag.s1p": "Area, property types, price range and specialisation. The system assigns you only properties that fit your portfolio.",
      "ag.s2t": "Receive owners who want your help", "ag.s2p": "Requests arrive from owners who chose to work with professionals and whose property matches your business.",
      "ag.s3t": "Manage from the dashboard", "ag.s3p": "Lightweight CRM, per-agent analytics and real-time status of every property. All in a web app built for agencies.",
      "ag.adv.eyebrow": "Benefits",
      "ag.adv.h2": "Why agencies choose Grikona",
      "ag.a1t": "Qualified leads", "ag.a1p": "Only verified owners with a real intention to sell or rent. No more cold calling.",
      "ag.a2t": "Time savings", "ag.a2p": "Automate follow-up and focus on viewings and closing. Less manual work, more deals.",
      "ag.a3t": "Verified brand", "ag.a3p": "Appear as a trusted agency within the platform and strengthen your reputation with owners.",
      "ag.a4t": "No upfront cost", "ag.a4p": "Start with a 14-day trial. No lock-in and a clear monthly fee you can cancel anytime.",
      "ag.demo.eyebrow": "Request a demo",
      "ag.demo.h2": "Discover the dashboard in 20 minutes",
      "ag.demo.lead": "Tell us who you are and we'll show you how Grikona can fill your portfolio with verified properties.",
      "ag.demo.agency": "Agency name",
      "ag.demo.email": "Contact email",
      "ag.demo.zone": "City / area",
      "ag.demo.cta": "Request a demo",
      "ag.cta.h2": "Ready to win verified properties?",
      "ag.cta.p": "Join the agencies already working with Grikona in Valencia.",
      "ag.cta.btn1": "Request a demo",
      "ag.cta.btn2": "Write to us"
    },
    zh: {
      "ag.meta.title": "面向中介机构 — Grikona 后台",
      "ag.breadcrumb": "首页 / 面向中介机构",
      "ag.hero.h1": "为想要更好获客的中介打造的后台",
      "ag.hero.p": "接收选择与专业人士合作的房东委托，在一个面板中管理团队并跟进每处房产。",
      "ag.hero.cta1": "预约演示",
      "ag.hero.cta2": "查看价格",
      "ag.dash.eyebrow": "网页后台",
      "ag.dash.h2": "整个业务，一屏掌握",
      "ag.dash.lead": "按经纪人的分析、每处房产的实时状态，以及为中介打造的轻量 CRM。",
      "ag.how.eyebrow": "运作方式",
      "ag.how.h2": "从委托到房源",
      "ag.s1t": "设置您的中介资料", "ag.s1p": "区域、房型、价格区间和专业方向。系统只会为您分配与您房源组合匹配的房产。",
      "ag.s2t": "接收需要您帮助的房东", "ag.s2p": "选择与专业人士合作的房东会发来委托，且其房产与您的业务相匹配。",
      "ag.s3t": "在后台进行管理", "ag.s3p": "轻量 CRM、按经纪人的分析，以及每处房产的实时状态。全部集成在专为中介打造的网页应用中。",
      "ag.adv.eyebrow": "优势",
      "ag.adv.h2": "中介为何选择 Grikona",
      "ag.a1t": "优质线索", "ag.a1p": "只有经过认证、有真实出售或出租意向的房东。告别陌生拜访。",
      "ag.a2t": "节省时间", "ag.a2p": "自动跟进，专注于看房和成交。减少人工，提升成交。",
      "ag.a3t": "认证品牌", "ag.a3p": "在平台内以值得信赖的中介身份出现，提升您在房东心中的声誉。",
      "ag.a4t": "零门槛", "ag.a4p": "14 天试用起步。无合约绑定，月费透明，可随时取消。",
      "ag.demo.eyebrow": "预约演示",
      "ag.demo.h2": "20 分钟了解后台",
      "ag.demo.lead": "告诉我们您的信息，我们将向您展示 Grikona 如何为您的房源组合带来认证房产。",
      "ag.demo.agency": "中介名称",
      "ag.demo.email": "联系邮箱",
      "ag.demo.zone": "城市 / 区域",
      "ag.demo.cta": "预约演示",
      "ag.cta.h2": "准备好获取认证房源了吗？",
      "ag.cta.p": "加入已在瓦伦西亚与 Grikona 合作的中介行列。",
      "ag.cta.btn1": "预约演示",
      "ag.cta.btn2": "联系我们"
    }
  };

  /* Merge AG into T */
  Object.keys(AG).forEach(function (lang) {
    Object.keys(AG[lang]).forEach(function (k) { T[lang][k] = AG[lang][k]; });
  });

  function getLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved && T[saved]) return saved;
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return T[nav] ? nav : DEFAULT_LANG;
  }

  function t(key) {
    var lang = getLang();
    return (T[lang] && T[lang][key]) || T[DEFAULT_LANG][key] || key;
  }

  function apply() {
    var lang = getLang();
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    /* Lang switcher state */
    var current = document.querySelector("[data-lang-current]");
    if (current) {
      var langObj = LANGUAGES.filter(function (l) { return l.code === lang; })[0];
      if (langObj) current.textContent = langObj.flag + " " + langObj.code.toUpperCase();
    }
    document.querySelectorAll(".lang-select__opt").forEach(function (opt) {
      opt.classList.toggle("is-active", opt.getAttribute("data-lang") === lang);
    });

    document.dispatchEvent(new CustomEvent("grikona:langchange", { detail: { lang: lang } }));
  }

  function setLang(lang) {
    if (!T[lang]) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    apply();
  }

  function initSwitcher() {
    var sel = document.querySelector(".lang-select");
    if (!sel) return;
    var trigger = sel.querySelector(".lang-select__trigger");
    if (trigger) {
      trigger.addEventListener("click", function (e) {
        e.stopPropagation();
        sel.classList.toggle("open");
      });
    }
    sel.querySelectorAll(".lang-select__opt").forEach(function (opt) {
      opt.addEventListener("click", function () {
        setLang(opt.getAttribute("data-lang"));
        sel.classList.remove("open");
      });
    });
    document.addEventListener("click", function () { sel.classList.remove("open"); });
  }

  window.GRIKONA_I18N = { t: t, apply: apply, setLang: setLang, getLang: getLang, languages: LANGUAGES };

  /* Scripts are at the end of <body>, so the DOM is ready. */
  apply();
  initSwitcher();
})();
