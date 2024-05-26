<script>
export default {
  data() {
    return {
      paymentInfo: {
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      }
    }
  },
  methods: {
    submitPaymentInfo() {
      
      console.log(this.paymentInfo);
    }
  }
}
</script>

<template>
  <div class="overlay-panel">
    <div class="overlay-panel-left">
      <img src="/src/assets/images/img_anual.jpeg" alt="imgright">
    </div>
    <div class="overlay-panel-right">
      <form @submit.prevent="submitPaymentInfo">
        <label for="cardName">Nombre en la tarjeta:</label>
        <input id="cardName" v-model="paymentInfo.cardName" type="text" required>

        <label for="cardNumber">Número de tarjeta:</label>
        <input id="cardNumber" v-model="paymentInfo.cardNumber" type="text" required>

        <label for="expiryDate">Fecha de vencimiento:</label>
        <input id="expiryDate" v-model="paymentInfo.expiryDate" type="text" required>

        <label for="cvv">CVV:</label>
        <input id="cvv" v-model="paymentInfo.cvv" type="text" required>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5em 1em;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
.overlay-panel {
  display: flex;
  width: 90%; /* Ajusta esto para cambiar el tamaño del OverlayPanel */
  height: 60%; /* Ajusta esto para cambiar el tamaño del OverlayPanel */
}

.overlay-panel-left {
  flex: 1;
  /* Aquí puedes agregar estilos adicionales para el formulario si lo deseas */
}

.overlay-panel-right {
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
}

.overlay-panel-left img {
  max-width: 100%;
  max-height: 100%;
}
</style>