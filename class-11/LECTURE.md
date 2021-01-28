# Class 11: Audio / Video Component,  More User Interaction

## Feeback from week 2

- How last week went:
  - There's a lot of distractions
    - People will be muted by default.
      - If your are muted, you can hold space bar down to unmute.
      - I'll be more vigilant about my phone going off.
  - Last week was very difficult
    - That was intentional, so don't feel discouraged.
    - No new JS tech / concepts should keep things a little more even keeled this week.
  - Continue to look ahead at labs and expectations for the week.
  - Warm Up / Break up exercise.
    - Smaller break out rooms.
    - More focused exercises.
    - More break out room sessions.

## Concepts Review

- Functions / Objects / Constructors

## Web Development Practical Topics

- Web Site Hosting (301 focus on how this stuff)
  - Where are files go, how do we acces them?
    - In order to access a website on the internet, you need to go to a URL that points to a site HOST
      - GoDaddy, NameCheap, SquareSpace, AWS.
        - Host Site Content
          - HTML.
          - CSS.
          - JS.
          - Images.
          - Videos.
          - Audio Files.
        - FTP / git and git remotes => to a remote directory
      - Think of this as a directory that lives in the cloud that can accept HTTP requests.
    - Accessing this is just a matter of buying an address.
      - Domain name registrars.
      - CNAME
- SEO
  - Search Engine Optimization
  - Is your content listed well, for search engine indexers.
    - Program that is constantly running to see what content exists for keywords and topics.
    - Data driven, but it starts with data exists.
  - For a site developer this data is our site content:
    - What is your site giving to the world.
    - Have content that people care about.
      - The content already includes keywords, titles, headings.
    - Creating good outlines and semantics HTML.
    - meta tags that describe your content.
      - Data about your content.
    - Having content that loads well.
    - Tayloring scripts /configuration and meta data to specific 3rd parties (google etc.. ).
- Analytics
  - Data driven
  - How users are engaging with your content.
    - The data we're talking is the collection of stats invloving user engagement.
    - How long are people looking at my home page
    - How many times are people clicking on calls to action.
    - Logging geolaction data of your users.
      - A lot of this stuff is calculated already by hosting services.
    - What do want to do with this data, and what questions are you asking?
      - Do I want people to only spend 3 - 10 seconds on a specific page.

## User Interaction Continued

- HTML Video / Audio
  - Native support in HTML
  - Host video and audio content on the web ( in the cloud ).
  - This content can be rendered / listened to via HTML

```html

<video src="path/to/video.file">


<audio src="path/to/audio.file">


<video controls volume="0.5" autoplay muted>
  <source src="path/to/a/video.file">
  <source src="path/to/another/video.file">
  <!-- If one source element is unsupported you can list another that hopefully, the first one will be used -->
</video>

```
