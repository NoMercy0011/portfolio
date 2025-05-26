module.exports = {
  theme: {
    extend: {
      animation: {
        glow: 'spin 1.5s infinite',
      },
       keyframes: {
            custom: {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
    },
    },
  },
}

// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './app/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './pages/**/*.{ts,tsx}',
//   ],
//    theme: {
//     extend: {
//       animation: {
//         custom: 'custom 5s linear infinite',
//       },
//       keyframes: {
//             custom: {
//               '0%': { transform: 'rotate(0deg)' },
//               '100%': { transform: 'rotate(360deg)' },
//             },
//     },
//     },
//   },
//   plugins: [],
// };

// export default config;

