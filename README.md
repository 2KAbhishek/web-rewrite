<div align = "center">

<h1><a href="https://2kabhishek.github.io/web-rewrite">web-rewrite</a></h1>

<a href="https://github.com/2KAbhishek/web-rewrite/blob/main/LICENSE">
<img alt="License" src="https://img.shields.io/github/license/2kabhishek/web-rewrite?style=flat&color=eee&label="> </a>

<a href="https://github.com/2KAbhishek/web-rewrite/graphs/contributors">
<img alt="People" src="https://img.shields.io/github/contributors/2kabhishek/web-rewrite?style=flat&color=ffaaf2&label=People"> </a>

<a href="https://github.com/2KAbhishek/web-rewrite/stargazers">
<img alt="Stars" src="https://img.shields.io/github/stars/2kabhishek/web-rewrite?style=flat&color=98c379&label=Stars"></a>

<a href="https://github.com/2KAbhishek/web-rewrite/network/members">
<img alt="Forks" src="https://img.shields.io/github/forks/2kabhishek/web-rewrite?style=flat&color=66a8e0&label=Forks"> </a>

<a href="https://github.com/2KAbhishek/web-rewrite/watchers">
<img alt="Watches" src="https://img.shields.io/github/watchers/2kabhishek/web-rewrite?style=flat&color=f5d08b&label=Watches"> </a>

<a href="https://github.com/2KAbhishek/web-rewrite/pulse">
<img alt="Last Updated" src="https://img.shields.io/github/last-commit/2kabhishek/web-rewrite?style=flat&color=e06c75&label="> </a>

<h3>Rewrite your URLs 🌏✏️</h3>

<figure>
  <img src= "https://raw.githubusercontent.com/2KAbhishek/web-rewrite/main/images/screenshot.jpg" alt="web-rewrite Demo" style="width:100%">
  <br/>
  <figcaption>web-rewrite screenshot</figcaption>
</figure>

</div>

## What is this

web-rewrite is a utility that allows you to rewrite your URLs.

## Inspiration

I wanted to write my own url shortener and then came accross appwrite, which motivated me enough to do it.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of `node`, `appwrite`
- web-rewrite needs the following env vars to function correctly

```bash
HOST=appwrite-console-host
APPWRITE_PORT=80 #Port where appwrite console is running
PROJECT_ID=project-id-from-appwrite-console
API_KEY=api-key-from-appwrite-console
APP_PORT=4321 # The port where you want web-rewrite to run
LINKS_COLLECTION_ID=links-collection-id1 #Try changing this if setup fails
```

## Getting web-rewrite

To install web-rewrite, follow these steps:

```bash
git clone https://github.com/2kabhishek/web-rewrite
cd web-rewrite
touch .env
npm run setup # Sets up the links collection in appwrite
npm start
```

## Using web-rewrite

After starting the app you can visit the app through your browser.

## How it was built

web-rewrite was built using `node`, `express` and `appwrite`

## Challenges faced

While building web-rewrite the main challenges were:

- Setting up AppWrite collections through node was tricky

## What I learned

- AppWrite and it's different services, will use it more in upcoming projects
- Web routing

## What's next

May deploy it somewhere soon

### To-Do

- [ ] Deploy web-rewrite

Hit the ⭐ button if you found this useful.

## More Info

- [AppWrite](https://appwrite.io)

<div align="center">

<a href="https://github.com/2KAbhishek/web-rewrite">Source</a> | <a href="https://2kabhishek.github.io/web-rewrite">Website</a>

</div>
