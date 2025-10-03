document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar ul li a');
  const projectsContainer = document.getElementById('projects');
  const projectsData = [
  {
    "title": "VIP - Unlocking and Analyzing Historical Texts",
    "image": "images/VIP-Historical-Texts.png",
    "alt": "VIP-Historical-Texts",
    "skills": ["Natural Language Processing", "Python", "Data Science", "AI", "Machine Learning"],
    "description": [
      "Analyzing Early Modern English Orthography", 
    ],
    "links": [
      {
        "label": "View More about VIP",
        "url": "https://vip.gatech.edu/frm_display/team-listings/entry/1317/"
      },
    ],
    "categories": ["data-science"]
  },
  {
    "title": "NO-HEAT Haq-athon Website",
    "image": "images/haq-athon.png",
    "alt": "NO-HEAT Haq-athon Website",
    "skills": ["React", "Python", "OpenLayers", "TypeScript"],
    "description": [
      "Interactive website with data used to calibrate an urban microclimate model",
      "Performed data analysis and visualization", 
    ],
    "links": [
      {
        "label": "View Website",
        "url": "https://haq-athon.vercel.app/"
      },
      {
        "label": "Learn about the Research",
        "url": "https://resilience.research.gatech.edu/feature/no-heat-initiative-tackles-climate-inequity-one-street-time"
      }
    ],
    "categories": ["mobile-web-apps"]
  },
  {
    "title": "Dress Up Fashion on the Game Boy Advanced",
    "image": "images/Dress-Up-Fashion-GBA.png",
    "alt": "Dress Up Fashion GBA",
    "skills": ["C", "Assembly", "GBA Development", "Game Design", "Pixel Art"],
    "description": [
      "A game on the Game Boy Advanced where you dress up the character and walk on the runway", 
      "Optimized for the GBA hardware and screen size to avoid tearing and lag",
      "Created pixel art assets such as the clothes and background",
    ],
    "links": [
      {
        "label": "View GitHub",
        "url": "https://github.com/li-kate/Dress-Up-Fashion-GBA"
      }
    ],
    "categories": ["other-software"]
  },
  {
    "title": "Mytherium",
    "image": "images/mytherium.png",
    "alt": "2340 Mytherium Screenshot",
    "skills": ["HTML", "CSS", "JavaScript", "Bootstrap", "Django", "Python", "SQL"],
    "description": [
      "A web application where users can collect, trade, and manage mythical creatures from across the world.", 
    ],
    "links": [
      {
        "label": "View Website",
        "url": "https://mytherium.onrender.com/"
      },
      {
        "label": "View GitHub",
        "url": "https://github.com/li-kate/Mytherium"
      }
    ],
    "categories": ["mobile-web-apps"]
  },
  {
    "title": "Love or Die Film",
    "image": "images/love-or-die.png",
    "alt": "2340 Movie Store Screenshot",
    "skills": ["Acting", "Directing", "Design", "Script Writing"],
    "description": [
      "Co-directed a film for Buzz Studios Films"
    ],
    "links": [
      {
        "label": "View Film",
        "url": "https://films.buzzstudios.org/d10conversesauce"
      }
    ],
    "categories": ["additional"]
  },
  {
    "title": "Movie Store Website",
    "image": "images/2340moviestore.png",
    "alt": "2340 Movie Store Screenshot",
    "skills": ["HTML", "CSS", "JavaScript", "Bootstrap", "Django", "Python"],
    "description": [
      "A web application using Django that enables users to access information about movies and place orders to purchase them."
    ],
    "links": [
      {
        "label": "View Website",
        "url": "https://cs2340pr1elias1.tilda.ws/"
      },
      {
        "label": "View GitHub",
        "url": "https://github.com/li-kate/CS2340-Movie-Store"
      }
    ],
    "categories": ["mobile-web-apps"]
  },
  {
    "title": "Statistics & Applications Project (ISYE3770)",
    "image": "images/isye3770.png",
    "alt": "ISYE3770 Project Screenshot",
    "skills": ["Python", "Jupyter Notebook", "Data Analysis"],
    "description": [
      "Synthesized and applied statistical tools learned in class to a topic of choice",
      "Used pandas, numpy, matplotlib, and seaborn to create the exploratory data analysis as per project instructions",
      "Created charts and conducted formal statistical testing"
    ],
    "links": [
      {
        "label": "View Exploratory Data Analysis",
        "url": "https://github.com/li-kate/ISYE-3770-Project/blob/main/Exploratory_Data_Analysis.ipynb"
      }
    ],
    "categories": ["data-science"]
  },
  {
    "title": "FIRST Robotics Competition",
    "image": "images/Robotics-TeamSummary.png",
    "alt": "FIRST Spreadsheet Screenshot",
    "skills": ["Spreadsheets", "Google Apps Script", "JavaScript", "Webscrape with REST API", "Data Analysis", "QUERY"],
    "description": [
      "Automated spreadsheets to transform large amounts of competition data to visualizations",
      "Analyzed robot data to make decisions on game strategy and team picking",
      "Compared the accuracy of our collected data with official competition data from the Blue Alliance using RESTAPI",
      "Added buttons and coded up functions"
    ],
    "links": [
      {
        "label": "View 2024 Project",
        "url": "https://docs.google.com/spreadsheets/d/1BgDMaCaFbDxf8QWHqp11lcOR61hLMjD-mKLOzNpH-5o/edit?usp=sharing"
      },
      {
        "label": "View 2023 Project",
        "url": "https://docs.google.com/spreadsheets/d/1VWn0fanMyAVk3Ixq7nhRlHdwyRpre7z7IgE5ivIB81w/edit?usp=sharing"
      }
    ],
    "categories": ["data-science"]
  },
  {
    "title": "Portfolio",
    "image": "images/portfolio.png",
    "alt": "Portfolio Screenshot",
    "skills": ["HTML", "CSS", "JavaScript", "Bootstrap"],
    "description": [
      "Designed website for my personal portfolio using HTML to familiarize myself with CSS, Bootstrap, and JavaScript"
    ],
    "links": [
      {
        "label": "View Portfolio",
        "url": "index.html"
      }
    ],
    "categories": ["mobile-web-apps"]
  },
  {
    "title": "Titans Trek",
    "image": "images/titans-trek.png",
    "alt": "Titans Trek Screenshot",
    "skills": ["Unity", "C#", "Github", "Adobe Photoshop"],
    "description": [
      "Led a team to create a mobile game aimed toward elementary school kids",
      "A game with multiple levels where the player has to traverse a terrain and not get flipped over"
    ],
    "links": [],
    "categories": ["mobile-web-apps"]
  },
  {
    "title": "Oxidation-Reduction Probe (ORP)",
    "image": "images/2024-scioly.png",
    "alt": "2024 Scioly Screenshot",
    "skills": ["C++", "Arduino"],
    "description": [
      "Built and programmed an ORP to measure the concentrations of NaCl in ppm of different water samples",
      "Tested in chemistry, statistics, programming, and electrical components",
      "1st place in Science Olympiad Regional Competition"
    ],
    "links": [
      {
        "label": "View Design Log",
        "url": "https://docs.google.com/document/d/1a7iGWQMsw3_E-BUUa5EWAFKV0Q7oVp_2Nasvh-wsxUk/edit?usp=sharing"
      }
    ],
    "categories": ["other-software"]
  },
  {
    "title": "ColumnsAndRowsShop",
    "image": "images/CNR-project.png",
    "alt": "ColumnsAndRowsShop Screenshot",
    "skills": ["JavaScript", "Spreadsheets", "Apps Script", "Marketing", "Advertising", "SEO Optimization", "Business"],
    "description": [
      "Etsy online shop selling spreadsheets aimed toward helping students",
      "Spreadsheets are automated with code and functions",
      "Utilized SEO optimization and advertising to market the shop"
    ],
    "links": [
      {
        "label": "Go to Shop",
        "url": "https://www.etsy.com/shop/ColumnsAndRowsShop"
      }
    ],
    "categories": ["additional"]
  },
  {
    "title": "Techno Tower Defense",
    "image": "images/techno-defense.png",
    "alt": "Techno Tower Defense Screenshot",
    "skills": ["Unity", "C#", "Github", "Adobe Photoshop"],
    "description": [
      "Led a team to create a mobile game aimed toward elementary school kids",
      "A tower defense game that teaches children about environmentally friendly energy sources",
      "The player has to place clean energy sources that shoot out attacks to beat incoming enemies"
    ],
    "links": [],
    "categories": ["mobile-web-apps"]
  },
  {
    "title": "Mass-Scale",
    "image": "images/2023-scioly.png",
    "alt": "2023 Scioly Screenshot",
    "skills": ["C++", "Arduino"],
    "description": [
      "Built and programmed a force sensing resistor to make a mass-scale that measures masses of different objects",
      "Tested in physics, statistics, programming, and electrical components",
      "2nd place in Science Olympiad Regional Competition"
    ],
    "links": [
      {
        "label": "View Design Log",
        "url": "https://docs.google.com/document/d/1N3hIjXJ92SAFi6nAtwoRy1qg4vc4RNOWN4UevHGaGsU/edit?usp=sharing"
      }
    ],
    "categories": ["other-software"]
  }
]


  function highlightActiveLink(category) {
    navLinks.forEach((link) => {
      link.classList.remove('active'); 
      if (link.dataset.category === category) {
        link.classList.add('active'); 
      }
    });
  }

  function renderProjects() {
    projectsContainer.innerHTML = ''; // Clear current projects
    projectsData.forEach(proj => {
      // Add a CSS class for each category so filtering can work with .classList.contains
      const categoriesClass = proj.categories.join(' ');

      const skillsStr = proj.skills.join(', ');
      const descItems = proj.description.map(item => `<li>${item}</li>`).join('');
      const linksHtml = proj.links.map(link => 
        `<a href="${link.url}" target="_blank" class="view-project-button">${link.label}</a>`
      ).join(' ');

      const html = `
        <div class="project ${categoriesClass}">
          <div class="project-image">
            <img src="${proj.image}" alt="${proj.alt}">
          </div>
          <div class="project-description">
            <h3>${proj.title}</h3>
            <p><b>Skills:</b> ${skillsStr}</p>
            <ul>${descItems}</ul>
            ${linksHtml}
          </div>
        </div>
      `;
      projectsContainer.insertAdjacentHTML('beforeend', html);
    });
  }

  function showProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
      const shouldDisplay = category === 'all' || project.classList.contains(category);
      project.style.display = shouldDisplay ? 'block' : 'none';
    });
  }

  renderProjects();
  showProjects('all');
  highlightActiveLink('all');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.dataset.category;
      showProjects(category);
      highlightActiveLink(category);
      history.pushState({ category }, '', `?category=${category}`);
    });
  });
});

// Handle back/forward navigation
window.addEventListener('popstate', (event) => {
  const category = event.state?.category || 'all';
  showProjects(category);
  highlightActiveLink(category);
});
