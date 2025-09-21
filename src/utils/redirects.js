// WWW to non-WWW redirect utility
export const handleWWWRedirect = () => {
    if (typeof window !== 'undefined') {
        const currentHost = window.location.host;
        const currentProtocol = window.location.protocol;
        const currentPath = window.location.pathname;
        const currentSearch = window.location.search;
        const currentHash = window.location.hash;

        // Check if the current URL has www
        if (currentHost.startsWith('www.')) {
            // Remove www and redirect
            const newHost = currentHost.replace('www.', '');
            const newUrl = `${currentProtocol}//${newHost}${currentPath}${currentSearch}${currentHash}`;

            // Redirect to the non-www version
            window.location.replace(newUrl);
            return true; // Redirect happened
        }
    }
    return false; // No redirect needed
};

// Canonical URL helper - always returns non-www version
export const getCanonicalUrl = (path = '') => {
    const baseUrl = 'https://nypunyaaesthetics.com';

    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Return canonical URL without www
    return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
};

// Check if current environment needs redirect
export const shouldRedirect = () => {
    if (typeof window === 'undefined') return false;

    // Only redirect in production
    return window.location.host.includes('nypunyaaesthetics.com') &&
        window.location.host.startsWith('www.');
};
