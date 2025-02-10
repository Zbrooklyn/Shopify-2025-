document.addEventListener("DOMContentLoaded", function() {
  var container = document.querySelector(".isolate");
  // Use dataset to get the overrideTitle value
  var overrideTitle = container.dataset.overrideTitle === "true";
  console.log("Override Title:", overrideTitle);

  var tabLinks = document.querySelectorAll(".tab-links li");
  var tabContents = document.querySelectorAll(".tab-content");
  var activeTitle = document.getElementById("active-collection-title");

  function clearActive() {
    tabLinks.forEach(function(tab) {
      var btn = tab.querySelector(".tab-button");
      if (btn) btn.classList.remove("active");
    });
    tabContents.forEach(function(content) {
      content.classList.remove("active");
    });
  }

  tabLinks.forEach(function(tab) {
    tab.addEventListener("click", function() {
      var target = this.getAttribute("data-tab");
      var button = this.querySelector(".tab-button");
      var newTitle = button.getAttribute("data-collection-title");
      clearActive();
      button.classList.add("active");
      var activeContent = document.getElementById(target);
      if (activeContent) {
        activeContent.classList.add("active");
      }
      // Only update header title if overrideTitle is false
      if (!overrideTitle && activeTitle && newTitle) {
        activeTitle.innerText = newTitle;
      } else {
        console.log("Title override active; not updating header.");
      }
    });
  });

  // Activate the first tab by default
  if (tabLinks.length > 0) {
    var firstTab = tabLinks[0];
    var firstButton = firstTab.querySelector(".tab-button");
    if (firstButton) {
      firstButton.classList.add("active");
      var firstTarget = firstTab.getAttribute("data-tab");
      var firstContent = document.getElementById(firstTarget);
      if (firstContent) {
        firstContent.classList.add("active");
      }
      // Only update header if overrideTitle is false
      if (!overrideTitle && activeTitle && firstButton.getAttribute("data-collection-title")) {
        activeTitle.innerText = firstButton.getAttribute("data-collection-title");
      } else {
        console.log("Title override active; not updating header on first tab.");
      }
    }
  }

  // IntersectionObserver for scroll-trigger animations
  var scrollTriggers = document.querySelectorAll('.scroll-trigger');
  if ('IntersectionObserver' in window) {
    var observerOptions = { threshold: 0.1 };
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate--slide-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    scrollTriggers.forEach(function(trigger) {
      observer.observe(trigger);
    });
  } else {
    scrollTriggers.forEach(function(trigger) {
      trigger.classList.add('animate--slide-in');
    });
  }
});
