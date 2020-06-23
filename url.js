const myUrl = new URL('http://www.migrant-solutions.com:3000/index.html?id=10&status=active');

const myPathname = myUrl.pathname;
console.log(myPathname);

const rootDomain = myUrl.host;
console.log(rootDomain);

const serialUrl = myUrl.toString();
console.log(serialUrl);

const hostName = myUrl.hostname;
console.log(hostName);

const myParams = myUrl.searchParams;
console.log(myParams);
