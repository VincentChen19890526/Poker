const Symbols = [
  'https://assets-lighthouse.alphacamp.co/uploads/image/file/17989/__.png', // 黑桃
  'https://assets-lighthouse.alphacamp.co/uploads/image/file/17992/heart.png', // 愛心
  'https://assets-lighthouse.alphacamp.co/uploads/image/file/17991/diamonds.png', // 方塊
  'https://assets-lighthouse.alphacamp.co/uploads/image/file/17988/__.png' // 梅花
]
const view = {
  getCardElement(index) {
    return `<div data-index="${index}" class="card back"></div>`
  }, getCardContent(index) {
    const number = this.transformNumber((index % 13) + 1)
    const symbol = Symbols[Math.floor(index / 13)]
    return `
      <p>${number}</p>
      <img src="${symbol}" />
      <p>${number}</p>
    `
  },
  transformNumber(number) {
    switch (number) {
      case 1:
        return 'A'
      case 11:
        return 'J'
      case 12:
        return 'Q'
      case 13:
        return 'K'
      default:
        return number
    }
  },
  displayCards() {
    const rootElement = document.querySelector('#cards')
    rootElement.innerHTML = utility.getRandomNumberArray(52).map(index => this.getCardElement(index)).join("");
  },
  flipCard(card) {
    console.log(card)
    if (card.classList.contains('back')) {
      // 回傳正面
      card.classList.remove('back')
      card.innerHTML = this.getCardContent(Number(card.dataset.index))
      return
    }
    // 回傳背面
    card.classList.add('back')
    card.innerHTML = null
  },
}
const utility = {
  getRandomNumberArray(count) {
    const number = Array.from(Array(count).keys())
    for (let index = number.length - 1; index > 0; index--) {
      let randomIndex = Math.floor(Math.random() * (index + 1))
        ;[number[index], number[randomIndex]] = [number[randomIndex], number[index]]
    }
    return number
  }
}

view.displayCards()


document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', event => {
    view.flipCard(card)
  })
})


// const number = this.transformNumber((index % 13) + 1) 結構的處理邏輯
// 首先，计算 index % 13 得到余数。
// 然后，将余数加 1 得到((index % 13) + 1)。
// 最后，将这个结果作为参数传递给 this.transformNumber 方法，并执行方法内部的逻辑，返回处理后的结果，赋值给 const number。
//   因此，((index % 13) + 1) 的结果会先被计算出来，然后再传递给 this.transformNumber 方法进行处理。在 transformNumber 方法中根据传入的参数 number 执行相应的逻辑，最终返回处理后的结果给 const number。


