// ============================================
// POSTS DATA ARRAY
// ============================================
const POSTS = [
    {
        id: 1,
        title: "The Day Everything Changed",
        date: "2024-03-15",
        tag: "Reflection",
        heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop",
        contentHtml: `
            <p>Today marked a turning point in my journey. I woke up with a strange feeling, as if the universe was trying to tell me something important. The morning light filtered through my window, casting long shadows that seemed to dance with purpose.</p>
            
            <p>I spent hours contemplating the nature of change. How do we know when we're on the right path? The answer, I've come to realize, lies not in the destination but in the journey itself. Every step we take shapes who we become.</p>
            
            <p>As I walked through the park, I noticed something peculiar. Seven cans arranged in a specific pattern caught my eye. Three on the bottom, two in the middle, one on top. It reminded me of ancient structures, of pyramids that have stood the test of time. The arrangement seemed intentional, almost like a message waiting to be understood.</p>
            
            <p>Later that evening, I found myself reflecting on balance and structure. There's something beautiful about creating order from chaos, about finding harmony in seemingly random elements. The cans remained in my mind, their formation a puzzle I couldn't quite solve.</p>
            
            <p>Perhaps the universe speaks to us through simple things. Through everyday objects arranged in ways that challenge our perception. Through patterns that emerge when we least expect them. Today, I learned to look more carefully, to see the hidden messages in the world around me.</p>
        `,
        clue: {
            finalTask: "7-can 3-2-1 pyramid",
            revealStyle: "inline",
            visibleHint: "Look for the pattern mentioned in the third paragraph",
            hiddenPayload: "Arrange 7 cans in a pyramid: 3 on bottom, 2 in middle, 1 on top",
            difficulty: "medium"
        }
    },
    {
        id: 2,
        title: "Shapes and Shadows",
        date: "2024-03-18",
        tag: "Adventure",
        heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
        contentHtml: `
            <p>The geometric patterns of the city never cease to amaze me. Every corner reveals new angles, new perspectives on familiar spaces. Today, I found myself drawn to the shapes that define our world.</p>
            
            <p>I started my morning at the art gallery, where abstract forms challenged my understanding of space and dimension. The way light interacts with different shapes creates shadows that tell their own stories. Circle, square, triangle—each has its own language, its own way of communicating meaning.</p>
            
            <p>Walking through the sculpture garden, I noticed something interesting. Circular forms first, square shapes second, triangular pieces third. The sculptures were arranged in a particular sequence. First came the circular forms, smooth and continuous. Then the angular squares, rigid and defined. Finally, the triangular pieces, sharp and dynamic. The order seemed deliberate, as if following some hidden logic.</p>
            
            <p>Later, I sat in a café and sketched the shapes I'd seen. The order kept repeating in my mind: circle, square, triangle. It felt like a code, a pattern that held significance beyond mere aesthetics. Perhaps it was a message about progression, about moving from the infinite to the finite, from the soft to the sharp.</p>
            
            <p>As the sun set, casting long geometric shadows across the pavement, I realized that shapes are more than visual elements. They're symbols, they're language, they're the building blocks of understanding. And sometimes, their order matters more than we think.</p>
        `,
        clue: {
            finalTask: "shape order",
            revealStyle: "first-letters",
            visibleHint: "Read the first letters of key words in the third paragraph",
            hiddenPayload: "Circle, Square, Triangle - arrange shapes in this order",
            difficulty: "easy"
        }
    },
    {
        id: 3,
        title: "Balance and Precision",
        date: "2024-03-22",
        tag: "Science",
        heroImage: "images/balance-precision.jpeg",
        contentHtml: `
            <p>Physics has always fascinated me. The way forces interact, the delicate balance between motion and stillness, the precision required to achieve equilibrium. Today, I conducted a simple experiment that revealed profound truths about balance.</p>
            
            <p>I took a ruler and placed it on the edge of my desk. At first, it teetered precariously, threatening to fall at the slightest disturbance. But then I added a coin, carefully positioned at just the right point. The ruler balanced perfectly, defying gravity through careful calculation.</p>
            
            <p>The coin-ruler system became a meditation on equilibrium. Every element had to be in perfect harmony: the weight of the coin, the position on the ruler, the angle of the surface. It reminded me that balance isn't about equal distribution, but about finding the precise point where all forces align.</p>
            
            <p>I spent hours adjusting, fine-tuning, observing. Each small change affected the entire system. The coin had to be placed exactly at the center of mass, where the ruler's weight was perfectly counterbalanced. It was a lesson in patience and precision.</p>
            
            <p>As I watched the balanced system, I thought about how this principle applies to life. We're all searching for that perfect point of balance, where all our forces align and we can rest in equilibrium. Sometimes it takes careful adjustment, sometimes it requires adding just the right element at just the right moment.</p>
        `,
        clue: {
            finalTask: "coin-ruler balance",
            revealStyle: "tooltip",
            visibleHint: "Hover over the highlighted text in the second paragraph",
            hiddenPayload: "Balance a ruler on an edge using a coin positioned at the center of mass",
            difficulty: "hard"
        }
    },
    {
        id: 4,
        title: "The Art of Precision",
        date: "2024-03-25",
        tag: "Skills",
        heroImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=400&fit=crop",
        contentHtml: `
            <p>Some skills require years to master. Others demand only focus and determination. Today, I discovered that precision comes not from complexity, but from understanding the fundamentals.</p>
            
            <p>I found myself in a room with a simple challenge: a table, a target, and a small white ball. The goal seemed straightforward—get the ball into the target. But as I attempted the task, I realized that simplicity often masks difficulty.</p>
            
            <p>The ball was light, almost weightless. A ping-pong ball, I realized. Each throw required careful calculation: the angle of release, the force applied, the trajectory needed to reach the target. I missed more times than I care to admit, but each attempt taught me something new.</p>
            
            <p>After what felt like hours, I finally succeeded. The ball arced perfectly through the air, landing precisely where I intended. The feeling of achievement was immediate and profound. I had mastered the ping-pong toss through persistence and careful observation.</p>
            
            <p>This experience reminded me that mastery isn't about natural talent—it's about practice, observation, and the willingness to fail until you succeed. Every missed shot was a lesson, every adjustment brought me closer to perfection.</p>
        `,
        clue: {
            finalTask: "ping-pong toss",
            revealStyle: "mid-paragraph",
            visibleHint: "The clue is embedded naturally in the third paragraph",
            hiddenPayload: "Successfully toss a ping-pong ball into a target",
            difficulty: "medium"
        }
    },
    {
        id: 5,
        title: "Engineering Dreams",
        date: "2024-03-28",
        tag: "Innovation",
        heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=400&fit=crop",
        contentHtml: `
            <p>Innovation often comes from constraints. When resources are limited, creativity flourishes. Today, I challenged myself to build something meaningful using only the simplest of materials.</p>
            
            <p>I gathered a collection of drinking straws and began experimenting. At first, they seemed too fragile, too insubstantial to create anything of significance. But as I worked, I discovered their hidden strength.</p>
            
            <p>By connecting straws in specific patterns, I created a structure that could span distances, support weight, and maintain its form. The key was in the connections—each joint had to be precise, each angle calculated for maximum stability.</p>
            
            <p>I built a bridge. A simple structure, yes, but one that demonstrated fundamental principles of engineering. The straws, when properly arranged, created a truss system that distributed weight efficiently. It was a lesson in structural integrity, in how small elements can create something greater than their sum.</p>
            
            <p>The bridge spanned a gap between two tables, a testament to careful planning and execution. It held more weight than I expected, proving that strength comes not from the material itself, but from how it's used. Sometimes the simplest tools, when applied with understanding, can achieve remarkable results.</p>
        `,
        clue: {
            finalTask: "straw bridge",
            revealStyle: "image-alt",
            visibleHint: "Check the alt text of the image",
            hiddenPayload: "Build a bridge using only drinking straws that can span a gap and support weight",
            difficulty: "hard"
        }
    },
    {
        id: 6,
        title: "Illuminated Thoughts",
        date: "2024-04-01",
        tag: "Mystery",
        heroImage: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=400&fit=crop",
        contentHtml: `
            <p>Light has always been a source of fascination. The way it cuts through darkness, revealing what was hidden, illuminating paths we couldn't see before. Tonight, I explored the mysteries that only reveal themselves in the absence of light.</p>
            
            <p>I turned off all the lights in my room, leaving only a single torch. The beam cut through the darkness like a blade, creating sharp contrasts between light and shadow. In that focused illumination, I noticed something I'd never seen before.</p>
            
            <p>There, on the wall, was a message. Using special ink that only appears under torchlight. Read the hidden note revealed by the glow. Check carefully where the light falls. Hidden messages await discovery. Written in a way that only became visible under the specific glow of the torch. The light revealed hidden ink, or perhaps a surface that reflected only certain wavelengths. The note was clear, once I knew where to look.</p>
            
            <p>The message spoke of hidden truths, of things that exist just beyond our normal perception. It reminded me that reality is more complex than we often assume, that there are layers to existence that require special conditions to reveal themselves.</p>
            
            <p>I spent the rest of the evening experimenting with different light sources, different angles, different techniques. Each revealed something new, each showed me a different aspect of the hidden message. The torch glow had unlocked a secret, and I was determined to understand its full meaning.</p>
        `,
        clue: {
            finalTask: "torch glow note",
            revealStyle: "acrostic",
            visibleHint: "Read the first letter of each sentence in the third paragraph vertically",
            hiddenPayload: "Use a torch to reveal a hidden note written in invisible ink or special material",
            difficulty: "medium"
        }
    },
    {
        id: 7,
        title: "The Locked Box Mystery",
        date: "2024-04-05",
        tag: "Puzzle",
        heroImage: "images/locked-box.jpeg",
        contentHtml: `
            <p>Some mysteries require patience. Others demand logic. Today, I encountered a challenge that required both: a lockbox with a combination that seemed impossible to crack.</p>
            
            <p>The box was sturdy, well-made, clearly designed to protect its contents. Three dials, each with numbers from zero to nine. The possible combinations numbered in the thousands, but I had a feeling the answer was simpler than it appeared.</p>
            
            <p>I tried obvious combinations first: 000, 111, 123, 999. None worked. I tried dates, birthdays, significant numbers. Still nothing. The lock remained stubbornly closed, its secrets protected by my lack of understanding.</p>
            
            <p>Then it hit me. The pattern wasn't random. It followed a sequence, a countdown of sorts. Three, then two, then one. A descending order that represented completion, finality, the end of a process. I dialed 3-2-1, and the lock clicked open.</p>
            
            <p>Inside, I found not treasure, but understanding. The real value wasn't in what the box contained, but in the process of unlocking it. The combination 3-2-1 represented a countdown, a sequence that led to revelation. Sometimes the answer is simpler than we think, hidden in plain sight, waiting for us to see the pattern.</p>
        `,
        clue: {
            finalTask: "lockbox 3-2-1",
            revealStyle: "data-attribute",
            visibleHint: "Click the reveal button below to see the clue",
            hiddenPayload: "Open a lockbox using the combination 3-2-1",
            difficulty: "easy"
        }
    },
    {
        id: 8,
        title: "Colors of the Spectrum",
        date: "2024-04-08",
        tag: "Art",
        heroImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=400&fit=crop",
        contentHtml: `
            <p>Color theory has always captivated me. The way light splits into its component parts, creating the spectrum that defines our visual world. Today, I explored the order of colors, the sequence that nature follows.</p>
            
            <p>I set up a prism experiment, watching white light break into its constituent colors. The rainbow that emerged followed a specific order, one that has been understood for centuries but never fails to amaze.</p>
            
            <p>The sequence was clear: Violet, Indigo, Blue, Green, Yellow, Orange, Red. VIBGYOR, as it's often remembered. Each color transitioned smoothly into the next, creating a gradient that seemed both natural and perfect.</p>
            
            <p>I spent time with each color, understanding its wavelength, its frequency, its place in the spectrum. Violet, with its short wavelength and high energy. Indigo, deep and mysterious. Blue, calm and expansive. Green, balanced and natural. Yellow, bright and energetic. Orange, warm and vibrant. Red, with its long wavelength and lower energy.</p>
            
            <p>Arranging objects in this order became a meditation on the nature of light itself. Each color represented a different energy level, a different way of interacting with matter. The VIBGYOR order wasn't arbitrary—it was physics made visible, science transformed into beauty.</p>
        `,
        clue: {
            finalTask: "VIBGYOR order",
            revealStyle: "footnote",
            visibleHint: "Check the footnote at the bottom of the post",
            hiddenPayload: "Arrange objects in VIBGYOR order: Violet, Indigo, Blue, Green, Yellow, Orange, Red",
            difficulty: "medium"
        }
    },
    {
        id: 9,
        title: "Chance and Probability",
        date: "2024-04-12",
        tag: "Mathematics",
        heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
        contentHtml: `
            <p>Probability fascinates me. The mathematics of chance, the way random events can create patterns when viewed over time. Today, I explored what happens when we flip a coin repeatedly, searching for patterns in randomness.</p>
            
            <p>I took a coin and began flipping. Heads, tails, heads, heads, tails. Each flip was independent, each result a matter of chance. But as I continued, I started to notice something interesting.</p>
            
            <p>Getting three heads in a row seemed unlikely at first. The probability was one in eight, but probability doesn't guarantee outcomes—it only describes likelihood. I kept flipping, recording each result, watching for the pattern to emerge.</p>
            
            <p>After many attempts, it finally happened. Three consecutive heads appeared in my sequence. The event that had seemed so improbable had occurred, as probability theory predicted it eventually would. It was a moment of validation, of seeing mathematical principles manifest in reality.</p>
            
            <p>This experiment taught me about persistence and probability. Rare events aren't impossible—they're just less frequent. With enough attempts, even unlikely sequences will appear. Three heads in a row became not just a statistical curiosity, but a lesson in the nature of chance itself.</p>
        `,
        clue: {
            finalTask: "3 heads in a row",
            revealStyle: "html-comment",
            visibleHint: "View the page source and look for HTML comments",
            hiddenPayload: "Flip a coin until you get three heads in a row",
            difficulty: "easy"
        }
    },
    {
        id: 10,
        title: "Building Upward",
        date: "2024-04-15",
        tag: "Construction",
        heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop",
        contentHtml: `
            <p>Construction has always been about stacking, about building upward from a solid foundation. Today, I explored the principles of vertical construction, of how small elements can create impressive structures.</p>
            
            <p>I gathered five objects of different sizes. The challenge was clear: stack them in a specific order, from smallest to largest, creating a stable tower that defied gravity through careful balance.</p>
            
            <p>The sequence was important. One first, then two, then three, then four, then five. Each object had to be placed precisely, its center of mass aligned with the objects below. The smallest at the bottom, the largest at the top—counterintuitive, perhaps, but necessary for stability.</p>
            
            <p>Actually, wait. I reconsidered. The traditional approach would be largest to smallest, but that wasn't the challenge. The task was to stack from one to five, meaning the smallest first, building upward. Each level had to support the next, creating a progression that was both logical and stable.</p>
            
            <p>When I finally achieved the stack, I marveled at its simplicity and elegance. Five objects, arranged in numerical order, creating a structure that seemed both fragile and strong. It was a lesson in careful placement, in understanding how each element contributes to the whole. Stack 1→5, and you create something greater than its parts.</p>
        `,
        clue: {
            finalTask: "stack 1→5",
            revealStyle: "qr",
            visibleHint: "Look for a small QR code in the content",
            hiddenPayload: "Stack objects in order from 1 (smallest) to 5 (largest)",
            difficulty: "medium"
        }
    }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get URL parameter value
 * @param {string} name - Parameter name
 * @returns {string|null} - Parameter value or null
 */
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

/**
 * Format date string to readable format
 * @param {string} dateString - ISO date string
 * @returns {string} - Formatted date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}


// ============================================
// CLUE RENDERING FUNCTIONS
// ============================================

/**
 * Render clue based on reveal style
 * @param {Object} clue - Clue object
 * @param {string} postId - Post ID
 * @returns {string} - HTML string for clue
 */
function renderClue(clue, postId) {
    // All clues are hidden - no visible hints returned
    // Clues are embedded in contentHtml or HTML comments
    switch(clue.revealStyle) {
        case 'inline':
        case 'mid-paragraph':
        case 'tooltip':
        case 'image-alt':
        case 'qr':
        case 'acrostic':
        case 'first-letters':
        case 'data-attribute':
        case 'footnote':
            // All clues are hidden in content, no visible hints
            return '';
        
        case 'html-comment':
            // HTML comment clue handled separately in renderPosts
            return '';
        
        default:
            return '';
    }
}


// ============================================
// POST RENDERING
// ============================================

let lastFocusedCard = null;

function escapeAttribute(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function preparePostContent(post) {
    let contentHtml = post.contentHtml;

    if (post.clue.revealStyle === 'qr') {
        const qrData = encodeURIComponent(post.clue.hiddenPayload);
        const qrHtml = `
            <div class="qr-container">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${qrData}" 
                     alt="" 
                     title="">
            </div>
        `;
        const paragraphs = contentHtml.split('</p>');
        if (paragraphs.length >= 2) {
            paragraphs[1] += qrHtml;
            contentHtml = paragraphs.join('</p>');
        }
    }

    if (post.clue.revealStyle === 'tooltip') {
        const paragraphs = contentHtml.split('</p>');
        if (paragraphs.length >= 2) {
            paragraphs[1] = paragraphs[1].replace(
                /\b(coin|ruler)\b/i,
                `<span class="clue-tooltip" data-clue="${post.clue.hiddenPayload}">$1</span>`
            );
            contentHtml = paragraphs.join('</p>');
        }
    }

    const dataAttributes = post.clue.revealStyle === 'data-attribute'
        ? { clue: post.clue.hiddenPayload, task: post.clue.finalTask }
        : null;

    return { contentHtml, dataAttributes };
}

function getPostExcerpt(contentHtml, maxLength = 140) {
    if (!contentHtml) return '';

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = contentHtml;
    const firstParagraph = tempDiv.querySelector('p');
    const rawText = (firstParagraph ? firstParagraph.textContent : tempDiv.textContent || '').trim();

    if (!rawText) return '';
    if (rawText.length <= maxLength) return rawText;

    return `${rawText.slice(0, maxLength).trim()}…`;
}

function renderPostCard(post, isTeamHighlight = false) {
    const { dataAttributes } = preparePostContent(post);
    const dataAttrString = dataAttributes
        ? `data-clue="${escapeAttribute(dataAttributes.clue)}" data-task="${escapeAttribute(dataAttributes.task)}"`
        : '';
    const teamClass = isTeamHighlight ? 'team-highlight' : '';
    const excerpt = getPostExcerpt(post.contentHtml) || 'Tap to open the full story.';
    const safeHero = post.heroImage ? post.heroImage.replace(/'/g, "\\'") : '';
    const thumb = post.heroImage
        ? `<div class="post-card__thumb" style="background-image: url('${safeHero}');"></div>`
        : `<div class="post-card__thumb post-card__thumb--placeholder">Preview coming soon</div>`;

    const ariaLabel = escapeAttribute(`Open post ${post.title}`);

    return `
        <article class="post-card ${teamClass}" data-post-id="${post.id}" ${dataAttrString} role="button" tabindex="0" aria-label="${ariaLabel}">
            ${thumb}
            <div class="post-card__info">
                <span class="post-tag">${post.tag}</span>
                <h2 class="post-title">${post.title}</h2>
                <div class="post-card__meta">
                    <span class="post-date">${formatDate(post.date)}</span>
                </div>
                <p class="post-card__excerpt">${excerpt}</p>
                <span class="post-card__cta">Open story</span>
            </div>
        </article>
    `;
}

function renderPostDetail(post) {
    const { contentHtml, dataAttributes } = preparePostContent(post);
    const heroAlt = post.clue.revealStyle === 'image-alt' ? post.clue.hiddenPayload : post.title;
    const heroAltAttr = escapeAttribute(heroAlt);
    const heroSrcAttr = post.heroImage ? escapeAttribute(post.heroImage) : '';
    const hero = post.heroImage
        ? `<img src="${heroSrcAttr}" alt="${heroAltAttr}" class="post-detail__hero">`
        : '';

    const markup = `
        <header class="post-detail__header">
            <span class="post-tag">${post.tag}</span>
            <h2 class="post-detail__title">${post.title}</h2>
            <div class="post-detail__meta">
                <span class="post-date">${formatDate(post.date)}</span>
            </div>
        </header>
        ${hero}
        <div class="post-detail__content">
            ${contentHtml}
        </div>
    `;

    return { markup, dataAttributes };
}

function attachPostCardEvents() {
    const cards = document.querySelectorAll('.post-card');

    cards.forEach(card => {
        const openHandler = () => {
            const postId = parseInt(card.dataset.postId, 10);
            if (!isNaN(postId)) {
                openPostDetail(postId);
            }
        };

        card.addEventListener('click', openHandler);
        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openHandler();
            }
        });
    });
}

function openPostDetail(postId) {
    const overlay = document.getElementById('postOverlay');
    const detail = document.getElementById('postDetail');
    if (!overlay || !detail) return;

    const post = POSTS.find(item => item.id === postId);
    if (!post) return;

    if (document.activeElement && document.activeElement.classList.contains('post-card')) {
        lastFocusedCard = document.activeElement;
    } else {
        lastFocusedCard = null;
    }

    const { markup, dataAttributes } = renderPostDetail(post);
    detail.innerHTML = markup;
    detail.setAttribute('data-post-id', postId);

    if (dataAttributes) {
        detail.setAttribute('data-clue', dataAttributes.clue);
        detail.setAttribute('data-task', dataAttributes.task);
    } else {
        detail.removeAttribute('data-clue');
        detail.removeAttribute('data-task');
    }

    if (post.clue.revealStyle === 'html-comment') {
        const comment = document.createComment(` CLUE FOR POST ${post.id}: ${post.clue.finalTask} - ${post.clue.hiddenPayload} `);
        detail.appendChild(comment);
    }

    overlay.classList.add('is-visible');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('overlay-open');

    const closeButton = overlay.querySelector('.post-overlay__close');
    if (closeButton) {
        closeButton.focus();
    }

    const content = overlay.querySelector('.post-overlay__content');
    if (content) {
        content.scrollTop = 0;
    }
}

function closePostDetail() {
    const overlay = document.getElementById('postOverlay');
    const detail = document.getElementById('postDetail');
    if (!overlay || !detail) return;

    overlay.classList.remove('is-visible');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('overlay-open');

    detail.innerHTML = '';
    detail.removeAttribute('data-post-id');
    detail.removeAttribute('data-clue');
    detail.removeAttribute('data-task');

    if (lastFocusedCard) {
        lastFocusedCard.focus();
        lastFocusedCard = null;
    }
}

function initPostOverlay() {
    const overlay = document.getElementById('postOverlay');
    if (!overlay) return;

    overlay.addEventListener('click', event => {
        if (event.target.hasAttribute('data-overlay-close')) {
            closePostDetail();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && overlay.classList.contains('is-visible')) {
            closePostDetail();
        }
    });
}

/**
 * Render all posts
 * @param {Array} posts - Array of post objects
 * @param {Array} teamPostIds - Array of team post IDs
 */
function renderPosts(posts, teamPostIds = []) {
    const container = document.getElementById('postsContainer');
    if (!container) return;
    
    container.innerHTML = posts.map(post => {
        const isTeamHighlight = teamPostIds.includes(post.id);
        return renderPostCard(post, isTeamHighlight);
    }).join('');

    attachPostCardEvents();
    
    // Add HTML comments for posts that use html-comment reveal style
    posts.forEach(post => {
        if (post.clue.revealStyle === 'html-comment') {
            const postCard = container.querySelector(`[data-post-id="${post.id}"]`);
            if (postCard) {
                const comment = document.createComment(` CLUE FOR POST ${post.id}: ${post.clue.finalTask} - ${post.clue.hiddenPayload} `);
                postCard.appendChild(comment);
            }
        }
    });
}

// ============================================
// SEARCH AND FILTER
// ============================================

/**
 * Filter posts based on search only
 * @param {string} searchTerm - Search term
 * @returns {Array} - Filtered posts
 */
function filterPosts(searchTerm = '') {
    return POSTS.filter(post => {
        return !searchTerm || 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.contentHtml.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tag.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

/**
 * Initialize search functionality
 */
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (!searchInput) return;
    
    // Handle search
    const handleFilter = () => {
        const searchTerm = searchInput.value.trim();
        const filtered = filterPosts(searchTerm);
        const teamPostIds = getTeamPostIds();
        renderPosts(filtered, teamPostIds);
    };
    
    searchInput.addEventListener('input', handleFilter);
}

// ============================================
// TEAM HIGHLIGHTING
// ============================================

/**
 * Get team post IDs from URL parameter
 * @returns {Array} - Array of post IDs
 */
function getTeamPostIds() {
    const teamParam = getUrlParameter('team');
    if (!teamParam) return [];
    
    // Parse comma-separated IDs
    const ids = teamParam.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));
    return ids.slice(0, 3); // Limit to 3 posts
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

/**
 * Initialize back to top button
 */
function initBackToTop() {
    const button = document.getElementById('backToTop');
    if (!button) return;
    
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    button.addEventListener('click', () => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
    });
}

// ============================================
// PARTICLE CANVAS BACKGROUND
// ============================================

/**
 * Initialize particle canvas background
 */
function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    // Set canvas size
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.fillStyle = `rgba(116, 185, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles (fewer on mobile)
    const particleCount = window.innerWidth < 768 ? 20 : 50;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Don't animate if user prefers reduced motion
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(116, 185, 255, ${0.18 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.stroke();
                }
            });
        });
        
        animationId = requestAnimationFrame(animate);
    };
    
    animate();
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
    // Get team post IDs
    const teamPostIds = getTeamPostIds();
    
    // Render initial posts
    renderPosts(POSTS, teamPostIds);
    
    // Initialize features
    initSearch();
    initPostOverlay();
    initBackToTop();
    initParticleCanvas();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

