# Can SessionStorage share data between multiple tabs?

We know that session storage persists the data for current session ONLY and if we open the same URL in another tab/window- its a new session and hence new session storage.

## Definition and Docs
[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

> The read-only `sessionStorage` property accesses a session Storage object for the **current** origin. `sessionStorage` is similar to `localStorage`; the difference is that while data in `localStorage` doesn't expire, data in `sessionStorage` is cleared when the page session ends.
> * Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab. That page session is valid only for that particular tab.
> * A page session lasts as long as the tab or the browser is open, and survives over page reloads and restores.
> * Opening a page in a new tab or window creates a new session with the value of the top-level browsing context, which differs from how session cookies work.
> * Opening multiple tabs/windows with the same URL creates ``sessionStorage`` for each tab/window.
> * Duplicating a tab copies the tab's ``sessionStorage`` into the new tab.
> * Closing a tab/window ends the session and clears objects in ``sessionStorage``.
> * Data stored in ``sessionStorage`` is specific to the protocol of the page. 


## Scenarios
### 1. Duplicating a Tab
When we duplicate a page (in a tab)- the session value is also "Duplicated". So the new tab will now have a **copy** of the session storage.

### 2. Open a new page of same origin 
  Open through 
  * `<a href="http://<sameorigin>/page2">` ,
  *  `window.open()`

This will allow the new page to use the last session storage. And any changes made on this page, will be reflected if we "go-back" to previous page by browser back button.

#### 2a. Special Case
Using `<a target="_blank"  href="http://<sameorigin>/page2">` or `Open Link in new Tab`.
This will create a new session and hence new session storage instance.

### 3. Open a new page of different Origin 
`<a href="http://<other-origin>/page2`

This will create a new session and hence new session storage instance.



## Steps to Run
1. Install `Live Server` extension. [Link](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
2. run `main.html` with `Live Server`



## Conclusion

So we can conclude that `sessionStorage` **can’t** share data between multiple windows or tabs, but when a new page is opened by `window.open` or a link, the new page will copy the `sessionStorage` of the previous page.


### References
* [Medium Article](https://medium.com/p/c30983c61501)
* [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
