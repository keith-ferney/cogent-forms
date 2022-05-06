const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './src/**/*.vue',
        './src/**/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({addBase, theme}) {
            addBase({
                'h1': {fontSize: theme('fontSize.2xl')},
                'h2': {fontSize: theme('fontSize.xl')},
                'h3': {fontSize: theme('fontSize.lg')},
                'h4': {fontSize: theme('fontSize.base')},
                'h5': {fontSize: theme('fontSize.sm')},
                'h6': {fontSize: theme('fontSize.xs')},

                'textarea': {
                    margin: theme('margin.auto'),
                    padding: theme('padding.2'),
                    fontSize: theme('fontsize.lg'),
                    lineHeight: theme('lineHeight.10'),
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '100% 40px',
                },

                'table, thead, tbody': {
                    width: theme('width.full')
                },

                'tr': {
                    width: theme('width.full'),
                    borderWidth: theme('borderWidth.DEFAULT'),
                    borderColor: theme('borderColor.black')
                },

                'th, td': {
                    borderLeftWidth: theme('borderWidth.DEFAULT'),
                    borderRightWidth: theme('borderWidth.DEFAULT'),
                    borderColor: theme('borderColor.black')
                },

                'input[type="radio"]:checked + label': {
                    backgroundColor: theme('backgroundColor.gray.800'),
                    color: theme('textColor.white')
                },


                //   input[type="radio"]:checked + label {
                // @apply bg-gray-800 text-white
                // }


                // table, thead, tbody {
                //   @apply w-full;
                // }
                //
                // tr {
                //   @apply w-full border border-black;
                // }
                //
                // th, td {
                //   @apply border-x border-black
                // }
            })
        }),
    ],
}
