<template>
  <div>
    <div class="join flex justify-center">
      <div class="bg fixed top-0 left-0 w-full h-full"></div>
      <div class="relative join_box flex flex-col items-center border border-gray-200 w-96 rounded-xl shadow-lg z-30">
        <div class="pic flex flex-col items-center">
          <div class="profil_pic w-24 h-24 bg-white rounded-full shadow-md cursor-pointer border border-gray-200">
            <img src="~assets/svg/user.svg" alt="user icon" @click="choosePic" class="default_picture" :class="changed ? 'hidden' : 'inline-block'">
            <img src="~assets/svg/user.svg" alt="user icon" id="profil_picture" @click="choosePic" class="choose_picture" :class="!changed ? 'hidden' : 'inline-block'">
            <input @change="processFile($event)" type="file" name="picture" id="picture" accept="image/png, image/jpg, image/jpeg" hidden>
          </div>
          <p class="text-xl font-semibold">Choisir une photo de profil</p>
        </div>
        <div class="join_form">
          <form action="" class="mt-16">
            <div class="name">
              <label for="username" class="text-lg font-medium">
                Nom d'utilisateur
              </label>
              <input type="text" name="username" id="username" class="w-full h-12 rounded-lg font-medium border border-gray-200">
            </div>
            <div class="room">
              <label for="room" class="text-lg font-medium">
                Nom du salon
              </label>
              <input type="text" name="room" id="room" class="w-full h-12 rounded-lg font-medium border border-gray-200">
            </div>
            <div class="join_btn text-center">
              <button type="submit" class="bg-dark font-semibold text-white rounded-xl">Rejoindre</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picture: '',
      changed: false
    }
  },
  methods: {
    choosePic () {
      const picInput = document.querySelector('#picture')
      picInput.click()
    },
    processFile (event) {
      this.changed = true
      this.picture = event.target.files[0]
      if (this.picture !== '') {
        const picturePath = URL.createObjectURL(this.picture)
        const picture = document.querySelector('#profil_picture')
        picture.src = picturePath
      } else {
        return ''
      }
    }
  }
}
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
  padding: 30px 30px 0;
}

.join_box .profil_pic .default_picture {
  padding: 22px;
}

.join_box .profil_pic .choose_picture {
  padding: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.join_box .pic p {
  margin-top: 12px;
}

.join_form form {
  margin-top: 40px;
}

.join_form form input {
  outline: none;
  margin-top: 6px;
  padding: 0 16px;
  background-color: #eaeaea;
}

.join_form form input:focus {
  border: 1px solid #a5a5a5;
}

.join_form form .room {
  margin-top: 16px;
}

.join_form form .join_btn button {
  padding: 10px 30px;
  margin-top: 30px;
}

@media (max-width: 410px) {
  .join_box {
    width: 90%;
    padding: 35px 20px 0;
  }
}
</style>
