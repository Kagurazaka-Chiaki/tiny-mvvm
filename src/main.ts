import './style.css'


import Home from './pages/home.ts'
import About from './pages/about.ts'

import Navbar from './components/navbar.ts'
import Bottombar from './components/bottombar.ts'
import Utils from './services/utils.ts'

import Error404 from './pages/error_404.ts'
import TestMvvm from './pages/test_mvvm.ts'
import AboutTauri from './pages/about_tauri.ts'


let routes = {

  '/': Home
  , '/about': About
  , '/p/:id': Home
  , '/test_mvvm': TestMvvm
  , '/about_tauri': AboutTauri
  , '/404': Error404
}

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

  // Lazy load view element:
  const header = document.getElementById('header_container')!;
  const content = document.getElementById('page_container')!;
  const footer = document.getElementById('footer_container')!;

  // Render the Header and footer of the page
  header.innerHTML = await Navbar.render();
  await Navbar.after_render();
  footer.innerHTML = await Bottombar.render();
  await Bottombar.after_render();

  console.log('header', header)


  // Get the parsed URl from the addressbar
  let request = Utils.parseRequestURL()

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL as keyof typeof routes] ? routes[parsedURL as keyof typeof routes] : Error404
  content.innerHTML = await page.render();
  await page.after_render();

}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
