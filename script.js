const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Technology", start: 1989, end: 2010},
    {name: "Company Five", category: "Wholesale", start: 2009, end: 2015},
    {name: "Company Six", category: "Stock Market", start: 1987, end: 2005},
    {name: "Company Seven", category: "Groceries", start: 1986, end: 2004},
    {name: "Company Eight", category: "Retail", start: 2011, end: 2013},
    {name: "Company Nine", category: "Category 2", start: 2010, end: 2016},
    {name: "Company Ten", category: "Finance", start: 1966, end: 2020},
    {name: "Company Eleven", category: "IT", start: 1981, end: 2007},
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i])
// }

// forEach
// companies.forEach(function(company) {
//     console.log(company)
// })

// filter
// let canDrink = []
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// }
// console.log(canDrink)

// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// })

// ES6 Arrow Function
// const canDrink = ages.filter(age => age >= 21)

// console.log(canDrink)

// Filter  retail companies

// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// })

// console.log(retailCompanies)

// Get 80s companies

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))
// console.log(eightiesCompanies)

// Get companies that lasted 10 years or more

// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10))
// console.log(lastedTenYears)

// Map

// Create array of company names
// const companyNames = companies.map(function(company) {
//     return company.name;
// })
// console.log(companyNames)

// Format company names along with years
// const formattedCompanyNames = companies.map(function(company) {
//  return `${company.name} [${company.start} - ${company.end}] Total - (${company.end - company.start} years)`
// })
// console.log(formattedCompanyNames)

// const agesSquare = ages.map(age => Math.sqrt(age))
// const agesTimesTwo = ages.map(age => age * 2)
// console.log(agesTimesTwo)

// const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2)
// console.log(ageMap)

// Sorting
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(sortedCompanies)

// short form
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ?  1: -1))
// console.log(sortedCompanies)

// Sort ages
// const sortAges = ages.sort()
// const sortAges = ages.sort((a, b) => a - b) // Acending
// const sortAges = ages.sort((a, b) => b - a) // Decending
// console.log(sortAges)

//Reduce
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i]
// }
// console.log(ageSum)

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0)
// console.log(ageSum)

// const ageSum = ages.reduce((total, age) => total + age, 0)
// console.log(ageSum)

// Get total years for all companies
// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start)
// }, 0)
// console.log(totalYears)

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
// console.log(totalYears)

// Combine Methods

const combined = ages.map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0)
console.log(combined)