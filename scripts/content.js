// content.js

function injectScrollbarStyles() {
  const style = document.createElement("style");
  style.innerHTML = `
    ::-webkit-scrollbar {
      width: 12px !important;
      height: 12px !important;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #00f !important;
      border-radius: 10px !important;
      transition: background-color 0.3s ease !important, border-radius 0.3s ease !important;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #0077cc !important;
      border-radius: 20px !important;
    }

    ::-webkit-scrollbar-track {
      background: #f0f0f0 !important;
    }
  `;
  document.head.appendChild(style);
}

// Listen for changes in the DOM to handle dynamically loaded content
const observer = new MutationObserver(() => {
  injectScrollbarStyles(); // Reapply scrollbar styles if content changes
});

observer.observe(document.body, {
  childList: true, // Listen for additions or removals of child elements
  subtree: true, // Listen across the entire DOM tree
});

// Initially apply the scrollbar styles
injectScrollbarStyles();
