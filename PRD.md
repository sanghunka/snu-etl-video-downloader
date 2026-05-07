# Seoul National University eTL video downloader

Seoul National University eTL url: https://myetl.snu.ac.kr

A Chrome extension that downloads lecture videos from Seoul National University eTL

# User flow
1. The user installs the "Seoul National University eTL video downloader" extension from the Chrome Web Store.
2. The user accesses the eTL website and logs in.
3. The user selects the desired lecture from the lecture list.
4. The user goes to the lecture video page.
5. The user clicks the extension icon to download.
6. Once the download completes, the user verifies the downloaded video on their computer.

# Features
- Lecture video download
- Download progress display
- Download completion notification
- Setting the save location of the downloaded video (clicking the extension button opens a download window where it can be configured)
- Retry on download failure (use the browser's built-in capability if supported. Does the extension need to support this feature?)
- The filename can be set directly at download time.
- The default download filename is set to the textContent of this element: <span class="xnlailct-title">Lecture_note_05_record</span>.
- The format follows the format provided by eTL.



# P1
- Download starts on extension click
- Filename is fixed as video

# P2
- Download progress display
- Download completion notification
- Retry on download failure
