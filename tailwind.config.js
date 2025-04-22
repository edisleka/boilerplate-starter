/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'rubik-regular': ['Rubik-Regular', 'sans-serif'],
        'rubik-bold': ['Rubik-Bold', 'sans-serif'],
        'rubik-medium': ['Rubik-Medium', 'sans-serif'],
        'rubik-light': ['Rubik-Light', 'sans-serif'],
      },
      colors: {
        primary: '#111827', // Dark gray, used for main text
        secondary: '#374151', // Medium gray, for supporting text
        tertiary: '#6B7280', // Muted gray, for less important info
        accent: '#3B82F6', // Blue, great for links or highlights
        danger: '#EF4444', // Red, for errors or destructive actions
        success: '#10B981', // Green, for success messages
        warning: '#F59E0B', // Amber, for warnings or alerts
        info: '#0EA5E9', // Sky blue, for general informative messages
        muted: '#9CA3AF', // Light gray, for disabled or less emphasized text
      },
    },
  },
  plugins: [],
}
