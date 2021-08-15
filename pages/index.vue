<template>
  <div>
    <div class="join flex justify-center">
      <div class="bg fixed top-0 left-0 w-full h-full bg-gray-600"></div>
      <div class="relative join_box flex flex-col items-center bg-gray-800 w-96 rounded-xl shadow-lg z-30">
        <div class="pic flex flex-col items-center">
          <div class="profil_pic w-24 h-24 bg-white rounded-full shadow-lg">
            <span></span>
          </div>
          <p class="text-white text-xl font-semibold">Choisir une photo de profil</p>
        </div>
        <div class="join_form">
          <form action="" class="mt-16">
            <div class="name">
              <label for="username" class="text-white text-lg font-medium">
                Nom d'utilisateur
              </label>
              <input type="text" name="username" id="username" class="w-full h-12 rounded-lg font-medium">
            </div>
            <div class="room">
              <label for="room" class="text-white text-lg font-medium">
                Nom du salon
              </label>
              <input type="text" name="room" id="room" class="w-full h-12 rounded-lg font-medium">
            </div>
            <div class="join_btn text-center">
              <button type="submit" class="bg-gray-900 font-semibold text-white rounded-xl">Rejoindre</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.join {
  padding-top: 6rem;
}

.join_box {
  height: 500px;
  margin-bottom: 4rem;
  padding: 35px 30px 0;
}

.join_form form {
  margin-top: 40px;
}

.join_form form input {
  outline: none;
  margin-top: 6px;
  padding: 0 16px;
}

.join_form form .room {
  margin-top: 16px;
}

.join_form form .join_btn button {
  padding: 10px 30px;
  margin-top: 30px;
}
</style>
