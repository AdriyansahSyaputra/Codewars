// 6 April 2025

// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  if (!url.startsWith("http")) {
    url = "http://" + url; // untuk menangani input seperti "google.com"
  }
  const hostname = new URL(url).hostname;
  const parts = hostname.startsWith("www.") ? hostname.slice(4) : hostname;
  return parts.split(".")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
