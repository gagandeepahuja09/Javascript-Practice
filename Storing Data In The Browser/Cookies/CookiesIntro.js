    /* 
        1. Stored in the form of strings.
        2. Store directly in the browser. Part of HTTP.
        3. Very small in size, because store in the HTTP header.
        4. Storing in HTTP header provides a lot of applications because it can be used by the server 
            => This provides us with the use case of Authentication 
        5. They are set by a web server using Set-Cookie HTTP header.
        6. Then the browser automatically adds them to every domain using Cookie HTTP header.
        7. Authentication Working In Cookies:
            i) Upon sign in, the server uses "Set-Cookie" HTTP header in the response
                to set a cookie with a "unique session indentifier".
            ii) Next time when the request is set to the same domain, the browser sends the cookie over 
                the net using Cookie HTTP-header.
            iii) So, the server can now check whether the request was made to the intended user.

    Reading from Cookie:
        1) alert( document.cookie );
        2) We can split by ";" and access some specific cookie using regular expression or 
        array functions.
    */

    // Writing to document cookie
    let name = "my name";
    let value = "Gagandeep Singh Ahuja";
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    /* 
        Limitations on Cookie Size 
        1) name = value pair should not exceend 4kB
        2) Limit on number of cookies is close to 20. Exact value depends on the browser.
    */

    /* 
    Setting path in cookie.
    By doing this, the cookie will only be accessible for pages under that path
    eg. /admin will only be accessible to /admin or /admin/* and not on paths like: /, /home, /admingroup 
    */
    path = "/admin";

    /* 
    Setting domain
    By default it's only access by the domain that set it. But if we want all it's subdomains(*.site.com)to use it, we can use
    specify that
    */
   // make the cookie accessible on any domain *.site.com
   document.cookie = "user=John; domain=site.com"

    /*  expires, max-age
        By default if a cookie doesn't have one of these options, it will expire when we close the browser. Those are called 
        "session cookies".

        expires =>
            date must be in UTC Format string. We can convert date to this format by using: date.toUTCString()
    */
   // expire it after exactly 1 day
   let date = new Date(Date.now() + 86400e3);
   date = date.toUTCString();
   document.cookie = "user=John; expires=" + date;
   // max-age is in seconds
   // expire it after 1 hour
   document.cookie = "user=John; max-age=3600";
   // expire it just now => max-age=0

   /* secure => By default if we are able to access a cookie at https://www.site.com, then we will also be able to access at
      https://www.site.com & vice-versa. i.e. cookies don't differentiate on the basis of protocol.
      But if we want that cookies should be only used with https, we can use the secure option.
      document.cookie = "user=John; secure";
   */

   // samesite => Helps in preventing XSRF => Cross-Site Request Forgery 

