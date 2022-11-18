module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": ['prettier'],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        /*
        for unix machine
        
        'linebreak-style': [
            'error',
            'unix'
        ],
        */
        'semi': [
            'error',
            'always'
        ]
    }
};
