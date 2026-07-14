import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
        },
        success: {
          DEFAULT: "var(--color-success)",
        },
        error: {
          DEFAULT: "var(--color-error)",
        },
        gray: {
          light: "var(--color-gray-light)",
          dark: "var(--color-gray-dark)",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "Poppins", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontSize: {
        "hero-desktop": ["60px", { lineHeight: "1.1", fontWeight: "700" }],
        "hero-tablet": ["40px", { lineHeight: "1.15", fontWeight: "700" }],
        "hero-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "section-title": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "card-title": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        button: ["18px", { lineHeight: "1", fontWeight: "500" }],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        8: "8px",
        16: "16px",
        24: "24px",
        32: "32px",
        48: "48px",
        64: "64px",
        80: "80px",
        120: "120px",
        "section-desktop": "120px",
        "section-tablet": "80px",
        "section-mobile": "60px",
        "container-desktop": "32px",
        "container-tablet": "24px",
        "container-mobile": "20px",
        card: "32px",
        gap: "32px",
      },
      borderRadius: {
        card: "20px",
        button: "14px",
        image: "24px",
        input: "14px",
      },
      boxShadow: {
        soft: "0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)",
        "soft-hover":
          "0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
      },
      height: {
        button: "52px",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        animation: "400ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-out",
        animation: "ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
