<template>
  <q-page padding class="bg-page">
    <div class="q-pa-md row justify-center">
      <div class="col-12 col-md-8 text-center">
        <h1 class="titulo">Quem somos</h1>
        <p class="desc">
          Nossa barbearia é especializada em cortes de cabelo e barba, destacando-se pelo domínio do estilo fade. Oferecemos uma experiência excepcional aos nossos clientes, combinando técnica apurada, atendimento personalizado e um ambiente acolhedor. <br> 
          Nossos barbeiros são altamente capacitados e estão sempre atualizados com as últimas tendências e técnicas do mercado, garantindo que cada cliente receba um corte de qualidade superior. Além disso, utilizamos produtos de alta qualidade para cuidar da saúde dos cabelos e da pele, proporcionando um resultado duradouro e satisfatório.
        </p>
        <div class="q-mt-lg">
          <img src="../assets/images/bruno.jpeg.jpeg" alt="Imagem de barbearia" class="full-width">
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');



*{
  margin: 0;
  
}
.bg-page {
  background-color: black;
  color: white;
 
}
 .titulo {
 
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
 }

 .desc {
  
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  
  text-align: justify;  
 }


p {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 3px;
}


.full-width {
    width: 100%;
    max-width: 300px; /* Você pode ajustar o tamanho máximo da imagem conforme necessário */
  }


</style>
