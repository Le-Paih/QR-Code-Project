const jobsListings = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]

const Tag_active_class = 'tag-active'
const TAG_CLASS = 'tag'
const CLOSE_FILTER_CLASS = 'filter-tag';
const FILTER_HIDDEN_CLASS = 'hidden'


function getTagHTML(tag, tagClasses) {
    return `<span class="${tagClasses}">
        ${tag}</span>`;
}

function getJobListingHTML(jobData, filterTags = []) {
    const Job_tags_placeholder = `#JOB_TAGS#`;
    let jobListingHTML = `
    <article class="job-tile">
         <img src="${jobData.logo}" alt="" class="tile-img" alt="${jobData.company}">
         <div class="tile-text">
           <p class="name">${jobData.company}</p>

         <div class="extra">
         </div>

           <p class="role">${jobData.position}</p>
           <ul class="details">
             <li class="details-item">${jobData.postedAt}</li>
             <li class="details-item">${jobData.contract}</li>
             <li class="details-item">${jobData.location}</li>
           </ul>
         </div>
         <div class="line"></div>
         <div class="right-side">
            ${Job_tags_placeholder}
            </div>
       </article>`;

    const tagsList = [
        jobData.role,
        jobData.level,
        ...(jobData.languages || []),
        ...(jobData.tools || [])
    ];
    const tagsListLowercase = tagsList.map(t => t && t.toLowerCase());
    const passesFilter = !filterTags.length || filterTags.every(tag => ( tagsListLowercase.includes(tag && tag.toLowerCase())
    ));
    if (!passesFilter) {
        return '';
    }

    const tagsString = tagsList.reduce((acc, currentTag) => {
        const activeClass = (filterTags.includes(currentTag) && Tag_active_class) || '';

        return acc + getTagHTML(currentTag, `${TAG_CLASS} ${activeClass}`);
    }, '');

    return jobListingHTML.replace(Job_tags_placeholder, tagsString);
}

function toggleClass(el, className) {
        if (el.classList.contains(className)) {
            el.classList.remove(className);
    
            return;
        }
        
        el.classList.add(className);
}

    function getFilterBarTags(tagValue, filterContentEl) {
        let filterBarTags = Array.from(filterContentEl.children)
            .map(node => node.innerHTML && node.innerHTML.trim())
            .filter(tag => !!tag);
    
        if (filterBarTags.includes(tagValue)) {
            filterBarTags = filterBarTags.filter(tag => tag !== tagValue);
        } else {
            filterBarTags = [...filterBarTags, tagValue];
        }
    
        return filterBarTags;
    }

    function setJobsListings(filterTags) {
        const jobsListingsHTML = jobsListings.reduce((acc, currentListing) => {
            return acc + getJobListingHTML(currentListing, filterTags);
        }, '');
        
        document.getElementById('listings').innerHTML = jobsListingsHTML;
    }

    function displayFilterWrapper(display = false) {
        const filterWrapper = document.getElementById('filters');
        
        if (display) {
            filterWrapper.classList.remove('hidden');
    
            return;
        }
    
        filterWrapper.classList.add('hidden');
    }

    function setFilterContent(filterContentEl, tags) {
        filterContentEl.innerHTML = tags.reduce((acc, currentTag) => {
            return acc + getTagHTML(currentTag, CLOSE_FILTER_CLASS);
        }, '');
    }

    function resetState(filterContentEl) {
        filterContentEl.innerHTML = '';
    
        setJobsListings();
        displayFilterWrapper(false);
        toggleClass(targetEl, Tag_active_class);
    }

    window.addEventListener('click', (event) => {
        const targetEl = event.target;
        const targetText = targetEl.innerHTML.trim();
        const filterContentEl = document.getElementById('filter-content');
        const filterBarTags = getFilterBarTags(targetText, filterContentEl);
    
        if (targetEl.id === 'clear' || !filterBarTags.length) {
            resetState(filterContentEl);
    
            return;
        }
    
        if (![TAG_CLASS, CLOSE_FILTER_CLASS].some(c => targetEl.classList.contains(c))) {
            return;
        }
    
        setFilterContent(filterContentEl, filterBarTags);
        toggleClass(targetEl, Tag_active_class);
        displayFilterWrapper(filterBarTags.length > 0);
        setJobsListings(filterBarTags);
    });
    
    setJobsListings();


