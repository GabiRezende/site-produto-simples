const hamburger = document.querySelector('.navbar_hamburger')
const navMenu = document.querySelector('.navbar_menu')
const [removeBtn, addBtn, addCartBtn] = document.querySelectorAll('button')
const itemQuantityToAdd = document.querySelector('.adicionarItem')
const [arrowLeft, arrowRight] = document.querySelectorAll('i')
const imgProduto = document.querySelector('.images_img')
const descricaoProduto = document.querySelector('.conteudo_descricao_produto')
const precoProduto = document.querySelector('.valor_preco_produto')
const nomeProduto = document.querySelector('.nome_produto')
let count = 1

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.navbar_link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
}))

arrowLeft.addEventListener('click', () => {
  if (imgProduto.src = './img/cosiness.png') {
    imgProduto.src = './img/intensity.png'
    nomeProduto.innerHTML = 'Intenso'
    precoProduto.innerHTML = 'R$15,90'
    descricaoProduto.innerHTML = 'Chili, orégano, açafrão, páprica'
    arrowLeft.style.color = 'rgba(0, 0, 0, 0.5)'
    arrowLeft.classList.toggle('cursorOff')
    arrowRight.style.color = '#000'
    arrowRight.classList.toggle('cursorOff')
  }
})

arrowRight.addEventListener('click', () => {
  if (imgProduto.src = './img/intensity.png') {
    imgProduto.src= './img/cosiness.png'
    nomeProduto.innerHTML = 'Suave'
    precoProduto.innerHTML = 'R$18,00'
    descricaoProduto.innerHTML = 'Coentro, urucum, cravo-da-índia'
    arrowLeft.style.color = '#000'
    arrowLeft.classList.toggle('cursorOff')
    arrowRight.style.color = 'rgba(0, 0, 0, 0.5)'
    arrowRight.classList.toggle('cursorOff')
  }
})

removeBtn.addEventListener('click', () => {
  count > 0 ? count-- : count = 0
  itemQuantityToAdd.innerHTML = count
})

addBtn.addEventListener('click', () => {
  count++
  itemQuantityToAdd.innerHTML = count
})

addCartBtn.addEventListener('click', () => {
  alert(`${count} itens adicionados ao carrinho.`)
})