// Coming soon redirect
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're already on the coming soon page
    if (window.location.pathname.includes('lock-screen.html')) {
        return; // Don't redirect if already on coming soon page
    }
    
    // Redirect to coming soon page - no authentication needed in pre-release phase
    window.location.href = 'lock-screen.html';
}); 