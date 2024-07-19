function showContent(contentId) {
    var contentDiv = document.getElementById("mainContent");
    var links = document.querySelectorAll('.sidebar ul li');
    links.forEach(link => {
        link.addEventListener('click', function() {
         
          links.forEach(otherLink => {
            otherLink.classList.remove('active');
          });
      
          // Add active class to the clicked link
          this.classList.add('active');
        });
      });
   

    // Activate the clicked link

    if (!contentDiv) {
        console.error("Element with id 'mainContent' not found.");
        return;
    }
    
    switch (contentId) {
        case 'notes':
            contentDiv.innerHTML = "<h2>Notes</h2><p>This is the content for Link 1.</p>";
            break;
        case 'archive':
            contentDiv.innerHTML = "<h2>Archive</h2><p>This is the content for Link 2.</p>";
            break;
        case 'bin':
            contentDiv.innerHTML = "<h2>Bin</h2><p>This is the content for Link 3.</p>";
            break;
        default:
            contentDiv.innerHTML = "<h2>Content Not Found</h2><p>Sorry, the content for this link is not available.</p>";
            break;
    }
}
window.onload = function() {
    showContent('notes');
};