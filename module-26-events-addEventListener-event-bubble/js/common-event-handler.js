
/* 
বেশি ব্যবহৃত প্রথম পদ্ধতি
========================
HTML ফাইলে বাটনে onclick attribute এর মধ্যে ফাংশন কল করা। 
আর জাভাস্ক্রিপ্ট ফাইলে ফাংশন ডিভাইন করা।   
-> প্রথমে ফাংশনের মধ্যে আইডি দ্বারা তাকে ধরতে হবে, যার ভ্যালু চেঞ্জ করা হবে।
-> তারপর তার innerText = পরিবর্তিত ভ্যালু দেয়া হবে।
যখন বাটনে ক্লিক করা হবে তখন ফাংশন এক্সিকিউট হবে।

Handled by function attached on onclick attribute
*/
function changeText(){
    const defaultText  = document.getElementById('default-text')
    defaultText.innerText = 'Handled by function attached on onclick attribute'
}

/* 
HTML ফাইলে বাটনের মধ্যে id দেয়া।
জাভাস্ক্রিপ্ট ফাইলে getElementById দ্বারা বাটনকে ধরা।
বাটনের সাথে ‍addEventListener() যোগ করা।
addEventListener() এর প্রথম প্যারামিটারে string আকারে event এর নাম দেয়া আর ২য় প্যারামিটারে ‍anonymous function ডিফাইন করা।
Handled event by addEventListener 
*/
document.getElementById('event-listener').addEventListener('click', function(){
    const defaultText = document.getElementById('default-text');
    defaultText.innerText = 'Text updated by addEventListener button'
})


/* 
input field এর text পেতে হলে, input field এর সাথে .value ব্যবহার করতে হয়।
এছাড়া p, h1-h6, div, li ইত্যাদির text পেতে হলে, p ইত্যাদির সাথে .innerText ব্যবহার করতে হয়।

কর্মপদ্ধতি =========================
-> ১। ঐ বাটনকে ধরতে হবে, যে বাটনে ক্লিক করলে কোন কাজ সংঘটিত হবে।
-> ২। ঐ বাটনের সাথে addEventListener() যোগ করতে হবে।
-> ৩। addEventListener() এর ১ম প্যারামিটারে string হিসেবে event এবং কমা দিয়ে anonymous function() দিতে হবে।
-> ৪। input field কে id দ্বারা ধরে তার text পেতে input field এর সাথে .value দিতে হবে।
-> ৫। যেখানে update হবে, তাকে id দ্বারা ধরে input এর value দ্বারা তার মান আপডেট করতে হবে।
-> ৬। তারপর input field এর ডাটা clear করতে inputField.value = '' লিখতে হবে।
*/

document.getElementById('update-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value;

    const textDisplay = document.getElementById('input-text-display')
    textDisplay.innerText = inputText;
    inputField.value = ''
})