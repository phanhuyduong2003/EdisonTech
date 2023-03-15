const form = document.querySelector('#form')
const pay = document.querySelector('#pay')
function mmoney(money, interest, time) {
    let x = Math.pow(1 + interest, time)
    return (money * x * interest) / (x - 1)
}
function smoney(mmoney, time) {
    return mmoney * time
}
function imoney(smoney, money) {
    return smoney - money
}
form.addEventListener('submit', function (event) {
    console.log(222);
    event.preventDefault()
    const money = /*parseFloat(form.elements['money'].value)*/ form.elements['money'].value
    const interest = ((form.elements['interest'].value) / 100)/12
    const time = (form.elements['time'].value)*12
    const m_money = mmoney(money, interest, time).toFixed(2)
    const s_money = smoney(m_money, time).toFixed(2)
    const i_money = imoney(s_money, money).toFixed(2)
    const mm = document.querySelector('#m_money')
    const sm = document.querySelector('#s_money')
    const im = document.querySelector('#i_money')
    mm.innerHTML = `<p class="m_money">${m_money}</p>`
    sm.innerHTML = `<p class="s_money">${s_money}</p>`
    im.innerHTML = `<p class="i_money">${i_money}</p>`
})