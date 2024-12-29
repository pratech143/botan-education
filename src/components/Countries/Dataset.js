const countries = {
    australia: {
        title: 'Study in Australia',
        image: '/countries/australia.jpg',
        intro: `Australia is one of the most popular destinations for international students, known for its high-quality education system and vibrant multicultural society. With a wide range of universities, cutting-edge research, and excellent job opportunities, Australia offers an ideal environment for academic and personal growth. Whether you want to study in major cities like Sydney, Melbourne, or Brisbane, Australia has something for everyone.`,
        reasons: [
          {
            title: 'World-Class Universities',
            description: `Australia boasts some of the world’s leading universities, such as the University of Sydney, University of Melbourne, and Australian National University. These institutions offer a wide variety of undergraduate and postgraduate programs across diverse fields.`,
          },
          {
            title: 'Cultural Diversity',
            description: `With students from all over the world, Australia provides a multicultural experience that enriches your academic journey. You’ll have the opportunity to learn from and collaborate with people from various cultural backgrounds.`,
          },
          {
            title: 'Work Opportunities',
            description: `Australia allows international students to work part-time while studying, providing a great opportunity to gain work experience and support yourself financially during your studies.`,
          },
          {
            title: 'Quality of Life',
            description: `With its beautiful landscapes, modern cities, and high quality of life, Australia offers an exceptional environment for students. Enjoy the outdoors, vibrant cities, and a safe, welcoming atmosphere.`,
          },
        ],
        services: [
          "Career Counselling",
          "Language Tuition",
          "Exam Guidance",
          "Visa Processing"
        ],
        universityPartners: [
          { name: 'Reach Community College', logo: '/clients/Austrailia/image1.png' },
          { name: 'Austrailian Technical Management College', logo: '/clients/Austrailia/image2.png' },
          { name: 'La Trobe University', logo: '/clients/Austrailia/image3.png' },
          { name: 'Austrailian Vocational Training Acade,y', logo: '/clients/Austrailia/image4.png' },
          { name: 'Austrtailian Institute of Techincal Training', logo: '/clients/Austrailia/image5.png' },
          { name: 'Melbourne City Institute of Education', logo: '/clients/Austrailia/image6.png' },
          { name: 'The University of Western Austrailia', logo: '/clients/Austrailia/image7.png' },
          { name: 'Navitas', logo: '/clients/Austrailia/image8.png' },
          { name: 'Austrailia Institute of Business and Technology', logo: '/clients/Austrailia/image9.png' },
        ],
      },
    newzealand: {
      image: '/countries/newzealand.jpg',
      title: 'Study in NewZealand',
      intro: 'New Zealand is a top choice for international students, known for its high-quality education and stunning landscapes. With world-class universities and a welcoming multicultural society, it offers both excellent academic opportunities and a vibrant lifestyle. Whether in Auckland or Wellington, students enjoy a unique blend of education and adventure.',
      reasons: [
        {
          title: 'High-Quality Education',
          description: 'New Zealand is home to some of the world’s top-ranked universities and polytechnics, offering diverse courses in fields such as engineering, business, and health sciences. Notable institutions like the University of Auckland and Victoria University of Wellington provide a strong foundation for students seeking academic excellence.'
        },
        {
          title: 'Cultural Immersion',
          description: 'With its rich Maori heritage and a mix of European and Pacific influences, New Zealand provides students with an immersive cultural experience. From traditional Maori practices to modern arts and festivals, students have the chance to explore a variety of cultural expressions.'
        },
        {
          title: 'Work and Study Opportunities',
          description: 'International students can work part-time during their studies and are also eligible for post-study work visas, providing opportunities to gain valuable work experience. After completing their studies, students can apply for a post-study work visa to gain experience in New Zealand’s thriving job market.'
        },
        {
          title: 'Safe and Friendly Environment',
          description: 'New Zealand is ranked as one of the safest countries in the world. The welcoming nature of the locals ensures that international students feel at home, and the low crime rate and stunning natural surroundings add to the country’s appeal.'
        },
        {
          title: 'Stunning Natural Beauty',
          description: 'New Zealand offers some of the most beautiful landscapes in the world, from its breathtaking beaches to the towering peaks of the Southern Alps. Students have easy access to outdoor activities such as hiking, skiing, and water sports, making it a great destination for adventure lovers.'
        }
      ],
      services: [
        "Career Counselling",
          "Language Tuition",
          "Exam Guidance",
          "Visa Processing"
      ],
      // universityPartners: [
      //   {
      //     name: 'University of Auckland',
      //     logo: '/universities/auckland-logo.jpg'
      //   },
      //   {
      //     name: 'Victoria University of Wellington',
      //     logo: '/universities/wellington-logo.jpg'
      //   },
      //   {
      //     name: 'University of Otago',
      //     logo: '/universities/otago-logo.jpg'
      //   },
      //   {
      //     name: 'Auckland University of Technology',
      //     logo: '/universities/aut-logo.jpg'
      //   }
      // ]
    },
    japan: {
      title: 'Study in Japan',
      image: '/countries/japan.jpeg',
      intro: `Japan is a leading destination for students seeking a blend of tradition and innovation. Known for its advanced technology, rich culture, and top-ranked universities, Japan offers a unique educational experience. Whether you're drawn to bustling cities like Tokyo and Osaka or serene towns surrounded by nature, Japan provides an environment that supports academic and personal growth.`,
      reasons: [
        {
          title: 'Prestigious Universities',
          description: `Japan is home to some of the world’s best universities, such as the University of Tokyo, Kyoto University, and Osaka University. These institutions are renowned for their academic excellence, cutting-edge research, and global recognition.`,
        },
        {
          title: 'Cultural Immersion',
          description: `Studying in Japan allows you to immerse yourself in a culture that blends ancient traditions with modern innovations. Experience world-class festivals, unique cuisines, and the rich heritage of a country steeped in history.`,
        },
        {
          title: 'Technological Advancements',
          description: `As a global leader in technology and innovation, Japan provides students with opportunities to explore cutting-edge developments in various fields such as robotics, engineering, and information technology.`,
        },
        {
          title: 'Scholarships and Support',
          description: `Japan offers numerous scholarships and financial support options for international students, making high-quality education more accessible and affordable.`,
        },
      ],
      services: [
        "Career Counselling",
        "Language Tuition",
        "Exam Guidance",
        "Visa Processing"
      ],
      // universityPartners: [
      //   { name: 'University of Tokyo', logo: '/path/to/logo1.jpg' },
      //   { name: 'Kyoto University', logo: '/path/to/logo2.jpg' },
      // ],
    },
    usa: {
      title: 'Study in America',
      image: '/countries/america.webp',
      intro: `The United States is one of the most sought-after destinations for international students, offering a diverse range of academic programs and world-renowned universities. With a focus on innovation, cultural diversity, and cutting-edge research, the USA provides unparalleled opportunities for personal and professional growth.`,
      reasons: [
        {
          title: 'Top-Ranked Universities',
          description: `The USA is home to prestigious institutions such as Harvard University, Stanford University, and the Massachusetts Institute of Technology (MIT). These universities are globally recognized for their excellence in education, research, and innovation.`,
        },
        {
          title: 'Wide Range of Programs',
          description: `Whether you're interested in engineering, business, arts, or medicine, the USA offers a vast array of undergraduate and postgraduate programs to suit every academic interest.`,
        },
        {
          title: 'Cultural Diversity',
          description: `Studying in the USA exposes you to a multicultural environment, allowing you to meet people from all over the world and learn from different perspectives.`,
        },
        {
          title: 'Career Opportunities',
          description: `With a strong job market and opportunities in various industries, the USA provides an ideal setting for gaining work experience and launching a successful career after graduation.`,
        },
      ],
      services: [
        "Career Counselling",
        "Language Tuition",
        "Exam Guidance",
        "Visa Processing"
      ],
      universityPartners: [
        { name: 'University of Connecticut', logo: '/clients/USA/image1.png' },
        { name: 'Auburn University', logo: '/clients/USA/image2.png' },
        { name: 'Kent State Univeraity', logo: '/clients/USA/image3.png' },
        { name: 'UNiversity of Nebraska Omaha', logo: '/clients/USA/image4.png' },
        { name: 'MontClair State University', logo: '/clients/USA/image5.png' },
        { name: 'Texas State University', logo: '/clients/USA/image6.png' },
        { name: 'Santa Monica College', logo: '/clients/USA/image7.png' },
        { name: 'University of North Texas', logo: '/clients/USA/image8.png' },
        { name: 'Florida Atlantic University', logo: '/clients/USA/image9.png' },
        { name: 'Illinois State University', logo: '/clients/USA/image10.png' },
        { name: 'Xavier University', logo: '/clients/USA/image11.png' },
        { name: 'Depaul University', logo: '/clients/USA/image12.png' },
        { name: 'Marshall University', logo: '/clients/USA/image13.png' },
        { name: 'Cerritos College', logo: '/clients/USA/image14.png' },
        { name: 'Oregon State University', logo: '/clients/USA/image15.png' },
    ],
    },
    uk: {
      title: 'Study in UK',
      image: '/countries/uk.webp',
      intro: `The United Kingdom is a top choice for international students, known for its prestigious universities, rich history, and vibrant cultural scene. With a strong emphasis on academic excellence and globally recognized degrees, the UK provides a unique and rewarding educational experience.`,
      reasons: [
        {
          title: 'World-Class Education',
          description: `The UK is home to renowned institutions such as the University of Oxford, University of Cambridge, and Imperial College London. These universities offer high-quality education, rigorous academic programs, and a rich tradition of excellence.`,
        },
        {
          title: 'Global Recognition',
          description: `Degrees from UK universities are highly valued worldwide, opening doors to global career opportunities and further academic pursuits.`,
        },
        {
          title: 'Rich Cultural Experience',
          description: `Studying in the UK allows you to explore its rich history, iconic landmarks, and diverse culture. From historic castles to modern cities, the UK offers a dynamic and exciting student life.`,
        },
        {
          title: 'Shorter Course Duration',
          description: `Many UK degrees are shorter in duration compared to other countries, such as three-year undergraduate programs and one-year master’s programs, helping students save time and money.`,
        },
      ],
      services: [
        "Career Counselling",
        "Language Tuition",
        "Exam Guidance",
        "Visa Processing"
      ],
      universityPartners: [
          { name: 'Glasgow Caledonian University', logo: '/clients/UK/image1.png' },
          { name: 'Loughborough University', logo: '/clients/UK/image2.png' },
          { name: 'FalMouth University', logo: '/clients/UK/image3.png' },
          { name: 'Kingston University', logo: '/clients/UK/image4.png' },
          { name: 'University College Brimingham', logo: '/clients/UK/image5.png' },
          { name: 'De Montfort University', logo: '/clients/UK/image6.png' },
          { name: 'University Academy 92', logo: '/clients/UK/image7.png' },
          { name: 'University of Reading', logo: '/clients/UK/image8.png' },
          { name: "Regent's University London", logo: '/clients/UK/image9.png' },
          { name: 'Oxford Brookes University', logo: '/clients/UK/image10.png' },
          { name: 'Leeds Trinity University', logo: '/clients/UK/image11.png' },
          { name: 'Depaul University', logo: '/clients/UK/image12.png' },
          { name: 'Ravensbourne University London', logo: '/clients/UK/image13.png' },
          { name: 'Ulster University', logo: '/clients/UK/image14.png' },
          { name: 'University of Hull', logo: '/clients/UK/image15.png' },
    
      ],
    },
    
    
    
  };
  
  export default countries;
  