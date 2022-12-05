//criando um objeto
const produto = {
  titulo: 'teclado th80',
  valor: 550,
  estoque: 20,
  tags: ['teclado mecanico', 'keyboard'],
  //função adicinar ao estoque.
    addNoEstoque(quantidade) {
      this.estoque += quantidade
    }
}
//adicionando no estoque
produto.addNoEstoque(20)

console.log(produto)

//-----------------
//-----------------


//funções construtoras : é como se fosse uma fabrica de objetos.
//utilize PasqualCase

//função criar um produto
  function CriateProduct (title, value, tags) {
    this.title = title
    this.value = value
    this.tags = tags
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity) {
      this.inStock += quantity
    }
    this.save = function () {
      //salvar no banco de dados...
    }
  }

  //o 'new' é a forma de chamar as funções construtoras
  const newProduct = new CriateProduct('Teclado', 550, ['teclado mecanico', 'keyboard'] )
  //adicionando estoque
  newProduct.addOnStock(32)
  
  console.log(newProduct)

