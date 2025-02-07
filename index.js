let nav = document.querySelector('nav');
let footer = document.querySelector('footer');
let icons = document.querySelector('.icons');
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');
let color = document.querySelectorAll('.color');

// WoW JS
new WOW().init();

// Navbar
icons.addEventListener('click', function (e) {
    moon.classList.toggle('translate1')
    sun.classList.toggle('translate2')

    nav.classList.toggle('box')
    footer.classList.toggle('box')

    color.forEach((element) => {
        element.classList.toggle('bg-dark');
        element.classList.toggle('text-whiet');
    })
    
    document.querySelector('.cv').classList.toggle('bg-whiet')
    document.querySelector('.cv a').classList.toggle('text-dark')
    
    document.querySelectorAll('.background').forEach((section) => {
        section.classList.toggle('bg-dark')
    })
})

// Skills
let mySkills = [
    { icon: '<i class="fa-solid fa-database fa-bounce fa-2x ms-2 me-3 SQL"></i>', name: 'SQL' },
    { icon: '<i class="fa-brands fa-python fa-spin fa-2x ms-2 me-3 PYTHON"></i>', name: 'PYTHON' },
    { icon: '<i class="fa-solid fa-file-excel fa-shake fa-2x ms-2 me-3 EXCEL"></i>', name: 'EXCEL' },
    { icon: '<i class="fa-solid fa-chart-bar fa-shake fa-2x ms-2 me-3 POWERBI"></i>', name: 'MICROSOFT POWERBI' },
    { icon: '<i class="fa-solid fa-brain fa-shake fa-2x ms-2 me-3 ML"></i>', name: 'MACHINE LEARNING' }
];
let box = '';
for (let i = 0; i < mySkills.length; i++) {
    box += `
    <div class="col-lg-4 col-sm-6">
    <div class="item position-relative overflow-hidden">
        ${mySkills[i].icon}
        <span>${mySkills[i].name}</span>
    </div>
    </div>
`
}
document.querySelector('.skill').innerHTML = box;

// Projects
let projects = [
    {
        name: 'E-commerce Sales PowerBI',
        image: 'imgs/Sales.png',
        projectPreview: 'https://app.powerbi.com/view?r=eyJrIjoiOGRjMTYxM2MtZjhmMy00OTRhLTkxNmQtYjRlNzg2MWYxZDFjIiwidCI6IjU3MjViNzliLTYyOTgtNDAxMi1iODZlLWE5Zjk5NWY0OTM2MyJ9',
        // code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/E-commerce-website.git',
        skills: ['PowerBI', 'Excel', 'Python']
    },
    {
        name: 'Transportation PowerBI',
        image: 'imgs/Transport.png',
        projectPreview: 'https://app.powerbi.com/view?r=eyJrIjoiNmM4Yjg5Y2UtM2Y1Zi00OGRhLWEzZGItYjYwMzkwZGQ2ZDJhIiwidCI6IjU3MjViNzliLTYyOTgtNDAxMi1iODZlLWE5Zjk5NWY0OTM2MyJ9',
        // code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/E-commerce-website.git',
        skills: ['PowerBI']
    },
    {
        name: 'B&J Biscuit Excel-Dashboard',
        image: 'imgs/B&J Biscuit.png',
        projectPreview: 'https://docs.google.com/spreadsheets/d/1OwBx1VnkdvmZuAbchJowKlzZOeNg263H/edit?gid=1576855265#gid=1576855265',
        //code: 'https://colab.research.google.com/drive/16wMXVNZZ0oZ657Fz7cn5k__uWXAbBHWX?usp=sharing',
        skills: ['Excel']
    },
    {
        name: 'Road Accident Preprocessed Excel-Dashboard',
        image: 'imgs/Excel Dashboard.png',
        //projectPreview: 'https://movies-plotly-dashboard.streamlit.app/',
        //code: 'https://colab.research.google.com/drive/16wMXVNZZ0oZ657Fz7cn5k__uWXAbBHWX?usp=sharing',
        skills: ['Excel']
    },
    {
        name: 'Spotify PowerBI',
        image: 'imgs/Spotify.png',
        projectPreview: 'https://app.powerbi.com/view?r=eyJrIjoiOGNkNGY3MWYtNzYzNy00YjFkLTg1MTctZGE2Njc5NzMyOTYyIiwidCI6IjU3MjViNzliLTYyOTgtNDAxMi1iODZlLWE5Zjk5NWY0OTM2MyJ9',
        // code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Game-Website.git',
        skills: ['PowerBI']
    },
    
    {
        name: 'Amazon Products Reviews PowerBI',
        image: 'imgs/Amazon.png',
        projectPreview: 'https://app.powerbi.com/view?r=eyJrIjoiNTliZDdiNDctM2MwMS00M2MwLWFlYzYtYmMyOTQ5Y2MyMzdiIiwidCI6IjU3MjViNzliLTYyOTgtNDAxMi1iODZlLWE5Zjk5NWY0OTM2MyJ9',
        // code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Game-Website.git',
        skills: ['PowerBI']
    },
    {
        name: 'Real Estate PowerBI',
        image: 'imgs/Real Estate.png',
        projectPreview: ' https://app.powerbi.com/view?r=eyJrIjoiOGQ1OWIwNzktZmNjNC00NmEzLThjMDAtZWY0ZGM4NGU2MmIzIiwidCI6IjU3MjViNzliLTYyOTgtNDAxMi1iODZlLWE5Zjk5NWY0OTM2MyJ9',
        // code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Game-Website.git',
        skills: ['PowerBI', 'Excel']
    },
    {
        name: 'Bank Loan PowerBI',
        image: 'imgs/Bank Loan.png',
        projectPreview: 'https://app.powerbi.com/view?r=eyJrIjoiZGFiZjYyZGMtZjgwYy00YzViLWFiNDEtZmU4NTFmNjM3OTA3IiwidCI6IjU3MjViNzliLTYyOTgtNDAxMi1iODZlLWE5Zjk5NWY0OTM2MyJ9',
        // code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Notes-App.git',
        skills: ['PowerBI', 'Excel']
    },
    {
        name: 'Taxi-Fare Prediction & Regression Machine Learning',
        image: 'imgs/taxi.png',
        projectPreview: '    https://colab.research.google.com/drive/13w6m9uqBll_B8bhv3lBXzVymaRfLtWxM?usp=sharing',
        // code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Notes-App.git',
        skills: ['Pandas', 'Seaborn', 'Machine Learning', 'Regression']
    },
    {
        name: 'Tips Python-Dashboard',
        image: 'imgs/tips-python-dashboard.png',
        projectPreview: 'https://tips-python-dashboard.streamlit.app/',
        // code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Notes-App.git',
        skills: ['Python', 'Streamlit', 'Plotly']
    },

    {
        name: 'Sales Python-Dashboard',
        image: 'imgs/sales-python-dashboard.png',
        projectPreview: 'https://sales-plotly-dashboard.streamlit.app/',
        // code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Notes-App.git',
        skills: ['Python', 'Streamlit', 'Plotly']
    },

    {
        name: 'Movies Preprocessed Python-Dashboard',
        image: 'imgs/movies.png',
        projectPreview: 'https://movies-plotly-dashboard.streamlit.app/',
        code: 'https://colab.research.google.com/drive/16wMXVNZZ0oZ657Fz7cn5k__uWXAbBHWX?usp=sharing',
        skills: ['Python', 'Pandas', 'Streamlit', 'Plotly']
    },
];
let myProjects = '';
for (let i = 0; i < projects.length; i++) {

    if (projects[i].code){
        myProjects += `
            <div class="col-lg-4 col-md-6">
            <div class="item">
                <div class="inner-box">
                    <img src="${projects[i].image}" class="w-100" alt="${projects[i].name}">
                    <div class="layer">
                        <div class="w-75">
                        <h5 class="fw-bold">${projects[i].name}</h5>
                        <ul class="list-unstyled d-flex justify-content-center mb-1">
                            <li><a href="${projects[i].projectPreview}" target="_blank"><i class="fa-solid fa-chart-bar fa-2x ms-2 me-3 POWERBI"></i></a></li>
                            <li><a href="${projects[i].code}" target="_blank"><i class="fa-solid fa-code"></i></a></li>
                        </ul>
                            <ul class="list-unstyled d-flex flex-wrap skills justify-content-center">
                            ${projects[i].skills.map((skill) => { return `<li>${skill}</li>` })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
    } else{
        myProjects += `
            <div class="col-lg-4 col-md-6">
            <a href="${projects[i].projectPreview}" target="_blank">
            <div class="item">
                <div class="inner-box">
                    <img src="${projects[i].image}" class="w-100" alt="${projects[i].name}">
                    <div class="layer">
                        <div class="w-75">
                            <ul class="list-unstyled d-flex justify-content-center mb-1">
                                <!--  <li><a href="${projects[i].code}" target="_blank"><i class="fa-solid fa-code"></i></a></li>-->
                            </ul>
                            <h5 class="fw-bold">${projects[i].name}</h5>
                            <ul class="list-unstyled d-flex flex-wrap skills justify-content-center">
                            ${projects[i].skills.map((skill) => { return `<li>${skill}</li>` })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </a>
        </div>
            `;
    }
    
}
document.getElementById('project').innerHTML = myProjects;

AOS.init();