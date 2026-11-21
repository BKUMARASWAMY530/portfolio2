const projectData = [
 {title:'Nava Setu',category:'ai',subtitle:'AI-powered scheme & financial support recommendations',description:'A recommendation platform concept that helps users discover government schemes, scholarships, and loan options based on their profile and eligibility.',tags:['React','Node.js','PostgreSQL','AI / RAG'],link:'https://github.com/BKUMARASWAMY530'},
 {title:'DeepGuard AI',category:'ai',subtitle:'Multimodal deepfake detection concept',description:'An AI project concept exploring video, audio, and visual signals to identify manipulated media and present an explainable authenticity report.',tags:['AI / ML','Multimodal','Deepfake Detection'],link:'https://github.com/BKUMARASWAMY530'},
 {title:'Personal Portfolio',category:'web',subtitle:'Responsive portfolio with interactive UI',description:'A personal website highlighting my profile, projects, academic performance, learning journey, and certificates with responsive design and JavaScript interactions.',tags:['HTML','CSS','JavaScript','Responsive'],link:'#home'},
 {title:'Networking Practice Labs',category:'web',subtitle:'Cisco Packet Tracer learning exercises',description:'Hands-on practice with LAN connectivity, IP addressing, subnetting, switch configuration, and basic routing concepts.',tags:['Networking','Packet Tracer','IP Addressing'],link:'#skills'}
];
const certificateData = [
 {title:'Python Programming Project',detail:'Embrizon Technologies · July–August 2025',image:'assets/certificates/certificate-01.jpg'},
 {title:'Python Programming Internship',detail:'Embrizon Technologies · July–August 2025',image:'assets/certificates/certificate-02.jpg'},
 {title:'Python Programming Training',detail:'Embrizon Technologies · July–August 2025',image:'assets/certificates/certificate-03.jpg'},
 {title:'Prompt War – SPICES',detail:'Prompt War event · SPICES club',image:'assets/certificates/certificate-04.jpg'},
 {title:'Google AI-ML Virtual Internship',detail:'Google Student Ambassador Program · Participation',image:'assets/certificates/certificate-05.jpg'},
 {title:'Introduction to Internet of Things',detail:'NPTEL · 70% consolidated score',image:'assets/certificates/certificate-06.jpg'},
 {title:'CREATHON Hackathon',detail:'Certificate of Appreciation · March 2026',image:'assets/certificates/certificate-07.jpg'},
 {title:'Cloud Junction Quiz',detail:'Participation · July 31, 2026',image:'assets/certificates/certificate-08.jpg'},
 {title:'InnoGenesis National Hackathon 5.0',detail:'Participation · August 7–8, 2026',image:'assets/certificates/certificate-09.jpg'}
];
const projectContainer=document.querySelector('#projects-grid');
function renderProjects(filter='all'){
 const visible=filter==='all'?projectData:projectData.filter(p=>p.category===filter);
 projectContainer.innerHTML=visible.map((p,i)=>`<article class="project-card"><span class="project-number">${String(i+1).padStart(2,'0')}</span><h3>${p.title}</h3><strong>${p.subtitle}</strong><p>${p.description}</p><div class="project-tags">${p.tags.map(tag=>`<span>${tag}</span>`).join('')}</div><a class="project-link" href="${p.link}" target="_blank" rel="noopener">View project / repo ↗</a></article>`).join('');
}
renderProjects();
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.filter-btn.active')?.classList.remove('active');btn.classList.add('active');renderProjects(btn.dataset.filter)}));
const certGrid=document.querySelector('#cert-grid');
certGrid.innerHTML=certificateData.map(c=>`<article class="cert-card" tabindex="0" role="button" aria-label="View ${c.title}" data-image="${c.image}" data-caption="${c.title}"><div class="cert-image"><img loading="lazy" src="${c.image}" alt="${c.title} certificate"></div><div class="cert-info"><h3>${c.title}</h3><p>${c.detail}</p><span class="cert-open">View certificate ↗</span></div></article>`).join('');
const modal=document.querySelector('#certificate-modal'),modalImg=document.querySelector('#modal-image'),modalCaption=document.querySelector('#modal-caption');
function openCertificate(card){modalImg.src=card.dataset.image;modalCaption.textContent=card.dataset.caption;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
certGrid.addEventListener('click',e=>{const card=e.target.closest('.cert-card');if(card)openCertificate(card)});
certGrid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('cert-card')){e.preventDefault();openCertificate(e.target)}});
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';modalImg.src=''}
document.querySelector('.modal-close').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal});
const menuBtn=document.querySelector('.menu-toggle'),nav=document.querySelector('#primary-nav');menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu')});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
document.querySelector('#year').textContent=new Date().getFullYear();
