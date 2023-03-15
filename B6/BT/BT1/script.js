const form = document.querySelector('#form')
const result = document.querySelector('#log')
function BMI(height, weight) {
    return weight / (height ** 2)
}
form.addEventListener('submit', function (event) {
    event.preventDefault()

    const height = form.elements['height'].value
    const weight = form.elements['weight'].value
    const gender = form.elements['gender'].value
    const bmi = BMI(height, weight).toFixed(1)

    if ((bmi < 19.1 && gender == 1) || (bmi < 20.7 && gender == 0)) {
        result.innerHTML = `${bmi} | Gầy`
    } else {
        if ((bmi < 25.8 && gender == 1) || (bmi < 26.4 && gender == 0)) {
            result.innerHTML = `${bmi} | Bình thường`
        } else {
            if ((bmi < 27.3 && gender == 1) || (bmi < 27.8 && gender == 0)) {
                result.innerHTML = `${bmi} | Thừa cân nhẹ`
            } else {
                if ((bmi < 32.3 && gender == 1) || (bmi < 31.1 && gender == 0)) {
                    result.innerHTML = `${bmi} | Trên lý tưởng`
                } else {
                    if ((bmi >= 32.3 && gender == 1) || (bmi >= 31.1 && gender == 0)) {
                        result.innerHTML = `${bmi} | Béo phì`
                    }
                }
            }
        }
    }
})