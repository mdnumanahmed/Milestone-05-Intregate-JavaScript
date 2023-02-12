/* ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।  */

const headings = document.getElementsByTagName('h2')
for(const h2 of headings){
    h2.style.color = 'lightblue'
}


/* ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা।  */
const backSection = document.getElementById('backpack')
backSection.style.backgroundColor = 'tomato'

/* ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা  */
const cards = document.getElementsByClassName('card')
for(const card of cards){
    card.style.borderRadius = '30px'
}

/* ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো  */
function printSomething(){
    console.log('Print Something in console');
}

/* ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে চেষ্টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।  */
const buyNowBtn = document.getElementsByClassName('panda-btn-buy-now')
for(const btn of buyNowBtn){
    btn.addEventListener('click', function(event){
        event.target.style.display = 'none';
    })
}

/* ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।  */

const subscribeBtn = document.querySelector('#subscribe div form button');
const inputField = document.getElementById('exampleInputEmail1');
inputField.addEventListener('keyup', function(event){
    const inputText = event.target.value;
    console.log(inputText);
    if(inputText !== 'email'){
        subscribeBtn.setAttribute('disabled', true)
    }else{
        subscribeBtn.removeAttribute('disabled')
    }
})


/* ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।  */
document.querySelector('#shoes div div div img').addEventListener('mouseenter', function(event){
    event.target.setAttribute('src', 'images/shoes/shoe-3.png')
})

/* ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।  */
document.getElementById('subscribe').addEventListener('dblclick', function(event){
    event.target.style.backgroundColor = 'lightgray'
})