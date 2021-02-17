module.exports = {
    ci: {
        collect: {
            staticDistDir: './dist/lighthouse-demo/',
            method: 'node',
            additive: false,                            
            headful: false,
        },
        upload: {
            target: 'temporary-public-storage',
        },
    }
};
