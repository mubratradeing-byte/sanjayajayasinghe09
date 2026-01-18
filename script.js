/* ============================================
   CSS - Add to WordPress Customizer or theme CSS
   ============================================ */

:root {
  /* Dark theme color variables */
  --dark-bg-primary: #000000;
  --dark-bg-secondary: #0a0a0a;
  --dark-bg-tertiary: #1a1a1a;
  --dark-text-primary: #ffffff;
  --dark-text-secondary: #b3b3b3;
  --dark-border: #2a2a2a;
  --dark-accent: #0073aa;
  --dark-accent-hover: #005a87;
  --dark-link: #4da6ff;
  --dark-link-hover: #0073aa;
}

/* Apply dark theme when class is present */
body.dark-theme {
  background-color: var(--dark-bg-primary);
  color: var(--dark-text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Header styling */
body.dark-theme header,
body.dark-theme .site-header,
body.dark-theme #masthead {
  background-color: var(--dark-bg-secondary);
  border-bottom: 1px solid var(--dark-border);
}

/* Navigation menu */
body.dark-theme nav,
body.dark-theme .main-navigation,
body.dark-theme .nav-menu {
  background-color: var(--dark-bg-secondary);
}

body.dark-theme nav a,
body.dark-theme .main-navigation a,
body.dark-theme .nav-menu a {
  color: var(--dark-text-primary);
  transition: color 0.2s ease;
}

body.dark-theme nav a:hover,
body.dark-theme .main-navigation a:hover,
body.dark-theme .nav-menu a:hover {
  color: var(--dark-accent);
}

/* Content containers */
body.dark-theme .site-content,
body.dark-theme #content,
body.dark-theme main,
body.dark-theme article,
body.dark-theme .entry-content {
  background-color: var(--dark-bg-primary);
  color: var(--dark-text-primary);
}

/* Post/page containers */
body.dark-theme .post,
body.dark-theme .page,
body.dark-theme .entry {
  background-color: var(--dark-bg-tertiary);
  border: 1px solid var(--dark-border);
}

/* Headings */
body.dark-theme h1,
body.dark-theme h2,
body.dark-theme h3,
body.dark-theme h4,
body.dark-theme h5,
body.dark-theme h6 {
  color: var(--dark-text-primary);
}

/* Paragraphs and body text */
body.dark-theme p,
body.dark-theme li,
body.dark-theme span {
  color: var(--dark-text-secondary);
}

/* Links */
body.dark-theme a {
  color: var(--dark-link);
  transition: color 0.2s ease;
}

body.dark-theme a:hover {
  color: var(--dark-link-hover);
}

/* Buttons */
body.dark-theme button,
body.dark-theme .button,
body.dark-theme .btn,
body.dark-theme input[type="submit"],
body.dark-theme input[type="button"] {
  background-color: var(--dark-accent);
  color: var(--dark-text-primary);
  border: 1px solid var(--dark-accent);
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

body.dark-theme button:hover,
body.dark-theme .button:hover,
body.dark-theme .btn:hover,
body.dark-theme input[type="submit"]:hover,
body.dark-theme input[type="button"]:hover {
  background-color: var(--dark-accent-hover);
  border-color: var(--dark-accent-hover);
}

/* Sidebar/Widget areas */
body.dark-theme aside,
body.dark-theme .sidebar,
body.dark-theme .widget-area {
  background-color: var(--dark-bg-secondary);
  border: 1px solid var(--dark-border);
}

body.dark-theme .widget {
  background-color: var(--dark-bg-tertiary);
  border: 1px solid var(--dark-border);
}

body.dark-theme .widget-title {
  color: var(--dark-text-primary);
  border-bottom: 2px solid var(--dark-accent);
}

/* Footer */
body.dark-theme footer,
body.dark-theme .site-footer,
body.dark-theme #colophon {
  background-color: var(--dark-bg-secondary);
  color: var(--dark-text-secondary);
  border-top: 1px solid var(--dark-border);
}

body.dark-theme footer a,
body.dark-theme .site-footer a {
  color: var(--dark-link);
}

body.dark-theme footer a:hover,
body.dark-theme .site-footer a:hover {
  color: var(--dark-link-hover);
}

/* Forms and inputs */
body.dark-theme input[type="text"],
body.dark-theme input[type="email"],
body.dark-theme input[type="password"],
body.dark-theme input[type="search"],
body.dark-theme textarea,
body.dark-theme select {
  background-color: var(--dark-bg-tertiary);
  color: var(--dark-text-primary);
  border: 1px solid var(--dark-border);
}

body.dark-theme input[type="text"]:focus,
body.dark-theme input[type="email"]:focus,
body.dark-theme input[type="password"]:focus,
body.dark-theme input[type="search"]:focus,
body.dark-theme textarea:focus {
  border-color: var(--dark-accent);
  outline: none;
}

/* Tables */
body.dark-theme table {
  background-color: var(--dark-bg-tertiary);
  border: 1px solid var(--dark-border);
}

body.dark-theme th,
body.dark-theme td {
  border: 1px solid var(--dark-border);
  color: var(--dark-text-primary);
}

body.dark-theme th {
  background-color: var(--dark-bg-secondary);
}

/* Code blocks */
body.dark-theme code,
body.dark-theme pre {
  background-color: var(--dark-bg-tertiary);
  color: var(--dark-text-primary);
  border: 1px solid var(--dark-border);
}

/* Blockquotes */
body.dark-theme blockquote {
  background-color: var(--dark-bg-tertiary);
  border-left: 4px solid var(--dark-accent);
  color: var(--dark-text-secondary);
}

/* Comments section */
body.dark-theme .comments-area,
body.dark-theme .comment-list,
body.dark-theme .comment {
  background-color: var(--dark-bg-tertiary);
  border: 1px solid var(--dark-border);
}

body.dark-theme .comment-author {
  color: var(--dark-text-primary);
}

body.dark-theme .comment-content {
  color: var(--dark-text-secondary);
}


/* ============================================
   JAVASCRIPT - Add to theme's main JS file or footer
   ============================================ */

/**
 * WordPress Dark Theme Toggle
 * Applies dark theme on page load and provides toggle functionality
 */

(function() {
  'use strict';

  // Configuration
  const THEME_CLASS = 'dark-theme';
  const STORAGE_KEY = 'wp-dark-theme-enabled';

  /**
   * Apply dark theme to body element
   */
  function applyDarkTheme() {
    document.body.classList.add(THEME_CLASS);
    // Store preference in localStorage
    localStorage.setItem(STORAGE_KEY, 'true');
  }

  /**
   * Remove dark theme from body element
   */
  function removeDarkTheme() {
    document.body.classList.remove(THEME_CLASS);
    // Update localStorage
    localStorage.setItem(STORAGE_KEY, 'false');
  }

  /**
   * Toggle dark theme on/off
   */
  function toggleDarkTheme() {
    if (document.body.classList.contains(THEME_CLASS)) {
      removeDarkTheme();
    } else {
      applyDarkTheme();
    }
  }

  /**
   * Check if dark theme is enabled in localStorage
   * @returns {boolean}
   */
  function isDarkThemeEnabled() {
    const stored = localStorage.getItem(STORAGE_KEY);
    // Default to true (dark theme on) if no preference stored
    return stored === null || stored === 'true';
  }

  /**
   * Initialize dark theme on page load
   */
  function initDarkTheme() {
    // Apply dark theme immediately if enabled
    if (isDarkThemeEnabled()) {
      // Add class before DOM ready to prevent flash
      document.body.classList.add(THEME_CLASS);
    }

    // Optional: Create toggle button (remove if not needed)
    createToggleButton();
  }

  /**
   * Create a toggle button for dark theme
   * Remove this function if you don't want a toggle button
   */
  function createToggleButton() {
    const button = document.createElement('button');
    button.innerHTML = '🌓'; // Moon/sun icon
    button.setAttribute('aria-label', 'Toggle dark theme');
    button.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--dark-accent);
      color: white;
      border: 2px solid var(--dark-border);
      font-size: 24px;
      cursor: pointer;
      z-index: 9999;
      transition: transform 0.2s ease;
    `;

    button.addEventListener('click', toggleDarkTheme);
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });

    // Add button to page when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        document.body.appendChild(button);
      });
    } else {
      document.body.appendChild(button);
    }
  }

  // Initialize immediately to prevent flash
  initDarkTheme();

  // Expose toggle function globally if needed
  window.toggleDarkTheme = toggleDarkTheme;

})();
