<template>
  <div>
    <div class="room h-screen relative">
      <div class="room_chat w-full">
        <div class="header w-full h-16 px-6 flex items-center justify-between shadow-md">
          <p class="text-xl font-semibold">Room title</p>
          <button class="bg-black text-lg text-white font-semibold px-4 py-1 rounded-xl">Quitter</button>
        </div>
      </div>
      <div class="chat w-full">
        <div class="message my_message flex justify-end p-6">
          <div class="p-3 rounded-xl bg-white">
            <div class="name font-bold">Adams</div>
            <div class="text">I'm happy to see you</div>
          </div>
        </div>
        <div class="update text-center italic">Tonny a rejoins le salon</div>
        <div class="message other_message flex justify-start p-6">
          <div class="p-3 rounded-xl bg-white">
            <div class="name font-bold">Pamela</div>
            <div class="text">I'm happy to see you</div>
          </div>
        </div>
      </div>
      <div class="types_box">
        <div class="absolute bottom-20" :class="emoji_pick ? 'block' : 'hidden'">
          <picker @select="addEmoji" />
        </div>
        <button @click="emoji">emoji</button>
        <input type="text" name="text" id="text" class="border">
        <button class="bg-black px-3 py-1 text-white">envoyer</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Picker } from 'emoji-mart-vue'
export default {
  components: {
    Picker
  },
  data() {
    return {
      emoji_pick: false
    }
  },
  methods: {
    emoji () {
      this.emoji_pick = !this.emoji_pick
    },
    addEmoji (e) {
      const field = document.querySelector('#text')
      field.value = field.value + e.native
    }
  }
}
</script>

<style scoped>
.room {
  width: 776px;
  margin: 0 auto;
  border-right: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.chat {
  height: calc(100% - 120px);
  overflow: auto;
}

.chat .message > div {
  box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.075);
  border: 1px solid #eaeaea;
}

.chat .message .text {
  word-wrap: break-word;
}
</style>
