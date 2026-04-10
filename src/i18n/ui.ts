import { getYear } from '@/libs/helpers';

export const languages = [
  {
    flag: 'circle-flags:uk',
    text: 'English',
    lang: 'en',
  },
  {
    flag: 'circle-flags:it',
    text: 'Italian',
    lang: 'it',
  },
];

export const defaultLang = 'en';

export const ui = {
  en: {
    home: {
      'hero-section': {
        title:
          'Italian Manufacturer of Industrial Valves serving the Middle East region.',
        subtitle:
          'Our products are engineered with precision to ensure safety, reliability, and optimal performance in even the most demanding conditions.',
      },
      'some-count': {
        stats: [
          {
            title: '12+',
            subtitle: 'Years of Industry Experience',
          },
          {
            title: '1967',
            subtitle: 'Year Established',
          },
          {
            title: '50+',
            subtitle: 'Years of Trusted Engineering Applications',
          },
        ],
        subtile: 'WELCOME TO Vimec Valves',
        title: 'Excellence in Valve Manufacturing Since 1967',
        describe:
          'Vimec Group Italia Srl., formerly known as Vimec Srl. (Since 1967), now strategically set its new manufacturing facility at Bolgare, Bergamo area in Italy. <br><br/> Vimec Group Italia wishes to inform all its esteemed customers that trademark Vimec Valves under Vimec Srl. was founded in 1967, Opera Milan, Italy has been legally transferred to a new management and in 2018, the company Vimec Group Italia Srl. has been established and acquired the trademark and all its exclusive   manufacturing rights globally.',
      },
      products: 'Our Products',
      'supply-references': 'Approvals / Supply References',
      'our-history': {
        title: 'Our History',
        description:
          'Vimec, was established in 1967 in Opera, Milan, Italy by Ernesto Pighetti as an individual craft company to produce different mechanical components (machining on behalf of third-party companies). <br /><br />In 1985, with its ideology of continuous improvement, Vimec upgraded the technological content of its products and commenced the manufacturing of Industrial Valves, Instrumentation & Accessories such as Manifolds, Double Block and Bleed Valves, Monoflanges, Ball Valves, Needle Valves, Multiport, Check Valves, Globe Valves, Condensing Pots, Distribution Manifolds, Air Headers Distributors, Sampling Cylinders and accessories.',
      },

      'news-events': 'News and Events',
    },
    gallery: {
      'hero-section': {
        title: 'Gallery',
        content:
          'Explore our journey through image showcasing our advanced manufacturing, precision engineered valves, and commitment to excellence in the oil and gas industry.',
      },
      single: {
        breadcrumbs: ['Home', 'Gallery'],
        photos: 'Photos',
      },
    },
    'news&events': {
      'hero-section': {
        title: 'News & Events',
        content:
          'Stay updated with the latest news, industry insights, and events from Vimec Valves as we continue to innovate and lead in the oil and gas sector.',
      },
      single: {
        breadcrumbs: ['Home', 'News & Events'],
      },
    },

    products: {
      'hero-section': {
        title: 'Our Products',
        content:
          'Discover our precision-engineered valves, crafted to meet the demanding standards of the oil and gas industry with unmatched quality and reliability',
      },
      single: {
        breadcrumbs: ['Home', 'Products'],

        'related products': 'Related products',
      },
    },
    'about us': {
      'hero-section': {
        title: 'About us',
        contents: [
          `Vimec Group Italia Srl., formerly known as Vimec Srl. (Since 1967), operates from a state-of-the-art manufacturing facility in  Al Piano, Bergamo, Italy.<br><br>

          Established in 1967 in Opera Milan, Italy, Vimec Srl. built a legacy of excellence in valve manufacturing. In 2018, the company transitioned to Vimec Group Italia Srl., securing exclusive global manufacturing rights for its trademark Vimec Valves. <br><br>

          We ensure that no other company in Italy is authorized to manufacture or supply valves under the Vimec Valves trademark, which is legally registered to safeguard its integrity and reputation.`,
          `Our new facility is equipped with cutting-edge resources, advanced machinery, ERP software, and enhanced designs to provide efficient, high-quality products and services. With over 50 years of expertise, Vimec Valves continues to lead in reliability and performance. <br><br>

          Vimec Valves are trusted globally across industries such as Oil & Gas, Chemical, Petrochemical, and Power Plants, delivering exceptional solutions for critical engineering applications.<br><br>

          At Vimec Group Italia, our commitment is to deliver unmatched quality and expertise. With a forward-thinking approach, we are confident in exceeding our clients' expectations and driving future growth.`,
        ],
      },
      'our history': {
        title: 'Our History',
        data: [
          {
            date: 1967,
            content:
              'Vimec, was established in 1967 in Opera, Milan, Italy by Ernesto Pighetti as an individual craft company to produce different mechanical components (machining on behalf of third-party companies).',
          },
          {
            date: 1985,
            content:
              'In 1985, with its ideology of continuous improvement, Vimec upgraded the technological content of its products and commenced the manufacturing of Industrial Valves, Instrumentation & Accessories such as Manifolds, Double Block and Bleed Valves, Monoflanges, Ball Valves, Needle Valves, Multiport, Check Valves, Globe Valves, Condensing Pots, Distribution Manifolds, Air Headers Distributors, Sampling Cylinders and accessories.',
          },
          {
            date: 1994,
            content:
              'In 1994, the company Vimec Srl was established and took over the individual craft company. Since the inception of the company Vimec Srl, it offers a wide variety of valves to meet different kinds of applications with a heritage that exceeds 50 years and a pioneer of Double Block and Bleed and Instrumentation Valves.',
          },
          {
            date: 2013,
            content:
              'In 2013, Vimec Srl, had diversified its range into other valve packages to include Gate, Globe, Check and Butterfly Valves in a variety of alloys, trims, configurations, sizes and pressure classes, from general to severe applications for the (Oil & Gas, Chemical, Petrochemical and Power Plants).',
          },
          {
            date: 2018,
            content:
              'In 2018, the company Vimec Group Italia Srl has been established and acquired the trademark Vimec Valves and all its manufacturing rights globally.',
          },
        ],
      },
    },
    downloads: {
      'hero-section': {
        title: 'Downloads',
        content:
          'Access our latest catalogs, technical specifications, and product manuals to learn more about our high-quality valves for the oil and gas industry.',
      },
      form: {
        title: 'Download Our Catalog',
        subtitle:
          'To access the download, please provide your details. This helps us understand our audience and improve our resources.',
        fName: 'First Name',
        lName: 'Last Name',
        companyName: 'Company Name*',
        email: 'Email*',
        mobile: 'Mobile',
        downlode: 'Download',
      },
    },
    'contact us': {
      'hero-section': {
        title: 'Contact us',
      },
      details: {
        location: [
          {
            title: '',
            data: [
              {
                type: 'Middle East Regional Office – Dubai',
                id: 'dmcc',
                links: [
                  {
                    icon: 'bxs:map',
                    title: 'Location',
                    link: {
                      text: 'Vimec Valves Distribution FZCO<br> Unit No: UT-11-CO-113,<br> DMCC Business Centre, Level No 11, Uptown Tower<br> Dubai, United Arab Emirates',
                      href: 'https://www.google.com/maps/place/X2+Tower,+Jumeirah+Lake+Towers,+Dubai/@25.074364,55.138491,17z/',
                    },
                  },
                  {
                    icon: 'ic:round-phone',
                    title: 'Phone',
                    link: {
                      text: '+971 4430 3511',
                      href: 'tel:+97144303511',
                    },
                  },
                  {
                    icon: 'material-symbols:mail',
                    title: 'Email',
                    link: {
                      text: 'sales@vimec-valves.ae',
                      href: 'mailto:sales@vimec-valves.ae',
                    },
                  },
                ],
              },
              {
                type: 'Manufacturing Headquarters',
                id: 'mfi',
                links: [
                  {
                    icon: 'bxs:map',
                    title: 'Location',
                    link: {
                      text: 'Vimec Group Italia Srl<br> Via Lago d’Iseo no.5,<br> Bolgare, 24060,<br> Bergamo (BG), Italy',
                      href: 'https://maps.app.goo.gl/wY4bBHpKcodjy8TL8',
                    },
                  },
                  {
                    icon: 'ic:round-phone',
                    title: 'Phone',
                    link: {
                      text: '+39 035 0950025',
                      href: 'tel:+390350950025',
                    },
                  },
                  {
                    icon: 'material-symbols:mail',
                    title: 'Email',
                    link: {
                      text: 'sales@vimecvalves.it',
                      href: 'mailto:sales@vimecvalves.it',
                    },
                  },
                ],
              },
              {
                type: 'European Sales Office',
                id: 'huk',
                links: [
                  {
                    icon: 'bxs:map',
                    title: 'Location',
                    link: {
                      text: 'Vimec Valves U.K. Ltd<br> Office 20, The Coach House,<br> 11 Owler Ings Road, Brighouse,<br> West Yorkshire, HD6 1EJ,<br> U.K.',
                      href: 'https://www.google.com/maps/place/Vimec+Valves+U.K.+Ltd/@53.738122,-1.792556,17z/',
                    },
                  },
                  {
                    icon: 'ic:round-phone',
                    title: 'Phone',
                    link: {
                      text: '+44 1902 953025',
                      href: 'tel:+441902953025',
                    },
                  },
                  {
                    icon: 'material-symbols:mail',
                    title: 'Email',
                    link: {
                      text: 'sales@vimecvalves.co.uk',
                      href: 'mailto:sales@vimecvalves.co.uk',
                    },
                  },
                ],
              },
            ],
          },
        ],
        'contact form': {
          text: 'Have questions or need assistance? Fill out the form, and our team will get back to you promptly.',
          btnName: 'Contact form',
        },
        md: {
          subtitle: 'For unresolved issues, contact our Director',
        },
      },
    },
    sections: {
      nav: {
        home: 'Home',
        about: 'About Us',
        products: 'Products',
        news: 'News & Events',
        downloads: 'Downloads',
        gallery: 'Gallery',
      },
      'get-in-touch': {
        title: 'Looking for Reliable Valve Solutions? Contact Us!',
        subtitle:
          'As a trusted valve manufacturer, we’re ready to support your needs. Reach out today to discuss how we can deliver high-quality solutions for your project',
        form: {
          title: 'Get in touch',
          'first-name': 'First name',
          'last-name': 'Last name',
          'company-name': 'Company name*',
          mobile: 'Mobile',
          email: 'Email',
          'your-message': 'Your Message',
        },
      },
      footer: {
        'follow-us-on': 'Follow us on',
        md: {
          'button-name': 'contact DIRECTOR',
          subtile: 'For unresolved issues',
        },
        copyright: `Copyright © ${getYear()} Vimec Valves. All Rights Reserved.`,
        'Terms & Policy': [
          { title: 'Terms & Conditions', link: '' },
          {
            title: 'Privacy Policy',
            link: '',
          },
        ],
        links: [
          {
            title: 'Middle East Regional Office – Dubai',
            link: {
              text: 'Vimec Valves Distribution FZCO<br> Unit No: UT-11-CO-113,<br> DMCC Business Centre, Level 11, Uptown Tower<br> Dubai, United Arab Emirates',
            },
            icon: 'bxs:map',
            flag: 'circle-flags:ae',
            links: [
              {
                text: 'sales@vimec-valves.ae',
                href: 'mailto:sales@vimec-valves.ae',
                icon: 'material-symbols:mail',
              },
              {
                text: '+971 4430 3511',
                href: 'tel:+97144303511',
                icon: 'ic:round-phone',
              },
            ],
          },
          {
            title: 'Manufacturing Headquarters',
            link: {
              text: 'Vimec Group Italia Srl<br>  Via Lago d’Iseo no.5,<br>  Bolgare, 24060,<br>  Bergamo (BG), Italy ',
            },
            icon: 'bxs:map',
            flag: 'circle-flags:it',
            links: [
              {
                text: 'sales@vimecvalves.it',
                href: 'mailto:sales@vimecvalves.it',
                icon: 'material-symbols:mail',
              },
              {
                text: '+39 035 0950025',
                href: 'tel:+390350950025',
                icon: 'ic:round-phone',
              },
            ],
          },
          {
            title: 'European Sales Office',
            link: {
              text: 'Vimec Valves U.K. Ltd<br> Office 20, The Coach House,<br> 11 Owler Ings Road, Brighouse,<br> West Yorkshire, HD6 1EJ, U.K. ',
            },
            icon: 'bxs:map',
            flag: 'circle-flags:uk',
            links: [
              {
                text: 'sales@vimecvalves.co.uk',
                href: 'mailto:sales@vimecvalves.co.uk',
                icon: 'material-symbols:mail',
              },
              {
              text: '+44 1902 953025',
              href: 'tel:+441902953025',
              icon: 'ic:round-phone',
              },
            ],
          },
        ],
      },
    },
    buttons: {
      contact: 'contact us',
      'view-products': 'view products',
      'view-all-products': 'view all products',
      'read-more': 'Read more',
      'view-all': 'View all',
      'send message': 'send message',
      close: 'Close',
      'get in touch': 'get in touch',
    },
  },
  it: {
    home: {
      'hero-section': {
        title:
          'Produttore Italiano Di Valvole Industriali Al Servizio Della Regione Del Medio Oriente.',
        subtitle:
          'I nostri prodotti sono progettati con precisione per garantire sicurezza, affidabilità e prestazioni ottimali anche nelle condizioni più impegnative.',
      },
      'some-count': {
        stats: [
          {
            title: '12+',
            subtitle: 'Anni di esperienza nel settore',
          },
          {
            title: '1967',
            subtitle: 'Anno di fondazione',
          },
          {
            title: '50+',
            subtitle: 'Anni di applicazioni ingegneristiche affidabili',
          },
        ],
        subtile: 'BENVENUTI IN Vimec Valves',
        title: 'Eccellenza nella produzione di valvole dal 1967',
        describe:
          'Vimec Group Italia Srl., precedentemente conosciuta come Vimec Srl. (dal 1967), ha ora stabilito strategicamente il suo nuovo stabilimento produttivo a Borgare, nella zona di Bergamo, in Italia. <br><br/> Vimec Group Italia desidera informare tutti i suoi stimati clienti che il marchio Vimec Valves sotto Vimec Srl., fondato nel 1967 a Opera, Milano, Italia, è stato legalmente trasferito a una nuova gestione e nel 2018 è stata costituita la società Vimec Group Italia Srl., che ha acquisito il marchio e tutti i diritti di produzione esclusivi a livello globale.',
      },
      products: 'I nostri prodotti',
      'supply-references': 'Approvazioni / Riferimenti di fornitura',
      'our-history': {
        title: 'La nostra storia',
        description:
          "Vimec è stata fondata nel 1967 a Opera, Milano, Italia da Ernesto Pighetti come azienda artigianale individuale per produrre diversi componenti meccanici (lavorazioni per conto terzi). <br /><br />Nel 1985, con la sua ideologia di miglioramento continuo, Vimec ha migliorato il contenuto tecnologico dei suoi prodotti e ha iniziato la produzione di valvole industriali, strumentazione e accessori come collettori, valvole a doppio blocco e spurgo, monoflangia, valvole a sfera, valvole a spillo, multiporta, valvole di ritegno, valvole a globo, vasi di condensazione, collettori di distribuzione, distributori di testata d'aria, cilindri di campionamento e accessori.",
      },
      'news-events': 'Notizie ed eventi',
    },
    gallery: {
      'hero-section': {
        title: 'Galleria',
        content:
          "Esplora il nostro viaggio attraverso immagini che mostrano la nostra produzione avanzata, le valvole progettate con precisione e il nostro impegno per l'eccellenza nel settore petrolifero e del gas.",
      },
      single: {
        breadcrumbs: ['Home', 'Galleria'],
        photos: 'Foto',
      },
    },
    'news&events': {
      'hero-section': {
        title: 'Notizie & Eventi',
        content:
          'Rimani aggiornato con le ultime notizie, approfondimenti del settore ed eventi di Vimec Valves mentre continuiamo a innovare e a guidare il settore petrolifero e del gas.',
      },
      single: {
        breadcrumbs: ['Home', 'Notizie & Eventi'],
      },
    },
    products: {
      'hero-section': {
        title: 'I nostri prodotti',
        content:
          'Scopri le nostre valvole progettate con precisione, realizzate per soddisfare gli standard esigenti del settore petrolifero e del gas con qualità e affidabilità senza pari.',
      },
      single: {
        breadcrumbs: ['Home', 'Prodotti'],
        'related products': 'Prodotti correlati',
      },
    },
    'about us': {
      'hero-section': {
        title: 'Chi siamo',
        contents: [
          `Vimec Group Italia Srl., precedentemente conosciuta come Vimec Srl. (dal 1967), opera da uno stabilimento di produzione all'avanguardia a Bolgare, Bergamo, Italia.<br><br>

          Fondata nel 1967 a Opera, Milano, Italia, Vimec Srl. ha costruito un'eredità di eccellenza nella produzione di valvole. Nel 2018, l'azienda è diventata Vimec Group Italia Srl., acquisendo i diritti di produzione esclusivi globali per il marchio Vimec Valves. <br><br>

          Ci assicuriamo che nessun'altra azienda in Italia sia autorizzata a produrre o fornire valvole con il marchio Vimec Valves, che è legalmente registrato per proteggere la sua integrità e reputazione.`,
          `Il nostro nuovo stabilimento è dotato di risorse all'avanguardia, macchinari avanzati, software ERP e design migliorati per fornire prodotti e servizi efficienti e di alta qualità. Con oltre 50 anni di esperienza, Vimec Valves continua a distinguersi per affidabilità e prestazioni. <br><br>

          Le valvole Vimec sono riconosciute a livello globale in settori come petrolio e gas, chimica, petrolchimica e centrali elettriche, offrendo soluzioni eccezionali per applicazioni ingegneristiche critiche.<br><br>

          In Vimec Group Italia, il nostro impegno è fornire qualità e competenza senza pari. Con un approccio orientato al futuro, siamo fiduciosi di superare le aspettative dei nostri clienti e di guidare una crescita futura.`,
        ],
      },
      'our history': {
        title: 'La nostra storia',
        data: [
          {
            date: 1967,
            content:
              'Vimec è stata fondata nel 1967 a Opera, Milano, Italia da Ernesto Pighetti come azienda artigianale individuale per produrre diversi componenti meccanici (lavorazioni per conto terzi).',
          },
          {
            date: 1985,
            content:
              "Nel 1985, con la sua ideologia di miglioramento continuo, Vimec ha migliorato il contenuto tecnologico dei suoi prodotti e ha iniziato la produzione di valvole industriali, strumentazione e accessori come collettori, valvole a doppio blocco e spurgo, monoflangia, valvole a sfera, valvole a spillo, multiporta, valvole di ritegno, valvole a globo, vasi di condensazione, collettori di distribuzione, distributori di testata d'aria, cilindri di campionamento e accessori.",
          },
          {
            date: 1994,
            content:
              "Nel 1994, è stata costituita la società Vimec Srl, che ha rilevato l'azienda artigianale individuale. Dalla sua costituzione, Vimec Srl offre una vasta gamma di valvole per soddisfare diversi tipi di applicazioni, con un'eredità che supera i 50 anni e una posizione di pioniere nelle valvole a doppio blocco e spurgo e nelle valvole di strumentazione.",
          },
          {
            date: 2013,
            content:
              'Nel 2013, Vimec Srl ha diversificato la sua gamma di prodotti per includere valvole a saracinesca, valvole a globo, valvole di ritegno e valvole a farfalla in una varietà di leghe, guarnizioni, configurazioni, dimensioni e classi di pressione, per applicazioni che vanno dal generale al severo (petrolio e gas, chimica, petrolchimica e centrali elettriche).',
          },
          {
            date: 2018,
            content:
              'Nel 2018, è stata costituita la società Vimec Group Italia Srl, che ha acquisito il marchio Vimec Valves e tutti i diritti di produzione a livello mondiale.',
          },
        ],
      },
    },
    downloads: {
      'hero-section': {
        title: 'Download',
        content:
          "Accedi ai nostri ultimi cataloghi, specifiche tecniche e manuali dei prodotti per saperne di più sulle nostre valvole di alta qualità per l'industria petrolifera e del gas.",
      },
      form: {
        title: 'Scarica il nostro catalogo',
        subtitle:
          'Per accedere al download, ti chiediamo di inserire i tuoi dati. Questo ci aiuta a conoscere meglio il nostro pubblico e migliorare le risorse.',
        fName: 'Nome',
        lName: 'Cognome',
        companyName: 'Nome dell’azienda*',
        email: 'Email*',
        mobile: 'Cellulare',
        downlode: 'Scarica',
      },
    },
    'contact us': {
      'hero-section': {
        title: 'Contattaci',
      },
      details: {
        location: [
          {
            title: '',
            data: [
              {
                type: 'Ufficio Regionale Medio Oriente – Dubai',
                id: 'dmcc',
                links: [
                  {
                    icon: 'bxs:map',
                    title: 'Posizione',
                    link: {
                      text: 'Vimec Valves Distribution FZCO<br> Unit No: UT-11-CO-113,<br> DMCC Business Centre,<br> Dubai, Level No 11, Uptown Tower',
                      href: 'https://www.google.com/maps/place/X2+Tower,+Jumeirah+Lake+Towers,+Dubai/@25.074364,55.138491,17z/',
                      target: '_blank',
                    },
                  },
                  {
                    icon: 'ic:round-phone',
                    title: 'Telefono',
                    link: {
                      text: '+971 4430 3511',
                      href: 'tel:+97144303511',
                      target: '_blank',
                    },
                  },
                  {
                    icon: 'material-symbols:mail',
                    title: 'Email',
                    link: {
                      text: 'sales@vimec-valves.ae',
                      href: 'mailto:sales@vimec-valves.ae',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'Sede Centrale di Produzione',
                id: 'mfi',
                links: [
                  {
                    icon: 'bxs:map',
                    title: 'Posizione',
                    link: {
                      text: 'Vimec Group Italia Srl<br> Via Lago d’Iseo no.5,<br> Bolgare, 24060,<br> Bergamo (BG), Italia',
                      href: 'https://maps.app.goo.gl/wY4bBHpKcodjy8TL8',
                      target: '_blank',
                    },
                  },
                  {
                    icon: 'ic:round-phone',
                    title: 'Telefono',
                    link: {
                      text: '+39 035 0950025',
                      href: 'tel:+390350950025',
                      target: '_blank',
                    },
                  },
                  {
                    icon: 'material-symbols:mail',
                    title: 'Email',
                    link: {
                      text: 'sales@vimecvalves.it',
                      href: 'mailto:sales@vimecvalves.it',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'Ufficio Vendite Europeo',
                id: 'huk',
                links: [
                  {
                    icon: 'bxs:map',
                    title: 'Posizione',
                    link: {
                      text: 'Vimec Valves U.K. Ltd<br> Ufficio 20, The Coach House,<br> 11 Owler Ings Road, Brighouse,<br> West Yorkshire, HD6 1EJ,<br> Regno Unito',
                      href: 'https://www.google.com/maps/place/Vimec+Valves+U.K.+Ltd/@53.738122,-1.792556,17z/',
                      target: '_blank',
                    },
                  },
                  {
                    icon: 'ic:round-phone',
                    title: 'Telefono',
                    link: {
                      text: '+44 1902 953025',
                      href: 'tel:+441902953025',
                      target: '_blank',
                    },
                  },
                  {
                    icon: 'material-symbols:mail',
                    title: 'Email',
                    link: {
                      text: 'sales@vimecvalves.co.uk',
                      href: 'mailto:sales@vimecvalves.co.uk',
                      target: '_blank',
                    },
                  },
                ],
              },
            ],
          },
        ],
        'contact form': {
          text: 'Hai domande o hai bisogno di assistenza? Compila il modulo e il nostro team ti risponderà al più presto.',
          btnName: 'Modulo di contatto',
        },
        md: {
          subtitle: 'Per problemi irrisolti, contattare il nostro Direttore',
        },
      },
    },
    sections: {
      nav: {
        home: 'Home',
        about: 'Chi siamo',
        products: 'Prodotti',
        news: 'Notizie & Eventi',
        downloads: 'Download',
        gallery: 'Galleria',
      },
      'get-in-touch': {
        title: 'Cerchi soluzioni di valvole affidabili? Contattaci!',
        subtitle:
          'Come produttore di valvole di fiducia, siamo pronti a soddisfare le tue esigenze. Contattaci oggi per discutere di come possiamo fornire soluzioni di alta qualità per il tuo progetto.',
        form: {
          title: 'Contattaci',
          'first-name': 'Nome',
          'last-name': 'Cognome',
          'company-name': "Nome dell'azienda*",
          mobile: 'Telefono',
          email: 'Email',
          'your-message': 'Il tuo messaggio',
        },
      },
      footer: {
        'follow-us-on': 'Seguici su',
        md: {
          'button-name': 'contattare il DIRETTORE',
          subtile: 'Per problemi irrisolti',
        },
        copyright: `Copyright © ${getYear()} Vimec Valves. Tutti i diritti riservati.`,
        'Terms & Policy': [
          { title: 'Termini e condizioni', link: '' },
          {
            title: 'Politica sulla privacy',
            link: '',
          },
        ],

        links: [
          {
            title: 'Ufficio Regionale Medio Oriente – Dubai',
            link: {
              text: 'Vimec Valves Distribution FZCO<br> Unit No: UT-11-CO-113,<br> DMCC Business Centre, Level 11, Uptown Tower<br> Dubai, United Arab Emirates',
            },
            icon: 'bxs:map',
            flag: 'circle-flags:ae',
            links: [
              {
                text: 'sales@vimec-valves.ae',
                href: 'mailto:sales@vimec-valves.ae',
                icon: 'material-symbols:mail',
              },
              {
                text: '+971 4430 3511',
                href: 'tel:+97144303511',
                icon: 'ic:round-phone',
              },
            ],
          },
          {
            title: 'Sede Centrale di Produzione',
            link: {
              text: 'Vimec Group Italia Srl<br>Via Lago d’Iseo n. 5,<br>Bolgare, 24060,<br>Bergamo (BG), Italia',
            },
            icon: 'bxs:map',
            flag: 'circle-flags:it',
            links: [
              {
                text: 'sales@vimecvalves.it',
                href: 'mailto:sales@vimecvalves.it',
                icon: 'material-symbols:mail',
                target: '_blank',
              },
              {
                text: '+39 035 0950025',
                href: 'tel:+390350950025',
                icon: 'ic:round-phone',
                target: '_blank',
              },
            ],
          },
          {
            title: 'Ufficio Vendite Europeo',
            link: {
              text: 'Vimec Valves U.K. Ltd<br>Ufficio 20, The Coach House,<br>11 Owler Ings Road, Brighouse,<br>West Yorkshire, HD6 1EJ, Regno Unito',
            },
            icon: 'bxs:map',
            flag: 'circle-flags:uk',
            links: [
              {
                text: 'sales@vimecvalves.co.uk',
                href: 'mailto:sales@vimecvalves.co.uk',
                icon: 'material-symbols:mail',
                target: '_blank',
              },
              {
              text: '+44 1902 953025',
              href: 'tel:+441902953025',
              icon: 'ic:round-phone',
              target: '_blank',
              },
            ],
          },
        ],
      },
    },
    buttons: {
      contact: 'Contattaci',
      'view-products': 'Vedi i prodotti',
      'view-all-products': 'Vedi tutti i prodotti',
      'read-more': 'Leggi di più',
      'view-all': 'Vedi tutto',
      'send message': 'Invia messaggio',
      close: 'Chiudi',
      'get in touch': 'Mettiti in contatto',
    },
  },
} as const;

export const uiUtilities = {
  en: {
    estimateReadingTime: 'Min Read',
  },
  it: {
    estimateReadingTime: 'Temps de lecture',
  },
} as const;

export const links = [
  {
    key: 'home',
    link: '/',
  },
  {
    key: 'about',
    link: '/about-us',
  },
  {
    key: 'products',
    link: '/products',
  },
  {
    key: 'news',
    link: '/news-events',
  },
  {
    key: 'downloads',
    link: '/downloads',
  },
  {
    key: 'gallery',
    link: '/gallery',
  },
];
