# Simple Modal
Simple modal with the styles included.

# Usage:

<h2>MARKUP</h2>
```
<a href="https://www.youtube.com/watch?v=Dv7gLpW91DM" data-modal="modal-video">Open Modal Video</a>

<a href="#modal-content" data-modal="modal-content">Open Modal Content</a>
<div id="modal-content">Content to show when in the modal</div>

<a href="http://via.placeholder.com/350x150" data-modal="modal-image">Open Modal Video</a>
```
<h2>JS</h2>
```
$('a[data-modal="modal-video"]').customModal();
$('a[data-modal="modal-content"]').customModal();
$('a[data-modal="modal-image"]').customModal();
```
