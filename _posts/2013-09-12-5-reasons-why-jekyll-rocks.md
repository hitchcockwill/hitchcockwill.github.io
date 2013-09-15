---
layout: blog_post
image: /blog/img/code-background.jpg
image_thumb: /blog/img/code-background-thumb.jpg
title: 5 Reasons Why Jekyll Rocks
---
A few weeks ago I set out on a project to build myself a new blog. When I sat down to start spec’ing out the project my first thought was to build the whole thing with WordPress. I had built projects on WordPress before, was familiar with the platform, and knew that it had all of the features that I wanted for my blog.

As I unzipped the 12.5MB WordPress folder to begin the "famous 5-minute installation" process I remembered just how bloated and cumbersome WordPress actually is. Did I really need this entire framework to put up a short post every few weeks? 

That's when I realized that I didn't need comments, I didn't need user accounts, I didn't need a database, and I REALLY didn't need PHP. In short, I didn't need WordPress. 

After a little bit of research I discovered that there are actually a lot of lightweight alternatives to full blown content management systems like WordPress. These frameworks offer much more functionality than if you were building out a static site by hand, but have significantly less overhead than a CMS like WordPress. 

A real standout to me, and the framework that I ultimately settled on, was Jekyll. Jekyll is described as a blog-aware static site generator. The platform is written in Ruby and runs in the command line to generate static sites from templates, markup, and markdown that you write.

My first experience with Jekyll was so great that I wanted to share the top 5 reasons why I love developing sites with it.

## 1. Jekyll is dead simple
Getting started with Jekyll is insanely easy. Install the gem, run the install, start the Jekyll server and you're good to go. You don't have to download megabytes worth of files, there's only one configuration file to fill out, and you only need to know the very basics of command line to get it up and running.

The awesome simplicity of Jekyll is not only found in the installation and configuration. Jekyll has just enough features to make it perfect for a simple blog, a portfolio site, or any kind of static site with multiple pages and/or layouts. Because of the bare-bones feature set, learning the basics of what Jekyll can and can't do takes minutes rather than days or weeks. 

## 2. Templates, Layouts, and Posts
The real power of Jekyll lies in the integrated templating engine and the ability to specify layouts for your content. The liquid templating engine (created by Shopify) allows you to define variables, insert conditionals, loop through arrays, and do pretty much anything you would expect from a templating engine.

Layouts are also exactly what you would expect from a CMS. In every page, post, or other content item that you create, whether HTML or markdown, you can define a page layout. Layouts allow you to completely eliminate the unnecessary repetition of writing boilerplate code like navigation or footers by automatically wrapping your content when the site compiles.

Jekyll is described a being a "blog-aware" platform. This means that the concept of a post is built right into the framework. Posts can be any kind of content that you want them to be: for a blog it would be an article, and for a portfolio it would be a project. Posts can be created with either  markdown or plain HTML, and at the beginning of every post is a special section of content called the front matter. This section allows you to define page variables like titles, configuration settings, and even categories. It's easy to add custom variables to the front matter that can then be access with template tags in the page template itself.

## 3. Server
One of the biggest difficulties with developing WordPress sites is getting them up and running on your dev machine. You can use PHP, Apache, and MySQL locally using MAMP or something similar, but it's always a hassle. Once you are done developing your site, you then need to worry about getting the same thing working on your actual web server which, if you are not familiar with the intricacies of WordPress, can be a huge ordeal.

Jekyll makes local development a breeze. Once you have Jekyll installed, all you need to do is run ```jekyll serve -w``` in the command line and you can immediately start navigating your compiled site at ```localhost:4000```. Appending ```-w``` when you start the server will force Jekyll to recompile the site every time it detects a change in the file structure. Used in conjunction with LiveReload, development becomes seamless.

## 4. Plays well with Grunt & LiveReload
One thing that Jekyll does not have is built in compilers for SASS, CoffeeScript, or any other languages that need compiling before they can be used. My favorite solution for this stuff has always been grunt.js. If you are not familiar with Grunt, it is a JavaScript based task runner that can be configured to do just about anything to your assets from compiling SASS to minification to JavaScript testing. Grunt can easily be set up to compile ```.scss``` and ```.coffee``` files when they change, rebuild the Jekyll site, and then with the help of LiveReload, refresh the page when everything is done. Jekyll, Grunt, and LiveReload working together is a killer combination.

## 5. Deployment made easy
When you are finally ready to deploy your project to the web, your compiled site will be there ready to go with all of your assets in the ```_sites/``` directory. All you need to do is upload the contents of this directory to your server and you're good to go.

One of the things that really attracted me to Jekyll was its ability to easily integrate with Github Pages. When you create a free account on Github, you are given your very own space on Github Pages at ```[username].github.io/```. By creating a repository with a matching naming convention (```[username].github.io```), any files that you push to that repo will be accessible from your Github Page URL.

When my site was ready to go live I pushed the new files out to my Github repository and changed the A name on my name server. Now my pages are served up from Github, but appear at my own domain. The best part about it is that it's free!

## Conclusions
Those are just a few reasons that I have really grown to appreciate Jekyll. From here on out,  I plan on using Jekyll as my go-to for small projects. The best way to experience just how awesome Jekyll can be is to try it out for yourself. Next time you are starting a new project, think about giving Jekyll a shot.

## Resources
Here are a few resources that I found to be helpful when I was getting started with Jekyll. If you have other resources that provide a good introduction to Jekyll, feel free to tweet at me ([@willhitchcock](https://twitter.com/willhitchcock)) and I will add them to the list.

<div class="links" markdown="1">
  [Static Web Frameworks](http://www.thedjpetersen.com/blog/static_web_frameworks/)
  [Jekyll project page and docs](http://jekyllrb.com/)
  [Building Static Sites with Jekyll (outdated)](http://net.tutsplus.com/tutorials/other/building-static-sites-with-jekyll/)
</div>

