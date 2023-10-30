const nums = document.querySelectorAll('numbers');
nums.forEach((e) => {
    e.addEventListener('click', () => {
        console.log(e.innerText)
    })
})
console.log(nums)