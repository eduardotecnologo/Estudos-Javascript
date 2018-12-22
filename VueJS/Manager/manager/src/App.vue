<template>
  <div id="app">
<div>
  <label for="product-name">
    Nome do Produto
    <input type="text" id="product-name" v-model="product.name" placeholder="Exemplo: Celular" />
  </label>
    <label for="product-brand">
    Marca
    <input type="text" id="product-brand" v-model="product.brand" placeholder="Exemplo: Azus" />
    </label>
  <label for="product-value">
    Valor
    <input type="text" id="product-value" v-model="product.value" placeholder="R$600,00">
  </label>
  <label for="product-date">
    Data
    <input type="text" id="product-data" v-model="product.data" placeholder="00/00/0000">
  </label>
  <button @click="addProduct()">Salvar</button>
</div>
  </div>
</template>

<script>
import {productRef} from './database/firebase'
export default {
 data(){
   return {
     product:{}
   }
 },
 methods: {
   addProduct(){
     productRef.push({
       product:this.product
     })
   }
 }
}
</script>

<style>

</style>
