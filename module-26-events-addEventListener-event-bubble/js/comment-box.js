/* 
Steps
-> HTML ফাইলের submit button কে জাভাস্ক্রিপ্টে id দ্বারা ধরে event listener যোগ করতে হবে।
-> HTML ফাইলের textarea কে জাভাস্ক্রিপ্টে id দ্বারা ধরে এর value পেতে হবে।
-> বাটনে ক্লিক করলে comment box এর মধ্যে appendChild করতে হবে।
-> সাবমিট করার পর textarea কে clear করতে পারে।

*/

// step 1:  caught the post button and addEventListener()
document.getElementById('post-btn').addEventListener('click', function(){
    // step 2: get the new comment text
    const textAreaField = document.getElementById('new-comment')
    const newComment = textAreaField.value;

    // step 3: set the new comment inside the comment container
    // substeps of step 3
    // 1. get the comment container
    // 2. create a new element (p tag)
    // 3. set the text of the comment as a innerText of the p tag
    // 4. add the p tag to commentContainer using appendChild
    // 5. clear the textarea
    const commentContainer = document.getElementById('comment-container')
    const p = document.createElement('p')
    p.innerText = newComment;
    commentContainer.appendChild(p)
    textAreaField.value = ''
})