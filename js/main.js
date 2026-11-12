// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link, .btn').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Skip smooth scroll for anchor links that don't exist in DOM
        if (href.startsWith('#') && !document.querySelector(href)) {
            e.preventDefault();
        }
    });
});

// Add active state to nav link on scroll
const sections = document.querySelectorAll('section[id]');
let currentSection = '';

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    
    // Use intersection observer for better performance
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const activeLink = link.querySelector(`[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    });
});


// Project Data - Projects from the portfolio
const allProjects = [
    {
        title: 'Unannounced Third-Person Multiplayer Shooter',
        videoUrl: 'https://www.youtube.com/embed/8odgHuT3Ydk',
        tech: ['C++', 'Unreal Engine', 'Git']
    },
    {
        title: 'Stealth Takedown',
        videoUrl: 'https://www.youtube.com/embed/8odgHuT3Ydk',
        tech: ['C++', 'Unreal Engine', 'Git']
    },
    {
        title: 'Custom First-Person Character Controller',
        videoUrl: 'https://www.youtube.com/embed/_tYSphYUr-s',
        tech: ['C++', 'Unreal Engine', 'Git']
    },
    {
        title: 'Grappling Hook Gun',
        videoUrl: 'https://www.youtube.com/embed/f_KirG8yoEI',
        tech: ['C++', 'raylib', 'Git']
    },
    {
        title: 'Run Merle! Run!',
        videoUrl: 'https://www.youtube.com/embed/jr68QArXNGE',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'Ambush',
        videoUrl: 'https://www.youtube.com/embed/4VksBQYbFkA',
        tech: ['Git']
    },
    {
        title: 'The Forest',
        videoUrl: 'https://www.youtube.com/embed/CqtiT5bIvdo',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'Battle EXTREME',
        videoUrl: 'https://www.youtube.com/embed/CsIdAaX5sps',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'Word Search Generator',
        videoUrl: 'https://www.youtube.com/embed/v3Yf1MZSxSQ',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'Maze Generator (Recursive Backtracking)',
        videoUrl: 'https://www.youtube.com/embed/nyoIJMp09NM',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'A* Pathfinding',
        videoUrl: 'https://www.youtube.com/embed/ZMR2ItNA8kw',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'Dinomon',
        videoUrl: 'https://www.youtube.com/embed/GfIo-WAU1fQ',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: '2.5D Unity Demo',
        videoUrl: 'https://www.youtube.com/embed/MW3FBb60S44',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'Budget Craft',
        videoUrl: 'https://www.youtube.com/embed/BrcWXU55Hfk',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'Procedural Terrain Generation Showcase (2D Minecraft)',
        videoUrl: 'https://www.youtube.com/embed/Ih8_mnzetO8',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'Turning My PC Game Into a Mobile App!',
        videoUrl: 'https://www.youtube.com/embed/ZNx4EBcOkaI',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'Jumpy Jack',
        videoUrl: 'https://www.youtube.com/embed/feuSBXfBBGE',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'Unity Showcase: Normal Maps, Dynamic Lighting and More!',
        videoUrl: 'https://www.youtube.com/embed/9uh4qgu-YyE',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'The Hidden',
        videoUrl: 'https://www.youtube.com/embed/o6A9LLErjGI',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'Balloon Popper',
        videoUrl: 'https://www.youtube.com/embed/eqV-AozTyyM',
        tech: ['C#', 'Unity', 'Git']
    },
    {
        title: 'Space Enemies',
        videoUrl: 'https://www.youtube.com/embed/wrVBTIoup9Q',
        tech: ['C#', 'Unity', 'Git']
    }
];

// Software Data - Full list of all software worked on
const allSoftware = [
    {
        name: 'FC 27',
        description: 'Football gameplay video',
        videoUrl: 'https://www.youtube.com/embed/zEcmpr1Ssr8'
    },
    {
        name: 'FC 26',
        description: 'Football gameplay video',
        videoUrl: 'https://www.youtube.com/embed/TSi0iJYSQ24'
    },
    {
        name: 'FC Mobile',
        description: 'Football gameplay video',
        videoUrl: 'https://www.youtube.com/embed/BUiTrbeBIZM'
    },
    {
        name: 'Plants vs. Zombies: Replanted',
        description: 'Gameplay video',
        videoUrl: 'https://www.youtube.com/embed/FTL_utrFfws'
    },
    {
        name: 'Laser',
        description: 'Gameplay video',
        videoUrl: 'https://www.youtube.com/embed/trViVlKr_7w'
    },
    {
        name: 'Strike',
        description: 'Gameplay video',
        videoUrl: 'https://www.youtube.com/embed/SqYcbWufxK4'
    },
    {
        name: 'Grid',
        description: 'Gameplay video',
        videoUrl: 'https://www.youtube.com/embed/VPNUVuUp3X8'
    },
    {
        name: 'Super Grid',
        description: 'Gameplay video',
        videoUrl: 'https://www.youtube.com/embed/g1e0zwLg67c'
    },
    {
        name: 'Hide',
        description: 'Gameplay video',
        videoUrl: 'https://www.youtube.com/embed/GyVi6lokN3o'
    },
    {
        name: 'Unannounced Ubisoft Game',
        status: 'Not Released',
        unreleased: true
    },
    {
        name: 'Cross-platform Client-side EA SDK',
        status: 'Not Public',
        unreleased: true
    },
    {
        name: 'Unannounced Ubisoft Automation Software',
        status: 'Not Public',
        unreleased: true
    }
];

// Initialize projects with loading functionality
let currentPage = 1;
const projectsPerPage = 3;
let isLoading = false;
let hasLoadedMore = false;

// Render a single project card
function renderProjectCard(project, index) {
    return `
        <div class="project-card" style="animation-delay: ${index * 0.1}s">
            <h3 class="project-title">${project.title}</h3>
            <div class="project-video">
                <iframe loading="lazy" src="${project.videoUrl}" title="${project.title} video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="project-tech">
                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        </div>
    `;
}

// Render all visible projects on current page
function renderPage(page) {
    const start = (page - 1) * projectsPerPage;
    const end = Math.min(start + projectsPerPage, allProjects.length);
    
    const projectCards = [];
    for (let i = start; i < end; i++) {
        projectCards.push(renderProjectCard(allProjects[i], i));
    }
    document.getElementById('projectsGrid').insertAdjacentHTML('beforeend', projectCards.join(''));
    
    // Update remaining counter
    const remainingCount = allProjects.length - Math.min(start + projectsPerPage, allProjects.length);
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const projectsRemaining = document.getElementById('projectsRemaining');
    
    if (remainingCount === 0) {
        loadMoreBtn.style.display = 'none';
        projectsRemaining.textContent = '';
        projectsRemaining.style.display = 'none';
    } else {
        hasLoadedMore = true;
        loadMoreBtn.style.display = 'inline-flex';
        projectsRemaining.textContent = `+${remainingCount} more available`;
    }
}

// Load next page of projects
function loadNextPage() {
    if (isLoading || currentPage >= Math.ceil(allProjects.length / projectsPerPage)) {
        return;
    }
    
    isLoading = true;
    currentPage++;
    renderPage(currentPage);
    isLoading = false;
}

// Event listener for load more button
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the page with first batch of projects
    renderPage(1);
    
    // Add click event to load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loadNextPage();
        });
        
        // Show loading state on click
        loadMoreBtn.addEventListener('mousedown', () => {
            loadMoreBtn.textContent = 'Loading...';
        });
        
        loadMoreBtn.addEventListener('mouseup', () => {
            loadMoreBtn.textContent = 'Load More';
        });
    }
    
    // Auto-load next page when user scrolls near bottom of projects section
    window.addEventListener('scroll', () => {
        const projectSection = document.querySelector('.projects-grid');
        if (projectSection) {
            const viewportHeight = window.innerHeight;
            const sectionTop = projectSection.offsetTop;
            const sectionBottom = projectSection.offsetTop + projectSection.offsetHeight;
            
            // Check if user is scrolling near bottom of projects section
            if (isLoading && hasLoadedMore) {
                return;
            }
            
            // Load more when 50px from bottom of projects section
            const distanceToBottom = viewportHeight - (sectionBottom - window.scrollY);
            if (distanceToBottom <= 50 && !hasLoadedMore) {
                loadNextPage();
            }
        }
    });
});

// Software Loading Functionality
let softwarePage = 1;
const softwarePerPage = 3;
let softwareIsLoading = false;
let softwareHasLoadedMore = false;

// Render a single software card
function renderSoftwareCard(software, index) {
    let videoContent;
    if (software.unreleased) {
        videoContent = `
            <div class="software-unreleased-notice">
                <span class="software-unreleased-label">${software.status || 'Unreleased'}</span>
                ${software.description ? `<p>${software.description}</p>` : ''}
            </div>
        `;
    } else {
        const videoUrl = new URL(software.videoUrl);
        if (['http:', 'https:'].includes(window.location.protocol)) {
            videoUrl.searchParams.set('origin', window.location.origin);
        }
        videoContent = `<iframe loading="lazy" width="100%" height="200" src="${videoUrl.href}" title="${software.name} video" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    }

    return `
        <div class="software-card" style="animation-delay: ${index * 0.1}s">
            <h3 class="software-name">${software.name}</h3>
            <div class="software-video-container">
                ${videoContent}
            </div>
        </div>
    `;
}

// Render all visible software on current page
function renderSoftwarePage(page) {
    const start = (page - 1) * softwarePerPage;
    const end = Math.min(start + softwarePerPage, allSoftware.length);

    const softwareGrid = document.querySelector('.software-grid');
    if (page === 1) {
        softwareGrid.innerHTML = '';
    }

    const softwareCards = [];
    for (let i = start; i < end; i++) {
        softwareCards.push(renderSoftwareCard(allSoftware[i], i));
    }
    softwareGrid.insertAdjacentHTML('beforeend', softwareCards.join(''));

    // Update remaining counter
    const remainingCount = allSoftware.length - Math.min(start + softwarePerPage, allSoftware.length);
    const loadMoreBtn = document.getElementById('loadMoreSoftwareBtn');
    const softwareRemaining = document.getElementById('softwareRemaining');

    if (remainingCount === 0) {
        loadMoreBtn.style.display = 'none';
        softwareRemaining.textContent = '';
        softwareRemaining.style.display = 'none';
    } else {
        softwareHasLoadedMore = true;
        loadMoreBtn.style.display = 'inline-flex';
        softwareRemaining.textContent = `+${remainingCount} more available`;
    }
}

// Load next page of software
function loadNextSoftwarePage() {
    if (softwareIsLoading || softwarePage >= Math.ceil(allSoftware.length / softwarePerPage)) {
        return;
    }

    softwareIsLoading = true;
    softwarePage++;
    renderSoftwarePage(softwarePage);
    softwareIsLoading = false;
}

// Software load more button event listener
const loadMoreSoftwareBtn = document.getElementById('loadMoreSoftwareBtn');
if (loadMoreSoftwareBtn) {
    loadMoreSoftwareBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadNextSoftwarePage();
    });

    // Show loading state on click
    loadMoreSoftwareBtn.addEventListener('mousedown', () => {
        loadMoreSoftwareBtn.textContent = 'Loading...';
    });

    loadMoreSoftwareBtn.addEventListener('mouseup', () => {
        loadMoreSoftwareBtn.textContent = 'Load More';
    });
}

// Initialize software with first batch
renderSoftwarePage(1);

// Experience load-more functionality
const loadMoreExperienceBtn = document.getElementById('loadMoreExperienceBtn');
const experienceRemaining = document.getElementById('experienceRemaining');
const hiddenExperienceEntries = document.querySelectorAll('.experience-hidden');

if (loadMoreExperienceBtn) {
    const updateExperienceLoadMore = () => {
        const remainingCount = document.querySelectorAll('.experience-hidden[hidden]').length;
        if (remainingCount === 0) {
            loadMoreExperienceBtn.style.display = 'none';
            experienceRemaining.style.display = 'none';
            experienceRemaining.textContent = '';
            return;
        }

        experienceRemaining.textContent = `+${remainingCount} more available`;
    };

    loadMoreExperienceBtn.addEventListener('click', () => {
        hiddenExperienceEntries.forEach(entry => {
            entry.hidden = false;
        });
        updateExperienceLoadMore();
    });

    updateExperienceLoadMore();
}

// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('themeToggleBtn');
let currentTheme = localStorage.getItem('theme') || 'light';

// Apply initial theme
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    // Update icon
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const sunIcon = document.querySelector('.theme-icon.light-mode');
    const moonIcon = document.querySelector('.theme-icon.dark-mode');
    
    if (sunIcon && moonIcon) {
        sunIcon.style.display = theme === 'light' ? 'block' : 'none';
        moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
    }
}

// Check for user preference on first load
if (localStorage.getItem('theme-preference') === 'dark') {
    applyTheme('dark');
} else if (localStorage.getItem('theme-preference') === 'light') {
    applyTheme('light');
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
}

// Toggle theme on button click
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });
    
    // Add active state to logo text - ICONS ONLY, NO TEXT
    themeToggleBtn.innerHTML = `
        <svg class="theme-icon light-mode lucide lucide-sun preview-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/>
            <path d="m4.93 4.93 1.41 1.41"/>
            <path d="m17.66 17.66 1.41 1.41"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="m6.34 17.66-1.41 1.41"/>
            <path d="m19.07 4.93-1.41 1.41"/>
        </svg>
        <svg class="theme-icon dark-mode lucide lucide-moon preview-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
        </svg>
    `;
}

// Theme toggle with keyboard shortcut (Ctrl/Cmd + Shift + T)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    }
});

// Add animations when window resizes
let resized = false;

window.addEventListener('resize', () => {
    setTimeout(() => {
        if (!resized) {
            const animateElements = document.querySelectorAll('.skill-category, .timeline-item, .project-card');
            animateElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
            });
            
            // Re-observe with new settings
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            animateElements.forEach(el => observer.observe(el));
            
            resized = true;
        }
    }, 100);
});

// Update theme icon on document ready
document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcon(currentTheme);
    
});
