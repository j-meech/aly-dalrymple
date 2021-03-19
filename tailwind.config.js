module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    fontFamily: {
      sans: ["Karla", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'off-white': '#fffefb',
        sage: {
          dark: "#90A68B",
          light: "#9FB49C",
        },
        grey: {
          dark: "#444444",
        },
      },
    },
  },
  variants: {
    extend: {
      flex: ["responsive", "odd"],
      flexDirection: ["responsive", "odd"],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), 
    require('@tailwindcss/forms'), 
    require("@tailwindcss/typography")
  ],
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
};
