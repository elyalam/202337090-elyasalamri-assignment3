AI tools (ChatGPT) were used during the assignment mainly for guidance in selecting and implementing features. Specifically, it was used to identify a suitable API that could be integrated easily into the project, and to assist in correctly implementing that API within the JavaScript code. It was also used to adapt and integrate a previously created theme toggle feature from an earlier portfolio project into the current website but this required manual achanges to work. chatGPT was also used to troubleshoot errors, such as issues script loading, DOM access, and API request failures, and to correct syntax mistakes. 

Specifically I tried to use AI for:

Scripts running before the DOM loaded, causing getElementById to return null
Incorrect script placement instead of using defer for theme toggle, causing default theme to be alternate theme
API requests failing due to CORS policy in several quote websites
fetch requests failing when opening the file with file:// instead of running on localhost
Incorrect API response handling due to differences in JSON structure between APIs
Minor syntax issues in JavaScript such as variable usage and formatting errors

Some of these did not work and failed and had to manually be fixed.
I learned that AI struggles with troubleshooting API errors when the issue is caused by external factors like CORS policies or network restrictions, and that not all APIs are equally reliable for direct browser use. I also learned that planning the structure of the project early (such as separating scripts, pages, and features) makes it easier to integrate new functionality later without breaking existing parts and that AI is bad at integrating separate portfolio layers.

I modified AI code by checking the browser console and compared it with what the AI suggested, then adjusted parts of the code like script placement or variable usage. I also changed some of the structure and wording of the code so it matched the integration with the old portfolio elements
