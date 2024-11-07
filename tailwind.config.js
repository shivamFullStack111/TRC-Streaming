/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		screens: {
  			'300px': '300px',
  			'350px': '350px',
  			'400px': '400px',
  			'450px': '450px',
  			'500px': '500px',
  			'550px': '550px',
  			'600px': '600px',
  			'650px': '650px',
  			'700px': '700px',
  			'750px': '750px',
  			'800px': '800px',
  			'850px': '850px',
  			'900px': '900px',
  			'950px': '950px',
  			'1000px': '1000px',
  			'1050px': '1050px',
  			'1100px': '1100px',
  			'1150px': '1150px',
  			'1200px': '1200px',
  			'1250px': '1250px',
  			'1300px': '1300px',
  			'1350px': '1350px',
  			'1400px': '1400px',
  			'1450px': '1450px',
  			'1500px': '1500px',
  			'1550px': '1550px',
  			'1600px': '1600px',
  			'1650px': '1650px',
  			'1700px': '1700px',
  			'1750px': '1750px',
  			'1800px': '1800px',
  			'1850px': '1850px',
  			'1900px': '1900px',
  			'1950px': '1950px',
  			'2000px': '2000px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};