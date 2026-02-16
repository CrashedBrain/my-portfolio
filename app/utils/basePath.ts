export const getBasePath = () => {
    if (typeof window !== 'undefined') {
        // If we are on GitHub Pages (hostname ends with github.io), use the repository name
        if (window.location.hostname.endsWith('github.io')) {
            return '/my-portfolio';
        }
    }
    return '';
};
