module.exports = {
    ci: {
        collect: {
            staticDistDir: './dist/lighthouse-demo/',
            method: 'node',
            additive: false,                            
            headful: false,
            numberOfRuns: 1
        },
        assert: {
            preset: 'lighthouse:recommended',
            assertions: {
                'categories:accessibility': ['error', {aggregationMethod: 'optimistic', minScore: 0.40}],
                'categories:performance': ['warn', {aggregationMethod: 'optimistic', minScore: 0.40}],
                'categories:best-practices': ['error', {aggregationMethod: 'optimistic', minScore: 0.65}],
                'categories:seo': ['error', {aggregationMethod: 'optimistic', minScore: 0.60}],
                'apple-touch-icon': 'off',
                'color-contrast': 'off',
                'installable-manifest': 'off',
                'link-name': 'off',
                'maskable-icon': 'off',
                'meta-description': 'off',
                'offline-start-url': 'off',
                'service-worker':'off',
                'splash-screen': 'off',
                'themed-omnibox': 'off',
                'unminified-javascript': 'off',
                'unused-javascript': 'off',
                'without-javascript': 'off',
                'works-offline': 'off',
                'unsized-images': 'off'
            }
        },
        upload: {
            target: 'temporary-public-storage',
        }
    }
};
