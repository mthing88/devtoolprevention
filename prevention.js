// --- DevTools Detection: Keyboard Shortcuts ---
document.addEventListener('keydown', function(event) {
  // F12
  if (event.key === 'F12') {
    event.preventDefault();
    alert("Developer Tools are disabled on this site.");
    // Optional: You could redirect, log, or take other actions.
    // window.location.href = "about:blank"; // Example: redirect
    return false;
  }
  // Ctrl+Shift+I (Windows/Linux)
  if (event.ctrlKey && event.shiftKey && event.key === 'I') {
     event.preventDefault();
     alert("Developer Tools are disabled on this site.");
     return false;
  }
  // Cmd+Option+I (Mac)
  if (event.metaKey && event.altKey && event.key === 'I') {
     event.preventDefault();
     alert("Developer Tools are disabled on this site.");
     return false;
  }
  // Ctrl+Shift+J (Windows/Linux)
   if (event.ctrlKey && event.shiftKey && event.key === 'J') {
     event.preventDefault();
     alert("Developer Tools are disabled on this site.");
     return false;
  }
  // Cmd+Option+J (Mac)
  if (event.metaKey && event.altKey && event.key === 'J') {
     event.preventDefault();
     alert("Developer Tools are disabled on this site.");
     return false;
  }
  // Ctrl+Shift+C (Windows/Linux/Mac) - Often opens Elements inspector
   if (event.ctrlKey && event.shiftKey && event.key === 'C') {
     event.preventDefault();
     alert("Developer Tools inspection is disabled on this site.");
     return false;
  }
   // Cmd+Option+C (Mac) - Often opens Elements inspector
   if (event.metaKey && event.altKey && event.key === 'C') {
     event.preventDefault();
     alert("Developer Tools inspection is disabled on this site.");
     return false;
   }
   // Ctrl+U (View Source - less direct, but related)
   if (event.ctrlKey && event.key === 'U') {
       event.preventDefault();
       alert("Viewing source is disabled on this site.");
       return false;
   }
   // Cmd+Option+U (Mac View Source)
    if (event.metaKey && event.altKey && event.key === 'U') {
       event.preventDefault();
       alert("Viewing source is disabled on this site.");
       return false;
   }

}, false); // Use capture phase to try and catch it earlier

console.log("DevTools detection listeners active."); // For your own debugging
